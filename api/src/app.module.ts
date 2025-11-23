import { Module } from "@nestjs/common";
import { PricesModule } from './prices/prices.module';

@Module({
  imports: [PricesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
