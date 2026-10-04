const CLIENTS = [
  "Tata Motors",
  "Mahindra & Mahindra",
  "Hero MotoCorp",
  "Colgate-Palmolive",
];

export function Clients({ level = "h2" }: { level?: "h1" | "h2" }) {
  const Heading = level;
  return (
    <section className="border-b border-rule bg-graphite text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-20">
        <Heading className="text-base font-medium text-paper/70">
          Supporting production teams at
        </Heading>
        <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENTS.map((c) => (
            <li key={c} className="display border-l-2 border-signal pl-4 text-xl font-bold md:text-2xl">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
