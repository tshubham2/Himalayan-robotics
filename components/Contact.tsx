import { SITE } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Hotline } from "./Hotline";

export function Contact({ level = "h2" }: { level?: "h1" | "h2" }) {
  const Heading = level;
  return (
    <section id="contact" className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Heading className="display text-3xl font-bold leading-tight sm:text-4xl">
              Speak with an engineer.
            </Heading>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              For breakdowns, call us directly. For project enquiries, write to
              us and we will respond within one business day.
            </p>

            <Hotline className="mt-10" />

            <dl className="mt-10 space-y-7">
              <div>
                <dt className="text-sm text-muted">Project enquiries</dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="text-lg font-semibold underline decoration-rule decoration-2 underline-offset-4 hover:decoration-signal">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Base of operations</dt>
                <dd className="mt-1 text-base">
                  {SITE.base}
                  <span className="block text-sm text-muted">{SITE.rotation}</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
