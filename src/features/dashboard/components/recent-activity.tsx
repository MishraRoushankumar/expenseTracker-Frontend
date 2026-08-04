import { DashboardWidget } from "@/components/dashboard";
import { RECENT_ACTIVITY } from "../constants/recent-activity.constants";
import { ActivityItem } from "./activity-card";
import { Button } from "@/components/ui/button";

export function RecentActivity() {
  return (
    <DashboardWidget>
      <div className="space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight">Recent Activity</h3>

          <p className="text-muted-foreground text-sm">Latest updates from your account.</p>
        </div>

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
