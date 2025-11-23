import { GetPricesParamsDto, GetPricesResponseDtoType } from "../dto";

export interface PriceProvider {
  getPrices(params: GetPricesParamsDto): Promise<GetPricesResponseDtoType>;
}