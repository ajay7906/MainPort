import { div } from "framer-motion/client";
import NavbarDemo from "./components/Navbar";
import { BackgroundLinesDemo } from "./components/HomeBackGround";
import { VortexDemo } from "./components/About";
import { BackgroundBeamsDemo } from "./components/Experience";
import { SpotlightPreview } from "./components/Project";
import { BackgroundBeamsWithCollisionDemo } from "./components/SignUp";
import Footer from "./components/Footer";





export default function Pages(){
  return(
    <>
    <div >
      <NavbarDemo/>
      <BackgroundLinesDemo/>
      <VortexDemo/>
      <BackgroundBeamsDemo/>
      <SpotlightPreview/>
       <BackgroundBeamsWithCollisionDemo/>
       <Footer/>
     
    </div> 
  
    </>

  )
}