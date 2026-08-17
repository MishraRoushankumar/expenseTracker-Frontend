"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PaginationMeta } from "@/types/pagination.types";

type TransactionPaginationProps = {
  pagination: PaginationMeta;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
};

export function TransactionPagination({
  pagination,
  onPageChange,
  isLoading,
}: TransactionPaginationProps) {
  const { page, totalPages, hasNextPage, hasPreviousPage } = pagination;

  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        Page {page} of {totalPages}
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={!hasPreviousPage || isLoading}
          aria-label="Go to previous page"
        >
          <ChevronLeft />
          Previous
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(page + 1)}
          disabled={!hasNextPage || isLoading}
          aria-label="Go to next page"
        >
          Next
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
