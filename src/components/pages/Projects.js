import React from "react";
import { useState } from "react";
import ProjectCard from "../../element/ProjectCard";

const Projects = () => {
  const [projectFocus, setProjectFocus] = useState("all");
  return (
    <section
      id="projects"
      className="flex  flex-col items-center justify-center gap-4 py-20 "
    >
      <h2 className="text-4xl font-bold pb-2 text-gray-900 md:text-6xl lg:text-8xl">
        Projects
      </h2>

      <ProjectCard projectFocusSelected={projectFocus} />
    </section>
  );
};

export default Projects;
