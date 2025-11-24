export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000';
export const COINS_URL = `${API_BASE_URL}/coins`;
export const COIN_URL = (id: string) => `${API_BASE_URL}/coins/${id}`;
