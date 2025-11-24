import { Module } from '@nestjs/common';
import { PaginationService } from '../common/services';
import { CoinsController } from './coins.controller';
import { CoinsService } from './coins.service';
import { CoinGeckoProvider } from './providers';

@Module({
  controllers: [CoinsController],
  providers: [
    CoinsService,
    PaginationService,
    {
      provide: 'CoinProvider',
      useClass: CoinGeckoProvider,
    },
  ],
})
export class CoinsModule { }
