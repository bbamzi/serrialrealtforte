import clsx from "clsx";
import Link from "next/link";

function Tile({ tile }) {
  return (
    <>
      <div
        className={clsx(`relative services-item  duration-700`, {
          "mt-12": tile.title === "Land Sales",
          "mt-24": tile.title === "Constructions",
          "mt-48": tile.title === "Land Acquisition Management",
        })}
      >
        <Link href={tile.link}>
          <div className="absolute -ml-10 left-1/2 -top-10">
            <div className="flex item-center justify-center w-20 h-20 p-4 rounded-full bg-green-200">
              {tile.icon}
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            {tile.title}
          </h5>
          <p className="text-center text-gray-400 md:text-left">{tile.text}</p>
          <Link href={tile.link} className="absolute bottom-0 right-1 p-2">
            Learn More
          </Link>
        </Link>
      </div>
    </>
  );
}

export default Tile;
