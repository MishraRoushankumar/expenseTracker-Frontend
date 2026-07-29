import type { PropsWithChildren } from "react";

export function AuthLayout({ children }: PropsWithChildren) {
  return <main className="flex min-h-screen items-center justify-center px-4">{children}</main>;
}
