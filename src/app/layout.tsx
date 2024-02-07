import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/globals.css";
import "./css/main.css"
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import Skills from "./Skills";
import Projetcs from "./projetcs";

import SlideInComponent from "./sub/SlideInComponent";
import StarsCanvas from "./StarBackground";
import VideoBackground from "./Videobg"




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout">
        {children}
      
      </body>
    </html>
  );
}


 