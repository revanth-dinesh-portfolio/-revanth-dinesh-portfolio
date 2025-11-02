import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-grid">
          <div className="brand">
            <div className="avatar">RD</div>
            <div>
              <div className="name">Revanth Dinesh</div>
              <div className="tag">Builder of Brands &amp; Business Systems</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#resume">Resume</a>
            <a href="#contact" className="btn">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-text">
            <h1>Revanth Dinesh — Builder of Brands &amp; Business Systems</h1>
            <p className="lead">
              Founder of <strong>Scoopful</strong> and Business Development Executive at <strong>ABC Technology</strong>. I design and scale systems — from F&amp;B manufacturing and franchise models to B2B and B2C growth.
            </p>
            <div className="actions">
              <a href="#work" className="cta">View My Work</a>
              <a href="#contact" className="cta alt">Contact Me</a>
            </div>
            <div className="contact-info">
              <span>contact@scoopsnswirls.com</span> • <span>Bangalore, India</span>
            </div>
          </div>

          <div className="hero-media">
            <div className="photo">Store / Product Photo</div>
            <div className="thumbs">
              <div className="thumb">Product</div>
              <div className="thumb">Event</div>
              <div className="thumb">Workshop</div>
            </div>
          </div>
        </section>

        <section id="about" className="about card">
          <h2>About</h2>
          <p>
            I’m <strong>Revanth Dinesh</strong>, a hands-on operator who turns ideas into structured, scalable systems. I founded <strong>Scoopful</strong> (Scoops N Swirls Ice Cream LLP), managing product development, manufacturing partnerships, franchise documentation, and marketing. In 2025, I joined <strong>ABC Technology, Training &amp; Upskilling</strong> to help relaunch operations — building B2B MOUs, B2C flowcharts, automation and growth plans. My work blends creativity with structure — whether in F&amp;B or education.
          </p>
        </section>

        <section id="work" className="work">
          <h2>Selected Work &amp; Projects</h2>
          <div className="grid">
            <article className="card">
              <div className="card-head">
                <div className="logo s">S</div>
                <div>
                  <h3>Scoopful — Founder &amp; Head of Operations</h3>
                  <div className="muted">2021 – Present | Bangalore</div>
                </div>
              </div>
              <ul>
                <li>Developed 9+ ice cream SKUs and premium products, incl. Veloura Collection.</li>
                <li>Drafted manufacturing, franchise &amp; storage agreements with penalties &amp; audit rights.</li>
                <li>Built SOPs for hygiene, production, and marketing; supervised quality control personally.</li>
                <li>Launched ScoopfulCares — 10,000+ scoops distributed with Robin Hood Army.</li>
              </ul>
              <div className="result">Result: Structured brand operations and investor interest.</div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="logo a">A</div>
                <div>
                  <h3>ABC Technology — Business Development Executive</h3>
                  <div className="muted">July 2025 – Present | Bangalore</div>
                </div>
              </div>
              <ul>
                <li>Restarted company operations after a 4-year pause; bridged Field Sales &amp; Corporate Alliances.</li>
                <li>Conducted career orientation workshops and drafted MOUs for college tie-ups.</li>
                <li>Designed B2C automation flows, lead ratios, and incentive structures for scaling.</li>
              </ul>
              <div className="result">Result: Process clarity and a B2C model ready for growth.</div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="logo r">R</div>
                <div>
                  <h3>Robin Hood Army — Volunteer</h3>
                  <div className="muted">2017 – Present</div>
                </div>
              </div>
              <p>8+ years volunteering across community food initiatives. Partnered with ScoopfulCares for outreach and distribution events.</p>
              <div className="result">Result: Long-term social impact and community relations.</div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="logo m">M</div>
                <div>
                  <h3>Manufacturing &amp; Legal Ops</h3>
                  <div className="muted">Ongoing</div>
                </div>
              </div>
              <ul>
                <li>Created manufacturing agreements with audit rights, temperature logs, and penalties for non-compliance.</li>
                <li>Implemented storage partner terms and inventory reconciliation policies.</li>
              </ul>
              <div className="result">Result: Stronger supply chain controls and product safety.</div>
            </article>
          </div>
        </section>

        <section id="skills" className="skills card">
          <h2>Skills Snapshot</h2>
          <div className="skill-grid">
            <div>
              <h4>Business &amp; Strategy</h4>
              <p>B2B/B2C Structuring · Market Positioning · Strategic Planning</p>
            </div>
            <div>
              <h4>Operations &amp; Legal</h4>
              <p>SOPs · Vendor Management · Compliance · Contract Drafting</p>
            </div>
            <div>
              <h4>Product &amp; Marketing</h4>
              <p>F&amp;B Development · Quality Control · Campaigns · Visual Storytelling</p>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <h2>Gallery</h2>
          <div className="grid thumbs-grid">
            <div className="thumb-large">Store Interior</div>
            <div className="thumb">Product Flatlay</div>
            <div className="thumb">Community Event</div>
            <div className="thumb">Workshop Slide</div>
            <div className="thumb">Veloura Box</div>
            <div className="thumb">Team / Workspace</div>
          </div>
        </section>

        <section id="contact" className="contact card">
          <h2>Let’s connect</h2>
          <p>I’m open to opportunities in business strategy, operations, and brand systems. Reach out for collaborations, consulting, or roles.</p>
          <div className="contact-cards">
            <a href="mailto:contact@scoopsnswirls.com" className="contact-card">contact@scoopsnswirls.com</a>
            <div className="contact-card">LinkedIn Profile (add your URL)</div>
            <div className="contact-card">Bangalore, India</div>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Revanth Dinesh · Built with care · contact@scoopsnswirls.com
        </footer>
      </main>
    </div>
  );
}
