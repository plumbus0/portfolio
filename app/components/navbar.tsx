import Link from "next/link";

export function Navbar() {
  return (
  <header className="font-sans">
    <nav className="flex">
      <div className="flex text-[var(--org)]">
        <div className="m-4">
          <Link href="/"><h1 className="font-size-100">Arya</h1></Link>
        </div>
        <div className="m-4">
          <Link href="/projects"><h1 className="font-size-100">Projects</h1></Link>
        </div>
      </div>
    </nav>
  </header>);
}