'use client';

import { useEffect, useState } from "react";

export function SetColours() {
  const themes = ['', '1', '2'];
  let currentTheme = '';
  const [selectTheme, setSelectTheme] = useState(0);
  const [darkMode, setDarkMode] = useState('');
  useEffect(()=>{
    const theme    = localStorage.getItem("theme") || '';
    const dark = localStorage.getItem("dark")  || 'false';
    currentTheme = theme;

    setDarkMode(dark);
    setSelectTheme(themes.indexOf(theme));
  }, [selectTheme]);
  if (darkMode === '') return;
  return (
    <div className="w-full flex justify-center my-4">
    {Array.from(themes,(theme, i)=> 
        <button className="cursor-pointer" key={i} onClick={()=>{
          localStorage.setItem("theme", theme);
          const dark = localStorage.getItem("dark")  || 'false'
          document.documentElement.setAttribute("data-theme", `${theme}${dark === 'true'? '-dark' : ''}`);
          setSelectTheme(i);
        }}>
          <div className={`cursor-pointer flex items-center justify-center w-8 h-8 ${i === selectTheme?'border-4 border-solid border-[var(--txt)] ':'f'}`}>
            <div className="w-[80%] h-[80%]" style={{background:`var(--theme_${theme})`}}>
            </div>
          </div>
        </button>
    )}
  </div>);
}