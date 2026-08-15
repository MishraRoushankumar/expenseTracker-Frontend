"use client";

import { toast } from "sonner";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { useUpdateTransaction } from "../hooks";
import { Transaction, UpdateTransactionRequest } from "../types";
import { CreateTransactionFormValues } from "../schemas/create-transaction.schema";
import { TransactionForm } from "./transaction-form";

type EditTransactionDialogProps = {
  transaction: Transaction;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EditTransactionDialog({
  transaction,
  open,
  onOpenChange,
}: EditTransactionDialogProps) {
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
      onOpenChange(false);
    } catch {
      toast.error("Failed to update transaction. Please try again.");
    }
  };

  const handleOpenChange = (value: boolean) => {
    if (updateTransactionMutation.isPending) {
      return;
    }

    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle>Edit transaction</DialogTitle>
        </DialogHeader>

        <TransactionForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          onCancel={() => onOpenChange(false)}
          isPending={updateTransactionMutation.isPending}
          submitLabel="Save Changes"
        />
      </DialogContent>
    </Dialog>
  );
}
