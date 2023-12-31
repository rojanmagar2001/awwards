"use client";
import Header from "@/components/section/header";
import Hero from "@/components/section/hero";
import ProjectGallery from "@/components/section/project-gallery";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main>
      <Header />
      <Hero />
      <ProjectGallery />
    </main>
  );
}
