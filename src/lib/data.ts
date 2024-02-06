import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import bixImg from "@/public/BIX_screenshot.jpg";
import itcxImg from "@/public/itcx_screenshot_2.png";
import limsImg from "@/public/LIMS_screenshot.png";
import missionCeramicsImg from "@/public/MC_screenshot2.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development Immersive",
    location: "General Assembly - San Francisco, CA",
    description:
      "Full time student with 12 weeks of immersive instruction in the full stack web development process.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Engineer",
    location: "Bluesphere Bio - Pittsburgh, PA",
    description:
      "Led the design and development of an in-house TCR Sequence Analysis Platform and an innovative laboratory plate tracking system, significantly enhancing sequencing analysis and lab processes.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Senior Software Engineer",
    location: "Bluesphere Bio - Pittsburgh, PA",
    description:
      "Led the development and optimization of sophisticated bioinformatics platforms, focusing on enhancing user experience, performance, and scientific data analysis capabilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Bioinformatics Hub",
    description:
      "Created a software solution that enables users to run complex bioinformatics pipelines without developer assistance.",
    tags: ["React", "Next.js", "MongoDB", "FASTAPI", "Nextflow", "Groovy"],
    imageUrl: bixImg,
  },
  {
    title: "Lab IMS",
    description:
      "Developed a laboratory plate tracking system, streamlining specimen management with an innovative barcode and electronic tracking solution.",
    tags: ["React Native", "FASTAPI", "MongoDB", "Material UI"],
    imageUrl: limsImg,
  },
  {
    title: "TCR Analysis Platform",
    description:
      "Led the development of a T Cell Receptor analysis platform, enabling researchers to conduct intricate sequence analysis through a user-friendly interface.",
    tags: ["React", "FASTAPI", "MongoDB", "Material UI"],
    imageUrl: itcxImg,
  },
  {
    title: "Mission Ceramics",
    description:
      "Created an e-commerce website for a small company specializing in ceramic art pieces.",
    tags: ["React", "Python", "CSS", "SquareAPI"],
    imageUrl: missionCeramicsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "Python",
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "React Native",
  "FASTAPI",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Framer Motion",
  "MongoDB",
  "SQL",
  "Git",
  "Figma",
  "AWS",
  "Command Line",
  "Nextflow",
  "Docker",
] as const;
