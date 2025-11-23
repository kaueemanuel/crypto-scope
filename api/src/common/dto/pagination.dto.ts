import { ApiProperty } from '@nestjs/swagger';

export class PaginationMetaDto {
  @ApiProperty({
    description: 'Current page',
    example: 1,
  })
  page: number;

  @ApiProperty({
    description: 'Items per page',
    example: 100,
  })
  limit: number;

  @ApiProperty({
    description: 'Total items',
    example: 12472,
  })
  total: number;

  @ApiProperty({
    description: 'Total pages',
    example: 125,
  })
  totalPages: number;

  @ApiProperty({
    description: 'Has previous page',
    example: false,
  })
  hasPrev: boolean;

  @ApiProperty({
    description: 'Has next page',
    example: true,
  })
  hasNext: boolean;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMetaDto;
}

export function createPaginatedResponseDto<T>(itemType: new () => T) {
  class PaginatedResponseDto {
    @ApiProperty({
      description: 'List of items',
      type: [itemType],
    })
    data: T[];

    @ApiProperty({
      description: 'Pagination metadata',
      type: PaginationMetaDto,
    })
    meta: PaginationMetaDto;
  }

  return PaginatedResponseDto;
}