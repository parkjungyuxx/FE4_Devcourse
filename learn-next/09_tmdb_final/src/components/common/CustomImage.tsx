"use client";
import Image from "next/image";
import { useState } from "react";

export default function CustomImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        sizes="228px"
        quality={100}
        onError={() => {
          setImgSrc("https://dummyimage.com/200x300/ccc/ccc");
        }}
      />
    </>
  );
}
