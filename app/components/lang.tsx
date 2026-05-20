import { c, next, py, react, ts } from "../utilities/myArt";
export function Lang(
  {type, txt, skillFn, skill}: {
    skillFn: any,
    txt: string,
    skill: string,
    type: 
    "TypeScript"
    | "C"
    | "Python"
    | "Next.js"
    | "React"
    | null;
  }
) {
  return (
    <div className="bg-[var(--background)] skillCard border-2 border-dashed w-[17rem] text-[var(--colTran)] p-1 m-2">
      <div className="text-[var(--txt)]">
        {/* <div className="skillIcon duration-100 flex items-center "> */}
          {(() => {
            switch (type) {
              case "TypeScript": {
                return (
                <div className="skillIcon w-[104%] h-[104%] mt-[-2%] ml-[-2%] duration-100 flex items-center " onClick={() => skillFn('ts')}>
                  <button className={`skillIconBtn ${skill === "ts" ? 'active' : ''}`}>
                    {ts}
                  </button>
                  <h2>{type}</h2>
                </div>
                );
              }
              case "C": {
                return (
                <div className="skillIcon duration-100 flex items-center " onClick={() => skillFn('c')}>
                  <button className={`skillIconBtn ${skill === "c" ? 'active' : ''}`}>
                    {c}
                  </button>
                  <h2>{type}</h2>
                </div>
                );
              }
              case "Next.js": {
                return (
                <div className="skillIcon duration-100 flex items-center " onClick={() => skillFn('next-js')}>
                  <button className={`skillIconBtn ${skill === "next-js" ? 'active' : ''}`}>
                    {next}
                  </button>
                  <h2>{type}</h2>
                </div>
                );
              }
              case "React": {
                return (
                <div className="skillIcon duration-100 flex items-center " onClick={() => skillFn('react')}>
                  <button className={`skillIconBtn ${skill === "react" ? 'active' : ''}`}>
                    {react}
                  </button>
                  <h2>{type}</h2>
                </div>
                );
              }
              case "Python": {
                return (
                <div className="skillIcon duration-100 flex items-center " onClick={() => skillFn('python')}>
                  <button className={`skillIconBtn ${skill === "python" ? 'active' : ''}`}>
                    {py}
                  </button>
                  <h2>{type}</h2>
                </div>
                );
              }
              default:
                return null;
            }
          })()}
          {/* <h2>{type}</h2>
        </div> */}
        {txt==''?'':
          <p>{txt}</p>
        }
      </div>
    </div>
  );
}