export interface DashboardSummaryResponse {
  totalIncome: number;
  totalExpense: number;
  currentBalance: number;
  monthlyIncome: number;
  monthlyExpense: number;
  monthlySavings: number;
  transactionCount: number;
}

export interface MonthlyTrendResponse {
  period: string;
  income: number;
  expense: number;
  balance: number;
}

export interface HighestExpenseCategoryResponse {
  name: string;
  amount: number;
}

export interface LargestExpenseResponse {
  amount: number;
  category: string;
  date: string;
}

export interface DashboardInsightsResponse {
  highestExpenseCategory: HighestExpenseCategoryResponse | null;
  largestExpense: LargestExpenseResponse | null;
  averageTransactionAmount: number;
  averageMonthlyIncome: number;
  averageMonthlyExpense: number;
  savingsRate: number;
}

export interface CategoryAnalyticsResponse {
  categoryId: number | null;
  categoryName: string | null;
  totalAmount: number;
  transactionCount: number;
  percentage: number;
}

export interface RecentTransactionResponse {
  id: number;
  type: "income" | "expense";
  amount: number;
  transactionDate: string;
  categoryId: number | null;
  categoryName: string | null;
}

export interface DashboardResponse {
  summary: DashboardSummaryResponse;
  monthlyTrends: MonthlyTrendResponse[];
  insights: DashboardInsightsResponse;
  categoryAnalytics: CategoryAnalyticsResponse[];
  recentTransactions: RecentTransactionResponse[];
}

export type DashboardContentResponse = Pick<
  DashboardResponse,
  "recentTransactions" | "categoryAnalytics" | "monthlyTrends" | "insights"
>;
