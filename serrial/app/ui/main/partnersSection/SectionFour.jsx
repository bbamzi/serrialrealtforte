import { carrouselImages } from "@/scripts/data";
import SectionFourScrollingImages from "./SectionFourScrollingImages";

function SectionFour() {
  return (
    <section className="mt-10 duration-700">
      <div className="container mx-auto px-3 mb-10">
        <h2 className="text-4xl mb-6 font-bold text-center text-green-800">
          Partners
        </h2>
      </div>
      <div className="logos overflow-hidden px-14 py-0 whitespace-nowrap relative flex flex-row items-center justify-between">
        <div className="logos-slide flex flex-row">
          {carrouselImages.map((data) => {
            return <SectionFourScrollingImages key={data.id} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
