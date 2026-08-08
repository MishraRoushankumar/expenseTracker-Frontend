export type TransactionType = "income" | "expense";

export interface Transaction {
  id: number;
  userId: number;
  categoryId: number | null;
  categoryName: string | null;
  type: TransactionType;
  amount: number;
  description: string | null;
  transactionDate: string;
  createdAt: string;
  updatedAt: string;
}
