import sample from "@/assets/images/sample.jpg";
import Image from "next/image";

export default async function page() {
  return (
    <>
      <Image src={sample} alt={"sample"} priority />
      <div className="relative w-40 h-40">
        <Image
          src="https://cdn.pixabay.com/photo/2025/05/18/14/05/congratulations-9607355_1280.png"
          alt="우주인"
          fill
          sizes="400px"
          priority
        />
      </div>
    </>
  );
}
