import Link from "next/link";

export function Navbar() {
  return (
  <header className="font-sans">
    <nav>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  </header>);
}