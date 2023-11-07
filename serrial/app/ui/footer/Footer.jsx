import Link from "next/link";
import { tiles } from "@/scripts/data";

function Footer() {
  return (
    <footer className="mt-14">
      <div className="flex flex-col bg-green-900 text-white">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="md:border-r-[1px] border-green-200">
            <div className="mt-10 md:pl-5 p-2">
              <h2 className="font-bold">
                <span className="text-green-300 text-3xl uppercase">
                  serrial
                </span>
                <span className="text-3xl"> Realty Forte </span>
              </h2>
              {/* <div className="flex flex-row gap-3 items-start pt-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </div> */}
            </div>
          </div>
          <div>
            <div className="mt-10 md:pl-20 p-2 md:grid md:grid-cols-2 text-white">
              <div className="mb-10 md:mb-0">
                <h3 className="text-2xl font-bold uppercase">QUICK LINKS</h3>
                <div className="md:flex-row mt-3">
                  <div>
                    <ul className="pl-2 text-white   ">
                      <Link href="/about">
                        <li className="hover:underline ">About Us</li>
                      </Link>
                      <Link href={"/blog"}>
                        <li className="hover:underline ">Blog</li>
                      </Link>
                      <Link href={"/contact-us"}>
                        <li className="hover:underline ">Contact Us</li>
                      </Link>
                      <Link href={"/gallery"}>
                        <li className="hover:underline ">Gallery</li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold uppercase">services</h3>
                <div className="md:flex-row mt-3">
                  <div>
                    <ul className="pl-5 ">
                      {tiles.map((tile) => {
                        return (
                          <Link href={`services${tile.link}`} key={tile.title}>
                            <li className="hover:underline ">{tile.title}</li>
                          </Link>
                        );
                      })}
                      {/* <Link href={"/gallery"}>
                        <li className="hover:underline ">Constructions</li>
                      </Link>
                      <Link href={"/gallery"}>
                        <li className="hover:underline ">Land Survey</li>
                      </Link>
                      <Link href={"/gallery"}>
                        <li className="hover:underline ">Land Sales</li>
                      </Link>
                      <Link href={"/gallery"}>
                        <li className="hover:underline ">
                          Land Documentations
                        </li>
                      </Link>
                      <Link href={"/gallery"}>
                        <li className="hover:underline ">
                          Government Acquisition Management
                        </li>
                      </Link> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex md:flex-row flex-col justify-between p-2 border-t-[1px] border-green-200">
          <p>
            © 2023
            <a href="#">
              <span> Serrial Realty Forte Limited. All Rights Reserved. </span>
            </a>
          </p>
          <p className="md:mr-10">Designed by GalaxySailors Limted</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
