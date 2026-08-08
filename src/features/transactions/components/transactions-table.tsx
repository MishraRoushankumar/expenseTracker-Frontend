import { Transaction } from "../types";
import { TransactionRow } from "./transaction-row";

type TransactionsTableProps = {
  transactions: Transaction[];
};

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full min-w-175">
        <thead>
          <tr className="bg-muted/50 border-b">
            <th className="px-4 py-3 text-left text-sm font-medium">Date</th>

            <th className="px-4 py-3 text-left text-sm font-medium">Description</th>

            <th className="px-4 py-3 text-left text-sm font-medium">Category</th>

            <th className="px-4 py-3 text-left text-sm font-medium">Type</th>

            <th className="px-4 py-3 text-right text-sm font-medium">Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
