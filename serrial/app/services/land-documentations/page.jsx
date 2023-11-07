"use client";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { tiles } from "@/scripts/data";

function page() {
  //   const service = useParams();
  //   const id = Number(service.serviceId) - 1;

  //   const data = tiles[id];
  //   if (!data) return <p>Not Found</p>;
  return (
    <>
      <div className="p-20">
        <div className="flex">
          <h1 className="text-3xl font-bold text-green-800">
            Land Documentations
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-left pt-14 ">
          <div>
            <Image
              src={"/img/land_docs.jpeg"}
              width={400}
              height={400}
              alt="sdsd"
            />
          </div>
          <div className="md:w-[800px] md:pl-5 flex items-center flex-col mt-10 md:mt-0 space-y-4">
            <p>
              Land documentation services are important for ensuring the
              security and protection of land rights and interests. They can
              also facilitate the development and management of land resources
              and properties.
            </p>
            <p>
              Land documentation can help to protect the rights and interests of
              landowners, tenants, and other stakeholders, as well as to prevent
              or resolve land disputes. Land documentation can also facilitate
              land transactions, such as buying, selling, leasing, or inheriting
              land. Different countries have different systems and requirements
              for land documentation. <br /> In Serrial Realty Forte , we offer
              services for the following :
            </p>
            <div className="pl-10 space-y-4">
              <p>
                <span className="underline font-bold">Deed of Assignment:</span>
                <br />A legal document that transfers the ownership of land from
                one party to another. Certificate of Occupancy: A document
                issued by the state government that grants the holder the right
                to use and occupy a piece of land for a specified period of
                time, usually 99 years.
              </p>
              <p>
                <span className="underline font-bold">Governor’s Consent:</span>
                <br />A document that indicates the approval of the state
                governor for the transfer of land ownership or interest from one
                party to another.
              </p>
              <p>
                <span className="underline font-bold">Survey Plan:</span>
                <br />A document that shows the accurate measurement and
                description of the land, including its boundaries, coordinates,
                and area.
              </p>
              <p>
                <span className="underline font-bold">
                  Contract of Sale of Land:
                </span>
                <br />A document that outlines the terms and conditions of the
                sale of land between the seller and the buyer.
              </p>
              <p>
                <span className="underline font-bold">Grant of Probate:</span>
                <br />A document that authorizes the executor of a deceased
                person’s will to administer the estate, including the land and
                property of the deceased.
              </p>
              <p>
                <span className="underline font-bold">
                  Letter of Administration:
                </span>
                <br />A document that authorizes the administrator of a deceased
                person’s estate to manage the assets, including the land and
                property of the deceased, in the absence of a valid will.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
