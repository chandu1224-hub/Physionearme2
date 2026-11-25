"use client";

import { useMemo, useState } from "react";

const specialties = [
  { icon: "🦴", title: "Orthopaedic physiotherapy", detail: "Back pain, neck pain, joints and injuries" },
  { icon: "🏃", title: "Sports rehabilitation", detail: "Sports injuries, mobility and performance" },
  { icon: "🧠", title: "Neurological physiotherapy", detail: "Stroke recovery, balance and movement" },
  { icon: "👶", title: "Paediatric physiotherapy", detail: "Movement and development support for children" },
  { icon: "🤰", title: "Women’s health", detail: "Prenatal, postnatal and pelvic health" },
  { icon: "🧓", title: "Geriatric physiotherapy", detail: "Strength, balance and healthy ageing" },
];

const steps = [
  ["01", "Tell us what you need", "Choose a treatment area and enter your city or PIN code."],
  ["02", "Explore nearby options", "See relevant physiotherapy clinics and practitioners on the map."],
  ["03", "Connect directly", "Contact a provider to ask questions and arrange an appointment."],
];

export default function Home() {
  const [location, setLocation] = useState("");
  const [need, setNeed] = useState("Physiotherapist");
  const [searched, setSearched] = useState(false);
  const mapsUrl = useMemo(() => {
    const query = [need, "near", location].filter(Boolean).join(" ");
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  }, [location, need]);

  function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!location.trim()) {
      setSearched(true);
      return;
    }
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#" aria-label="PhysioNearMe home">
          <span className="brand-mark">✳</span><span>physio<span className="brand-light">near</span>me</span>
        </a>
        <div className="nav-links"><a href="#specialties">Treatments</a><a href="#how-it-works">How it works</a><a href="#about">About</a></div>
        <a className="nav-cta" href="#find">Find a physio <span>↗</span></a>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> YOUR RECOVERY STARTS CLOSER</div>
            <h1>Move better.<br /><em>Live fuller.</em></h1>
            <p className="hero-lede">Find physiotherapy care that fits your needs, your neighbourhood and your life.</p>
            <form className="search-panel" id="find" onSubmit={search}>
              <label className="search-field">
                <span className="field-icon">⌖</span>
                <span className="field-content"><small>YOUR LOCATION</small><input value={location} onChange={e => setLocation(e.target.value)} placeholder="City, area or PIN code" aria-label="City, area or PIN code" /></span>
              </label>
              <span className="search-divider" />
              <label className="search-field treatment-field">
                <span className="field-icon">＋</span>
                <span className="field-content"><small>LOOKING FOR</small><select value={need} onChange={e => setNeed(e.target.value)} aria-label="Treatment type"><option>Physiotherapist</option><option>Orthopaedic physiotherapist</option><option>Sports physiotherapist</option><option>Neuro physiotherapist</option><option>Paediatric physiotherapist</option><option>Women’s health physiotherapist</option></select></span>
              </label>
              <button className="search-button" type="submit">Search nearby <span>→</span></button>
            </form>
            {searched && !location.trim() && <p className="form-note">Enter a city, area or PIN code to search.</p>}
            <div className="trust-row"><span className="trust-check">✓</span> Explore local options and contact providers directly.</div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of movement and wellbeing">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-sun" />
            <div className="art-person"><div className="person-head" /><div className="person-body" /><div className="person-arm" /><div className="person-leg leg-one" /><div className="person-leg leg-two" /></div>
            <div className="art-note note-top"><span className="note-icon">↗</span><span><b>Find care nearby</b><small>Start with your location</small></span></div>
            <div className="art-note note-bottom"><span className="note-icon heart">♡</span><span><b>One step at a time</b><small>Your journey, your pace</small></span></div>
            <div className="art-caption">CARE THAT<br />KEEPS YOU MOVING.</div>
          </div>
        </div>
        <div className="hero-bottom wrap"><span>CARE FOR EVERY BODY</span><span className="bottom-line" /><span>MADE TO MOVE WITH YOU&nbsp; ↘</span></div>
      </section>

      <section className="specialties section wrap" id="specialties">
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow">FIND YOUR KIND OF CARE</div><h2>Support for every<br /><em>step forward.</em></h2></div><p>From everyday aches to specialised rehabilitation, start by exploring the care that matches your goals.</p></div>
        <div className="specialty-grid">{specialties.map((item, i) => <a className="specialty-card" href="#find" key={item.title} onClick={() => setNeed(item.title.replace("Orthopaedic ", "").replace(" physiotherapy", " physiotherapist"))}><span className="specialty-icon">{item.icon}</span><span className="card-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="card-arrow">↗</span></a>)}</div>
      </section>

      <section className="how-section" id="how-it-works"><div className="wrap how-wrap"><div className="eyebrow">SIMPLE BY DESIGN</div><div className="how-heading"><h2>Getting started<br />should feel <em>easy.</em></h2><p>A clearer first step towards finding the right physiotherapy support.</p></div><div className="steps">{steps.map(([number, title, body]) => <div className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div><span className="step-arrow">↗</span></div>)}</div></div></section>

      <section className="closing wrap" id="about"><div className="closing-copy"><div className="eyebrow dark-eyebrow">SMALL STEPS. STRONGER DAYS.</div><h2>Your next move<br />starts <em>right here.</em></h2><p>Search by location and explore physiotherapy options around you.</p><a className="closing-button" href="#find">Find care near me <span>→</span></a></div><div className="closing-shape"><span>MOVE<br />WELL.</span><div className="shape-ring" /></div></section>

      <footer className="footer"><div className="wrap footer-inner"><a className="brand footer-brand" href="#"><span className="brand-mark">✳</span><span>physio<span className="brand-light">near</span>me</span></a><span>Helping you take the next step towards better movement.</span><span>© {new Date().getFullYear()} PhysioNearMe</span></div><div className="wrap footer-disclaimer">PhysioNearMe is a discovery starting point. Search results are provided by Google Maps; verify provider credentials and suitability directly. This website does not provide medical advice or emergency care.</div></footer>
    </main>
  );
}
