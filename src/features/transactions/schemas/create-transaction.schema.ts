import { z } from "zod/v4";

export const createTransactionSchema = z.object({
  type: z.enum(["income", "expense"]),

  amount: z.number().positive("Amount must be greater than zero"),

  description: z
    .string()
    .trim()
    .max(500, "Description must be 500 characters or less")
    .nullable()
    .optional(),

  transactionDate: z.string().min(1, "Transaction date is required"),
});

export type CreateTransactionFormValues = z.infer<typeof createTransactionSchema>;
