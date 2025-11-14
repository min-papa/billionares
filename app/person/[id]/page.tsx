import { IPersonInfo } from "@/app/types";
import AssetSection from "@/components/AssetSection";
import PersonSection from "@/components/PersonSection";
import { Metadata } from "next";
import { Suspense } from "react";

interface IParams {
  id: string;
}

export async function getPersonInfo(id: string) {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );
  return await response.json();
}

export async function generateMetadata({
  params,
}: {
  params: IParams;
}): Promise<Metadata> {
  const { id } = await params;
  const person: IPersonInfo = await getPersonInfo(id);
  return {
    title: `${person.name}`,
  };
}
export default async function PersonPage({ params }: { params: IParams }) {
  const { id } = await params;
  const personInfo = await getPersonInfo(id);
  return (
    <div className="w-3/4 justify-self-center">
      <PersonSection {...personInfo} />
      <AssetSection {...personInfo} />
    </div>
  );
}
