"use client";

import { useEffect, useState } from "react";
import { DashboardContent } from "./dashboard-content";
import { FinancialOverview } from "./financial-overview";
import { DashboardSkeleton } from "./skeletons/dashboard-skeleton";
import { WelcomeBanner } from "./welcome-banner";

export function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-8">
      <WelcomeBanner />
      <FinancialOverview />
      <DashboardContent />
    </div>
  );
}
