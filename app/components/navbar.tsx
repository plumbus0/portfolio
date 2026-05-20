'use client'
import Link from "next/link";
import { home, projectsNav, arrowSelect } from "../utilities/myArt";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export function Navbar() {
  const path = usePathname();
  const [mini, setMini] = useState(false);
  const [hellaMini, setHellaMini] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMini(window.innerWidth < 660);
      setHellaMini(window.innerWidth < 600)
    }

    handleResize();
    // Add event listener to update if the screen is resized
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
  <header className="font-sans fixed top-0 left-0 w-full z-2">    
    <nav className="bg-[var(--background)] flex justify-center">
      <div className={`${hellaMini?'justify-center':''} border-b-2 border-dashed border-[var(--greenTran)] flex flex-wrap w-[64rem] text-[var(--org)] m-4 mb-0 content-space-between pl-4 pr-4 justify-between`}>
        <div className={`flex items-center`}>
          <h1 className="font-size-100">{hellaMini?'':(mini?'AP':'Arya Prakash')}</h1>
        </div>
        
        <div className="flex items-center">
          
          <Link href="/">
          <div className="flex items-center pl-3">
            <div className="relative">
              {path == '/' ? (<div className="absolute top-[-26px] left-[-19px] text-[var(--txt)]">{arrowSelect}</div>) : <div className=""></div>}
            </div>
            {home}<h1 className={`font-size-100 ${path == '/' ? 'underline decoration-[var(--colTran)]': ''}`}>Home</h1>
          </div>
          </Link>

          <Link href="/projects">
          <div className="flex items-center pl-3">
            <div className="relative">
              {path == '/projects' ? (<div className="absolute top-[-26px] left-[-19px] text-[var(--txt)]">{arrowSelect}</div>) : <div className=""></div>}
            </div>
            {projectsNav}<h1 className={`font-size-100 ${path == '/projects' ? 'underline decoration-[var(--colTran)]': ''}`}>Projects</h1>
          </div>
          </Link>
          
        </div>
      </div>
    </nav>
  </header>);
}