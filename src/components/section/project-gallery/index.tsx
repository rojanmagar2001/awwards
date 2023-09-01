"use client";
import { projects } from "@/data";
import React, { useState } from "react";
import Project from "../../reusable/project";
import Modal from "@/components/reusable/modal";

const ProjectGallery: React.FC = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className="project-gallery py-32 px-48 flex items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
        <Modal modal={modal} projects={projects} />
      </div>
    </section>
  );
};

export default ProjectGallery;
