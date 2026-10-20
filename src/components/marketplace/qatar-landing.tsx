"use client";

import { useEffect, useState } from "react";

const whatsappNumber = "2349038797700";
const whatsappMessage = "Hello TBILS, I would like to apply for the Christmas in Qatar package (21–27 December 2026).";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const inclusions = ["Visa assistance", "Return flights from Lagos", "5-star hotel stay", "Daily breakfast"];
const itinerary = [
  ["Day 1", "Doha city tour"],
  ["Day 2", "Sunset cruise"],
  ["Day 3", "Gondola ride"],
  ["Day 4", "Desert safari & Christmas party"],
  ["Day 5", "Private shopping"],
];

function WhatsAppButton({ className = "" }: { className?: string }) {
  return <a className={`qatar-offer__cta ${className}`} href={whatsappUrl} target="_blank" rel="noreferrer">Apply on WhatsApp</a>;
}

export function QatarLanding() {
  const [secondsRemaining, setSecondsRemaining] = useState(30);

  useEffect(() => {
    const inactivityDelay = 30_000;
    let redirectTimer: number | undefined;
    let countdownTimer: number | undefined;

    const redirectToWhatsApp = () => window.location.assign(whatsappUrl);

    const resetInactivityTimer = () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownTimer);

      const deadline = Date.now() + inactivityDelay;
      setSecondsRemaining(30);
      countdownTimer = window.setInterval(() => {
        setSecondsRemaining(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
      }, 250);
      redirectTimer = window.setTimeout(redirectToWhatsApp, inactivityDelay);
    };

    const activityEvents = ["pointerdown", "keydown", "touchstart"] as const;
    resetInactivityTimer();
    activityEvents.forEach((eventName) => window.addEventListener(eventName, resetInactivityTimer, { passive: true }));

    return () => {
      window.clearTimeout(redirectTimer);
      window.clearInterval(countdownTimer);
      activityEvents.forEach((eventName) => window.removeEventListener(eventName, resetInactivityTimer));
    };
  }, []);

  return <div className="qatar-offer">
    <section className="qatar-offer__hero" aria-label="Christmas in Qatar campaign">
      <picture><img src="/WhatsApp Image 2026-10-16 at 16.25.00.jpeg" alt="Christmas in Qatar holiday package from Lagos" /></picture>
      <WhatsAppButton className="qatar-offer__hero-cta" />
      <p className="qatar-offer__redirect-notice" style={{ position: "fixed" }} role="status" aria-live="polite">Need help booking? We’ll open WhatsApp in <b>{secondsRemaining}</b>s.</p>
    </section>

    <section className="qatar-offer__booking" aria-labelledby="qatar-offer-title">
      <div><p className="qatar-offer__eyebrow">LAGOS DEPARTURE · 21–27 DECEMBER 2026</p><h1 id="qatar-offer-title">Christmas in <em>Qatar.</em></h1><p className="qatar-offer__intro">Five festive days of city lights, desert adventure and effortless luxury — planned by TBILS.</p></div>
      <div className="qatar-offer__price-card"><p>Early bird price</p><strong>₦2,700,000</strong><span>per person sharing</span><div><b>₦3,000,000</b> normal price</div><small>Early bird ends 30 October 2026</small><WhatsAppButton /></div>
    </section>

    <section className="qatar-offer__details" aria-label="Package details">
      <article><p className="qatar-offer__eyebrow">YOUR STAY INCLUDES</p><h2>Everything taken care of.</h2><ul>{inclusions.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><p className="qatar-offer__eyebrow">A FIVE-DAY RHYTHM</p><h2>More than a getaway.</h2><ol>{itinerary.map(([day, item]) => <li key={day}><span>{day}</span>{item}</li>)}</ol></article>
    </section>

    <section className="qatar-offer__final"><p>READY FOR A CHRISTMAS TO REMEMBER?</p><h2>Your Qatar story starts here.</h2><WhatsAppButton className="qatar-offer__cta--light" /></section>
  </div>;
}
