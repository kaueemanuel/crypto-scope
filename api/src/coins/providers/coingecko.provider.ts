import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PaginationService } from '../../common/services/pagination.service';
import { CoinDto, GetCoinsParamsDto, GetCoinsResponseDtoType } from '../dto';
import { CoinProvider } from '../interfaces/coin-provider.interface';

@Injectable()
export class CoinGeckoProvider implements CoinProvider {
  private totalCoinsCache: number | null = null;
  private cacheExpiry: number = 0;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000;

  constructor(private readonly paginationService: PaginationService) { }

  async getPrices(params: GetCoinsParamsDto): Promise<GetCoinsResponseDtoType> {
    try {
      const totalCoins = await this.getTotalCoins();

      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: params.vs_currency || 'usd',
          order: this.mapOrderBy(params.order_by || 'market_cap_desc'),
          per_page: params.limit,
          page: params.page,
          sparkline: false,
          ids: params.ids?.join(','),
          category: params.category?.join(','),
        },
      });

      const data: CoinDto[] = response.data.map((coin: any) => ({
        ...coin,
      }));

      return this.paginationService.createPaginatedResult<CoinDto>(
        data,
        totalCoins,
        params.page,
        params.limit
      );
    } catch (error) {
      console.error('CoinGecko API error:', error);
      throw new Error('Failed to fetch coins from CoinGecko');
    }
  }

  async getPriceById(id: string): Promise<CoinDto | null> {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: id,
          per_page: 1,
          page: 1,
          sparkline: false,
        },
      });

      const data = response.data;
      if (!Array.isArray(data) || data.length === 0) return null;

      const coin: any = data[0];
      return {
        ...coin,
      } as CoinDto;
    } catch (error) {
      console.error('CoinGecko getPriceById error:', error);
      return null;
    }
  }

  private async getTotalCoins(): Promise<number> {
    const now = Date.now();

    if (this.totalCoinsCache && now < this.cacheExpiry) {
      return this.totalCoinsCache;
    }

    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
      this.totalCoinsCache = response.data.length;
      this.cacheExpiry = now + this.CACHE_DURATION;
      return this.totalCoinsCache;
    } catch (error) {
      console.error('Error getting total coins from CoinGecko:', error);
      return 10000;
    }
  }

  private mapOrderBy(order_by: string): string {
    const orderMap: Record<string, string> = {
      'market_cap_desc': 'market_cap_desc',
      'market_cap_asc': 'market_cap_asc',
      'volume_desc': 'volume_desc',
      'volume_asc': 'volume_asc',
      'id_asc': 'id_asc',
      'id_desc': 'id_desc',
    };
    return orderMap[order_by] || 'market_cap_desc';
  }
}
