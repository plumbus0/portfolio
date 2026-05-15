import Image from "next/image";
import Link from "next/link";
import { Box } from "./components/box";
import PixelCanvas from "./components/bg";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans pointer-events-none">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 sm:items-start">
      <Box head="About Me"> 
        <></>
      </Box>
      <Box head="Projects"> 
        <>
        </>
      </Box>
      <Box head="Resume"> 
      <></>
      </Box>
      </main>
    </div>
  );
}
