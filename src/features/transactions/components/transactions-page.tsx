"use client";

import { useState } from "react";

import { useTransactions } from "../hooks";
import { TransactionQueryParams } from "../types";
import { TRANSACTION_DEFAULTS } from "../constants";

import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { TransactionsTable } from "./transactions-table";
import { TransactionsSkeleton } from "./skeletons/transactions-skeleton";
import { TransactionFilters } from "./transactions-filters";
import { CreateTransactionDialog } from "./create-transaction-dialog";
import { TransactionPagination } from "./transactions-pagination";

export function TransactionsPage() {
  const [query, setQuery] = useState<TransactionQueryParams>({
    page: TRANSACTION_DEFAULTS.PAGE,
    limit: TRANSACTION_DEFAULTS.LIMIT,
    sortBy: TRANSACTION_DEFAULTS.SORT_BY,
    sortOrder: TRANSACTION_DEFAULTS.SORT_ORDER,
  });

  const updateQuery = (updates: Partial<TransactionQueryParams>) => {
    setQuery((current) => ({
      ...current,
      ...updates,
      page: 1,
    }));
  };

  const resetQuery = () => {
    setQuery({
      page: TRANSACTION_DEFAULTS.PAGE,
      limit: TRANSACTION_DEFAULTS.LIMIT,
      sortBy: TRANSACTION_DEFAULTS.SORT_BY,
      sortOrder: TRANSACTION_DEFAULTS.SORT_ORDER,
    });
  };

  const handlePageChange = (page: number) => {
    setQuery((current) => ({
      ...current,
      page,
    }));
  };

  const { data, isPending, isFetching, isError, refetch } = useTransactions(query);

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Transactions</h1>

        <p className="text-muted-foreground text-sm">View your transactions.</p>
      </div>

      <CreateTransactionDialog />

      <TransactionFilters query={query} onQueryChange={updateQuery} onReset={resetQuery} />

      {isPending ? (
        <TransactionsSkeleton />
      ) : isError ? (
        <EmptyState
          title="Unable to load transactions"
          description="Something went wrong while loading your transactions."
          action={<Button onClick={() => refetch()}>Try again</Button>}
        />
      ) : !data || data.data.length === 0 ? (
        <EmptyState
          title="No transactions yet"
          description="Your transactions will appear here once you add one."
        />
      ) : (
        <>
          <TransactionsTable transactions={data.data} />

          <TransactionPagination
            pagination={data.pagination}
            onPageChange={handlePageChange}
            isLoading={isFetching}
          />
        </>
      )}
    </section>
  );
}
