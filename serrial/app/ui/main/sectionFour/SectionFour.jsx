import { carrouselImages } from "@/scripts/data";
import SectionFourScrollingImages from "./SectionFourScrollingImages";

function SectionFour() {
  return (
    <section class="mt-10 duration-700">
      <div class="container mx-auto px-3 mb-10">
        <h2 class="text-4xl mb-6 font-bold text-center text-green-800">
          Partners
        </h2>
      </div>
      <div class="logos overflow-hidden px-14 py-0 whitespace-nowrap relative flex flex-row items-center justify-between">
        <div class="logos-slide flex flex-row">
          {carrouselImages.map((data) => {
            return <SectionFourScrollingImages key={data.name} data={data} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
