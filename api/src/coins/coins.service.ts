import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import Redis from 'ioredis';
import { PaginationService } from '../common/services/pagination.service';
import { GetCoinsParamsDto, GetCoinsResponseDtoType } from './dto';
import { CoinDto } from './dto/coin.dto';
import { CoinProvider } from './interfaces/coin-provider.interface';

@Injectable()
export class CoinsService {
  private redis: Redis;

  constructor(
    @Inject('CoinProvider') private readonly coinProvider: CoinProvider,
    private readonly paginationService: PaginationService,
  ) {
    this.redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
  }

  async getCoins(params: GetCoinsParamsDto): Promise<GetCoinsResponseDtoType> {
    const { page, limit } = this.paginationService.validatePagination(params.page, params.limit);

    const cacheKey = `crypto_coins_${params ? JSON.stringify?.(params) : ''}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    try {
      const validatedParams = { ...params, page, limit };
      const result = await this.coinProvider.getPrices(validatedParams);
      await this.redis.setex(cacheKey, 60, JSON.stringify(result));
      return result;
    } catch (error) {
      console.error('Error fetching coins:', error);
      if (cached) {
        return JSON.parse(cached);
      }
      throw new Error('Unable to fetch cryptocurrency coins');
    }
  }

  async getCoinById(id: string): Promise<CoinDto> {
    const cacheKey = `crypto_coin_${id}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      return JSON.parse(cached) as CoinDto;
    }

    try {
      const result = await this.coinProvider.getPriceById(id);
      if (!result) throw new NotFoundException(`Coin with id ${id} not found`);
      await this.redis.setex(cacheKey, 60, JSON.stringify(result));
      return result;
    } catch (error) {
      console.error('Error fetching coin by id:', error);
      if (cached) return JSON.parse(cached) as CoinDto;
      if (error instanceof NotFoundException) throw error;
      throw new Error('Unable to fetch cryptocurrency coin');
    }
  }
}
