import { DashboardWidget, DashboardWidgetHeader } from "@/components/dashboard";
import { BUDGET_PROGRESS } from "../constants/budget-progress.constants";
import { BudgetProgressItem } from "./budget-progress-item";

export function BudgetProgress() {
  return (
    <DashboardWidget>
      <div className="space-y-6">
        <DashboardWidgetHeader
          title="Budget Progress"
          description="Track spending across your budgets."
        />

        <div className="space-y-5">
          {BUDGET_PROGRESS.map((budget) => (
            <BudgetProgressItem key={budget.id} {...budget} />
          ))}
        </div>
      </div>
    </DashboardWidget>
  );
}
