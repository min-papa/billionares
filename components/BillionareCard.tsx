"use client";

import Image from "next/image";
import { useState } from "react";

interface IBillionareCardProps {
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

const fallbackImgPath = "/error.png";

export function BillionareCard({
  name,
  squareImage,
  netWorth,
  industries,
}: IBillionareCardProps) {
  const [imgUrl, setImgUrl] = useState(squareImage);

  return (
    <div className="hover:scale-90 transition-transform">
      <Image
        src={imgUrl}
        alt={name}
        width={416}
        height={416}
        loading="eager"
        onError={() => setImgUrl(fallbackImgPath)}
      />
      <div className="pl-3 text-white text-2xl font-bold">{name}</div>
      <div className="pl-3 text-white">{`${Math.trunc(
        netWorth / 1000
      )} Billion / ${industries.join(" ,")}`}</div>
    </div>
  );
}
