import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Line down? Project starting? Call the engineers. Breakdown hotline, project enquiries, and site-visit requests.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Contact level="h1" />
    </main>
  );
}
