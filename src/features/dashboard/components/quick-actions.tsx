import { DashboardWidget } from "@/components/dashboard";

import { QUICK_ACTIONS } from "../constants/quick-actions.constants";
import { ActionCard } from "./action-card";

export function QuickActions() {
  return (
    <DashboardWidget>
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight">Quick Actions</h3>

          <p className="text-muted-foreground text-sm">Create and manage your finances.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {QUICK_ACTIONS.map((action) => (
            <ActionCard key={action.id} {...action} />
          ))}
        </div>
      </div>
    </DashboardWidget>
  );
}
