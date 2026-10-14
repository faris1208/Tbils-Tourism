"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const groups = [
  { title: "Explore", links: ["Holiday Packages", "Tours", "Experiences", "Destinations", "Deals"] },
  { title: "Travel", links: ["Flights", "Hotels", "Transfers", "Insurance", "Visa Assistance"] },
  { title: "Company", links: ["About", "Contact", "Blog", "Careers"] },
  { title: "Support", links: ["Help Centre", "Manage Booking", "Cancellation", "Refunds"] },
];

export function Footer() {
  const pathname = usePathname();
  const slug=(label:string)=>`/${label.toLowerCase().replaceAll(" ","-")}`;
  if (pathname === "/qatar") return null;
  return <footer className="market-footer"><div className="market-footer__grid"><div className="market-footer__brand"><Link href="/" className="market-footer__logo">TBILS</Link><p>Discover your next escape. We&apos;ll handle the journey.</p></div>{groups.map(group=><div key={group.title} className="market-footer__group"><h2>{group.title}</h2>{group.links.map(label=><Link key={label} href={label==="Holiday Packages"?"/holidays":slug(label)}>{label}</Link>)}</div>)}</div><div className="market-footer__bottom"><span>© 2026 TBILS. All rights reserved.</span><span><Link href="/terms">Terms</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/cookies">Cookies</Link></span></div></footer>;
}
