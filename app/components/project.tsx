import { proj } from "../api/github/types";
import { defaultIcon } from "../utilities/myArt";
import { Box } from "./box";
import { H1 } from "./headerClick";

export function Project({projProp}: {
  projProp: proj
}) {
return (
  <div className="w-full">
    <Box>
      <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--txt)]"></div>
      <div className="flex items-center justify-center capitalize">
        <H1 txt = {projProp.name}></H1>
        {(projProp.svg == '')? <div className="containIcon duration-100">{defaultIcon}</div>: 
        <div className="containIcon duration-100"
          dangerouslySetInnerHTML={{
            __html: projProp.svg
        }}/>}
      </div>
      {projProp.description}
      <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--txt)]"></div>
    </Box>
  </div>
);
}