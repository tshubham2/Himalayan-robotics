"use server";

import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  // Echoed back so the form can refill itself; React resets fields after an action.
  values?: Record<"name" | "company" | "email" | "message", string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(form: FormData, key: string, max: number) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function sendEnquiry(
  _prev: ContactState,
  form: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(form, "website", 200)) return { status: "sent" };

  const name = field(form, "name", 120);
  const company = field(form, "company", 160);
  const email = field(form, "email", 200);
  const message = field(form, "message", 5000);

  const values = { name, company, email, message };

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Enter your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (message.length < 10) fieldErrors.message = "Describe the requirement in a sentence or two.";
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Check the highlighted fields.", fieldErrors, values };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP_HOST, SMTP_USER and SMTP_PASS must be set.");
    return {
      status: "error",
      message: `The enquiry could not be sent. Email us directly at ${SITE.email}.`,
      values,
    };
  }

  const port = Number(SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  // Names are single-line in headers; strip anything that could break one.
  const safeName = name.replace(/[\r\n]+/g, " ");

  try {
    await transporter.sendMail({
      from: { name: `${SITE.name} website`, address: MAIL_FROM || SMTP_USER },
      to: MAIL_TO || SITE.email,
      replyTo: { name: safeName, address: email },
      subject: `Website enquiry from ${safeName}${company ? ` (${company.replace(/[\r\n]+/g, " ")})` : ""}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || "-"}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Contact form: SMTP send failed", err);
    return {
      status: "error",
      message: `The enquiry could not be sent. Try again, or email us at ${SITE.email}.`,
      values,
    };
  }

  return { status: "sent" };
}
