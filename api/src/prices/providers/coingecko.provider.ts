import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PaginationService } from '../../common/services/pagination.service';
import { GetPricesParamsDto, GetPricesResponseDtoType, PriceDto } from '../dto';
import { PriceProvider } from '../interfaces';

@Injectable()
export class CoinGeckoProvider implements PriceProvider {
  private totalCoinsCache: number | null = null;
  private cacheExpiry: number = 0;
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000;

  constructor(private readonly paginationService: PaginationService) { }

  async getPrices(params: GetPricesParamsDto): Promise<GetPricesResponseDtoType> {
    try {
      const totalCoins = await this.getTotalCoins();

      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: params.vs_currency || 'usd',
          order: this.mapOrderBy(params.orderBy || 'market_cap_desc'),
          per_page: params.limit,
          page: params.page,
          sparkline: false,
          ids: params.ids?.join(','),
          category: params.category?.join(','),
        },
      });

      const data: PriceDto[] = response.data.map((coin: any) => ({
        ...coin,
      }));

      return this.paginationService.createPaginatedResult<PriceDto>(
        data,
        totalCoins,
        params.page,
        params.limit
      );
    } catch (error) {
      console.error('CoinGecko API error:', error);
      throw new Error('Failed to fetch prices from CoinGecko');
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

  private mapOrderBy(orderBy: string): string {
    const orderMap: Record<string, string> = {
      'market_cap_desc': 'market_cap_desc',
      'market_cap_asc': 'market_cap_asc',
      'volume_desc': 'volume_desc',
      'volume_asc': 'volume_asc',
      'id_asc': 'id_asc',
      'id_desc': 'id_desc',
    };
    return orderMap[orderBy] || 'market_cap_desc';
  }
}