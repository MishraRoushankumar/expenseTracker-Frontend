import {
  AuthLayout,
  AuthCard,
  AuthFooter,
  AuthHeader,
  RegisterForm,
} from "@/features/auth/components";
import React from "react";

function RegisterPage() {
  return (
    <div>
      <AuthLayout>
        <AuthCard>
          <AuthHeader
            title="Create an Account"
            description="Sign up to start managing your expenses."
          />
          <RegisterForm />
          <AuthFooter text="Already have an account?" linkText="Sign In" href="/login" />
        </AuthCard>
      </AuthLayout>
    </div>
  );
}

export default RegisterPage;
