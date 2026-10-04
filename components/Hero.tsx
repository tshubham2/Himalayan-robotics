import Link from "next/link";
import Image from "next/image";
import { Hotline } from "./Hotline";

const STATS = [
  { value: "< 4 hrs", label: "Response time" },
  { value: "40+", label: "Plants supported" },
  { value: "up to 18%", label: "Typical OEE uplift" },
];

export function Hero() {
  return (
    <section className="border-b border-rule bg-steel">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-14 pt-12 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:pb-16 lg:pt-16">
        <div className="lg:col-span-7">
          <h1 className="display text-[2.25rem] font-extrabold leading-[1.05] [font-stretch:105%] sm:text-5xl">
            Robotics and automation engineering for India&apos;s manufacturers.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            We program robots, build control systems, run preventive maintenance,
            and respond when the line goes down — for plants that can&apos;t afford
            an idle minute.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded bg-signal px-5 py-3 text-sm font-semibold text-graphite transition-colors hover:bg-signal-hover"
            >
              Request a consultation
            </Link>
            <Link
              href="/services"
              className="rounded border border-graphite/25 px-5 py-3 text-sm font-semibold text-graphite transition-colors hover:border-graphite"
            >
              Explore services
            </Link>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-5 border-t border-rule pt-6 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                <dd className="display text-3xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <Image
            src="/images/hero.jpg"
            alt="Robotic arms spray-painting a car body on an automated paint line"
            width={850}
            height={567}
            priority
            unoptimized
            className="h-auto w-full rounded border border-rule"
          />
          <Hotline />
        </div>
      </div>
    </section>
  );
}
