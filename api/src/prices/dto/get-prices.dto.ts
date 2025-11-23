import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { createPaginatedResponseDto } from '../../common/dto';
import { PriceDto } from './price.dto';

export class GetPricesParamsDto {
  @ApiPropertyOptional({
    description: 'Page number',
    example: 1,
    minimum: 1,
    default: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: 'Items per page',
    example: 100,
    minimum: 1,
    maximum: 250,
    default: 100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(250)
  limit?: number = 100;

  @ApiPropertyOptional({
    description: 'Specific cryptocurrency IDs',
    example: ['bitcoin', 'ethereum'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => Array.isArray(value) ? value : [value])
  ids?: string[];

  @ApiPropertyOptional({
    description: 'Cryptocurrency categories',
    example: ['layer-1', 'defi'],
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @Transform(({ value }) => Array.isArray(value) ? value : [value])
  category?: string[];

  @ApiPropertyOptional({
    description: 'Quote currency',
    example: 'usd',
    default: 'usd',
  })
  @IsOptional()
  @IsString()
  vs_currency?: string = 'usd';

  @ApiPropertyOptional({
    description: 'Results ordering',
    example: 'market_cap_desc',
    enum: ['market_cap_asc', 'market_cap_desc', 'volume_asc', 'volume_desc', 'id_asc', 'id_desc'],
    default: 'market_cap_desc',
  })
  @IsOptional()
  @IsIn(['market_cap_asc', 'market_cap_desc', 'volume_asc', 'volume_desc', 'id_asc', 'id_desc'])
  orderBy?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc' = 'market_cap_desc';
}

export const GetPricesResponseDto = createPaginatedResponseDto(PriceDto);

export type GetPricesResponseDtoType = InstanceType<typeof GetPricesResponseDto>;