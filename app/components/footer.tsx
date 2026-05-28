import { email, github, linkedin,  } from "../utilities/myArt";
import { SetColours } from "./setColours";

export function Footer() {
  return (
  <footer className="font-sans pointer-evernts-auto flex flex-col justify-center bg-[var(--colTran)]">
    <div className="flex justify-center">
      <div className="max-w-[20rem]">
          <span className="flex">
            <a target="_blank" className="font-bold" href="https://www.linkedin.com/in/arya-prakash-697188380/">
            <span className="hover:text-[var(--org)] cursor-pointer flex items-center m-1 pl-2">
              Linkedn{linkedin}
            </span></a>
            <span className="flex items-center m-1 pl-2">|</span>
            <a target="_blank" className="font-bold" href="https://github.com/plumbus0/"><span className="hover:text-[var(--org)] cursor-pointer flex items-center m-1 pl-2">
              Github{github}
            </span></a>
            <span className="flex items-center m-1 pl-2">|</span>
            <a target="_blank" className="font-bold" href="mailto:arya.prakashyt@gmail.com">
            <span className="hover:text-[var(--org)] cursor-pointer flex items-center m-1 pl-2">
              Email{email}
            </span></a>
          </span>
        </div>
    </div>
    <div className="mt-1 mt-1 border-2 border-dashed w-[100%] text-[var(--txt)]"></div>
    <SetColours/>
  </footer>
  );
}