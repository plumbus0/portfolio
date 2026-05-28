'use client'

import { useEffect, useState } from "react";
import { proj } from "../types";
import { Project } from "./project";

export function ProjectsAll({ view }: { view: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [val, setVal] = useState(false);

  const loadingProgress = (
    <div className="flex w-full items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-gray-400">
          Loading projects...
        </p>
      </div>
    </div>
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}/api/github`);
        const json = await res.json();
        const projectsWithSvg = await Promise.all(
          json.projects.map(async (project: proj) => {
            let svg = "";
            try {
              const res = await fetch(project.icon);

              if (res.ok) {
                svg = await res.text();
              } else {
                svg = '';
              }

            } catch {
              svg = '';
            }

            return {
              ...project,
              svg
            };

          })
        );

        setData(projectsWithSvg);
      } catch (error) {
        setErr(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [val]);

  if (loading) return (
    loadingProgress
  );
  if (err || data == null) return (
    <div className="flex flex-col justify-center w-full text-center">
      <p>Failed to fetch data :[</p>
      <br/>
      <button onClick={()=>{setErr(false);setVal(!val); setLoading(true)}}>
        <div className="flex text-center justify-center flex flex-col sm:flex-row cursor-pointer border-[var(--txt)] pointer-events-auto border-2 border-dashed p-1 m-1">
          <div className="codeLinkIcon text-center">
            click me to try again
          </div>
        </div>
      </button>
    </div>
  );

  return (
    Array.from(data, (p: proj, i) => {
      return (<div key={i} id={p.name}>
        <Project projProp={p} view={view === p.name} />
      </div>)
    })
  );
}