import { Section, SubHeading, TokenLabel } from "./section";

const scale = [
  { name: "type-display", sample: "Intelligence in motion", className: "type-display" },
  { name: "type-h1", sample: "Page heading", className: "type-h1" },
  { name: "type-h2", sample: "Section heading", className: "type-h2" },
  { name: "type-h3", sample: "Subsection heading", className: "type-h3" },
  { name: "type-h4", sample: "Card heading", className: "type-h4" },
] as const;

export function TypographySection() {
  return (
    <Section
      id="typography"
      eyebrow="04 / Typography"
      title="Geist Sans and Geist Mono"
      description="One family, a clear hierarchy. Headings use tight tracking and weight 600; body copy stays at regular weight with generous line height. Display and page headings scale fluidly."
    >
      <div className="surface-solid flex flex-col divide-y rounded-card px-5">
        {scale.map((item) => (
          <div key={item.name} className="flex flex-col gap-1 py-5">
            <TokenLabel>{item.name}</TokenLabel>
            <p className={item.className}>{item.sample}</p>
          </div>
        ))}
        <div className="flex flex-col gap-1 py-5">
          <TokenLabel>type-body-lg</TokenLabel>
          <p className="type-body-lg">
            Large body copy introduces a page or section and carries the main message.
          </p>
        </div>
        <div className="flex flex-col gap-1 py-5">
          <TokenLabel>type-body</TokenLabel>
          <p className="type-body">
            Standard body copy for reading. It keeps a 1.6 line height so long passages stay
            comfortable on small screens.
          </p>
        </div>
        <div className="flex flex-col gap-1 py-5">
          <TokenLabel>type-body-sm</TokenLabel>
          <p className="type-body-sm text-muted-foreground">
            Secondary body copy for descriptions, helper text and dense interface content.
          </p>
        </div>
        <div className="flex flex-col gap-1 py-5">
          <TokenLabel>type-label / type-caption / type-eyebrow</TokenLabel>
          <p className="type-label">Field label</p>
          <p className="type-caption text-muted-foreground">Caption and supporting detail</p>
          <p className="type-eyebrow text-accent-foreground">Eyebrow</p>
        </div>
        <div className="flex flex-col gap-1 py-5">
          <TokenLabel>type-button / type-nav</TokenLabel>
          <p className="type-button">Button label</p>
          <p className="type-nav">Navigation item</p>
        </div>
        <div className="flex flex-col gap-1 py-5">
          <TokenLabel>type-meta (Geist Mono, tabular figures)</TokenLabel>
          <p className="type-meta">REF-2048 / 12 Nov 2026 / 1,284.50</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SubHeading>Table and metadata</SubHeading>
        <div className="surface-solid overflow-x-auto rounded-card">
          <table className="type-body-sm w-full min-w-[28rem] text-left">
            <thead className="bg-surface-secondary">
              <tr>
                <th scope="col" className="type-label px-4 py-3">Identifier</th>
                <th scope="col" className="type-label px-4 py-3">Label</th>
                <th scope="col" className="type-label px-4 py-3 text-right">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                ["ID-0001", "Sample row", "1,204"],
                ["ID-0002", "Sample row", "86"],
                ["ID-0003", "Sample row", "9,310"],
              ].map(([id, label, value]) => (
                <tr key={id}>
                  <td className="type-meta px-4 py-3 text-muted-foreground">{id}</td>
                  <td className="px-4 py-3">{label}</td>
                  <td className="type-meta px-4 py-3 text-right">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
