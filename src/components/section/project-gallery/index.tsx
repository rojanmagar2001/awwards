"use client";
import { projects } from "@/data";
import React, { useState } from "react";
import Project from "../../reusable/project";
import Modal from "@/components/reusable/modal";

const ProjectGallery: React.FC = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <section className="project-gallery relative flex items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center">
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
      </div>
      <Modal modal={modal} projects={projects} />
    </section>
  );
};

export default ProjectGallery;
