"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { sidebarNavigation } from "../constants/navigation";

export function AppHeader() {
  const pathname = usePathname();

  const currentPage = sidebarNavigation.find((item) => item.href === pathname);

  const pageTitle = currentPage?.title ?? "Expense Tracker";

  return (
    <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        <Separator orientation="vertical" className="h-10" />

        <h1 className="text-lg font-semibold capitalize">{pageTitle}</h1>
      </div>
    </header>
  );
}
