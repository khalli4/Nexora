import { Section, SubHeading, TokenLabel } from "./section";

type Swatch = { token: string; className: string };

const brand: Swatch[] = [
  { token: "nexora-emerald", className: "bg-nexora-emerald" },
  { token: "nexora-teal", className: "bg-nexora-teal" },
  { token: "nexora-mint", className: "bg-nexora-mint" },
  { token: "nexora-navy", className: "bg-nexora-navy" },
  { token: "nexora-graphite", className: "bg-nexora-graphite" },
  { token: "nexora-cloud", className: "bg-nexora-cloud" },
];

const surfaces: Swatch[] = [
  { token: "background-deep", className: "bg-background-deep" },
  { token: "background", className: "bg-background" },
  { token: "surface", className: "bg-surface" },
  { token: "surface-secondary", className: "bg-surface-secondary" },
  { token: "surface-elevated", className: "bg-surface-elevated" },
  { token: "card", className: "bg-card" },
  { token: "popover", className: "bg-popover" },
  { token: "muted", className: "bg-muted" },
];

const interactive: Swatch[] = [
  { token: "primary", className: "bg-primary" },
  { token: "primary-hover", className: "bg-primary-hover" },
  { token: "secondary", className: "bg-secondary" },
  { token: "accent", className: "bg-accent" },
  { token: "border", className: "bg-border" },
  { token: "input", className: "bg-input" },
  { token: "ring", className: "bg-ring" },
];

const status: Swatch[] = [
  { token: "destructive", className: "bg-destructive" },
  { token: "success", className: "bg-success" },
  { token: "warning", className: "bg-warning" },
  { token: "info", className: "bg-info" },
];

const charts: Swatch[] = [
  { token: "chart-1", className: "bg-chart-1" },
  { token: "chart-2", className: "bg-chart-2" },
  { token: "chart-3", className: "bg-chart-3" },
  { token: "chart-4", className: "bg-chart-4" },
  { token: "chart-5", className: "bg-chart-5" },
];

function SwatchGrid({ items }: { items: Swatch[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.token} className="flex flex-col gap-2">
          <div className={`${item.className} h-16 rounded-card border`} />
          <TokenLabel>{item.token}</TokenLabel>
        </li>
      ))}
    </ul>
  );
}

export function ColourSection() {
  return (
    <Section
      id="colour"
      eyebrow="03 / Colour"
      title="Layered teal on deep navy"
      description="Deep emerald carries authority, vibrant teal drives interaction, soft mint adds selective light. Components use semantic tokens only. Swatches follow the active page theme."
    >
      <div className="flex flex-col gap-3">
        <SubHeading>Brand palette (theme independent)</SubHeading>
        <SwatchGrid items={brand} />
        <p className="type-body-sm text-muted-foreground">
          Vibrant teal does not reach 4.5:1 as text on light surfaces, so the light theme uses
          deep emerald for text, fills and focus rings and keeps teal for fills carrying navy text.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Surface hierarchy</SubHeading>
        <SwatchGrid items={surfaces} />
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Text hierarchy</SubHeading>
        <div className="surface-solid flex flex-col gap-2 rounded-card p-5">
          <p className="type-h3 text-foreground">Primary text: foreground</p>
          <p className="type-body text-muted-foreground">Secondary text: muted-foreground</p>
          <p className="type-body-sm text-foreground-subtle">Metadata and placeholders: foreground-subtle</p>
          <p className="type-body-sm text-accent-foreground">Accent text: accent-foreground</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Interactive and lines</SubHeading>
        <SwatchGrid items={interactive} />
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Status</SubHeading>
        <SwatchGrid items={status} />
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Data visualisation (only where needed)</SubHeading>
        <SwatchGrid items={charts} />
      </div>

      <p className="type-body-sm text-muted-foreground">
        Contrast is verified for both themes with <span className="type-meta">npm run check:contrast</span>.
      </p>
    </Section>
  );
}
