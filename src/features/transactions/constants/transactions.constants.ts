export const TRANSACTION_DEFAULTS = {
  PAGE: 1,
  LIMIT: 10,
  SORT_BY: "transactionDate",
  SORT_ORDER: "desc",
} as const;

export const TRANSACTION_TYPES = {
  INCOME: "income",
  EXPENSE: "expense",
} as const;
