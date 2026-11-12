"use client";

import { useState, type ReactNode } from "react";
import { NexoraMark } from "@/components/brand/nexora-mark";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

const sections = [
  ["brand", "Brand"],
  ["themes", "Themes"],
  ["colour", "Colour"],
  ["typography", "Type"],
  ["geometry", "Geometry"],
  ["materials", "Materials"],
  ["components", "Components"],
  ["motion", "Motion"],
] as const;

/** Page chrome for the preview: sticky glass header, theme switch, and a glass on/off switch. */
export function PreviewShell({ children }: { children: ReactNode }) {
  const [glassOn, setGlassOn] = useState(true);

  return (
    <div data-glass={glassOn ? "on" : "off"} className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 px-(--page-gutter) pt-3">
        <div className="glass mx-auto flex max-w-6xl items-center gap-3 rounded-float px-4 py-2">
          <NexoraMark className="size-7 text-foreground" />
          <span className="type-h4 hidden sm:inline">Nexora design system</span>
          <nav aria-label="Design system sections" className="ml-2 hidden min-w-0 flex-1 gap-1 overflow-x-auto lg:flex">
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="type-nav rounded-control-sm px-2.5 py-1.5 text-muted-foreground transition-colors duration-(--duration-instant) hover:bg-accent hover:text-accent-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              aria-pressed={!glassOn}
              onClick={() => setGlassOn((value) => !value)}
            >
              Glass: {glassOn ? "on" : "off"}
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-(--page-gutter) pb-24">
        <div className="pt-16 pb-4">
          <p className="type-eyebrow text-accent-foreground">Phase 02 / Development preview</p>
          <h1 className="type-display mt-3">Quietly powerful.</h1>
          <p className="type-body-lg mt-4 max-w-2xl text-muted-foreground">
            The implemented Nexora foundation: tokens, type, geometry, materials, motion and the
            first ten components. Everything below is rendered from the real code.
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}
