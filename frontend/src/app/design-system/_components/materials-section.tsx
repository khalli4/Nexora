import type { ReactNode } from "react";
import { Section, SubHeading } from "./section";

/** Colourful backdrop so translucency is visible. Decorative only. */
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden rounded-panel border bg-background-deep p-6">
      <div aria-hidden="true" className="absolute -top-10 -left-10 -z-10 size-64 rounded-full bg-nexora-teal/60 blur-3xl" />
      <div aria-hidden="true" className="absolute right-0 bottom-0 -z-10 size-72 rounded-full bg-nexora-emerald/60 blur-3xl" />
      <div aria-hidden="true" className="absolute top-1/3 left-1/2 -z-10 size-48 rounded-full bg-nexora-mint/50 blur-3xl" />
      {children}
    </div>
  );
}

export function MaterialsSection() {
  return (
    <Section
      id="materials"
      eyebrow="06 / Materials"
      title="Solid, elevated, glass and accent glass"
      description="Glass is selective: navigation, floating controls and overlays. Forms, tables and reading areas stay solid. Use the Glass switch in the header to see everything fall back to opaque surfaces."
    >
      <Stage>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="surface-solid rounded-card p-5">
            <SubHeading>A. Solid</SubHeading>
            <p className="type-body-sm mt-1 text-muted-foreground">Forms, tables, dense content, reading areas.</p>
          </div>
          <div className="surface-raised rounded-card p-5 shadow-raised">
            <SubHeading>B. Elevated</SubHeading>
            <p className="type-body-sm mt-1 text-muted-foreground">Cards, menus, contextual panels.</p>
          </div>
          <div className="glass rounded-panel p-5">
            <SubHeading>C. Translucent glass</SubHeading>
            <p className="type-body-sm mt-1 text-muted-foreground">Navigation, floating controls, toolbars, overlays.</p>
          </div>
          <div className="glass-accent rounded-panel p-5">
            <SubHeading>D. Accent glass</SubHeading>
            <p className="type-body-sm mt-1">Selected controls and rare brand moments.</p>
          </div>
        </div>
      </Stage>

      <ul className="type-body-sm flex list-disc flex-col gap-1 pl-5 text-muted-foreground">
        <li>Each theme has one consistent glass tint; it does not pick up arbitrary background colours.</li>
        <li>Opaque fallbacks apply without backdrop-filter support, with reduced transparency, or when glass is off.</li>
        <li>Never place glass behind dense text or complex forms.</li>
      </ul>
    </Section>
  );
}
