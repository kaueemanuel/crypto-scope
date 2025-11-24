export interface Price {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  change_24h: number;
}

export interface PriceParams {
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