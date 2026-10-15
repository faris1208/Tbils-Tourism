"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2200&q=90",
  doha: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
  desert: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=85",
  museum: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1000&q=85",
  shopping: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
  family: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=85",
};

const experiences = [
  ["01", "CITY CULTURE", "Doha, after dark", images.doha, "Illuminated modern architecture in Doha"],
  ["02", "WIDE OPEN", "Desert safari", images.desert, "Golden desert dunes"],
  ["03", "ART & HISTORY", "Museum days", images.museum, "Contemporary museum gallery"],
  ["04", "A LITTLE LUXURY", "Shopping stops", images.shopping, "Stylish shopping arcade"],
  ["05", "FOR ALL AGES", "Family time", images.family, "Family enjoying an outdoor attraction"],
];

const packages = [
  ["Signature escape", "Doha & Desert Escape", "4 nights", "City discoveries, a desert safari, selected stays and a sunset by the Inland Sea.", images.doha],
  ["Made for families", "Qatar for the Family", "5 nights", "Museums, family attractions, beach time and comfortable room for everyone to explore.", images.family],
  ["A considered short break", "The Qatar Weekend", "3 nights", "A long weekend of food, art, skyline views and warm Qatari hospitality.", images.museum],
];

const itinerary = [
  ["01", "Arrive in Doha", "Settle in, then watch the city lights appear from the Corniche."],
  ["02", "Culture, old and new", "Souq Waqif, the Museum of Islamic Art and the creative energy of Katara."],
  ["03", "Into the desert", "Dune bashing, camel moments and a golden-hour stop at Khor Al Adaid."],
  ["04", "Your Qatar, your pace", "Choose beach, shopping, family attractions or an easy final day."],
];

