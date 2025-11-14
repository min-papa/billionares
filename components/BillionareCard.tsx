"use client";

import { errorImgPath } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IBillionareCardProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export function BillionareCard({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IBillionareCardProps) {
  const [imgUrl, setImgUrl] = useState(squareImage);
  return (
    <div className="hover:scale-90 transition-transform">
      <Link prefetch href={`/person/${id}`}>
        <Image
          src={imgUrl}
          alt={name}
          width={416}
          height={416}
          loading="eager"
          onError={() => setImgUrl(errorImgPath)}
        />
        <div className="pl-3 text-2xl font-bold">{name}</div>
        <div className="pl-3">{`${Math.trunc(
          netWorth / 1000
        )} Billion / ${industries.join(" ,")}`}</div>
      </Link>
    </div>
  );
}
