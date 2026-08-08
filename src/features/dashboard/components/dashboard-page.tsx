"use client";

import { DashboardContent } from "./dashboard-content";
import { FinancialOverview } from "./financial-overview";
import { DashboardSkeleton } from "./skeletons/dashboard-skeleton";
import { WelcomeBanner } from "./welcome-banner";
import { useDashboard } from "../hooks/use-dashboard";
import { DashboardErrorState } from "./dashboard-error-state";

export function DashboardPage() {
  const { data, isLoading, isError, refetch } = useDashboard();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError || !data) {
    return <DashboardErrorState onRetry={refetch} />;
  }

  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <FinancialOverview summary={data.summary} />
      <DashboardContent data={data} />
    </div>
  );
}
