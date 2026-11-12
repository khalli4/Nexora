import { Section, SubHeading, TokenLabel } from "./section";

const spacing = [
  ["1 / 4px", "w-1"],
  ["2 / 8px", "w-2"],
  ["3 / 12px", "w-3"],
  ["4 / 16px", "w-4"],
  ["6 / 24px", "w-6"],
  ["8 / 32px", "w-8"],
  ["12 / 48px", "w-12"],
  ["16 / 64px", "w-16"],
] as const;

const radii = [
  ["control-sm 8px", "rounded-control-sm"],
  ["control 10px", "rounded-control"],
  ["control-lg 12px", "rounded-control-lg"],
  ["menu 12px", "rounded-menu"],
  ["card 16px", "rounded-card"],
  ["panel 20px", "rounded-panel"],
  ["float 24px", "rounded-float"],
  ["full", "rounded-full"],
] as const;

const elevations = [
  ["shadow-raised", "shadow-raised"],
  ["shadow-float", "shadow-float"],
  ["shadow-overlay", "shadow-overlay"],
] as const;

export function GeometrySection() {
  return (
    <Section
      id="geometry"
      eyebrow="05 / Geometry"
      title="Spacing, radius, borders and elevation"
      description="A 4px spacing foundation. Radii differ by role so the interface is not a field of identical rounded rectangles: controls are tight, cards softer, floating elements the softest, badges and avatars fully round."
    >
      <div className="flex flex-col gap-3">
        <SubHeading>Spacing (4px base)</SubHeading>
        <ul className="flex flex-col gap-2">
          {spacing.map(([label, width]) => (
            <li key={label} className="flex items-center gap-3">
              <div className={`${width} h-3 rounded-sm bg-primary`} />
              <TokenLabel>{label}</TokenLabel>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Radius</SubHeading>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {radii.map(([label, cls]) => (
            <li key={label} className="flex flex-col gap-2">
              <div className={`${cls} surface-solid h-20 bg-surface-secondary`} />
              <TokenLabel>{label}</TokenLabel>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Borders</SubHeading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-card border bg-surface p-4"><TokenLabel>border (hairline, decorative)</TokenLabel></div>
          <div className="rounded-card border border-input bg-surface p-4"><TokenLabel>border-input (3:1 control edge)</TokenLabel></div>
          <div className="rounded-card border-2 border-ring bg-surface p-4"><TokenLabel>border-2 border-ring (focus)</TokenLabel></div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Elevation</SubHeading>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {elevations.map(([label, cls]) => (
            <li key={label} className="flex flex-col gap-2">
              <div className={`${cls} surface-raised h-24 rounded-card`} />
              <TokenLabel>{label}</TokenLabel>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
