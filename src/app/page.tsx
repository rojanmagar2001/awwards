import Hero from "@/components/section/hero";
import ProjectGallery from "@/components/section/project-gallery";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectGallery />
    </main>
  );
}
