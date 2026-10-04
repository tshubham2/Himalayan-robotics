import { SITE } from "@/lib/site";

// The breakdown hotline — the one place the hazard band appears on the site.
export function Hotline({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded bg-graphite text-paper ${className}`}>
      <div className="hazard h-2" aria-hidden />
      <div className="p-6 sm:p-7">
        <p className="text-sm font-medium text-paper/70">Line down? Breakdown hotline, 24/7</p>
        <a
          href={SITE.phoneHref}
          className="display mt-2 block text-3xl font-bold text-signal hover:text-signal-hover sm:text-4xl"
        >
          {SITE.phone}
        </a>
        <p className="mt-3 text-sm leading-relaxed text-paper/70">
          Have the robot model and fault code ready when you call.
        </p>
      </div>
    </div>
  );
}
