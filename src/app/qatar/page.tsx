import type { Metadata } from "next";
import { QatarLanding } from "@/components/marketplace/qatar-landing";

export const metadata: Metadata = {
  title: "Christmas in Qatar",
  description: "Book the TBILS Christmas in Qatar package from Lagos, 21–27 December 2026.",
};

export default function QatarPage() {
  return <QatarLanding />;
}
