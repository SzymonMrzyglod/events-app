export interface PaginationConfig {
  totalItems: number;
  itemsPerPage: number;
}

export interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
  paginatedItems: (items: T[]) => T[];
}
