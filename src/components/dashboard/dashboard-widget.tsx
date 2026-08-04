import { PropsWithChildren } from "react";

import { Card, CardContent } from "../ui/card";

import { cn } from "@/lib";

type DashboardWidgetProps = PropsWithChildren<{
  className?: string;
  contentClassName?: string;
}>;

export function DashboardWidget({ children, className, contentClassName }: DashboardWidgetProps) {
  return (
    <Card
      className={cn(
        "rounded-xl border shadow-sm transition-shadow duration-200 hover:shadow-md",
        className,
      )}
    >
      <CardContent className={cn("p-6", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
