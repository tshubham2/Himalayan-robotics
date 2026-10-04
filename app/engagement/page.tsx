import type { Metadata } from "next";
import { Process } from "@/components/Process";

export const metadata: Metadata = {
  title: "Engagement",
  description:
    "How a project actually runs at Himalayan Robotics — site assessment, diagnosis, deployment, stabilisation, and handover.",
};

export default function EngagementPage() {
  return (
    <main className="relative min-h-screen">
      <Process level="h1" />
    </main>
  );
}
