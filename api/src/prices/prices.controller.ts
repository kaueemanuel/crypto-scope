import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetPricesParamsDto, GetPricesResponseDto, GetPricesResponseDtoType } from './dto';
import { PricesService } from './prices.service';

@ApiTags('prices')
@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) { }

  @Get()
  @ApiOperation({
    summary: 'Get cryptocurrency prices',
    description: 'Returns a paginated list of cryptocurrencies with prices and detailed data',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number (minimum: 1)',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Items per page (1-250)',
    example: 100,
  })
  @ApiQuery({
    name: 'ids',
    required: false,
    type: [String],
    description: 'Specific cryptocurrency IDs',
    example: ['bitcoin', 'ethereum'],
  })
  @ApiQuery({
    name: 'category',
    required: false,
    type: [String],
    description: 'Cryptocurrency categories',
    example: ['layer-1', 'defi'],
  })
  @ApiQuery({
    name: 'vs_currency',
    required: false,
    type: String,
    description: 'Quote currency',
    example: 'usd',
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    enum: ['market_cap_asc', 'market_cap_desc', 'volume_asc', 'volume_desc', 'id_asc', 'id_desc'],
    description: 'Results ordering',
    example: 'market_cap_desc',
  })
  @ApiResponse({
    status: 200,
    description: 'Cryptocurrency list returned successfully',
    type: GetPricesResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async getPrices(
    @Query() query: GetPricesParamsDto
  ): Promise<GetPricesResponseDtoType> {
    return this.pricesService.getPrices(query);
  }
}
