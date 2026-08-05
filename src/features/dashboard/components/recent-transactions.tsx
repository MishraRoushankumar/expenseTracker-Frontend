import { DashboardWidget } from "@/components/dashboard";
import { RECENT_TRANSACTIONS } from "../constants/recent-transactions.constants";
import { Separator } from "@/components/ui/separator";
import { TransactionRow } from "./transaction-row";

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

export function RecentTransactions() {
  const hasTransactions = RECENT_TRANSACTIONS.length > 0;
  return (
    <DashboardWidget>
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight">Recent Transactions</h3>

          <p className="text-muted-foreground/80 text-sm">Your latest financial activity.</p>
        </div>

        {/* Content */}
        {!hasTransactions ? (
          <EmptyTransactions />
        ) : (
          <div>
            {RECENT_TRANSACTIONS.map((transaction, index) => (
              <div key={transaction.id}>
                <TransactionRow {...transaction} />

                {index < RECENT_TRANSACTIONS.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardWidget>
  );
}
