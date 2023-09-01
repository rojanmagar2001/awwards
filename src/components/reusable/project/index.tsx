import React from "react";

interface ProjectProps {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
}

const Project: React.FC<ProjectProps> = ({ index, title, setModal }) => {
  return (
    <div
      className="project-gallery-project flex w-full justify-between items-center px-[50px] py-[80px] border-t-[rgb(201,201,201)] border-t-[1px] border-solid cursor-pointer hover:opacity-[0.5]"
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2 className="text-[60px] m-0 font-[400] hover:translate-x-[-10px]">
        {title}
      </h2>
      <p className="font-[300] hover:translate-x-[10px]">
        Design & Development
      </p>
    </div>
  );
};

export default Project;
