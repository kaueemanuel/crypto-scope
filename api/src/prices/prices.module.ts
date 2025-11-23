import { Module } from '@nestjs/common';
import { PaginationService } from '../common/services';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { CoinGeckoProvider } from './providers';

@Module({
  controllers: [PricesController],
  providers: [
    PricesService,
    PaginationService,
    {
      provide: 'PriceProvider',
      useClass: CoinGeckoProvider,
    },
  ],
})
export class PricesModule { }