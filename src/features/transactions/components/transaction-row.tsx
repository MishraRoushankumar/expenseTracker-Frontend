import type { Transaction } from "../types";

type TransactionRowProps = {
  transaction: Transaction;
};

export function TransactionRow({ transaction }: TransactionRowProps) {
  const isIncome = transaction.type === "income";

  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-3 text-sm">
        {new Date(transaction.transactionDate).toLocaleDateString("en-IN")}
      </td>

      <td className="max-w-70 truncate px-4 py-3 text-sm">
        {transaction.description ?? "No description"}
      </td>

      <td className="px-4 py-3 text-sm">{transaction.categoryName ?? "Uncategorized"}</td>

      <td className="px-4 py-3 text-sm capitalize">{transaction.type}</td>

      <td
        className={`px-4 py-3 text-right text-sm font-medium ${
          isIncome ? "text-green-600" : "text-red-600"
        }`}
      >
        {isIncome ? "+" : "-"}₹{transaction.amount.toLocaleString("en-IN")}
      </td>
    </tr>
  );
}
