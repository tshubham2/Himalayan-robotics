import type { Metadata } from "next";
import { Clients } from "@/components/Clients";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "On the line at plants you already know — automotive, two-wheeler, and FMCG manufacturers across India.",
};

export default function ClientsPage() {
  return (
    <main className="relative min-h-screen">
      <Clients level="h1" />
    </main>
  );
}
