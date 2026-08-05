"use client";

import { WelcomeBannerSkeleton } from "./welcome-banner-skeleton";
import { FinancialOverviewSkeleton } from "./financial-overview-skeleton";
import { RecentTransactionsSkeleton } from "./recent-transactions-skeleton";
import { BudgetProgressSkeleton } from "./budget-progress-skeleton";
import { QuickActionsSkeleton } from "./quick-actions-skeleton";
import { RecentActivitySkeleton } from "./recent-activity-skeleton";

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <WelcomeBannerSkeleton />

      {/* Financial Overview */}
      <FinancialOverviewSkeleton />

      {/* Dashboard Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          <RecentTransactionsSkeleton />
          <BudgetProgressSkeleton />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <QuickActionsSkeleton />
          <RecentActivitySkeleton />
        </div>
      </div>
    </div>
  );
}
