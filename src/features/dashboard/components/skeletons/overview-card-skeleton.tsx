import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function OverviewCardSkeleton() {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <Skeleton className="h-4 w-24" />

        <Skeleton className="h-8 w-36" />

        <Skeleton className="h-3 w-28" />
      </CardContent>
    </Card>
  );
}
