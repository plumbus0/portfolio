'use client'

import { useEffect, useState } from "react";
import { proj } from "../api/github/types";
import { Project } from "./project";

export function ProjectsAll() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
  
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
          console.error("Failed to fetch data:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }, []);
  
    if (loading) return <div className="p-1 m-2"> loading projects from github...</div>;
  return (
    Array.from(data,(p:proj,i)=>{
      return (<div key={i}>
        <Project projProp={p}/>
      </div>)
    })
  );
}