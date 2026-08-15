"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useCreateTransaction } from "../hooks";
import type { CreateTransactionRequest } from "../types";
import type { CreateTransactionFormValues } from "../schemas/create-transaction.schema";
import { TransactionForm } from "./transaction-form";

export function CreateTransactionDialog() {
  const [open, setOpen] = useState(false);

  const createTransactionMutation = useCreateTransaction();

  const handleSubmit = async (values: CreateTransactionFormValues) => {
    const data: CreateTransactionRequest = {
      type: values.type,
      amount: values.amount,
      description: values.description?.trim() || null,
      transactionDate: values.transactionDate,
      categoryId: null,
    };

    try {
      await createTransactionMutation.mutateAsync(data);
      toast.success("Transaction created successfully.");
      setOpen(false);
    } catch {
      toast.error("Failed to create transaction. Please try again.");
    }
  };

  const handleOpenChange = (value: boolean) => {
    if (createTransactionMutation.isPending) {
      return;
    }

    setOpen(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button className="rounded-md">Add Transaction</Button>} />

      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle>Create Transaction</DialogTitle>
        </DialogHeader>

        <TransactionForm
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
          isPending={createTransactionMutation.isPending}
          submitLabel="Create Transaction"
        />
      </DialogContent>
    </Dialog>
  );
}
