"use client";

import React from "react";
import SectionHeading from "../section_heading";
import { projectsData } from "@/src/lib/data";
import { useSectionInView } from "@/src/lib/hooks";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} className="scroll-mt-28" id="projects">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
