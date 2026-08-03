"use client";

import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/use-auth";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";

export function UserNav() {
  const router = useRouter();
  const { user, logout, isLoggingOut } = useAuth();
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  if (!user) {
    return null;
  }

  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();

  const handleLogout = async () => {
    await logout();

    router.replace("/login");
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              collapsed ? (
                <SidebarMenuButton size="default" className="justify-center">
                  <Avatar size="default">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </SidebarMenuButton>
              ) : (
                <SidebarMenuButton size="lg">
                  <Avatar size="default">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col text-left">
                    <span className="truncate text-sm font-medium">
                      {user.firstName} {user.lastName}
                    </span>

                    <span className="text-muted-foreground truncate text-xs">{user.email}</span>
                  </div>
                </SidebarMenuButton>
              )
            }
          />

          <DropdownMenuContent side="top" align="end" className="w-56">
            <DropdownMenuItem
              onClick={handleLogout}
              className="bg-destructive"
              disabled={isLoggingOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {isLoggingOut ? "Signing out..." : "Sign out"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
