'use client';

import { useEffect } from "react";

export function LoadColours(){
  useEffect(()=>{
    const saved = localStorage.getItem("theme") || '';
    const darkMode = localStorage.getItem("dark") || '';
    if (darkMode === 'true') {
      document.documentElement.setAttribute("data-theme", `${saved}-dark`)
    } else {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  return <></>;
}
