import { DashboardWidget } from "@/components/dashboard";

export function RecentTransactions() {
  return (
    <DashboardWidget>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <p className="text-muted-foreground text-sm">Coming soon...</p>
      </div>
    </DashboardWidget>
  );
}
