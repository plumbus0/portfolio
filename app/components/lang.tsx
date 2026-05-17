import { c, next, py, react, ts } from "../myArt/myArt";
export function Lang(
  {type, txt}: {
    txt: string
    type: 
    "ts" | 
    "react" |
    "next"|
    "py"|
    "c" |
    null;
  }
) {
  return (
    <div className="border-2 border-dashed w-[9rem] text-[var(--colTran)] p-1 m-2"><div className="text-[var(--txt)]">
      <div className="skillIcon duration-100 flex items-center">
      <h3>{type}</h3>
      {(()=>{
        switch (type) {
          case "ts": return ts; 
          case "c": return c;
          case "next": return next;
          case "react": return react;
          case "py": return py;
        }
      })()
      }
      </div>
      <div>{txt}</div>

    </div></div>
  );
  
 
}