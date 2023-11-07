"use client";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { tiles } from "@/scripts/data";

function page() {
  const router = useRouter();
  return (
    <>
      <div className="p-20">
        <button onClick={() => router.back()}>⬅️Go Back</button>
        <div className="flex">
          <h1 className="text-3xl font-bold text-green-800">
            Government Land Acquisition Management
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-left pt-14 ">
          <div>
            {/* <Image
              src={"/img/land-1.jpg"}
              width={400}
              height={400}
              alt="sdsd"
            /> */}
          </div>
          <div className="md:w-[800px] md:pl-5 flex items-center flex-col mt-10 md:mt-0 space-y-4">
            <p>
              The Nigerian government has the power to acquire private property
              for public use. However, the exercise of such power is not without
              controversy. The way in which governments exercise this right,
              especially for urban expansion, undermines tenure security, and
              because often little or no compensation is paid, also has negative
              impacts on equity and transparency
            </p>
            <p>
              The acquisition and management of state lands have left in their
              trail several unresolved problems. Among them are the acquisition
              of lands far in excess of actual requirements, unpaid compensation
              in respect of some of the acquisitions, encroachment on acquired
              lands, lack of intergenerational equity in the utilization of paid
              compensation, change of use of compulsorily acquired land as
              against the purpose of the acquisition, optimizing the use and
              economic returns of state lands, private sector participation in
              the development of compulsorily acquired land, etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
