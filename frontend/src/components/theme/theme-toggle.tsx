"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme, type Theme } from "./theme-provider";

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Monitor },
  { value: "dark", label: "Dark", icon: Moon },
];

/** Three-way theme switch (light, system, dark). */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-control-lg border bg-surface-secondary p-0.5",
        className,
      )}
    >
      {options.map(({ value, label, icon: Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-control text-muted-foreground",
              "transition-[background-color,color,transform,box-shadow] duration-(--duration-fast) ease-(--ease-standard)",
              "hover:text-foreground active:scale-95",
              "focus-visible:outline-2 focus-visible:outline-offset-1",
              active && "bg-surface-elevated text-foreground shadow-raised",
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
