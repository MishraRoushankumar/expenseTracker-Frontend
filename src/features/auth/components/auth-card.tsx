import type { PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";

export function AuthCard({ children }: PropsWithChildren) {
  return <Card className="w-full max-w-md p-6">{children}</Card>;
}
