export interface PaginationMeta {
  page: number;
  limit: number;
  totalItems: number;
  currentItemCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
