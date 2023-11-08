import SectionThreeDividerButtom from "./SectionThreeDividerButtom";
import SectionThreeShapeDividerTop from "./SectionThreeShapeDividerTop";

import Tile from "./Tile";
import { tiles } from "@/scripts/data";

function SectionThree() {
  return (
    <section className="duration-700 section pt-20">
      <div className="">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center text-green-800">
            Services
          </h2>
          <p className="max-w-xs mx-auto text-center text gray-400">
            We have the expertise and resources to help you
          </p>
        </div>
      </div>
      <section
        id="features"
        className="bg-haikei bg-cover relative md:pb-40 pb-10 mt-10"
      >
        <SectionThreeShapeDividerTop />
        <div className="relative container flex flex-col items-center px-6 mx-auto md:flex-row md:space-x-7 pb-20 pt-10">
          <div className="hidden absolute top-72 w-10/12 left-16 h-3 bg-green-200 md:block"></div>

          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-green-700 md:hidden"></div>
          {tiles.map((tile) => {
            return <Tile tile={tile} key={tile.title} />;
          })}
        </div>
        <SectionThreeDividerButtom />
      </section>
    </section>
  );
}

export default SectionThree;
