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

  const [sortByInput, setSortByInput] = useState<TransactionQueryParams["sortBy"]>(
    query.sortBy ?? "transactionDate",
  );

  const [sortOrderInput, setSortOrderInput] = useState<TransactionQueryParams["sortOrder"]>(
    query.sortOrder ?? "desc",
  );

  const handleApply = () => {
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

    setSortByInput("transactionDate");
    setSortOrderInput("desc");

    onReset();
  };

  return (
    <div className="bg-card mb-6 rounded-lg border p-4">
      <div className="space-y-4">
        {/* Search */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            placeholder="Search transactions..."
            value={searchInput}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
            className="bg-accent flex-1 rounded-md pl-2"
          />

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
            <label className="text-sm font-medium">Transaction type</label>

            <Select
              value={typeInput ?? "all"}
              onValueChange={(value) => {
                setTypeInput(value === "all" ? undefined : (value as TransactionType));
              }}
            >
              <SelectTrigger className="bg-accent w-full rounded-md p-2">
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
            <label className="text-sm font-medium">From date</label>

            <Input
              type="date"
              value={startDateInput}
              onChange={(event) => {
                setStartDateInput(event.target.value);
              }}
              className="bg-accent rounded-md p-2"
            />
          </div>

          {/* End date */}
          <div className="space-y-2">
            <label className="text-sm font-medium">To date</label>

            <Input
              type="date"
              value={endDateInput}
              onChange={(event) => {
                setEndDateInput(event.target.value);
              }}
              className="bg-accent rounded-md p-2"
            />
          </div>
        </div>

        {/* Sorting */}
        <div className="grid grid-cols-1 gap-4 border-t pt-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Sort by</label>

            <Select
              value={sortByInput ?? "transactionDate"}
              onValueChange={(value) => {
                setSortByInput(value as TransactionQueryParams["sortBy"]);
              }}
            >
              <SelectTrigger className="bg-accent w-full rounded-md p-2">
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
            <label className="text-sm font-medium">Sort order</label>

            <Select
              value={sortOrderInput ?? "desc"}
              onValueChange={(value) => {
                setSortOrderInput(value as TransactionQueryParams["sortOrder"]);
              }}
            >
              <SelectTrigger className="bg-accent w-full rounded-md p-2">
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
