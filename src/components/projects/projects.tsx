import React from "react";
import SectionHeading from "../section_heading";
import { projectsData } from "@/src/lib/data";

import Project from "./project";

export default function Projects() {
  return (
    <section className="scroll-mt-28" id="projects">
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
