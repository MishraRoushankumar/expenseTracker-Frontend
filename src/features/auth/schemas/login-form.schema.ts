import { z } from "zod/v4";

export const loginFormSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address.",
  }),

  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(100, {
      message: "Password cannot exceed 100 characters.",
    }),
});
