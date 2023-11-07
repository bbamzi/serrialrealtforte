"use client";
import { useEffect, useRef } from "react";
import SectionFive from "./reviewsSection/SectionFive";
import SectionFour from "./partnersSection/SectionFour";
import HeroSection from "./heroSection/HeroSection";
import SectionSix from "./contactUsSection/SectionSix";
import SectionThree from "./servicesSection/SectionThree";
import SectionTwo from "./aboutSection/SectionTwo";
import SectionEight from "./mapSection/page";
import ListingSection from "./listingsSection/page";

function Main() {
  const ref = useRef(null);
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
  };
  useEffect(() => {
    const allSections = ref.current.querySelectorAll(".section");
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });
  });

  return (
    <>
      <div ref={ref}>
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <ListingSection />
        <SectionEight />
        <SectionSix />
      </div>
    </>
  );
}
export default Main;
