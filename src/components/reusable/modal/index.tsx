import { projects } from "@/data";
import Image from "next/image";
import React from "react";

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: typeof projects;
}

const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
  return (
    <div className="project-modal-container h-[250px] w-[400px] flex items-center justify-center absolute overflow-hidden">
      <div className="project-modal-slider h-full w-full absolute">
        {projects.map((project, index) => {
          const { src, color } = project;
          return (
            <div
              key={`modal_${index}`}
              style={{ backgroundColor: color }}
              className="project-modal relative h-full flex items-center justify-center"
            >
              <Image
                src={`/project/${src}`}
                width={300}
                height={0}
                alt="project-image"
                className="h-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
