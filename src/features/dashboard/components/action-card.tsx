import { cn } from "@/lib/utils";

import type { DashboardAction } from "../types/dashboard.types";

type ActionCardProps = DashboardAction & {
  className?: string;
};

export function ActionCard({
  title,
  description,
  icon: Icon,
  disabled,
  className,
}: ActionCardProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={cn(
        "group bg-card flex flex-col rounded-lg border p-4 text-left transition-all duration-200",
        "hover:border-primary/40 hover:-translate-y-1 hover:shadow-md",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
    >
      <div className="bg-primary/10 text-primary mb-4 flex size-10 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110">
        <Icon className="size-5" />
      </div>

      <div className="space-y-1">
        <h4 className="text-sm font-semibold">{title}</h4>

        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </button>
  );
}
