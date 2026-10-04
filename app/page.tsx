import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Categories />
      <Services />
      <Clients />
      <Process />
      <Contact />
    </main>
  );
}
