"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useDeleteTransaction } from "../hooks";
import type { Transaction } from "../types";
import { toast } from "sonner";

type DeleteTransactionDialogProps = {
  transaction: Transaction;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

/**
 * Confirms and deletes a transaction while providing mutation feedback.
 */

export function DeleteTransactionDialog({
  transaction,
  open,
  onOpenChange,
}: DeleteTransactionDialogProps) {
  const deleteTransactionMutation = useDeleteTransaction();

  const handleDelete = async () => {
    try {
      await deleteTransactionMutation.mutateAsync(transaction.id);

      toast.success("Transaction deleted successfully.");
      onOpenChange(false);
    } catch {
      toast.error("Failed to delete transaction. Please try again.");
    }
  };

  const handleOpenChange = (value: boolean) => {
    if (deleteTransactionMutation.isPending) {
      return;
    }

    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="rounded-lg">
        <DialogHeader>
          <DialogTitle>Delete Transaction?</DialogTitle>

          <DialogDescription>
            This action cannot be undone. This transaction will be permanently removed.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={deleteTransactionMutation.isPending}
          >
            Cancel
          </Button>

          <Button
            type="button"
            variant="destructive"
            onClick={handleDelete}
            disabled={deleteTransactionMutation.isPending}
          >
            {deleteTransactionMutation.isPending ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
