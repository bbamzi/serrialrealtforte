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
          <h1 className="text-3xl font-bold text-green-800">Land For Sale</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-left pt-14 ">
          <div>
            <Image
              src={"/img/land-1.jpg"}
              width={400}
              height={400}
              alt="sdsd"
            />
          </div>
          <div className="md:w-[800px] md:pl-5 flex items-center flex-col mt-10 md:mt-0 space-y-4">
            <p>
              The company offers a full range of construction services, from
              design and planning to execution and maintenance. The company
              values teamwork, integrity, and innovation, and strives to exceed
              the expectations of its clients. The company has completed over
              100 projects, including apartments, offices, schools, hospitals,
              and hotels. The company is also committed to environmental
              sustainability and social responsibility, using eco-friendly
              materials and practices, and supporting local communities and
              charities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
