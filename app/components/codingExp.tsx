'use client';

import { useState } from "react";
import { lang, projects } from "../utilities/myArt";
import { Box } from "./box";
import { H1 } from "./headerClick";
import { Lang } from "./lang";
import ProjectMini from "./projMini";

export function CodingExperience() {
  const [skill, setSkill] = useState('');
  const skillFn = (s: string) => {
    if (s.toLowerCase().replaceAll('-','.') === skill.toLowerCase().replaceAll('-','.')) return setSkill(''); 
    setSkill(s);
  };
  return (
    <>
      <Box>
        <div className="flex justify-between">
          <H1 txt="Skills"></H1>
          {lang}
        </div>
        <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
        <div>
          <h2 className="w-fit">languages</h2>
          <div className="flex flex-wrap">
            <Lang skill = {skill} skillFn={skillFn} type="TypeScript"
              txt=""/>
            <Lang skill = {skill} skillFn={skillFn} type="C"
              txt="" />
            <Lang skill = {skill} skillFn={skillFn} type="Python"
              txt="" />
          </div>
          <h2 className="w-fit">Frameworks</h2>
          <div className="flex flex-wrap">
            <Lang skill = {skill} skillFn={skillFn} type="Next.js"
              txt="" />
            <Lang skill = {skill} skillFn={skillFn} type="React"
              txt="" />
          </div>
        </div>

      </Box>

      <Box>
        <div className="flex justify-between">
          <H1 txt="Projects"></H1>
          {projects}
        </div>
        <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
        <ProjectMini skill={skill}/>
      </Box>
    </>
  );
}