const STEPS = [
  {
    name: "Site assessment",
    detail:
      "Our engineers walk the floor, review the panel schematics, and observe production cycles. The first scoping visit within NCR is at no charge.",
  },
  {
    name: "Diagnosis",
    detail:
      "We identify the actual root cause and document it in plain English — including a recommended remediation path.",
  },
  {
    name: "Deployment",
    detail:
      "Engineers on-site with the right hardware, current backups, and a rollback plan. Changes are documented as we go.",
  },
  {
    name: "Stabilisation",
    detail:
      "We observe the line across several shifts to ensure the fix holds under real production load, not just on a test stand.",
  },
  {
    name: "Handover",
    detail:
      "Your maintenance team receives the SOPs, backup files, and a short training so they fully own the line after we leave.",
  },
];

export function Process({ level = "h2" }: { level?: "h1" | "h2" }) {
  const Heading = level;
  return (
    <section className="border-b border-rule bg-steel">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <Heading className="display text-3xl font-bold leading-tight sm:text-4xl">
            How a project actually runs.
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Whether it is a breakdown call or a six-month OEE programme, the
            shape of the work is the same. You always know what we are doing
            on the floor.
          </p>
        </div>

        {/* A real sequence, so the steps are numbered and joined by a line. */}
        <ol className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.name} className="relative pl-14 lg:pl-0 lg:pt-14">
              <span
                aria-hidden
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-graphite bg-paper text-sm font-bold"
              >
                {i + 1}
              </span>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-5 top-12 h-[calc(100%-1rem)] w-0.5 bg-rule lg:left-12 lg:top-5 lg:h-0.5 lg:w-[calc(100%-1.5rem)]"
                />
              )}
              <h3 className="text-base font-bold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
