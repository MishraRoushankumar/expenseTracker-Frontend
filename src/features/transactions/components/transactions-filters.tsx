"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { TransactionQueryParams, TransactionType } from "../types";

type TransactionFiltersProps = {
  query: TransactionQueryParams;
  onQueryChange: (updates: Partial<TransactionQueryParams>) => void;
  onReset: () => void;
};

export function TransactionFilters({ query, onQueryChange, onReset }: TransactionFiltersProps) {
  const [searchInput, setSearchInput] = useState(query.search ?? "");

  const [typeInput, setTypeInput] = useState<TransactionQueryParams["type"]>(query.type);

  const [startDateInput, setStartDateInput] = useState(query.startDate ?? "");

  const [endDateInput, setEndDateInput] = useState(query.endDate ?? "");

  const [dateRangeError, setDateRangeError] = useState<string | null>(null);

  const [sortByInput, setSortByInput] = useState<TransactionQueryParams["sortBy"]>(
    query.sortBy ?? "transactionDate",
  );

  const [sortOrderInput, setSortOrderInput] = useState<TransactionQueryParams["sortOrder"]>(
    query.sortOrder ?? "desc",
  );

  const handleApply = () => {
    if (startDateInput && endDateInput && startDateInput > endDateInput) {
      setDateRangeError("Start date cannot be later than end date.");
      return;
    }

    setDateRangeError(null);

    onQueryChange({
      search: searchInput.trim() || undefined,
      type: typeInput,
      startDate: startDateInput || undefined,
      endDate: endDateInput || undefined,
      sortBy: sortByInput,
      sortOrder: sortOrderInput,
    });
  };

  const handleReset = () => {
    setSearchInput("");
    setTypeInput(undefined);
    setStartDateInput("");
    setEndDateInput("");
    setDateRangeError(null);

    setSortByInput("transactionDate");
    setSortOrderInput("desc");

    onReset();
  };

  return (
    <div className="bg-card mb-6 rounded-lg border p-4">
      <div className="space-y-4">
        {/* Search */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="transaction-search" className="sr-only">
              Search transactions
            </label>

            <Input
              id="transaction-search"
              placeholder="Search transactions..."
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
              className="bg-accent w-full rounded-md pl-2"
            />
          </div>

          <div className="flex gap-2">
            <Button type="button" className="rounded-md" onClick={handleApply}>
              Apply filters
            </Button>

            <Button type="button" variant="outline" className="rounded-md" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Type */}
          <div className="space-y-2">
            <label id="transaction-type-label" className="text-sm font-medium">
              Transaction type
            </label>

            <Select
              value={typeInput ?? "all"}
              onValueChange={(value) => {
                setTypeInput(value === "all" ? undefined : (value as TransactionType));
              }}
            >
              <SelectTrigger
                id="transaction-type-select"
                aria-labelledby="transaction-type-label"
                className="bg-accent w-full rounded-md p-2"
              >
                <SelectValue placeholder="All types" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">All types</SelectItem>

                <SelectItem value="income">Income</SelectItem>

                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Start date */}
          <div className="space-y-2">
            <label id="start-date-label" className="text-sm font-medium">
              From date
            </label>

            <Input
              id="start-date-input"
              type="date"
              aria-labelledby="start-date-label"
              value={startDateInput}
              max={endDateInput || undefined}
              onChange={(event) => {
                setStartDateInput(event.target.value);
                if (dateRangeError) {
                  setDateRangeError(null);
                }
              }}
              className="bg-accent rounded-md p-2"
            />
          </div>

          {/* End date */}
          <div className="space-y-2">
            <label id="end-date-label" className="text-sm font-medium">
              To date
            </label>

            <Input
              id="end-date-input"
              type="date"
              aria-labelledby="end-date-label"
              value={endDateInput}
              min={startDateInput || undefined}
              onChange={(event) => {
                setEndDateInput(event.target.value);
                if (dateRangeError) {
                  setDateRangeError(null);
                }
              }}
              className="bg-accent rounded-md p-2"
            />
          </div>
        </div>

        {dateRangeError ? (
          <p className="text-destructive text-sm" role="alert">
            {dateRangeError}
          </p>
        ) : null}

        {/* Sorting */}
        <div className="grid grid-cols-1 gap-4 border-t pt-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label id="sort-by-label" className="text-sm font-medium">
              Sort by
            </label>

            <Select
              value={sortByInput ?? "transactionDate"}
              onValueChange={(value) => {
                setSortByInput(value as TransactionQueryParams["sortBy"]);
              }}
            >
              <SelectTrigger
                id="sort-by-select"
                aria-labelledby="sort-by-label"
                className="bg-accent w-full rounded-md p-2"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="transactionDate">Transaction date</SelectItem>

                <SelectItem value="amount">Amount</SelectItem>

                <SelectItem value="createdAt">Created date</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label id="sort-order-label" className="text-sm font-medium">
              Sort order
            </label>

            <Select
              value={sortOrderInput ?? "desc"}
              onValueChange={(value) => {
                setSortOrderInput(value as TransactionQueryParams["sortOrder"]);
              }}
            >
              <SelectTrigger
                id="sort-order-select"
                aria-labelledby="sort-order-label"
                className="bg-accent w-full rounded-md p-2"
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="desc">Descending</SelectItem>

                <SelectItem value="asc">Ascending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
