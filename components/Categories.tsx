const CATEGORIES = [
  {
    title: "Installation & Commissioning",
    desc: "From foundation work to first cycle — new robots, retrofits, and integrated cells brought online cleanly.",
  },
  {
    title: "Programming & Modification",
    desc: "Robot code, PLC logic, HMI screens, and drive configuration that your in-house team can read and maintain.",
  },
  {
    title: "Breakdown & Troubleshooting",
    desc: "On-call engineers who reach site quickly and resolve to root cause rather than treating symptoms.",
  },
  {
    title: "Preventive Maintenance",
    desc: "Scheduled health checks for robots, panels, and cells. Catch the failure before the line does.",
  },
  {
    title: "Automation Upgradation",
    desc: "Manual-to-automatic conversions, line balancing, OEE projects, and process re-engineering.",
  },
  {
    title: "Training & Consultancy",
    desc: "Hands-on programs for operators and maintenance teams. Your organisation owns the line after we leave.",
  },
];

export function Categories({ level = "h2" }: { level?: "h1" | "h2" }) {
  const Heading = level;
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Heading className="display text-3xl font-bold leading-tight sm:text-4xl">
              Six disciplines, one engineering team on your floor.
            </Heading>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              We organise the work around how a plant actually consumes it — from
              first install through long-tail training — so procurement, projects,
              and maintenance can each engage us cleanly.
            </p>
          </div>

          <ul className="grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:col-span-8">
            {CATEGORIES.map((c) => (
              <li key={c.title} className="border-b border-rule py-7 sm:odd:pr-8 sm:even:border-l sm:even:pl-8">
                <h3 className="text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
