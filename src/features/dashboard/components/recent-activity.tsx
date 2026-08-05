import { DashboardWidget, DashboardWidgetHeader } from "@/components/dashboard";
import { RECENT_ACTIVITY } from "../constants/recent-activity.constants";
import { ActivityItem } from "./activity-card";
import { Button } from "@/components/ui/button";

export function RecentActivity() {
  return (
    <DashboardWidget>
      <div className="space-y-6">
        <DashboardWidgetHeader
          title="Recent Activity"
          description="Latest updates from your account"
        />

        <div className="space-y-5">
          {RECENT_ACTIVITY.map((activity) => (
            <ActivityItem key={activity.id} {...activity} />
          ))}
        </div>
        <Button variant="link" className="h-auto p-0" size="sm" disabled>
          View all activity
        </Button>
      </div>
    </DashboardWidget>
  );
}
