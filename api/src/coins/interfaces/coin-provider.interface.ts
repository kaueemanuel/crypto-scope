import { CoinDto, GetCoinsParamsDto, GetCoinsResponseDtoType } from "../dto";

export interface CoinProvider {
  getPrices(params: GetCoinsParamsDto): Promise<GetCoinsResponseDtoType>;
  getPriceById(id: string): Promise<CoinDto | null>;
}
