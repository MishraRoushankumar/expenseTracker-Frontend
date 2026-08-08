"use client";
import { Inbox, LucideIcon } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
};

export function EmptyState({ title, description, icon: Icon = Inbox, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="bg-muted mb-4 flex size-12 items-center justify-center rounded-full">
        <Icon className="text-muted-foreground size-6" aria-hidden="true" />
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-semibold">{title}</h3>

        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
