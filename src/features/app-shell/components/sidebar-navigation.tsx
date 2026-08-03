"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { AppLogo } from "./app-logo";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";
import { sidebarNavigation } from "../constants/navigation";

export function SidebarNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="px-2">
        <AppLogo />
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu>
          {sidebarNavigation.map((item) => {
            const active = isActive(item.href);

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  render={<Link href={item.href} />}
                  isActive={active}
                  tooltip={item.title}
                  className="hover:bg-sidebar-accent data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground transition-colors duration-200 data-[active=true]:font-medium"
                >
                  <item.icon className="size-4 shrink-0" />

                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <Separator className="my-2" />

      <SidebarFooter className="gap-2 p-2">
        <ThemeToggle />
        <UserNav />
      </SidebarFooter>
    </Sidebar>
  );
}
