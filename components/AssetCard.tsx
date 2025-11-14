import { IFinancialAsset } from "@/app/types";

function currencyToSymbol(currencyCode: string): string {
  return (0)
    .toLocaleString("en", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .replace(/[.,\s]/g, "");
}

export default function AssetCard(asset: IFinancialAsset) {
  return (
    <div className="border-gray-500 border rounded-md flex flex-col p-2 text-sm gap-2">
      <div className="font-bold">Thicker: {asset.ticker}</div>
      <div className="font-bold">
        Shares: {asset.numberOfShares.toLocaleString()}
      </div>
      {asset.exerciseOptionPrice && (
        <div className="font-bold">
          Excercise Price: {currencyToSymbol(asset.currencyCode)}
          {asset.exerciseOptionPrice}
        </div>
      )}
    </div>
  );
}
