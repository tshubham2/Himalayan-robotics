type Domain = {
  title: string;
  summary: string;
  items: string[];
};

const DOMAINS: Domain[] = [
  {
    title: "Robot & Automation Support",
    summary:
      "End-to-end care for industrial robots — from the first power-on to urgent breakdown response.",
    items: [
      "Robot installation & commissioning",
      "Teach pendant support",
      "Calibration & mastering",
      "Backup & restore",
      "Cycle time improvement",
      "Path optimization",
      "Preventive maintenance",
      "Breakdown support on urgent call",
      "Robot reprogramming",
    ],
  },
  {
    title: "PLC & Electrical Services",
    summary:
      "Control panels, drives, and sensors — the wiring under every reliable cell.",
    items: [
      "PLC programming",
      "PLC panel modification",
      "HMI programming & screen development",
      "Servo drive setup & tuning",
      "VFD / drive troubleshooting",
      "Sensor replacement & setup",
      "Electrical panel troubleshooting",
      "I/O checking & validation",
    ],
  },
  {
    title: "Production Improvement",
    summary:
      "Recover capacity from the line you already have.",
    items: [
      "Line balancing support",
      "OEE improvement projects",
      "Downtime reduction projects",
      "Productivity improvement studies",
      "Process automation consultancy",
      "Manual to automatic conversion",
      "New automation feasibility",
    ],
  },
  {
    title: "Safety & Compliance",
    summary:
      "Safer cells, validated stops, and audits that hold up under customer walkthroughs.",
    items: [
      "Safety interlock checking",
      "Emergency stop validation",
      "Safety PLC support",
      "Machine safety improvement",
      "Risk assessment input",
    ],
  },
  {
    title: "Industry 4.0 / Smart Factory",
    summary:
      "Pull live data out of the line and put it where the plant head can act on it.",
    items: [
      "Production monitoring systems",
      "Data logging solutions",
      "Alarm monitoring systems",
      "Remote troubleshooting support",
      "IoT-based automation solutions",
    ],
  },
  {
    title: "Training Services",
    summary:
      "Practical programmes so your team owns the line after we leave.",
    items: [
      "Operator training for robots",
      "PLC basics for maintenance teams",
      "Automation troubleshooting training",
      "Robot preventive maintenance training",
    ],
  },
  {
    title: "Mechanical & Integration",
    summary:
      "The integration work that decides whether a project finishes on schedule.",
    items: [
      "Pneumatic troubleshooting",
      "Conveyor automation support",
      "Fixture automation improvement",
      "Integration of new machines with existing systems",
    ],
  },
];

export function Services({ level = "h2" }: { level?: "h1" | "h2" }) {
  const Heading = level;
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <Heading className="display text-3xl font-bold leading-tight sm:text-4xl">
            The complete scope, organised for procurement.
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Seven domains, more than forty discrete deliverables. Engage us for a
            single sensor replacement on a night shift, or for a multi-month line
            improvement programme.
          </p>
        </div>

        <div className="mt-14 border-t-2 border-graphite">
          {DOMAINS.map((d) => (
            <article
              key={d.title}
              className="grid grid-cols-1 gap-5 border-b border-rule py-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-4">
                <h3 className="text-xl font-bold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.summary}</p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-[15px] sm:grid-cols-2 lg:col-span-8 lg:pt-1">
                {d.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-signal ring-1 ring-graphite" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
