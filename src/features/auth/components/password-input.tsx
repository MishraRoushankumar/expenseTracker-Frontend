"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type PasswordInputProps = React.ComponentProps<typeof Input>;

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div className="relative">
        <Input
          autoFocus
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)}
          disabled={disabled}
          {...props}
        />

        <Button
          type="button"
          variant="ghost"
          size="icon"
          disabled={disabled}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-2 h-7 w-7 -translate-y-1/2 hover:bg-transparent"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
