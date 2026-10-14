"use client";
import Link from "next/link";
import { useWishlist } from "./marketplace-provider";
import { HolidayPackage, money } from "@/lib/packages";

export function PackageCard({ item }: { item: HolidayPackage }) {
  const { saved, toggle } = useWishlist(); const isSaved=saved.includes(item.slug);
  return <article className="package-card">
    <div className="package-card__image"><img src={item.image} alt="" /><span className="pill">{item.badge}</span><button className="heart" onClick={() => toggle(item.slug)} aria-pressed={isSaved} aria-label="Save package">{isSaved ? "♥" : "♡"}</button></div>
    <div className="package-card__body"><p className="eyebrow">{item.destination}, {item.country}</p><h3>{item.title}</h3><div className="meta"><span>{item.duration}</span><span>{item.category}</span><span>★ {item.rating}</span></div><div className="price-row"><div><small>From, 2 sharing</small><strong>{money(item.price)}</strong></div><Link href={`/holidays/${item.slug}`} className="dark-button">View</Link></div></div>
  </article>;
}
