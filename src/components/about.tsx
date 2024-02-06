"use client";

import React from "react";
import SectionHeading from "./section_heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Management Information Systems</span>, I
        decided to pursue my passion for programming. I enrolled in a coding
        bootcamp at <span className="font-medium">General Assembly</span> where
        I learned{" "}
        <span className="font-medium">full-stack web development</span>. Soon
        after I got a job as a{" "}
        <span className="font-medium">software engineer</span> working in
        biotech for over 3 years.{" "}
        <span className="italic">What I like most about programming</span> is
        tackling the puzzles it throws my way, especially when you finally find
        the solution to a tough problem. My core technology stack is{" "}
        <span className="font-medium">
          React, TypeScript, Next.js, Python, and MongoDB
        </span>
        . I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        snowboarding, playing video games, reading and film. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">AI and video game design</span>.
      </p>
    </motion.section>
  );
}
