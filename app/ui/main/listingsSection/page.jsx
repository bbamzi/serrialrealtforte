import Link from "next/link";
import PropertiesForSale from "./PropertiesForSale";
import { properties } from "@/scripts/data";

function ListingSection() {
  return (
    <section className="mt-20">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl mb-6 font-bold text-center text-green-800">
          Listings
        </h2>
        <p className="max-w-xs mx-auto text-center text gray-400">
          Here are some Available properties up for sale and rent
        </p>
      </div>
      <div className="md:flex md:justify-end px-8 pt-4 hidden">
        <Link href={"/listings"}>
          <button className="tracking-widest px-4 py-2 border-2 border-green-700 hover:bg-green-800 hover:text-white duration-200 hover:border-white">
            See All
          </button>
        </Link>
      </div>
      <div className="p-6">
        <div className="grid md:grid-cols-5 md:gap-3 gap-5 section duration-1000">
          {properties.slice(0, 5).map((property) => {
            return (
              <Link
                href={`listings/${property.id}`}
                className="group"
                key={property.id}
              >
                <PropertiesForSale property={property} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end px-8 pt-2 md:hidden">
        <Link
          href={"/listings"}
          className="w-full tracking-widest px-4 py-2 border-2 border-green-700 hover:bg-green-800 hover:text-white duration-200 hover:border-white text-center"
        >
          See All
        </Link>
      </div>
    </section>
  );
}

export default ListingSection;
