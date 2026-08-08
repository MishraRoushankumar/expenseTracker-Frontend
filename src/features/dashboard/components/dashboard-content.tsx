import { DashboardContentResponse } from "../types/dashboard-api.types";
import { BudgetProgress } from "./budget-progress";
import { QuickActions } from "./quick-actions";
import { RecentActivity } from "./recent-activity";
import { RecentTransactions } from "./recent-transactions";

type DashboardContentProps = {
  data: DashboardContentResponse;
};

export function DashboardContent({ data }: DashboardContentProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <RecentTransactions transactions={data.recentTransactions} />
        <BudgetProgress />
      </div>

      <div className="space-y-6">
        <QuickActions />
        <RecentActivity />
      </div>
    </section>
  );
}
