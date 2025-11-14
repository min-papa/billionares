import { getPersonInfo } from "@/app/person/[id]/page";
import { IFinancialAsset } from "@/app/types";
import AssetCard from "./AssetCard";

interface IAssetSectionProps {
  id: string;
}

export default async function AssetSection({ id }: IAssetSectionProps) {
  const assetInfos: IFinancialAsset[] = (await getPersonInfo(id))
    .financialAssets;
  return (
    <div className="bg-gray-900 p-10 m-10">
      <div className="font-extrabold text-2xl">Financial Assets</div>
      <div className="grid grid-cols-4 gap-3 py-5">
        {assetInfos.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      </div>
    </div>
  );
}
