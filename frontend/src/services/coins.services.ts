import { COIN_URL, COINS_URL, QUERY_KEYS } from "@/constants";
import { parseParams } from "@/helpers";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Coin, CoinParams } from "../types";
import type { PaginatedResponse } from "../types/pagination.type";

export const useCoins = (params?: CoinParams): UseQueryResult<PaginatedResponse<Coin>, Error> => {
  const fetchCoins = async (params?: CoinParams): Promise<PaginatedResponse<Coin>> => {
    const query = params ? parseParams(params) : "";
    const url = `${COINS_URL}${query}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch coins");
    return response.json();
  }

  return useQuery<PaginatedResponse<Coin>, Error>({
    queryKey: [QUERY_KEYS.coins, params],
    queryFn: () => fetchCoins(params),
    refetchInterval: 60000,
  });
}

export const useCoinById = (id?: string): UseQueryResult<Coin, Error> => {
  const fetchCoin = async (id?: string): Promise<Coin> => {
    const error = new Error("Coin ID is required");
    if (!id) throw error;
    const url = `${COIN_URL(id)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch coin");
    return response.json();
  }

  return useQuery<Coin, Error>({
    queryKey: [QUERY_KEYS.coins, id],
    queryFn: () => fetchCoin(id),
    refetchInterval: 60000,
  });
}
