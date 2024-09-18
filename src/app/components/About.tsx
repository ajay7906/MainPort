"use client";

import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { FaHtml5 } from "react-icons/fa";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Skill 
        </h2>
        
        <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
      </Vortex>
    </div>
  );
}




// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//     iconTitle: <FaHtml5/>
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//     iconTitle: <FaHtml5/>
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//     iconTitle: <FaHtml5/>
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//     iconTitle: <FaHtml5/>
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//     iconTitle: <FaHtml5/>
//   },
// ];



import {  FaJsSquare, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiRedux, SiNextdotjs, SiExpress, SiCss3, SiTailwindcss, SiGit, SiMysql } from "react-icons/si";

const testimonials = [
  {
    quote:
      "Experienced in building well-structured and responsive websites using HTML5, ensuring adherence to modern web standards and best practices.",
    name: "HTML5",
    title: "Expertise",
    iconTitle: <FaHtml5 />,
  },
  {
    quote:
      "Over 2 years of experience in JavaScript for creating interactive, dynamic web applications with focus on performance and maintainability.",
    name: "JavaScript",
    title: "Expertise",
    iconTitle: <FaJsSquare />,
  },
  {
    quote:
      "Skilled in developing scalable and efficient front-end applications using React, including component-driven architecture and state management.",
    name: "ReactJS",
    title: "Expertise",
    iconTitle: <FaReact />,
  },
  {
    quote:
      "Proficient in using TypeScript to add static typing in JavaScript projects, improving code reliability and reducing errors in large-scale applications.",
    name: "TypeScript",
    title: "Expertise",
    iconTitle: <SiTypescript />,
  },
  {
    quote:
      "Hands-on experience with Redux for managing global state in complex React applications, ensuring data consistency across the app.",
    name: "Redux",
    title: "Expertise",
    iconTitle: <SiRedux />,
  },
  {
    quote:
      "Experienced with Next.js for building high-performance web applications, leveraging SSR and static generation for enhanced SEO and speed.",
    name: "Next.js",
    title: "Expertise",
    iconTitle: <SiNextdotjs />,
  },
  {
    quote:
      "Extensive experience in building RESTful APIs and backend services using Node.js, with a focus on performance and scalability.",
    name: "Node.js",
    title: "Expertise",
    iconTitle: <FaNodeJs />,
  },
  {
    quote:
      "Proficient in ExpressJS for building robust server-side applications and handling complex HTTP requests in MERN stack projects.",
    name: "ExpressJS",
    title: "Expertise",
    iconTitle: <SiExpress />,
  },
  {
    quote:
      "Expert in using MongoDB for managing and scaling NoSQL databases in modern web applications, particularly in MERN stack projects.",
    name: "MongoDB",
    title: "Expertise",
    iconTitle: <SiMongodb />,
  },
  {
    quote:
      "Experienced in designing and querying MySQL databases for applications requiring structured relational data.",
    name: "MySQL",
    title: "Expertise",
    iconTitle: <SiMysql />,
  },
  {
    quote:
      "Proficient in using Tailwind CSS to rapidly build modern and responsive UIs, leveraging utility-first CSS for streamlined styling.",
    name: "Tailwind CSS",
    title: "Expertise",
    iconTitle: <SiTailwindcss />,
  },
  {
    quote:
      "Over 2 years of experience in using CSS3 to create responsive, modern layouts that work seamlessly across devices and browsers.",
    name: "CSS3",
    title: "Expertise",
    iconTitle: <SiCss3 />,
  },
  {
    quote:
      "Skilled in using Git for version control, enabling efficient team collaboration and managing project development with branching and merging.",
    name: "Git",
    title: "Expertise",
    iconTitle: <SiGit />,
  },
  {
    quote:
      "Expertise in managing both SQL and NoSQL databases to ensure optimal data storage, security, and scalability in various applications.",
    name: "Databases",
    title: "Expertise",
    iconTitle: <FaDatabase />,
  },
];
