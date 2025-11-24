import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CoinDto {
  @ApiProperty({
    description: 'Unique cryptocurrency ID',
    example: 'bitcoin',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Cryptocurrency symbol',
    example: 'btc',
  })
  @IsString()
  symbol: string;

  @ApiProperty({
    description: 'Cryptocurrency name',
    example: 'Bitcoin',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Cryptocurrency image URL',
    example: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  })
  @IsString()
  image: string;

  @ApiProperty({
    description: 'Current price in USD',
    example: 70187,
  })
  @IsNumber()
  current_price: number;

  @ApiProperty({
    description: 'Market capitalization',
    example: 1381651251183,
  })
  @IsNumber()
  market_cap: number;

  @ApiProperty({
    description: 'Market capitalization ranking',
    example: 1,
  })
  @IsNumber()
  market_cap_rank: number;

  @ApiPropertyOptional({
    description: 'Fully diluted valuation',
    example: 1474623675796,
  })
  @IsOptional()
  @IsNumber()
  fully_diluted_valuation?: number;

  @ApiProperty({
    description: 'Total volume in the last 24h',
    example: 20154184933,
  })
  @IsNumber()
  total_volume: number;

  @ApiProperty({
    description: 'Highest price in the last 24h',
    example: 70215,
  })
  @IsNumber()
  high_24h: number;

  @ApiProperty({
    description: 'Lowest price in the last 24h',
    example: 68060,
  })
  @IsNumber()
  low_24h: number;

  @ApiProperty({
    description: 'Price change in the last 24h',
    example: 2126.88,
  })
  @IsNumber()
  price_change_24h: number;

  @ApiProperty({
    description: 'Price change percentage in the last 24h',
    example: 3.12502,
  })
  @IsNumber()
  price_change_percentage_24h: number;

  @ApiProperty({
    description: 'Market capitalization change in the last 24h',
    example: 44287678051,
  })
  @IsNumber()
  market_cap_change_24h: number;

  @ApiProperty({
    description: 'Market capitalization change percentage in the last 24h',
    example: 3.31157,
  })
  @IsNumber()
  market_cap_change_percentage_24h: number;

  @ApiProperty({
    description: 'Circulating supply',
    example: 19675987,
  })
  @IsNumber()
  circulating_supply: number;

  @ApiPropertyOptional({
    description: 'Total supply',
    example: 21000000,
  })
  @IsOptional()
  @IsNumber()
  total_supply?: number;

  @ApiPropertyOptional({
    description: 'Maximum supply',
    example: 21000000,
  })
  @IsOptional()
  @IsNumber()
  max_supply?: number;

  @ApiProperty({
    description: 'All-time high price (ATH)',
    example: 73738,
  })
  @IsNumber()
  ath: number;

  @ApiProperty({
    description: 'ATH change percentage',
    example: -4.77063,
  })
  @IsNumber()
  ath_change_percentage: number;

  @ApiProperty({
    description: 'ATH date',
    example: '2024-03-14T07:10:36.635Z',
  })
  @IsDateString()
  ath_date: string;

  @ApiProperty({
    description: 'All-time low price (ATL)',
    example: 67.81,
  })
  @IsNumber()
  atl: number;

  @ApiProperty({
    description: 'ATL change percentage',
    example: 103455.83335,
  })
  @IsNumber()
  atl_change_percentage: number;

  @ApiProperty({
    description: 'ATL date',
    example: '2013-07-06T00:00:00.000Z',
  })
  @IsDateString()
  atl_date: string;

  @ApiPropertyOptional({
    description: 'Return on investment',
    example: null,
  })
  @IsOptional()
  @IsObject()
  roi?: any;

  @ApiProperty({
    description: 'Last updated',
    example: '2024-04-07T16:49:31.736Z',
  })
  @IsDateString()
  last_updated: string;
}
