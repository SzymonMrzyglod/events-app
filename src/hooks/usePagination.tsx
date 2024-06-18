import { useState } from 'react';
import { PaginationResult, PaginationConfig } from '../types/pagination';

export const usePagination = <T,>({
  totalItems,
  itemsPerPage,
}: PaginationConfig): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = (items: T[]): T[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    currentPage,
    totalPages,
    handlePageChange,
    paginatedItems,
  };
};
