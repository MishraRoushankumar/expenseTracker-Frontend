import {
  AuthCard,
  AuthFooter,
  AuthHeader,
  AuthLayout,
  LoginForm,
} from "@/features/auth/components";
import React from "react";

function LoginPage() {
  return (
    <div>
      <AuthLayout>
        <AuthCard>
          <AuthHeader title="Welcome Back" description="Sign in to your account to continue." />
          <LoginForm />
          <AuthFooter text="Don't have an account?" linkText="Create an account" href="/register" />
        </AuthCard>
      </AuthLayout>
    </div>
  );
}

export default LoginPage;
