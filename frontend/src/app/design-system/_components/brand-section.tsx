import { NexoraMark } from "@/components/brand/nexora-mark";
import { Badge } from "@/components/ui/badge";
import { Section, SubHeading } from "./section";

const traits = [
  "Intelligence",
  "Forward movement",
  "Institutional credibility",
  "Precision",
  "Trustworthiness",
  "Confidence without arrogance",
];

function Lockup({ theme }: { theme: "light" | "dark" }) {
  return (
    <div
      className={`${theme} flex flex-1 items-center gap-3 rounded-panel border bg-background p-6 text-foreground`}
    >
      <NexoraMark className="size-12" />
      <span className="type-h2 tracking-[0.18em]">NEXORA</span>
    </div>
  );
}

export function BrandSection() {
  return (
    <Section
      id="brand"
      eyebrow="01 / Brand"
      title="Executive authority, intelligent innovation"
      description="Brand personality: quietly powerful. Refined minimalism that stays recognisable with every decorative effect removed."
    >
      <div className="flex flex-wrap gap-2">
        {traits.map((trait) => (
          <Badge key={trait} variant="outline">
            {trait}
          </Badge>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Mark and wordmark (concept placeholder)</SubHeading>
        <div className="flex flex-col gap-4 md:flex-row">
          <Lockup theme="light" />
          <Lockup theme="dark" />
        </div>
        <p className="type-body-sm text-muted-foreground">
          This is a restrained concept, not the final logo. The custom N monogram, wordmark,
          horizontal lockup, compact icon and monochrome versions are deferred. Working
          tagline for exploration only: &ldquo;Intelligence in motion.&rdquo;
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Monochrome check</SubHeading>
        <div className="flex gap-4">
          <div className="light flex size-24 items-center justify-center rounded-card border bg-background text-foreground">
            <NexoraMark tone="mono" className="size-12" />
          </div>
          <div className="dark flex size-24 items-center justify-center rounded-card border bg-background text-foreground">
            <NexoraMark tone="mono" className="size-12" />
          </div>
        </div>
      </div>
    </Section>
  );
}
