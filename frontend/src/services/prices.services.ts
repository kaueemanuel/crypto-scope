import { PRICES_ENDPOINT } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { Crypto } from "../types/crypto.type";

export async function fetchPrices(): Promise<{ data: Crypto[] }> {
  const response = await fetch(PRICES_ENDPOINT);
  if (!response.ok) throw new Error("Failed to fetch prices");
  return response.json();
}

export function usePrices() {
  return useQuery({
    queryKey: ["prices"],
    queryFn: fetchPrices,
    refetchInterval: 60000,
  });
}

export function usePriceById(id: string) {
  const { data, ...rest } = usePrices();
  return {
    coin: data?.data?.find((c) => c.id === id),
    ...rest,
  };
}
