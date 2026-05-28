import { Box } from "./components/box";
import { H1 } from "./components/headerClick";
import {  profile, resume} from "./utilities/myArt";
import { CodingExperience } from "./components/codingExp";

export default function Home() {
  
  return (  
    <div className="flex flex-col flex-1 items-center justify-center font-sans pointer-events-none">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between sm:py-10 sm:px-16 p-0 sm:items-start">
        <div className="relative p-[1rem] w-[100%]">
        <Box>
          <div className="flex justify-between">
            <H1 txt = "About"></H1>
            {profile}
          </div>
          <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
          <p>
          I'm Arya, a Computer Science student at UNSW with a strong interest in software engineering, systems, and performance-focused development. I enjoy building software and understanding how things work. I've worked across different parts of the stack and enjoy writing software that is reliable, efficient, and maintainable.
          <br/>
          <br/>
          Currently, I'm looking for an internship where I can contribute to real projects, learn from experienced engineers, and continue growing both technically and professionally.          </p>
        </Box>
        
        <CodingExperience/>
        <Box>
          <div className="flex justify-between">
            <H1 txt = "Resume"></H1>
            {resume}
          </div>
          <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
        </Box>
        </div>

      </main>
    </div >
  );
}
