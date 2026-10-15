import type { Metadata } from "next";
import { QatarLanding } from "@/components/marketplace/qatar-landing";

export const metadata: Metadata = {
  title: "Discover Qatar",
  description: "Plan a tailor-made Qatar holiday with TBILS.",
};

export default function QatarPage() {
  return <QatarLanding />;
}
