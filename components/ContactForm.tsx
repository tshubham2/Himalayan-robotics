"use client";

import { useActionState } from "react";
import { sendEnquiry, type ContactState } from "@/app/contact/actions";

const INPUT =
  "mt-2 w-full rounded border border-rule bg-paper px-3 py-2.5 text-[15px] text-graphite placeholder:text-muted/70 focus:border-graphite focus:outline-none aria-[invalid=true]:border-red-700";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendEnquiry,
    { status: "idle" },
  );
  const errors = state.fieldErrors ?? {};
  const values = state.values;

  if (state.status === "sent") {
    return (
      <div role="status" className="rounded border border-rule bg-steel p-8">
        <h3 className="display text-xl font-bold">Enquiry sent</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Thanks — we have your brief and will reply within one business day.
          For a breakdown, call the hotline instead of waiting on email.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="rounded border border-rule bg-steel p-6 sm:p-8">
      <h3 className="display text-xl font-bold">Send us a brief</h3>
      <p className="mt-2 text-sm text-muted">
        Tell us what you need. Include robot model and fault code if it is a
        breakdown.
      </p>

      <div className="mt-6 space-y-5">
        <Field id="name" label="Your name" error={errors.name}>
          <input name="name" defaultValue={values?.name} type="text" autoComplete="name" required placeholder="Full name"
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={INPUT} />
        </Field>
        <Field id="company" label="Company">
          <input name="company" defaultValue={values?.company} type="text" autoComplete="organization" placeholder="Plant name, city" className={INPUT} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input name="email" defaultValue={values?.email} type="email" autoComplete="email" required placeholder="you@company.com"
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={INPUT} />
        </Field>
        <Field id="message" label="Message" error={errors.message}>
          <textarea name="message" defaultValue={values?.message} rows={4} required placeholder="Brief description of the requirement…"
            aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className={INPUT} />
        </Field>

        {/* Honeypot for bots; hidden from people and screen readers. */}
        <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded bg-signal px-5 py-3 text-sm font-semibold text-graphite transition-colors hover:bg-signal-hover disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending enquiry…" : "Send enquiry"}
        </button>

        <p aria-live="polite" className="text-sm">
          {state.status === "error" ? (
            <span className="font-medium text-red-800">{state.message}</span>
          ) : (
            <span className="text-muted">We acknowledge every enquiry within one business day.</span>
          )}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      {children}
      {error && (
        <span id={`${id}-error`} className="mt-1.5 block text-sm text-red-800">
          {error}
        </span>
      )}
    </label>
  );
}
