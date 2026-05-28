import { Metadata } from "next";
import { ProjectsAll } from "../components/projectMain";
export const metadata: Metadata = {
  title: "Arya's portfolio | Projects"
}
export default async function projects(
  {searchParams}: {searchParams: Promise<{ view?: string }>}
) {
  const preOpen = (await searchParams).view || '';

  return (
  <div className="flex flex-col flex-1 items-center justify-center font-sans pointer-events-none">
    <div className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between sm:py-10 sm:px-16 p-0 sm:items-start">
      <main className="text-[var(--txt)] w-full">
        <ProjectsAll view={preOpen}/>
      </main>
    </div>
  </div>);
}