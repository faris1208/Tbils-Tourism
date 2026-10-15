"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AuthModal } from "./auth-modal";

const navigation = ["Holidays", "Qatar", "Tours", "Experiences", "Destinations", "Deals"];

export function Header() {
  const [notice, setNotice] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false); const [auth,setAuth]=useState(false); const pathname=usePathname();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 56); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const slug=(label:string)=>`/${label.toLowerCase().replaceAll(" ","-")}`;
  const overlaysHero = pathname === "/" || pathname === "/qatar";
  if (pathname === "/qatar") return null;
  return <><header className={`site-header${scrolled || !overlaysHero ? " is-scrolled" : ""}`}><div className="site-header__inner"><Link className="site-logo" href="/" aria-label="TBILS home">TBILS</Link><nav aria-label="Primary navigation"><ul className={`site-nav${menu?" open":""}`}>{navigation.map(label=><li key={label}><Link onClick={()=>setMenu(false)} href={label==="Holidays"?"/holidays":slug(label)}>{label}</Link></li>)}</ul></nav><div className="nav-actions"><Link className="wish" aria-label="Wishlist" href="/holidays">♡</Link><button className="login" onClick={()=>setAuth(true)}>Log in</button><Link className="site-header__cta" href="/contact">Plan My Trip</Link><button className="menu-button" aria-expanded={menu} onClick={()=>setMenu(!menu)}>☰</button></div></div>{notice&&<button className="nav-toast" onClick={()=>setNotice(null)}>{notice}</button>}</header>{auth&&<AuthModal onClose={()=>setAuth(false)}/>}</>;
}
