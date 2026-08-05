import { Progress } from "@/components/ui/progress";
import { BudgetProgress } from "../types/dashboard.types";

type BudgetProgressItemProps = BudgetProgress;

export function BudgetProgressItem({ category, spent, limit }: BudgetProgressItemProps) {
  const percentage = Math.round((spent / limit) * 100);

  const progressValue = Math.min(percentage, 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{category}</p>

        <span
          className={
            percentage > 100
              ? "text-destructive text-sm font-medium"
              : "text-muted-foreground text-sm"
          }
        >
          {percentage}%
        </span>
      </div>

      <Progress value={progressValue} />

      <p className="text-muted-foreground text-xs">
        ₹{spent.toLocaleString()} / ₹{limit.toLocaleString()}
      </p>
    </div>
  );
}
