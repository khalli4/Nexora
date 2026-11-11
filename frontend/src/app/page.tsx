import { Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-accent">
        <Sparkles className="size-6" aria-hidden="true" />
      </span>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Nexora
      </h1>
      <p className="max-w-md text-muted-foreground">
        AI-powered recruitment and talent assessment. The foundation is in
        place; features are coming soon.
      </p>
    </main>
  );
}
