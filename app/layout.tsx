import type { Metadata } from "next";
import { Inconsolata, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import NextTopLoader from "nextjs-toploader";
// import PixelBlast from "./components/bg";
import { LoadColours } from "./components/loadColours";

const inconsolata = Inconsolata({
  variable: "--inconsolata",
  subsets: ["latin"],
});

const oneMono = JetBrains_Mono({
  variable: "--oneMono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Arya's portfolio",
  description:
    "CS student at UNSW Sydney building full-stack web apps, real-time systems, and developer tools. Open to software engineering internships in Sydney.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inconsolata.variable} ${oneMono.variable} h-full antialiased`}
    > 
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <LoadColours/>
        <div style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1}}>
          <div className="w-full mt-20">
            <NextTopLoader
              color="var(--org)"
              showSpinner={false}
            />
          </div>
          {/* <div className="z-[-1] absolute w-[100%] h-[100%]">
          </div> */}
          {children}
        </div>
        
      <Footer/>      
      </body>
    </html>
  );
}
