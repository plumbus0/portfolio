import { Box } from "./components/box";
import { H1 } from "./components/headerClick";
import { profile, resume } from "./utilities/myArt";
import { CodingExperience } from "./components/codingExp";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans pointer-events-none">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between sm:py-10 sm:px-16 p-0 sm:items-start">
        <div className="relative p-[1rem] w-[100%]">
          <Box>
            <div className="flex justify-between">
              <H1 txt="About"></H1>
              {profile}
            </div>
            <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
            <p>
              Hi! My name is Arya. I’m currently a student studying computer science at UNSW. I love making cool software and understanding how things work. I’m very passionate about software development and problem-solving. I love solving problems by working on cool projects, learning new things and making something useful!
              <br />
              <br />
            </p>
          </Box>

          <CodingExperience />
          <Box>
            <div className="flex justify-between">
              <H1 txt="Resume"></H1>
              {resume}
            </div>
            <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
          </Box>
        </div>

      </main>
    </div >
  );
}
