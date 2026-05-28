'use client'
import Link from "next/link";
import { home, projectsNav, arrowSelect, darkMode } from "../utilities/myArt";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export function Navbar() {
  const path = usePathname();
  const [mini, setMini] = useState(false);
  let isDark = '';
  const toggleDarkMode = () => {
    isDark = localStorage.getItem('dark') || 'false';
    const saved = localStorage.getItem("theme") || '';
    // flip value
    isDark = isDark === 'false'? 'true' : 'false';
    if (isDark === 'true') {
      document.documentElement.setAttribute("data-theme", `${saved}-dark`)
    } else {
      document.documentElement.setAttribute("data-theme", saved);
    }
    localStorage.setItem('dark', isDark);
  };
  useEffect(() => {
    const handleResize = () => {
      setMini(window.innerWidth < 660);
    }
    handleResize();
    // Add event listener to update if the screen is resized
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
  <header className="font-sans fixed top-0 left-0 w-full z-2">    
    <nav className="bg-[var(--background)] flex justify-center">
      <div className={`justify-space-between border-b-2 border-dashed border-[var(--greenTran)] flex flex-wrap w-[64rem] text-[var(--org)] m-4 mb-0 content-space-between pl-4 pr-4 justify-between`}>
        <div className={`flex items-center`}>        
          <div className="darkModeIcon" onClick={toggleDarkMode}>
            <div
            className={`cursor-pointer rotate-0 ${isDark === 'true'?'rotate-180':''}`}
            >{darkMode}</div>
          </div>
          <h1 className="font-size-100">{mini?'AP':'Arya Prakash'}</h1>
        </div>
        <div className="flex items-center">

          <Link href="/">
          <div className="flex items-center pl-3">
            <div className="relative">
              {path == '/' ? (<div className="absolute top-[-26px] left-[-19px] text-[var(--txt)]">{arrowSelect}</div>) : <div className=""></div>}
            </div>
            {home}<h1 className={`sm:!block !hidden font-size-100 ${path == '/' ? 'underline decoration-[var(--colTran)]': ''}`}>Home</h1>
          </div>
          </Link>

          <Link href="/projects">
          <div className="flex items-center pl-3">
            <div className="relative">
              {path == '/projects' ? (<div className="absolute top-[-26px] left-[-19px] text-[var(--txt)]">{arrowSelect}</div>) : <div className=""></div>}
            </div>
            {projectsNav}<h1 className={`sm:!block !hidden font-size-100 ${path == '/projects' ? 'underline decoration-[var(--colTran)]': ''}`}>Projects</h1>
          </div>
          </Link>
          
        </div>
      </div>
    </nav>
  </header>);
}