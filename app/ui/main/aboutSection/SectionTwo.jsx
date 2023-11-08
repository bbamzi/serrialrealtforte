import Image from "next/image";
import { useRef } from "react";

function SectionTwo() {
  const ref = useRef();

  return (
    <section
      ref={ref}
      id="About-us"
      className="mt-5 md:mt-20 about_us section duration-700"
    >
      <div className="p-2 md:p-0 relative flex items-center h-auto w-full md:space-y-10 flex-col md:flex-row bg-lineThrough">
        <div className="mt-0 relative text-2xl">
          <Image
            src="/img/land_survey.jpg"
            className="object-contain h-72 md:hover:scale-110 md:duration-200 md:hover:translate-x-4"
            alt="land"
            width={511}
            height={288}
          />

          <p className="bg-green-200 inline-block px-2 text-green-900 absolute top-[10%] md:left-1 md:top-[-5%]">
            About Us
          </p>
        </div>

        <div className="md:w-1/2 md:bg-green-900 bg-white mt-5">
          <div className="flex flex-col justify-between items-start px-5">
            <div className="mb-5 text-3xl text-center font-bold font-serif uppercase text-green-900 md:absolute top-[50px] left-[300px] bg-white md:w-[30rem]">
              <h1>
                serrial realty forte
                <span className="hidden md:inline-block">limited</span>
              </h1>
            </div>
            <div className="md:border-l-white border-l-green-800 border-l-4 p-2 md:mt-10">
              <p className="md:text-white text-grey-500 text-xl text-center pt-4">
                Our mission is to make your Land and Landed Property buying or
                selling experience easy, enjoyable, and rewarding. We listen to
                your needs, guide you through the process, and negotiate the
                best deal for you. We also offer after-sales support and
                assistance to ensure your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
