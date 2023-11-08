import Link from "next/link";

function SectionSix() {
  return (
    <section className="my-20">
      <div></div>
      <div className="flex flex-col items-center justify-center gap-6">
        <div>
          <h3 className="font-bold text-3xl text-green-900">
            Ready to work with us ?
          </h3>
        </div>
        <div>
          <Link href={"/contact-us"}>
            <button className="bg-green-900 text-white px-10 py-4 rounded-2xl text-2xl hover:bg-white hover:text-green-900 hover:duration-200 hover:border-green-900 hover:border-2 tracking-widest">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
