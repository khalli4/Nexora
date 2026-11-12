import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-t py-(--section-gap) first:border-t-0"
    >
      <p className="type-eyebrow text-accent-foreground">{eyebrow}</p>
      <h2 id={`${id}-title`} className="type-h2 mt-2">
        {title}
      </h2>
      {description ? (
        <p className="type-body mt-3 max-w-2xl text-muted-foreground">{description}</p>
      ) : null}
      <div className="mt-8 flex flex-col gap-8">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="type-h4 text-foreground">{children}</h3>;
}

export function TokenLabel({ children }: { children: ReactNode }) {
  return <span className="type-meta text-foreground-subtle">{children}</span>;
}
