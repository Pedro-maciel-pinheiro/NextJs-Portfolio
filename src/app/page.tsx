

import VideoBackground from "./Videobg"
// import StarsCanvas from "./StarBackground";

import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

import SlideInComponent from "./sub/SlideInComponent";

import Skills from "./Skills";
import Projetcs from "./projetcs";
import Social from './Social'



export default function Home() {
  return (

    <main className="portfolio">
      <NavBar />
      
      <Menu />

      <VideoBackground />
      <SlideInComponent />
      <Skills />
      <Projetcs />
      <Social/>
      {/* <StarsCanvas /> */}


    </main>
  );
}


