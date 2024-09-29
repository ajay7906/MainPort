"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
      {/* <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div> */}
    </div>
  );
}



export const projects = [
  {
      title: "Story Sharing System",
      description:
          "A Node.js-based platform allowing users to share their stories, with backend integration and a user-friendly interface.",
      link: "https://your-story-sharing-link.com",
  },
  {
      title: "Job Listing Web App",
      description:
          "A platform to list and search job openings with features such as filtering by categories and applying online.",
      link: "https://your-job-listing-link.com",
  },
  {
      title: "Ecommerce Web App",
      description:
          "An e-commerce platform with product listings, shopping cart functionality, and secure checkout using payment gateways.",
      link: "https://your-ecommerce-webapp-link.com",
  },
  {
      title: "Quizzes Web App",
      description:
          "An interactive quizzes platform where users can participate in quizzes on various topics, with score tracking and responsive design.",
      link: "https://your-quizzes-webapp-link.com",
  },
  {
      title: "Fashion E-commerce Website",
      description:
          "An e-commerce platform with user authentication, OTP support, rate limiting, and best practices in security, performance optimization, and API integration.",
      link: "https://your-fashion-ecommerce-link.com",
  },
  {
      title: "Ecommerse with payment Intergration",
      description:
      "A full-featured e-commerce platform with advanced payment integration, product management, user authentication, and an optimized checkout flow.",
  link: "https://your-ecommerce-payment-integration-link.com",
  },
];
