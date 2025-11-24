import { Controller, Get, NotFoundException, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoinsService } from './coins.service';
import { CoinDto, GetCoinsParamsDto, GetCoinsResponseDto, GetCoinsResponseDtoType } from './dto';

@ApiTags('coins')
@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Cryptocurrency list returned successfully',
    type: GetCoinsResponseDto,
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
  async getCoins(
    @Query() query: GetCoinsParamsDto
  ): Promise<GetCoinsResponseDtoType> {
    return this.coinsService.getCoins(query);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Cryptocurrency returned successfully',
    type: CoinDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Cryptocurrency not found',
  })
  async getCoinById(@Param('id') id: string): Promise<CoinDto> {
    try {
      return await this.coinsService.getCoinById(id);
    } catch (err) {
      if (err instanceof NotFoundException) throw err;
      throw err;
    }
  }
}
