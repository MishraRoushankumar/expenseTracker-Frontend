import { DashboardWidget, DashboardWidgetHeader } from "@/components/dashboard";
import { Separator } from "@/components/ui/separator";
import { TransactionRow } from "./transaction-row";
import { RecentTransactionResponse } from "../types/dashboard-api.types";

type RecentTransactionsProps = {
  transactions: RecentTransactionResponse[];
};

function EmptyTransactions() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <h4 className="text-sm font-semibold">No recent transactions</h4>

      <p className="text-muted-foreground mt-1 text-sm">
        Your latest transactions will appear here.
      </p>
    </div>
  );
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const hasTransactions = transactions.length > 0;
  return (
    <DashboardWidget>
      <div className="space-y-6">
        {/* Header */}

        <DashboardWidgetHeader
          title="Recent Transactions"
          description="Your latest financial activity."
        />

        {/* Content */}
        {!hasTransactions ? (
          <EmptyTransactions />
        ) : (
          <div>
            {transactions.map((transaction, index) => (
              <div key={transaction.id}>
                <TransactionRow {...transaction} />

                {index < transactions.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardWidget>
  );
}
