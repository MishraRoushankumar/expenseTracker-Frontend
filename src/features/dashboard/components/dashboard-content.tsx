import { BudgetProgress } from "./budget-progress";
import { QuickActions } from "./quick-actions";
import { RecentActivity } from "./recent-activity";
import { RecentTransactions } from "./recent-transactions";

export function DashboardContent() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <RecentTransactions />
        <BudgetProgress />
      </div>

      <div className="space-y-6">
        <QuickActions />
        <RecentActivity />
      </div>
    </section>
  );
}
