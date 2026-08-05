import { DashboardEvent } from "../types/dashboard.types";

type ActivityItemProps = DashboardEvent;

export function ActivityItem({ title, description, timestamp, icon: Icon }: ActivityItemProps) {
  return (
    <div className="flex gap-3">
      <div className="bg-primary/10 text-primary mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full">
        <Icon className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>

        <p className="text-muted-foreground text-sm">{description}</p>

        <p className="text-muted-foreground mt-1 text-xs">{timestamp}</p>
      </div>
    </div>
  );
}
