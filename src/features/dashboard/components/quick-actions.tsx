import { DashboardWidget, DashboardWidgetHeader } from "@/components/dashboard";

import { QUICK_ACTIONS } from "../constants/quick-actions.constants";
import { ActionCard } from "./action-card";

export function QuickActions() {
  return (
    <DashboardWidget>
      <div className="space-y-6">
        <DashboardWidgetHeader
          title="Quick Actions"
          description="Create and manage your finances"
        />

        <div className="grid grid-cols-2 gap-4">
          {QUICK_ACTIONS.map((action) => (
            <ActionCard key={action.id} {...action} />
          ))}
        </div>
      </div>
    </DashboardWidget>
  );
}
