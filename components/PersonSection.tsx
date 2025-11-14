import { getPersonInfo } from "@/app/person/[id]/page";
import { IPersonInfo } from "@/app/types";
import Image from "next/image";

interface IPersonSectionProps {
  id: string;
}

export default async function PersonSection({ id }: IPersonSectionProps) {
  const personInfo: IPersonInfo = await getPersonInfo(id);
  return (
    <div className="bg-gray-900 p-10 m-10">
      <Image
        src={personInfo.squareImage}
        alt={personInfo.name}
        width={416}
        height={416}
      />
      <div className="font-extrabold text-3xl py-4">{personInfo.name}</div>
      <div className="py-1 font-bold">Networth: {personInfo.netWorth}</div>
      <div className="py-1 font-bold">Country: {personInfo.country}</div>
      <div className="py-1 font-bold">
        Industry: {personInfo.industries.join(",")}
      </div>
      <div className="py-1">{personInfo.bio.join("\n")}</div>
    </div>
  );
}
