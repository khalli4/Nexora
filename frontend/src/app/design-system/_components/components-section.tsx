"use client";

import { useState, type ReactNode } from "react";
import { Bell, Check, ChevronDown, Search, Settings, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Section, SubHeading, TokenLabel } from "./section";

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <SubHeading>{title}</SubHeading>
      {children}
    </div>
  );
}

export function ComponentsSection() {
  const [loading, setLoading] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  function simulateLoad() {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1600);
  }

  return (
    <Section
      id="components"
      eyebrow="07 / Components"
      title="Foundational components"
      description="Ten shadcn/ui based primitives restyled with Nexora tokens. Accessible by default: Radix behaviour, visible focus, labelled icon buttons."
    >
      <Group title="Button: variants">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="glass">Glass</Button>
        </div>
      </Group>

      <Group title="Button: states and sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button loading={loading} onClick={simulateLoad}>
            {loading ? "Saving" : "Click to load"}
          </Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" variant="outline" aria-label="Search">
            <Search />
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Notifications">
            <Bell />
          </Button>
        </div>
      </Group>

      <Group title="Input and label">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-default">Default</Label>
            <Input id="ds-default" placeholder="Placeholder text" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-focus">Focus (click or tab into it)</Label>
            <Input id="ds-focus" defaultValue="Focus ring uses ring token" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-invalid">Invalid</Label>
            <Input
              id="ds-invalid"
              aria-invalid="true"
              aria-describedby="ds-invalid-msg"
              defaultValue="not-an-email"
            />
            <p id="ds-invalid-msg" className="type-caption text-destructive">
              Enter a valid email address.
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-disabled">Disabled</Label>
            <Input id="ds-disabled" disabled defaultValue="Unavailable" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ds-readonly">Read-only</Label>
            <Input id="ds-readonly" readOnly defaultValue="Read-only value" />
          </div>
        </div>
      </Group>

      <Group title="Card variants">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {(["solid", "elevated", "inset"] as const).map((variant) => (
            <Card key={variant} variant={variant}>
              <CardHeader>
                <CardTitle className="capitalize">{variant}</CardTitle>
                <CardDescription>Card variant: {variant}.</CardDescription>
              </CardHeader>
              <CardContent>Body content sits here.</CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">Action</Button>
              </CardFooter>
            </Card>
          ))}
          <div className="relative isolate overflow-hidden rounded-panel bg-background-deep p-3">
            <div aria-hidden="true" className="absolute -top-8 -right-8 -z-10 size-40 rounded-full bg-nexora-teal/60 blur-2xl" />
            <Card variant="glass">
              <CardHeader>
                <CardTitle>Glass</CardTitle>
                <CardDescription>Floating contexts only.</CardDescription>
              </CardHeader>
              <CardContent>Short content only.</CardContent>
            </Card>
          </div>
        </div>
      </Group>

      <Group title="Badge">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Neutral</Badge>
          <Badge variant="brand">Brand</Badge>
          <Badge variant="success"><Check aria-hidden="true" />Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="info">Informational</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Group>

      <Group title="Avatar, separator and skeleton">
        <div className="flex flex-wrap items-center gap-4">
          <Avatar size="sm"><AvatarFallback>AB</AvatarFallback></Avatar>
          <Avatar size="md"><AvatarFallback>CD</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback>EF</AvatarFallback></Avatar>
          <Separator orientation="vertical" className="h-10" />
          <div className="flex flex-col gap-2" role="status" aria-label="Loading example">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <Separator />
      </Group>

      <Group title="Dialog and dropdown menu">
        <div className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogDescription>
                  Focus is trapped, Escape closes, and focus returns to the trigger.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="ds-dialog-input">Name</Label>
                <Input id="ds-dialog-input" placeholder="Type here" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button>Confirm</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Menu <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Sample menu</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Settings aria-hidden="true" /> Settings <DropdownMenuShortcut>S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuCheckboxItem
                  checked={showArchived}
                  onCheckedChange={setShowArchived}
                >
                  Show archived
                </DropdownMenuCheckboxItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>
                <Trash2 aria-hidden="true" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Group>

      <Group title="Iconography (Lucide)">
        <div className="surface-solid flex flex-wrap items-end gap-6 rounded-card p-5">
          {[16, 20, 24].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Bell size={size} strokeWidth={1.75} aria-hidden="true" />
              <TokenLabel>{size}px</TokenLabel>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2">
            <Bell className="size-5 text-accent-foreground" strokeWidth={2} aria-hidden="true" />
            <TokenLabel>active</TokenLabel>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Bell className="size-5 text-foreground-subtle" strokeWidth={1.75} aria-hidden="true" />
            <TokenLabel>inactive</TokenLabel>
          </div>
        </div>
        <p className="type-body-sm text-muted-foreground">
          16, 20 or 24px; stroke 1.75 (2 when active); icon-only buttons always carry an aria-label.
        </p>
      </Group>
    </Section>
  );
}
