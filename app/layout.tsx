import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Himalayan Robotics — Industrial Automation Services",
    template: "%s · Himalayan Robotics",
  },
  description:
    "Robotics, PLC engineering, automation upgrades, and 24/7 breakdown support for India's manufacturers.",
  keywords: [
    "industrial automation",
    "robot programming",
    "PLC programming",
    "preventive maintenance",
    "OEE improvement",
    "Industry 4.0",
    "Himalayan Robotics",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="bg-paper font-sans text-graphite antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
