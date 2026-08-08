"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTransactionRequest } from "../types";
import { updateTransaction } from "../api/transactions.api";
import { QUERY_KEYS } from "@/lib";

interface UpdateTransactionVariables {
  id: number;
  data: UpdateTransactionRequest;
}

export const useUpdateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateTransactionVariables) => updateTransaction(id, data),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TRANSACTIONS.LIST,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TRANSACTIONS.DETAIL(variables.id),
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.DASHBOARD.ALL,
      });
    },
  });
};
