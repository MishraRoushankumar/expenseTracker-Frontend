"use client";

import { DashboardWidget } from "@/components/dashboard";

import { useAuth } from "@/hooks/use-auth";

export function WelcomeBanner() {
  const { user } = useAuth();

  const hour = new Date().getHours();

  const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  const currentDate = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <DashboardWidget contentClassName="p-6 md:p-7">
      <div className="space-y-3">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {greeting}
            {user?.firstName ? `, ${user.firstName}` : ""} 👋
          </h1>

          <p className="text-muted-foreground text-base">
            Here&apos;s your financial overview for today.
          </p>
        </div>
        <p className="text-muted-foreground/80 text-sm font-medium">{currentDate}</p>
      </div>
    </DashboardWidget>
  );
}
