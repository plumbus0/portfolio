import { ReactNode } from "react";

export function Box(
  {children, head} : {
    children: ReactNode
    head: string
  }
) {
  return (
    <div className="w-[100%] pointer-events-none">
      <div className="border-2 border-dashed w-[100%]" ></div>
      <h1>{head}</h1>
      {children}
      <div className="border-2 border-dashed w-[100%]" ></div>
    </div>
  );
}