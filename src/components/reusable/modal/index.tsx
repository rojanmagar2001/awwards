"use client";
import { projects } from "@/data";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimationProps, motion } from "framer-motion";
import gsap from "gsap";

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: typeof projects;
}

const scaleAnimation: AnimationProps["variants"] = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moverContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const moverCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const moverCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      moverContainerX(clientX);
      moveContainerY(clientY);
      moverCursorX(clientX);
      moveCursorY(clientY);
      moverCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (!active) {
  //   }

  //   return () => {};
  // });
  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="project-modal-container h-[350px] w-[400px] flex items-center justify-center absolute overflow-hidden pointer-events-none"
      >
        <div
          style={{ top: index * -350 }}
          className="project-modal-slider h-full w-full absolute"
        >
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
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="project-modal-cursor w-[80px] h-[80px] bg-[#455CE9] absolute pointer-events-none rounded-[50%] flex items-center justify-center text-white"
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className="project-modal-cursor-label w-[80px] h-[80px] absolute pointer-events-none rounded-[50%] flex items-center justify-center text-white"
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
