'use client';
import { useEffect } from "react";
import { proj } from "../types";
import { arrowSelect, defaultIcon, lang, linkArrow } from "../utilities/myArt";
import { Box } from "./box";
import { H1 } from "./headerClick";
import { ProjectInfo } from "./projectInfo";
import { username } from "../api/github/route";
import { ProjectPreview } from "./projectPreview";

export function Project({ projProp, view }: {
  projProp: proj,
  view: boolean
}) {
  const scrollSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    document.getElementById(id)?.focus();
  }
  useEffect(()=>{
    if (!view) return;
    scrollSection(projProp.name);
    setTimeout(() => {
      document.getElementById(`${projProp.name}-icon`)?.classList.remove('bounce');    
    }, 1500);
  },[]);

  return (
    <div className="w-full">
      <Box>
        {/* code link */}
        <div className="pointer-events-auto sticky z-1 top-20 bg-[var(--background)] 
        border-b-2 border-dashed border-[var(--greenTran)]
        flex justify-between flex flex-row items-center"
        onClick={()=>scrollSection(projProp.name)}>
          <div className="codeLinkIcon">
            <a title={`bg-[var(--background)] github Link to ${projProp.name}`} target="_blank" href={`https://github.com/${username}/${projProp.name}`}>
            <div className="m-2 px-2 flex items-center border-[var(--colTran)] pointer-events-auto border-2 border-dashed">
              <h3 className="sm:block hidden">code</h3>
              <div className={`codeLinkIcon mt-[-10px] mb-[-10px]`}>
                {lang}
              </div>
            </div>
            </a>
          </div>

          <div className="flex items-center justify-center capitalize projHead">
            <H1 txt={projProp.name}></H1>
            {(projProp.svg === '') ? <div id={`${projProp.name}-icon`} className={`sm:block hidden mt-[-1rem] mb-[-1rem] containIcon miniIcon duration-100 ${view? 'bounce':''}`}>{defaultIcon}</div> :
              <div 
                id={`${projProp.name}-icon`} 
                className={`sm:block hidden mt-[-1rem] mb-[-1rem] containIcon miniIcon duration-100 ${view? 'bounce':''}`}
                dangerouslySetInnerHTML={{
                  __html: projProp.svg
              }}/>}
          </div>
          
          {/* link to homePage */}
          {projProp.homepageUrl?(
            <div className="codeLinkIcon">
              <a title={`bg-[var(--background)] github Link to ${projProp.name}`} target="_blank" href={projProp.homepageUrl}>
              <div className="m-2 px-2 flex items-center border-[var(--txt)] pointer-events-auto border-2 border-dashed">
                <h3 className="sm:block hidden font-bold hover:underline pl-1 pr-1">visit</h3>
                <div className={`codeLinkIcon mt-[-10px] mb-[-10px]`}>
                  {linkArrow}
                </div>
              </div>
              </a>
            </div>  
          ): <div className="w-[96px]"></div>
          }
        </div>
        <div className="mt-[-10px] mt-1 border-2 border-dashed w-[100%] text-[var(--txt)]"></div>
        {/* lil window */}
          <ProjectPreview p={projProp}></ProjectPreview>
        <div className="flex flex-col font-bold pointer-events-auto p-2 w-[90%] mx-[5%] bg-[var(--background)] mb-4 m-2 px-2 flex items-center border-[var(--txt)] pointer-events-auto border-3 border-dashed">
          <h3>{projProp.description}</h3>
          <div className="w-full">
            {/* tags */}
            <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
            <div className="mt-3 flex flex-col-reverse justify-center">
              <div className="flex flex-wrap">
                {Array.from(projProp.repositoryTopics, (tag, i) => {
                  return <span className={`font-bold flex items-center w-auto text-nowrap ml-1 mr-1`} key={i}>
                    <div className="w-[4px] h-[4px] mr-[10px] bg-[var(--org)]"></div>
                    {tag.replace("-", ".")}
                  </span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}