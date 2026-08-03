"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { PiggyBank } from "lucide-react";
import Link from "next/link";

export function AppLogo() {
  const { state } = useSidebar();

  const collapsed = state === "collapsed";

  return (
    <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
      <PiggyBank className="size-5 shrink-0" />
      <span
        className={`font-semibold whitespace-nowrap transition-[width,opacity] duration-200 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}
      >
        LedgerSense
      </span>
    </Link>
  );
}
