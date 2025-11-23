import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { PaginationService } from '../common/services/pagination.service';
import { GetPricesParamsDto, GetPricesResponseDtoType } from './dto';
import { PriceProvider } from './interfaces';

@Injectable()
export class PricesService {
  private redis: Redis;

  constructor(
    @Inject('PriceProvider') private readonly priceProvider: PriceProvider,
    private readonly paginationService: PaginationService,
  ) {
    this.redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  }

  async getPrices(params: GetPricesParamsDto): Promise<GetPricesResponseDtoType> {
    // Validate pagination
    const { page, limit } = this.paginationService.validatePagination(params.page, params.limit);

    const cacheKey = `crypto_prices_${page}_${limit}_${params.vs_currency || 'usd'}_${params.orderBy || 'market_cap_desc'}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    try {
      const validatedParams = { ...params, page, limit };
      const result = await this.priceProvider.getPrices(validatedParams);
      await this.redis.setex(cacheKey, 60, JSON.stringify(result)); // Cache for 60 seconds
      return result;
    } catch (error) {
      console.error('Error fetching prices:', error);
      // Fallback: return cached data if available
      if (cached) {
        return JSON.parse(cached);
      }
      throw new Error('Unable to fetch cryptocurrency prices');
    }
  }
}
