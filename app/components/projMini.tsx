'use client'
import { useEffect, useState } from "react";
import { proj } from "../types";
import { defaultIcon } from "../utilities/myArt";
import Link from "next/link";

export default function ProjectMini({skill} : {skill: string}){
  // const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [val, setVal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/github`);
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

  if (loading) return <div className="p-1 m-2"> loading projects from github...</div>;
  if (err || data == null) return (
    <div>Failed to fetch data :[
      <br />
      <button onClick={()=>{setErr(false);setVal(!val)}}>
        <div className="flex justify-between flex flex-col sm:flex-row cursor-pointer border-[var(--txt)] pointer-events-auto border-2 border-dashed p-1 m-1">
          <div className="codeLinkIcon">
            click me to try again
          </div>
        </div>
      </button>
    </div>
  );
  // sort the data based on the tag
  data.sort((a: proj, b: proj)=> 
    (a.repositoryTopics.indexOf(skill)===-1?1:0) - (b.repositoryTopics.indexOf(skill)===-1?1:0)
  )

  return (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-4">
    {data.map((e: proj, i: number) => {
      return (
        <Link key={i} href={`/projects?view=${e.name}`}>
        <div
          className="bg-[var(--background)] cursor-pointer duration-100 flex flex-wrap content-between card capitalize border-[var(--colTran)] pointer-events-auto relative border-2 border-dashed p-3 m-3 w-[95%]"
        >
          <span className="ProjCard top-left"></span>
          <span className="ProjCard top-right"></span>
          <span className="ProjCard bottom-left"></span>
          <span className="ProjCard bottom-right"></span>
          
          <div className="proj-display w-full">
            <div className="w-full text-center font-bold text-[var(--col2)]">
              <h2>{e.name}</h2>
            </div>

            {/* add the icon  */}
            <div className="w-full text-[var(--txt)] mx-auto flex justify-center">
              {(e.svg == '')? <div className="containIcon duration-100">{defaultIcon}</div>: 
              <div className="containIcon duration-100"
                dangerouslySetInnerHTML={{
                  __html: e.svg
              }}/>
              }
            </div>
            {/* describe */}
            <p>
              {e.description}
            </p>
          </div>

          <div className="w-full">
            {/* tags */}
            <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
            <div className="mt-3 flex flex-col-reverse">
              <div className="flex flex-wrap">
                {Array.from(e.repositoryTopics,(tag, i)=>{
                  return <span className={`${tag.toLowerCase() == skill.toLowerCase()? 'text-[var(--org)]':''} font-bold flex items-center w-auto text-nowrap ml-1 mr-1`} key={i}> 
                    <div className="w-[4px] h-[4px] mr-[10px] bg-[var(--org)]"></div>
                    {tag.replace("-",".")}
                  </span>;
                })}
              </div>
            </div>
          </div>
        </div>
        </Link>
      );
    })}

  </div>
);
}



