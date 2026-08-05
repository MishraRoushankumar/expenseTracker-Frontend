import { Skeleton } from "@/components/ui/skeleton";

export function RecentTransactionsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-3 w-24" />
        </div>
      ))}
    </div>
  );
}
