
export function H1({txt} : {txt:string}) {
  return (<h1>{
    Array.from(txt, (l,i) => {return <span className="title_port 
      transition-all duration-400
      hover:duration-100
      text-[var(--col2)]
      " key={i}>{l}</span>})
  }</h1>);
}