"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { useTransactions } from "../hooks";
import { TransactionsTable } from "./transactions-table";
import { TransactionsSkeleton } from "./skeletons/transactions-skeleton";

export function TransactionsPage() {
  const { data, isPending, isError, refetch } = useTransactions();

  if (isPending) {
    return (
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">Transactions</h1>

          <p className="text-muted-foreground text-sm">View your transactions.</p>
        </div>

        <TransactionsSkeleton />
      </section>
    );
  }

  if (isError) {
    return (
      <EmptyState
        title="Unable to load transactions"
        description="Something went wrong while loading your transactions."
        action={<Button onClick={() => refetch()}>Try again</Button>}
      />
    );
  }

  if (!data || data.data.length === 0) {
    return (
      <EmptyState
        title="No transactions yet"
        description="Your transactions will appear here once you add one."
      />
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Transactions</h1>

        <p className="text-muted-foreground text-sm">View your transactions.</p>
      </div>

      <TransactionsTable transactions={data.data} />
    </section>
  );
}
