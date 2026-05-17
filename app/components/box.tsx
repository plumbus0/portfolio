import { ReactNode } from "react";

export function Box(
  {children} : {
    children: ReactNode
  }
) {
  return (
    
    <div className="mb-[3rem] mt-[3rem] w-[100%] pointer-events-none relative">
      <span className="corner top-left"></span>
      <span className="corner top-right"></span>
      <span className="corner bottom-left"></span>
      <span className="corner bottom-right"></span>

      <div className="pointer-events-auto"></div>
      {children}
    </div>
  );
}