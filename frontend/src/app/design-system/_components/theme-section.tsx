import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "./section";

function ThemeSample({ theme }: { theme: "light" | "dark" }) {
  const id = `sample-${theme}`;
  return (
    <div
      className={`${theme} flex-1 rounded-panel border bg-background p-5 text-foreground`}
      role="group"
      aria-label={`${theme} theme preview`}
    >
      <p className="type-eyebrow mb-4 text-accent-foreground">
        {theme === "light" ? "Light: clarity with authority" : "Dark: depth with intelligence"}
      </p>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle>Sample card</CardTitle>
            <Badge variant="success">Active</Badge>
          </div>
          <CardDescription>Surface, text hierarchy and accent in context.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor={id}>Email</Label>
            <Input id={id} placeholder="name@company.com" />
          </div>
          <p className="type-caption text-foreground-subtle">Metadata uses the subtle text tone.</p>
        </CardContent>
        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </Card>
    </div>
  );
}

export function ThemeSection() {
  return (
    <Section
      id="themes"
      eyebrow="02 / Themes"
      title="Two themes, designed independently"
      description="Both are always shown here regardless of your current setting. Use the switch in the header to change the page theme (light, system or dark). The choice persists and applies before first paint."
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <ThemeSample theme="light" />
        <ThemeSample theme="dark" />
      </div>
    </Section>
  );
}
