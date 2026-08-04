"use client";

import { DashboardContent } from "./dashboard-content";
import { FinancialOverview } from "./financial-overview";
import { WelcomeBanner } from "./welcome-banner";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />
      <FinancialOverview />
      <DashboardContent />
    </div>
  );
}
