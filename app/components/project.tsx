import { proj } from "../api/github/types";
import { arrowSelect, defaultIcon, lang, linkArrow } from "../utilities/myArt";
import { Box } from "./box";
import { H1 } from "./headerClick";

export function Project({ projProp }: {
  projProp: proj
}) {
  return (
    <div className="w-full">
      <Box>
        {/* code link */}
        <div className="flex justify-between">
          <div className="codeLinkIcon">
            <a title={`bg-[var(--background)] github Link to ${projProp.name}`} href={`https://github.com/plumbus0/${projProp.name}`}>
            <div className="m-2 px-2 flex items-center border-[var(--colTran)] pointer-events-auto border-2 border-dashed">
              <h3>code</h3>
              <div className="codeLinkIcon mt-[-10px] mb-[-10px]">
                {lang}
              </div>
            </div>
            </a>
          </div>

          <div className="flex items-center justify-center capitalize projHead">
          <H1 txt={projProp.name}></H1>
          {(projProp.svg == '') ? <div className="containIcon duration-100">{defaultIcon}</div> :
            <div className="containIcon duration-100"
              dangerouslySetInnerHTML={{
                __html: projProp.svg
              }} />}
          </div>
          {/* link to homePage */}
          {projProp.homepageUrl?(
            <div className="codeLinkIcon">
              <a title={`bg-[var(--background)] github Link to ${projProp.name}`} href={projProp.homepageUrl}>
              <div className="m-2 px-2 flex items-center border-[var(--txt)] pointer-events-auto border-2 border-dashed">
                <h3 className="font-bold hover:underline pl-1 pr-1">visit</h3>
                <div className="codeLinkIcon mt-[-10px] mb-[-10px]">
                  {linkArrow}
                </div>
              </div>
              </a>
            </div>  
          ): <div className="w-[84]"></div>
          }
        </div>
        <div className="mt-[-10px] mt-1 border-2 border-dashed w-[100%] text-[var(--txt)]"></div>
        <div className="pointer-events-auto bg-[var(--background)] my-4">
          {projProp.description}
        </div>

        <div className="w-full">
          {/* tags */}
          <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--colTran)]"></div>
          <div className="mt-3 flex flex-col-reverse">
            <div className="flex flex-wrap">
              {Array.from(projProp.repositoryTopics, (tag, i) => {
                return <span className={`font-bold flex items-center w-auto text-nowrap ml-1 mr-1`} key={i}>
                  <div className="w-[4px] h-[4px] mr-[10px] bg-[var(--org)]"></div>
                  {tag.replace("-", ".")}
                </span>;
              })}
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}