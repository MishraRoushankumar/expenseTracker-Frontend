import { PaginationMeta } from "@/types/pagination.types";
import type { Transaction, TransactionType } from "./transaction.types";

export interface CreateTransactionRequest {
  categoryId?: number | null;
  type: TransactionType;
  amount: number;
  description?: string | null;
  transactionDate: string;
}

export interface UpdateTransactionRequest {
  categoryId?: number | null;
  type?: TransactionType;
  amount?: number;
  description?: string | null;
  transactionDate?: string;
}

export interface TransactionQueryParams {
  page?: number;
  limit?: number;
  type?: TransactionType;
  categoryId?: number;
  startDate?: string;
  endDate?: string;
  search?: string;
  sortBy?: "amount" | "transactionDate" | "createdAt";
  sortOrder?: "asc" | "desc";
}

export interface TransactionPagination {
  page: number;
  limit: number;
  totalItems: number;
  currentItemCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface GetTransactionsResponse {
  data: Transaction[];
  pagination: PaginationMeta;
}
