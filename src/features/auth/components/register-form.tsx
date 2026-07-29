"use client";

import { useForm } from "react-hook-form";
import { RegisterFormValues } from "../types/auth.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "../schemas/register-form.schema";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (values: RegisterFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <Field>
        <FieldLabel htmlFor="firstName">First Name</FieldLabel>

        <Input
          autoFocus
          id="firstName"
          placeholder="John"
          autoComplete="given-name"
          {...form.register("firstName")}
        />

        <FieldError errors={[form.formState.errors.firstName]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>

        <Input
          autoFocus
          id="lastName"
          placeholder="Doe"
          autoComplete="family-name"
          {...form.register("lastName")}
        />

        <FieldError errors={[form.formState.errors.lastName]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>

        <Input
          autoFocus
          id="email"
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
          {...form.register("email")}
        />

        <FieldError errors={[form.formState.errors.email]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>

        <PasswordInput
          id="password"
          placeholder="Create a password"
          autoComplete="new-password"
          {...form.register("password")}
        />

        <FieldError errors={[form.formState.errors.password]} />
      </Field>

      <Field>
        <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>

        <PasswordInput
          id="confirmPassword"
          placeholder="Confirm your password"
          autoComplete="new-password"
          {...form.register("confirmPassword")}
        />

        <FieldError errors={[form.formState.errors.confirmPassword]} />
      </Field>

      <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
}
