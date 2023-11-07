import Image from "next/image";

function SectionFive() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-20 section duration-700">
        <h2 className="text-3xl px-4 py-1 text-green-800 inline-block font-bold">
          Reviews
        </h2>
      </div>
      <section id="reviews" className="section duration-700">
        <div className="bg-green-950 h-auto mt-5 relative md:mt-14 p-2">
          <div className="custom-shape-divider-top-1698543426">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>

          <div className="flex items-center flex-col md:flex-col">
            <div className="bg-green-950 md:w-[600px] flex flex-col md:flex-row items-center p-5 gap-5 relative drop-shadow-2xl">
              {/* <Image
                width={188}
                height={240}
                src={"/img/surveyor.jpeg"}
                className="rounded-2xl md:block pr-5"
                alt="img"
              /> */}
              {/* 
              <blockquote className="text-left text-white">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, ullam. Numquam fuga at maiores non velit beatae
                  tempore commodi, consectetur alias ducimus voluptate unde quia
                  odio quam, harum molestiae! Excepturi!
                </p>
                <p className="text-right mt-5">Bamigboye Akinbode</p>
                <p className="text-right">Senior Manager</p>
                <p className="text-right">GalaxySailors Limited</p>
              </blockquote>
              <button className="absolute bg-yellow-400 rounded-2xl bottom-[50%] left-1 shadow-3xl hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button className="absolute bg-yellow-400 rounded-2xl bottom-[50%] right-1 shadow-2xl hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <div className="flex absolute bottom-0 md:left-[50%] gap-1 md:inline-block">
                <button className="h-4 w-4 bg-yellow-300 rounded-2xl border-yellow-400 border">
                  &nbsp;
                </button>
                <button className="h-4 w-4 bg-white rounded-2xl border-yellow-400 border">
                  &nbsp;
                </button>
                <button className="h-4 w-4 bg-white rounded-2xl border-yellow-400 border">
                  &nbsp;
                </button>
                <button className="h-4 w-4 bg-white rounded-2xl border-yellow-400 border">
                  &nbsp;
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionFive;
