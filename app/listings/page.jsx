"use client";
import { properties } from "@/scripts/data";
import Image from "next/image";
import PropertiesForSale from "../ui/main/listingsSection/PropertiesForSale";
// import { useRouter } from "next/navigation";
import Link from "next/link";

// export async function generateMetadata({ params }) {
//   return {
//     title: "",
//   };
// }

function AllListings() {
  // const router = useRouter();

  return (
    <div className="p-10 space-y-5">
      {/* <button onClick={() => router.back()}>⬅️Go Back</button> */}

      <div>
        <h1 className="text-3xl font-bold font-serif">All Listings</h1>
      </div>
      <div className="grid md:grid-cols-5 md:gap-3 gap-5">
        {properties.map((property) => {
          return (
            <Link
              href={`/listings/${property.id}`}
              className="group"
              key={property.id}
            >
              <PropertiesForSale property={property} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AllListings;
