import { OverviewCardSkeleton } from "./overview-card-skeleton";

export function FinancialOverviewSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <OverviewCardSkeleton key={index} />
      ))}
    </div>
  );
}
