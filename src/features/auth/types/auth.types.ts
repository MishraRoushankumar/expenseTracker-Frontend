import { z } from "zod/v4";

import { loginFormSchema } from "../schemas/login-form.schema";
import { registerFormSchema } from "../schemas/register-form.schema";

/**
 * Login Form
 */
export type LoginFormValues = z.infer<typeof loginFormSchema>;

/**
 * Register Form
 */

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
