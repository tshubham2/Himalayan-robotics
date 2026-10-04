import type { Metadata } from "next";
import { Categories } from "@/components/Categories";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Six disciplines organised around how a plant actually consumes them — installation, programming, breakdown, preventive maintenance, upgradation, and training.",
};

export default function CapabilitiesPage() {
  return (
    <main className="relative min-h-screen">
      <Categories level="h1" />
    </main>
  );
}
