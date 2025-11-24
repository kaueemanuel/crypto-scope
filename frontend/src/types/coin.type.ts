export interface Coin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  change_24h: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  fully_diluted_valuation: number;
  high_24h: number;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  total_supply: number;
  total_volume: number;
}

export interface CoinParams {
  /** Page number (minimum: 1) */
  page?: number;
  /** Items per page (1-250) */
  limit?: number;
  /** Specific cryptocurrency IDs */
  ids?: string[];
  /** Cryptocurrency categories */
  category?: string[];
  /** Quote currency (e.g. 'usd') */
  vs_currency?: string;
  /** Results ordering */
  order_by?:
  | 'market_cap_asc'
  | 'market_cap_desc'
  | 'volume_asc'
  | 'volume_desc'
  | 'id_asc'
  | 'id_desc';


}
