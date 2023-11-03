import SectionOneShapeDivider from "./SectionOneShapeDivider";

function SectionOne() {
  return (
    <section
      id="section1"
      className="h-screen relative bg-section_one_bg bg-cover"
    >
      <div className="flex flex-col items-center pt-52">
        <div>
          <h1 id="hero-text" className="text-5xl text-white text-center">
            Land & Landed Property Management
          </h1>
        </div>
        <div className="p-4 max-w-lg pt-10">
          <p
            id="p-1"
            className="text-lg text-center text-white md:w-[500px] opacity-0 transform duration-700"
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

export default SectionOne;
