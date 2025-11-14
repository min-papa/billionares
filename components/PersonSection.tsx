"use client";

import { errorImgPath } from "@/constants";
import Image from "next/image";
import { useState } from "react";

interface IPersonSectionProps {
  name: string;
  squareImage: string;
  netWorth: number;
  country: string;
  industries: string[];
  bio: string[];
}

export default function PersonSection({
  name,
  squareImage,
  netWorth,
  country,
  industries,
  bio,
}: IPersonSectionProps) {
  const [imgPath, setImagePath] = useState(squareImage);
  return (
    <div className="bg-gray-900 p-10 m-10">
      <Image
        src={imgPath}
        alt={name}
        width={416}
        height={416}
        loading="eager"
        onError={() => setImagePath(errorImgPath)}
      />
      <div className="font-extrabold text-3xl py-4">{name}</div>
      <div className="py-1 num-counter">
        Networth: {Math.trunc(netWorth / 1000)} Billion
      </div>
      <div className="py-1 font-bold">Country: {country}</div>
      <div className="py-1 font-bold">Industry: {industries.join(",")}</div>
      <div className="py-1">{bio.join("\n")}</div>
    </div>
  );
}
