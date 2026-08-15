"use client";

import { useState } from "react";
import { Transaction, UpdateTransactionRequest } from "../types";
import { useUpdateTransaction } from "../hooks";
import { CreateTransactionFormValues } from "../schemas/create-transaction.schema";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TransactionForm } from "./transaction-form";

type EditTransactionDialogProps = {
  transaction: Transaction;
};

export function EditTransactionDialog({ transaction }: EditTransactionDialogProps) {
  const [open, setOpen] = useState(false);

  const updateTransactionMutation = useUpdateTransaction();

  const defaultValues: CreateTransactionFormValues = {
    type: transaction.type,
    amount: transaction.amount,
    description: transaction.description ?? "",
    transactionDate: transaction.transactionDate.slice(0, 10),
  };

  const handleSubmit = async (values: CreateTransactionFormValues) => {
    const data: UpdateTransactionRequest = {
      type: values.type,
      amount: values.amount,
      description: values.description?.trim() || null,
      transactionDate: values.transactionDate,
      categoryId: transaction.categoryId ?? null,
    };

    try {
      await updateTransactionMutation.mutateAsync({
        id: transaction.id,
        data,
      });

      toast.success("Transaction updated successfully.");
      setOpen(false);
    } catch {
      toast.error("Failed to update transaction. Please try again.");
    }
  };

  const handleOpenChange = (value: boolean) => {
    if (updateTransactionMutation.isPending) {
      return;
    }

    setOpen(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <Button variant="ghost" size="sm">
            Edit
          </Button>
        }
      />

      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle>Edit transaction</DialogTitle>
        </DialogHeader>

        <TransactionForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
          isPending={updateTransactionMutation.isPending}
          submitLabel="Save Changes"
        />
      </DialogContent>
    </Dialog>
  );
}
