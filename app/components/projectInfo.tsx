'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

export function ProjectInfo({ url, markDownTxt, setMarkDownTxt}: { url: string, markDownTxt: string, setMarkDownTxt:any}) {

  const getMarkdown = () => {
    fetch(url)
      .then((res) => res.text())
      .then((res) => setMarkDownTxt(res))
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setMarkDownTxt('fail')
      });
  }

  // open and no text
  if (markDownTxt == '') {
    getMarkdown();
    return (
      <div className='w-full text-center font-bold'>
        {"loading.."}
      </div>
    )
  };

  if (markDownTxt != '') {
    return (
      <div className="flex flex-col items-center w-full h-full">
        <div id={`markDown-[${url}]`} className="h-full w-full overflow-y-auto">
          <div className='w-[90%] ml-2'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={{
              img: ({ children }) => {
                <div className='none'></div>
              },
              ul: ({ children }) => (
                <ul className="list-[square] ml-6 mb-6">
                  {children}
                </ul>
              ),
              h1: ({ children }) => (
                <>
                  <h1 className="text-5xl font-bold m-2 w-[100%]">
                    {children}
                  </h1>
                  <div className="mt-1 border-1 border-dashed w-[100%] text-[var(--colTran)]"></div>
                </>
              ),
              h2: ({ children }) => (
                <>
                  <h2 className="text-[var(--col1))] font-bold m-2 w-[100%]">
                    {children}
                  </h2>
                </>
              ),
              code({ className, children }) {
                return (
                  <code className="bg-[var(--greenTran)] px-1 py-0 rounded text-[var(--dark)]">
                    {children}
                  </code>
                );
              },
              table: ({ children }) => (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-[var(--colTran)]">
                    {children}
                  </table>
                </div>
              ),

              thead: ({ children }) => (
                <thead className="bg-[var(--background2)]">
                  {children}
                </thead>
              ),

              tbody: ({ children }) => (
                <tbody>
                  {children}
                </tbody>
              ),

              tr: ({ children }) => (
                <tr className="border-b border-[var(--colTran)]">
                  {children}
                </tr>
              ),

              th: ({ children }) => (
                <th className="
                border
                border-[var(--colTran)]
                px-4
                py-2
                text-left
                font-bold
                text-[var(--org)]
              ">
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td className="
                  border
                  border-[var(--colTran)]
                  px-4
                  py-2
                  text-[var(--txt)]z
                ">
                  {children}
                </td>
              ),
              pre: ({ children }) => (
                <pre className='text-wrap'>
                
                </pre>
              ),
              a: ({ children }) => (
                <a className="wrap-break-word"></a>
              )
            }}
          >{markDownTxt}</ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }
}