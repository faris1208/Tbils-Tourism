import type { Metadata } from "next";
import { Suspense } from "react";
import { Listing } from "@/components/marketplace/listing";

export const metadata: Metadata = { title: "Holidays" };

export default function HolidaysPage() {
  return <Suspense fallback={<div className="page-shell" aria-busy="true" />}><Listing /></Suspense>;
}
