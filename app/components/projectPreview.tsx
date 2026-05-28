'use client';

import { useEffect, useState } from "react";
import { proj } from "../types";
import { defaultIcon, img, info, resume, website } from "../utilities/myArt";
import { username } from "../api/github/route";
import { ProjectInfo } from "./projectInfo";

export function ProjectPreview({ p }: { p: proj }) {
  const [tab, setTab] = useState('info');
  const [imgs, setImgs] = useState<string[]>([]);
  const [markDownTxt, setMarkDownTxt] = useState('');
  const [loadingIframe, setLoadingIframe] = useState(true);

  const READMELINK = `https://raw.githubusercontent.com/${username}/${p.name}/main/README.md`;
  const getFileName = (url: string) => {
    const split = url.split('/');
    return split[split.length - 1];
  };

  async function getPreviewImages(repo: string) {
    const res = await fetch(
      `https://api.github.com/repos/plumbus0/${repo}/contents/preview`
    );
    if (!res.ok) return [];
    const files = await res.json();

    return files
      .filter((file: any) => file.type === "file")
      .map((file: any) => file.download_url);
  }

  useEffect(() => {
    const fetchImages = async () => {
      const urlArr: string[] = await getPreviewImages(p.name);
      setImgs(urlArr);
      if (urlArr.length > 0) setTab(urlArr[0]);
    };
    fetchImages();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[90%] my-[2%] mx-[5%] flex flex-col items-center pointer-events-auto mb-[1%] border-3 border-solid shadow-[5px_5px_0px_0px_var(--greenTran)] duration-400 hover:shadow-[1px_1px_0px_0px_var(--greenTran)]">
        <div className="flex justify-between w-full flex-row-reverse border-b-[3px] border-solid bg-[var(--colTran)]">
          <div className="flex">
            <div className="flex bg-[var(--colTran)] justify-center border-l-[3px] border-solid w-[2rem]"> - </div>
            <div className="flex bg-[var(--colTran)] justify-center border-l-[3px] border-solid w-[2rem]">{'[]'}</div>
            <div className="flex bg-[var(--colTran)] justify-center border-l-[3px] border-solid w-[2rem]"> X </div>
          </div>
          {/* tabs */}
          <div className="flex overflow-auto">
            {imgs.length == 0 ?
              <div className={`w-fit flex items-center miniFavicon font-bold px-1 cursor-pointer max-w-[18vw] min-w-[4vw] border-[var(--txt)] border-r-[3px] border-solid whitespace-nowrap overflow-hidden ${(tab === 'info') ? 'bg-[var(--background)]' : 'hover:bg-[var(--bgTran)]'}`} onClick={() => setTab('info')}>
                {info}info
              </div> :
              Array.from(imgs, (url, i) =>
                <div className={`w-fit flex items-center miniFavicon font-bold px-1 cursor-pointer max-w-[18vw] min-w-[4vw] border-[var(--txt)] border-r-[3px] border-solid whitespace-nowrap overflow-hidden ${(tab === url) ? 'bg-[var(--background)]' : 'hover:bg-[var(--bgTran)]'}`} key={i} onClick={() => setTab(url)}>
                  {img}img
                </div>
              )
            }
            {p.homepageUrl ?
              <div className={`w-fit flex items-center miniFavicon font-bold px-1 cursor-pointer max-w-[18vw] min-w-[4vw] border-[var(--txt)] border-r-[3px] border-solid whitespace-nowrap overflow-hidden ${(tab === p.homepageUrl) ? 'bg-[var(--background)]' : 'hover:bg-[var(--bgTran)]'}`}
                onClick={() => {setTab(p.homepageUrl); setLoadingIframe(true)}}>
                {website}{p.homepageUrl.replaceAll('https://', '').replaceAll('/', '')}
              </div> : ''
            }
            <div className={`w-fit flex items-center miniFavicon font-bold px-1 cursor-pointer max-w-[18vw] min-w-[4vw] border-[var(--txt)] border-r-[3px] border-solid whitespace-nowrap overflow-hidden ${(tab === READMELINK) ? 'bg-[var(--background)]' : 'hover:bg-[var(--bgTran)]'}`}
              onClick={() => setTab(READMELINK)}>
              {resume}{`${p.name}/README.md`}
            </div>
          </div>
        </div>
        {/* url */}
        <div className="pl-1 w-full border-[var(--txt)] border-b-[3px] border-solid overflow-auto">
          {tab == 'info'? `${p.name}/wellcome.html`:
          tab.match('github') ? `${p.name}/${getFileName(tab)}`:
          p.homepageUrl.replaceAll('https://', '').replaceAll('/', '')}
        </div>
        <div className="preview-frame bg-[var(--background)] w-full aspect-video flex items-center">
          {/* content */}
          {tab === 'info' ?
            <div className="w-full text-center flex font-bold felx flex-col items-center">
              {`click the tabs above for more info about ${p.name}!`}
              {(p.svg === '') ? <div id={`${p.name}-icon`} className={`mt-[-1rem] mb-[-1rem] iconMoreInfo duration-100`}>{defaultIcon}</div> :
                <div id={`${p.name}-icon`} className={`mt-[-1rem] mb-[-1rem] iconMoreInfo duration-100`} dangerouslySetInnerHTML={{ __html: p.svg }} />}
            </div>:
            tab === p.homepageUrl ?
              <div className="relative w-full h-full">
                <div className={`${loadingIframe?'' : 'hidden'} z-[1] absolute absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>loading website...</div>
                <div className="bg-[var(--background)] w-full h-full">
                  <iframe onLoad={() => setLoadingIframe(false)} className="zoom-0.3" src={p.homepageUrl} frameBorder="0" width="100%" height="100%"></iframe>
                </div>
              </div> :
              tab === READMELINK ?
                <ProjectInfo url={READMELINK} markDownTxt={markDownTxt} setMarkDownTxt={setMarkDownTxt}></ProjectInfo> :
                <img className="w-full h-full object-cover object-center" src={tab} alt={`preview image of ${p.name}`} />
          }
        </div>
      </div>
    </div>

  );
}