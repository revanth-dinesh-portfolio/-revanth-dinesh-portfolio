import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-grid">
          <div className="brand">
            <div className="avatar">RD</div>
            <div>
              <div className="name">Revanth Dinesh</div>
              <div className="tag">Builder of Brands & Business Systems</div>
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
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Revanth Dinesh · Built with care · contact@scoopsnswirls.com
        </footer>
      </main>
    </div>
  );
}
