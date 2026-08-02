"use client";

import { useForm } from "react-hook-form";
import { LoginFormValues } from "../types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "../schemas/login-form.schema";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "./password-input";
import { useRouter } from "next/navigation";
import { useLogin } from "../hooks/use-auth-api";

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),

    defaultValues: {
      email: "",
      password: "",
    },

    mode: "onBlur",
  });

  const loginMutation = useLogin();
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await loginMutation.mutateAsync(values);

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>

        <Input
          autoFocus
          id="email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          {...form.register("email")}
        />

        <FieldError errors={[form.formState.errors.email]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>

        <PasswordInput
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          {...form.register("password")}
        />

        <FieldError errors={[form.formState.errors.password]} />
      </Field>

      <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
