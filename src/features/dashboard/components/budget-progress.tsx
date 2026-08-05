import { DashboardWidget } from "@/components/dashboard";
import { BUDGET_PROGRESS } from "../constants/budget-progress.constants";
import { BudgetProgressItem } from "./budget-progress-item";

export function BudgetProgress() {
  return (
    <DashboardWidget>
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight">Budget Progress</h3>

          <p className="text-muted-foreground text-sm">Track spending across your budgets.</p>
        </div>

        <div className="space-y-5">
          {BUDGET_PROGRESS.map((budget) => (
            <BudgetProgressItem key={budget.id} {...budget} />
          ))}
        </div>
      </div>
    </DashboardWidget>
  );
}
