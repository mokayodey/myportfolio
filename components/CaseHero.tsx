export type MetaFact = { label: string; value: string };

export default function CaseHero({
  eyebrow,
  title,
  intro,
  facts,
  id,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  facts: MetaFact[];
  id?: string;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-24 border-b border-ink/12 px-4 pb-12 pt-14 sm:px-5 md:px-14 md:pb-12 md:pt-20"
    >
      <div className="mb-5 text-[13px] font-semibold uppercase leading-none tracking-[.14em] text-accent">
        {eyebrow}
      </div>
      <h1 className="m-0 max-w-[900px] font-archivo-expanded text-[27px] font-extrabold leading-[1.12] tracking-[-.01em] sm:text-4xl md:text-[56px] md:leading-[1.08]">
        {title}
      </h1>
      <p className="mt-6 max-w-[680px] text-base font-normal leading-relaxed text-ink/72 md:mt-7 md:text-lg">
        {intro}
      </p>
      <div className="mt-8 flex flex-wrap gap-6 border-t border-ink/14 py-6 md:mt-11 md:gap-8">
        {facts.map((f) => (
          <div key={f.label}>
            <div className="mb-2 text-[11px] font-medium uppercase leading-none tracking-[.08em] text-ink/50">
              {f.label}
            </div>
            <div className="text-sm font-semibold">{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
