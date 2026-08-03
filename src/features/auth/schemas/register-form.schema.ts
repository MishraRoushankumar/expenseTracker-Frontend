import { z } from "zod/v4";

export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, {
        message: "First name must be at least 2 characters.",
      })
      .max(50, {
        message: "First name cannot exceed 50 characters.",
      }),

    lastName: z
      .string()
      .trim()
      .min(2, {
        message: "Last name must be at least 2 characters.",
      })
      .max(50, {
        message: "Last name cannot exceed 50 characters.",
      }),

    email: z.email({ message: "Please enter a valid email address." }),

    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .max(100, {
        message: "Password cannot exceed 100 characters.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
