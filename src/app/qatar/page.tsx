import type { Metadata } from "next";
import { QatarLanding } from "@/components/marketplace/qatar-landing";

export const metadata: Metadata = {
  title: "Qatar Holiday Package",
  description: "Enquire about the TBILS Qatar holiday package on WhatsApp.",
};

export default function QatarPage() {
  return <QatarLanding />;
}
