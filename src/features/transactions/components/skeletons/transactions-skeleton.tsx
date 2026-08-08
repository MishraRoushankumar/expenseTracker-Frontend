import { Skeleton } from "@/components/ui/skeleton";

export function TransactionsSkeleton() {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <div className="border-b px-4 py-3">
        <div className="grid grid-cols-5 gap-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="ml-auto h-4 w-20" />
        </div>
      </div>

      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 border-b px-4 py-4 last:border-b-0">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="ml-auto h-4 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}
