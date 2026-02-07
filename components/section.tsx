import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-3">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p> : null}
        <h2 className="font-serif text-3xl text-text sm:text-4xl">{title}</h2>
        {description ? <p className="max-w-2xl text-sm leading-relaxed text-text/70">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
