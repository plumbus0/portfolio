import type { Metadata } from "next";
import { Inconsolata, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import PixelBlast from "./components/bg";

const inconsolata = Inconsolata({
  variable: "--inconsolata",
  subsets: ["latin"],
});

const oneMono = JetBrains_Mono({
  variable: "--oneMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arya prakash portfolio",
  description: "arya prakash portfolio website",
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
        <div style={{ width: '100%', height: '600px', position: 'relative', zIndex: 1}}>
          <div className="z-[-1] absolute w-[100%] h-[100%]">
            <PixelBlast
              variant="square"
              pixelSize={4}
              color="#f5e7d5"
              patternScale={2}
              patternDensity={0.95}
              pixelSizeJitter={0}
              enableRipples
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquid={false}
              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={0.5}
              edgeFade={0.25}
              transparent
            />
          </div>
          {children}
        </div>
        
      <Footer/>      
      </body>
    </html>
  );
}
