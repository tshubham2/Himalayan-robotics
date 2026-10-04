import type { Metadata } from "next";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seven domains, forty-plus discrete deliverables — robot support, PLC and electrical, production improvement, safety, Industry 4.0, training, and mechanical integration.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Services level="h1" />
    </main>
  );
}
