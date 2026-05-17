import Image from "next/image";
import Link from "next/link";
import { Box } from "./components/box";
import PixelCanvas from "./components/bg";
import { H1 } from "./components/headerClick";
import { Lang } from "./components/lang";
import { lang, profile, projects, resume} from "./myArt/myArt";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans pointer-events-none">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="relative p-[1rem]">
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
                <Box>
          <div className="flex justify-between">
            <H1 txt = "Skills"></H1>
            {lang}
          </div>
          <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
          <div>
            <h2>languages</h2>
            <Lang type="ts" 
            txt="blah blah blah blah"/>
            <Lang type="c" 
            txt="blah blah blah blah"/>
            <Lang type="py" 
            txt="blah blah blah blah"/>
            <h2>Frameworks</h2>
            <Lang type="next" 
            txt="blah blah blah blah"/>
            <Lang type="react" 
            txt="blah blah blah blah"/>
          </div>

        </Box>

        <Box>
          <div className="flex justify-between">
            <H1 txt = "Projects"></H1>
            {projects}
          </div>
          <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
  
        </Box>
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
