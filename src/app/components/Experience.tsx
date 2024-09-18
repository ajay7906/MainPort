"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

import { FocusCards } from "@/components/ui/focus-cards";
export function BackgroundBeamsDemo() {

  const cards = [
    {
      title: "Front-end Developer",
      description: "Worked as a Front-end Developer at Exon Saha for 3 months, building responsive and dynamic user interfaces using modern web technologies.",
    },
    {
      title: "Full Stack Developer",
      description: "Developed full-stack applications at Cuvette Tech, focusing on MERN stack projects for 10 months, contributing to both frontend and backend systems.",
    },
    {
      title: "Freelancer",
      description: "Gained two years of freelance experience, delivering custom web solutions to Indian clients using technologies like React, Node.js, and MongoDB.",
    },
  ];
  



  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Work Experience 
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
           Work in Full stack web devloper and freelancer 
        </p>
       
      </div>
      <FocusCards cards={cards}/>
      <BackgroundBeams />
    </div>
  );
}








