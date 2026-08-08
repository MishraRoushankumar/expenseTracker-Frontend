import { apiClient, TRANSACTIONS_API, unwrapApiResponse } from "@/lib";
import type { ApiResponse, PaginatedApiResponse } from "@/types/api.types";

import type {
  CreateTransactionRequest,
  GetTransactionsResponse,
  Transaction,
  TransactionQueryParams,
  UpdateTransactionRequest,
} from "../types";

export const getTransactions = async (
  params?: TransactionQueryParams,
): Promise<GetTransactionsResponse> => {
  const response = await apiClient.get<PaginatedApiResponse<Transaction>>(TRANSACTIONS_API.ROOT, {
    params,
  });

  return {
    data: response.data.data,
    pagination: response.data.pagination,
  };
};

export const getTransactionById = async (id: number): Promise<Transaction> => {
  const response = await apiClient.get<ApiResponse<Transaction>>(TRANSACTIONS_API.BY_ID(id));

  return unwrapApiResponse(response);
};

export const createTransaction = async (data: CreateTransactionRequest): Promise<Transaction> => {
  const response = await apiClient.post<ApiResponse<Transaction>>(TRANSACTIONS_API.ROOT, data);

  return unwrapApiResponse(response);
};

export const updateTransaction = async (
  id: number,
  data: UpdateTransactionRequest,
): Promise<Transaction> => {
  const response = await apiClient.patch<ApiResponse<Transaction>>(
    TRANSACTIONS_API.BY_ID(id),
    data,
  );

  return unwrapApiResponse(response);
};

export const deleteTransaction = async (id: number): Promise<void> => {
  await apiClient.delete<ApiResponse<Transaction>>(TRANSACTIONS_API.BY_ID(id));
};
