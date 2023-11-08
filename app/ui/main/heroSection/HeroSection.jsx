"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import SectionOneShapeDivider from "./SectionOneShapeDivider";

function HeroSection() {
  const paragraphRef = useRef();
  const ref = useRef();
  useEffect(() => {
    let textSplit = new SplitType("#hero-text");
    let characters = document.querySelectorAll(".char");
    for (let index = 0; index < characters.length; index++) {
      characters[index].classList.add("translate-y-full");
    }
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
    });

    // paragraphRef.current.className + "translate-y-5 opacity-0";
    // console.log(paragraphRef.current.className);
    setTimeout(() => {
      paragraphRef.current.classList.add("translate-y-5");
      paragraphRef.current.classList.add("duration-1000");
      paragraphRef.current.classList.remove("opacity-0");
    }, 2000);
  }, []);
  return (
    <section
      ref={ref}
      id="section1"
      className="h-screen relative bg-section_one_bg bg-cover"
    >
      <div className="flex flex-col items-center pt-52">
        <div>
          <h1 id="hero-text" className="text-5xl text-white text-center">
            Land & Landed Property Management
          </h1>
          {/* <GsapAnimation /> */}
        </div>
        <div className="p-4 max-w-lg pt-10">
          <p
            id="p-1"
            className="text-lg text-center text-white md:w-[500px] opacity-0 transform duration-700"
            ref={paragraphRef}
          >
            We are not just a real estate company, we are your trusted partner
            and friend in Nigeria. We value honesty, integrity, and excellence
            in everything we do.
          </p>
        </div>
      </div>
      <SectionOneShapeDivider />
    </section>
  );
}

export default HeroSection;
