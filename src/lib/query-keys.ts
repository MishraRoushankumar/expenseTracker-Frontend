export const QUERY_KEYS = {
  AUTH: {
    PROFILE: ["auth", "profile"],
  },

  CATEGORIES: {},

  TRANSACTIONS: {
    ALL: ["transactions"],
    LIST: ["transactions", "list"],
    DETAIL: (id: number) => ["transactions", "detail", id],
  },

  DASHBOARD: {
    ALL: ["dashboard"],
  },
} as const;
