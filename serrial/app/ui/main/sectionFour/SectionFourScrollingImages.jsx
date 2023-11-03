import Image from "next/image";

function SectionFourScrollingImages({ data }) {
  console.log(data);
  return (
    <Image src={data.src} width={100} height={256} alt={`${data.name} image`} />
  );
}

export default SectionFourScrollingImages;