export function QatarLanding() {
  const [submitted, setSubmitted] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setSubmitted(true);
  }

  return <div className="qatar-page">
    <section className="qatar-hero" style={{ backgroundImage: `url(${images.hero})` }}>
      <div className="qatar-hero__veil" />
      <div className="qatar-hero__content"><p className="qatar-kicker">TBILS DESTINATION EDIT</p><h1>Discover Qatar,<br /><em>in full colour.</em></h1><p className="qatar-hero__copy">A place where a morning in the museum can become a sunset in the dunes. We make every detail feel effortless.</p><a className="qatar-button qatar-button--light" href="#enquire">Plan your Qatar trip <span aria-hidden="true">↘</span></a></div>
      <div className="qatar-hero__stamp" aria-hidden="true"><span>FROM LAGOS</span><strong>DISCOVER<br />QATAR</strong><span>YOUR WAY</span></div><p className="qatar-hero__caption">Doha · Desert · Sea</p>
    </section>

    <section className="qatar-intro qatar-section" aria-labelledby="qatar-at-a-glance"><p className="qatar-kicker">AT A GLANCE</p><div className="qatar-intro__grid"><h2 id="qatar-at-a-glance">For the curious,<br />the celebratory,<br /><em>the unhurried.</em></h2><div><p>Qatar is made for contrast: glittering Doha and open desert, ancient trade routes and striking contemporary art, generous hospitality and plenty of room to simply switch off.</p><p>Tell us what kind of break you’re after. We’ll build the details around you.</p><a href="#enquire" className="qatar-text-link">Start a conversation <span aria-hidden="true">→</span></a></div></div><div className="qatar-facts" aria-label="Qatar travel highlights"><span><b>7 hrs</b>Approx. flight from Lagos</span><span><b>1 place</b>City, sea & desert</span><span><b>All year</b>A reason to go</span><span><b>Visa help</b>Guidance from TBILS</span></div></section>

    <section className="qatar-experiences" aria-labelledby="qatar-experiences-title"><div className="qatar-section"><div className="qatar-section-title"><p className="qatar-kicker">MAKE IT YOURS</p><h2 id="qatar-experiences-title">The Qatar<br /><em>you came for.</em></h2></div><div className="qatar-experience-grid">{experiences.map(([number, eyebrow, title, image, alt], index) => <article className={`qatar-experience ${index === 0 ? "qatar-experience--tall" : ""}`} key={title}><img src={image} alt={alt} /><div><span>{number} / {eyebrow}</span><h3>{title}</h3></div></article>)}</div></div></section>

    <section className="qatar-packages qatar-section" aria-labelledby="qatar-packages-title"><div className="qatar-section-title qatar-section-title--row"><div><p className="qatar-kicker">CURATED STARTING POINTS</p><h2 id="qatar-packages-title">Stay a little<br /><em>longer.</em></h2></div><p>Every itinerary is flexible. We’ll tailor the pace, hotel and experiences to your people.</p></div><div className="qatar-package-grid">{packages.map(([offer, title, duration, detail, image]) => <article className="qatar-package" key={title}><div className="qatar-package__image"><img src={image} alt="Qatar travel experience" /></div><div className="qatar-package__body"><p>{offer}</p><h3>{title}</h3><p className="qatar-package__duration">{duration}</p><p className="qatar-package__detail">{detail}</p><a href="#enquire">Ask about this trip <span aria-hidden="true">↘</span></a></div></article>)}</div></section>

    <section className="qatar-itinerary" aria-labelledby="qatar-itinerary-title"><div className="qatar-section qatar-itinerary__grid"><div><p className="qatar-kicker">A SAMPLE RHYTHM</p><h2 id="qatar-itinerary-title">Leave room<br />for <em>wonder.</em></h2><p>A first look at how we could shape four days in Qatar. Consider it a starting point, never a rule book.</p></div><ol>{itinerary.map(([day, title, detail], index) => <li key={day}><span>{day}</span><details open={index === 0}><summary>{title}</summary><p>{detail}</p></details></li>)}</ol></div></section>

    <section className="qatar-guidance qatar-section" aria-labelledby="qatar-guidance-title"><div><p className="qatar-kicker">WHY QATAR</p><h2 id="qatar-guidance-title">Easy to plan.<br /><em>Impossible to forget.</em></h2></div><div className="qatar-guidance__cards"><article><h3>Choose your season</h3><p>October to April brings cooler days for outdoor exploring. The warmer months suit relaxed hotel, beach and indoor culture breaks.</p></article><article><h3>Make it yours</h3><p>Combine Doha’s art and food scene with desert adventure, resort downtime or family-friendly days. A short break works beautifully too.</p></article><article><h3>Travel with confidence</h3><p>We can guide you through flights, stays, transfers and entry requirements, then refine the trip around the way you like to travel.</p></article></div><a href="#enquire" className="qatar-text-link">Let’s shape your journey <span aria-hidden="true">→</span></a></section>

    <section className="qatar-enquiry" id="enquire" aria-labelledby="qatar-enquiry-title"><div className="qatar-section qatar-enquiry__grid"><div className="qatar-enquiry__intro"><p className="qatar-kicker">LET’S PLAN IT</p><h2 id="qatar-enquiry-title">Qatar is<br /><em>calling.</em></h2><p>Share a few details and a TBILS travel specialist will help turn the idea into a real itinerary.</p><p className="qatar-enquiry__note">Prefer to speak to someone? Call <a href="tel:+2349038797700">+234 903 879 7700</a>.</p></div>{submitted ? <div className="qatar-success" role="status" aria-live="polite"><span aria-hidden="true">✦</span><h3>Your Qatar story starts here.</h3><p>Thanks for reaching out. A TBILS travel specialist will be in touch shortly.</p><button type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <form className="qatar-form" onSubmit={submitEnquiry}><div className="qatar-form__fields"><label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email address<input required type="email" name="email" autoComplete="email" placeholder="you@email.com" /></label><label>Phone number<input required type="tel" name="phone" autoComplete="tel" placeholder="+234" /></label><label>Preferred travel date<input required type="date" name="date" /></label><label>Number of travellers<select name="travellers" defaultValue="2"><option value="1">1 traveller</option><option value="2">2 travellers</option><option value="3">3 travellers</option><option value="4">4 travellers</option><option value="5+">5+ travellers</option></select></label><label className="qatar-form__wide">What would make this trip unforgettable?<textarea name="notes" rows={4} placeholder="Tell us what you have in mind…" /></label></div><button className="qatar-button qatar-button--dark" type="submit">Send my enquiry <span aria-hidden="true">↘</span></button><p className="qatar-form__fineprint">By sending this form, you agree for TBILS to contact you about your trip.</p></form>}</div></section>

    <section className="qatar-closing"><p>THE WORLD, WELL PLANNED.</p><Link href="/holidays">Explore more TBILS holidays <span aria-hidden="true">→</span></Link></section>
  </div>;
}
