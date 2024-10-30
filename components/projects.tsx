"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  // useSectionInView is a custom hook used to set the active section
  const { ref } = useSectionInView(0.4, "Projects");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          // When you want to add "filters" then the key must be unique
          // React "Fragment" is a nempty element that doesn't clutter the DOM
          <React.Fragment key={index}>
            {/* taking in the project's data through "spreading" into the custom Project component */}
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
