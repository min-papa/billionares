import { IFinancialAsset } from "@/app/types";
import AssetCard from "./AssetCard";

interface IAssetSectionProps {
  financialAssets: IFinancialAsset[];
}

export default function AssetSection({ financialAssets }: IAssetSectionProps) {
  return (
    <div className="bg-gray-900 p-10 m-10">
      <div className="font-extrabold text-2xl">Financial Assets</div>
      <div className="grid grid-cols-4 gap-3 py-5">
        {financialAssets.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
      </div>
    </div>
  );
}
