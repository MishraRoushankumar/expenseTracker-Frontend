import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw } from "lucide-react";

type DashboardErrorStateProps = {
  onRetry: () => void;
};

export function DashboardErrorState({ onRetry }: DashboardErrorStateProps) {
  return (
    <EmptyState
      title="Unable to load dashboard"
      description="We couldn't load your dashboard. Please try again."
      icon={AlertCircle}
      action={
        <Button onClick={onRetry}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Retry
        </Button>
      }
    />
  );
}
