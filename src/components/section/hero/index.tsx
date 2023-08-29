"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          direction = e.direction * -1;
        },
      },
      x: "-=300px",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };
  return (
    <section className="hero-section h-screen overflow-hidden relative">
      <Image
        fill={true}
        src="/hero/cover.jpg"
        alt="image"
        className="object-cover"
      />
      <div className="hero-slider-container absolute bottom-[5%]">
        <div
          ref={slider}
          className="hero-slider relative whitespace-nowrap flex"
        >
          <p ref={firstText} className="m-0 text-white text-[240px] font-bold">
            Freelance Web Developer -
          </p>
          <p ref={secondText} className="m-0 text-white text-[240px] font-bold">
            Freelance Web Developer -
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
