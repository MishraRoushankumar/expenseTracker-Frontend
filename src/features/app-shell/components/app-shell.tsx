"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarNavigation } from "./sidebar-navigation";
import { AppHeader } from "./app-header";
import { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren<object>) {
  return (
    <SidebarProvider defaultOpen>
      <SidebarNavigation />

      <SidebarInset>
        <AppHeader />

        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
