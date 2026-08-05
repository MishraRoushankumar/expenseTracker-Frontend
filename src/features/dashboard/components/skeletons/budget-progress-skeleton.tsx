import { Skeleton } from "@/components/ui/skeleton";

export function BudgetProgressSkeleton() {
  return (
    <div className="space-y-5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-10" />
          </div>

          <Skeleton className="h-2 w-full" />

          <Skeleton className="h-3 w-28" />
        </div>
      ))}
    </div>
  );
}
