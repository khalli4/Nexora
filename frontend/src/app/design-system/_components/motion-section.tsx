"use client";

import { useState } from "react";
import { Bell, ChevronDown, Home, PanelLeftClose, PanelLeftOpen, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Section, SubHeading } from "./section";


function Expandable() {
  const [open, setOpen] = useState(false);
  return (
    <div className="surface-solid overflow-hidden rounded-card">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="ds-expandable"
        onClick={() => setOpen((value) => !value)}
        className="type-h4 flex w-full items-center justify-between px-5 py-4 text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:ring-inset"
      >
        Expandable panel
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 transition-transform duration-(--duration-base) ease-(--ease-spring)",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        id="ds-expandable"
        className={cn(
          "grid transition-[grid-template-rows] duration-(--duration-slow) ease-(--ease-standard)",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="type-body-sm px-5 pb-4 text-muted-foreground">
            Height animates with grid rows, so it works for any content and can be interrupted
            mid-transition.
          </p>
        </div>
      </div>
    </div>
  );
}

const demoItems = [
  { label: "Home", icon: Home },
  { label: "Search", icon: Search },
  { label: "Alerts", icon: Bell },
  { label: "Profile", icon: User },
] as const;

/** Generic navigation primitives. Labels are placeholders, not product navigation. */
function NavDemo() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState<string>("Home");

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-3">
        <SubHeading>Collapsible sidebar</SubHeading>
        <div className="surface-solid flex h-64 overflow-hidden rounded-card">
          <nav
            aria-label="Sidebar demo"
            style={{ width: collapsed ? "var(--sidebar-width-collapsed)" : "12rem" }}
            className="flex shrink-0 flex-col gap-1 border-r bg-surface-secondary p-2 transition-[width] duration-(--duration-slow) ease-(--ease-standard)"
          >
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              aria-expanded={!collapsed}
              onClick={() => setCollapsed((value) => !value)}
              className="self-end"
            >
              {collapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
            </Button>
            {demoItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                aria-current={active === label ? "page" : undefined}
                title={collapsed ? label : undefined}
                onClick={() => setActive(label)}
                className={cn(
                  "type-nav flex h-10 items-center gap-3 overflow-hidden rounded-control px-3 whitespace-nowrap text-muted-foreground",
                  "transition-[background-color,color,transform] duration-(--duration-instant) ease-(--ease-standard) active:scale-[0.98]",
                  "outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/40",
                  active === label && "bg-accent text-accent-foreground",
                )}
              >
                <Icon className="size-5 shrink-0" strokeWidth={active === label ? 2 : 1.75} aria-hidden="true" />
                <span className={cn("transition-opacity duration-(--duration-fast)", collapsed && "opacity-0")}>
                  {label}
                </span>
              </button>
            ))}
          </nav>
          <div className="type-body-sm flex-1 p-4 text-muted-foreground">Content area</div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Floating bottom navigation (mobile pattern)</SubHeading>
        <div className="relative isolate flex h-64 items-end justify-center overflow-hidden rounded-card border bg-background-deep p-4">
          <div aria-hidden="true" className="absolute top-4 left-4 -z-10 size-40 rounded-full bg-nexora-teal/50 blur-3xl" />
          <div aria-hidden="true" className="absolute right-4 bottom-8 -z-10 size-40 rounded-full bg-nexora-emerald/50 blur-3xl" />
          <nav
            aria-label="Bottom navigation demo"
            className="glass flex w-full max-w-sm items-center justify-between rounded-float p-1.5"
          >
            {demoItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                aria-current={active === label ? "page" : undefined}
                onClick={() => setActive(label)}
                className={cn(
                  "flex min-h-12 min-w-14 flex-1 flex-col items-center justify-center gap-0.5 rounded-float px-2 py-1.5",
                  "type-caption text-muted-foreground outline-none",
                  "transition-[background-color,color,transform] duration-(--duration-fast) ease-(--ease-spring) active:scale-95",
                  "focus-visible:ring-[3px] focus-visible:ring-ring/40",
                  active === label && "glass-accent",
                )}
              >
                <Icon className="size-5" strokeWidth={active === label ? 2 : 1.75} aria-hidden="true" />
                {label}
              </button>
            ))}
          </nav>
        </div>
        <p className="type-caption text-foreground-subtle">
          Touch targets are at least 48px. In an app, add padding for env(safe-area-inset-bottom).
        </p>
      </div>
    </div>
  );
}

export function MotionSection() {
  return (
    <Section
      id="motion"
      eyebrow="08 / Motion"
      title="Immediate, fluid, interruptible"
      description="Feedback in 100 to 160ms, interactions in 160 to 240ms, larger transitions up to 320ms. Springs have a small overshoot and appear only where they help. Everything respects prefers-reduced-motion."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <SubHeading>Press feedback</SubHeading>
          <div className="flex flex-wrap gap-3">
            <Button>Press me</Button>
            <Button variant="outline">Press me</Button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <SubHeading>Toggle</SubHeading>
          <div className="flex items-center gap-3">
            <Switch aria-label="Demo toggle" defaultChecked={false} />
            <span className="type-body-sm text-muted-foreground">Spring thumb, colour fade</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <SubHeading>Dropdown</SubHeading>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">Open menu <ChevronDown /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>First option</DropdownMenuItem>
                <DropdownMenuItem>Second option</DropdownMenuItem>
                <DropdownMenuItem>Third option</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <SubHeading>Dialog</SubHeading>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Motion demo</DialogTitle>
                  <DialogDescription>Scale and fade in with a gentle spring, quick fade out.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <Expandable />
      <NavDemo />
    </Section>
  );
}
