import { BillionareCard } from "@/components/BillionareCard";
import { IBillionaire } from "../types";

const getBillionares = async () => {
  try {
    const response = await fetch(
      "https://billions-api.nomadcoders.workers.dev/"
    );
    return response.json();
  } catch (error) {
    console.error("Error fetching billionaires:", error);
    return [];
  }
};

export default async function Home() {
  const billions: IBillionaire[] = await getBillionares();
  return (
    <main className="bg-black justify-items-center">
      <div className="w-3/4 py-10 grid grid-cols-4 gap-6">
        {billions.map((person, index) => (
          <BillionareCard key={index} {...person} />
        ))}
      </div>
    </main>
  );
}
