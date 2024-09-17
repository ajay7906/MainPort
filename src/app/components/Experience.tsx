"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

import { FocusCards } from "@/components/ui/focus-cards";
export function BackgroundBeamsDemo() {


    const cards = [
        {
          title: "Card 1",
          description: "This is the description for Card 1",
        },
        {
          title: "Card 2",
          description: "This is the description for Card 2",
        },
        {
          title: "Card 3",
          description: "This is the description for Card 3",
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








