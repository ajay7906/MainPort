"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
export function BackgroundLinesDemo() {
   // Create a reference to store the Typed instance
   const typedRef = useRef<Typed | null>(null);
   const elementRef = useRef<HTMLSpanElement | null>(null);
 
   useEffect(() => {
     // Initialize Typed.js when the component mounts
     typedRef.current = new Typed(elementRef.current!, {
       strings: ["Developer.", "Designer.", "Teacher."],
       typeSpeed: 30,
       loop: true,
     });
     // Cleanup Typed.js instance on component unmount
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);
 
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      I am a <span className="element" ref={elementRef}></span>
        <br /> Ajay Kumar
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      As a recent graduate with a Bachelor's in Technology specializing in Computer Science, 
      I bring a fresh perspective and a hunger for innovation to the tech landscape. My journey has been fueled by 
      a passion for mastering the MERN Stack and full-stack web developer,
      </p>



      <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
         as="a"
       // href="https://drive.google.com/file/d/1d608-aylyBiEsDbUzY8Ru9Fp3jZwJEJg/view" // Google Drive link
       
       // target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security measure for opening external links
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
         <AceternityLogo />
        <span>download resume</span>
      </HoverBorderGradient>
     
    </div>
    



    </BackgroundLines>
  );
}




const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
