import { Injectable } from '@nestjs/common';
import { PaginatedResult } from '../dto';


@Injectable()
export class PaginationService {
  createPaginatedResult<T>(
    data: T[],
    total: number,
    page: number,
    limit: number
  ): PaginatedResult<T> {
    const totalPages = Math.ceil(total / limit);
    const hasNext = page < totalPages;
    const hasPrev = page > 1;

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext,
        hasPrev,
      },
    };
  }

  getSkip(page: number, limit: number): number {
    return (page - 1) * limit;
  }

  validatePagination(page: number, limit: number, maxLimit: number = 250): { page: number; limit: number } {
    const validPage = Math.max(1, page);
    const validLimit = Math.min(Math.max(1, limit), maxLimit);

    return { page: validPage, limit: validLimit };
  }
}