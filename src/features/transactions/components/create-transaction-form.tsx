"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { createTransactionSchema } from "../schemas/create-transaction.schema";
import type { CreateTransactionFormValues } from "../schemas/create-transaction.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CreateTransactionFormProps = {
  onSubmit: (values: CreateTransactionFormValues) => Promise<void>;
  onCancel: () => void;
  isPending?: boolean;
};

export function CreateTransactionForm({
  onSubmit,
  onCancel,
  isPending = false,
}: CreateTransactionFormProps) {
  const form = useForm<CreateTransactionFormValues>({
    resolver: zodResolver(createTransactionSchema),

    defaultValues: {
      type: "expense",
      amount: undefined,
      description: "",
      transactionDate: new Date().toISOString().slice(0, 10),
    },

    mode: "onBlur",
  });

  const handleSubmit = async (values: CreateTransactionFormValues) => {
    await onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6" noValidate>
      <Field>
        <FieldLabel htmlFor="type">Type</FieldLabel>

        <Controller
          control={form.control}
          name="type"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="type" className="bg-accent w-full rounded-md p-2">
                <SelectValue placeholder="Select transaction type" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="expense">Expense</SelectItem>
                <SelectItem value="income">Income</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        <FieldError errors={[form.formState.errors.type]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="amount">Amount</FieldLabel>

        <Input
          id="amount"
          type="number"
          min="0.01"
          step="0.01"
          placeholder="Enter amount"
          {...form.register("amount", {
            valueAsNumber: true,
          })}

          className="bg-accent rounded-md p-2"
        />

        <FieldError errors={[form.formState.errors.amount]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="description">Description</FieldLabel>

        <Input
          id="description"
          placeholder="What was this transaction for?"
          maxLength={500}
          {...form.register("description")}
          className="bg-accent rounded-md p-2"
        />

        <FieldError errors={[form.formState.errors.description]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="transactionDate">Transaction Date</FieldLabel>

        <Input
          id="transactionDate"
          type="date"
          {...form.register("transactionDate")}
          className="bg-accent rounded-md p-2"
        />

        <FieldError errors={[form.formState.errors.transactionDate]} />
      </Field>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isPending}
          className="rounded-md"
        >
          Cancel
        </Button>

        <Button type="submit" disabled={isPending} className="rounded-md">
          {isPending ? "Creating..." : "Create Transaction"}
        </Button>
      </div>
    </form>
  );
}
