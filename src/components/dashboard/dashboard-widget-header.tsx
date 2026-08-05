import { cn } from "@/lib";

type DashboardWidgetHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function DashboardWidgetHeader({
  title,
  description,
  className,
}: DashboardWidgetHeaderProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

      {description ? <p className="text-muted-foreground text-sm">{description}</p> : null}
    </div>
  );
}
