import { useState } from 'react';
import { NavLink, Link, useLocation } from "react-router-dom";
import imageHeader from "../assets/shared/logo.svg";

export const Header = () => {
  const location = useLocation();
  const isWorkPage = location.pathname === "/" || location.pathname === "/work";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top bar: Logo + Name + Nav */}
      <div className="header-top">
        <div className="header-brand">
          <img src={imageHeader} alt="Ellipse" className="header-logo" />
          <div className="header-name">
            <span className="header-text header-text--regular">Hi my name is</span>
            <span className="header-text header-text--bold">Moriah Chiang</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <NavLink to="/work" className={({ isActive }) => `nav-button ${isActive || location.pathname === "/" ? "nav-button--active" : ""}`}>Work</NavLink>
          <NavLink to="/services" className={({ isActive }) => `nav-button ${isActive ? "nav-button--active" : ""}`}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-button ${isActive ? "nav-button--active" : ""}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-button ${isActive ? "nav-button--active" : ""}`}>Contact</NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="mobile-nav" onClick={() => setMenuOpen(false)}>
          <NavLink to="/work" className={({ isActive }) => `mobile-nav-link ${isActive || location.pathname === "/" ? "mobile-nav-link--active" : ""}`}>Work</NavLink>
          <NavLink to="/services" className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}>Contact</NavLink>
        </nav>
      )}

      {/* Work Page Header Content */}
      {isWorkPage && (
        <>
          <section className="title-description">
            <div className="intro-content">
              <h2 className="intro-title">Freelance Digital Product Designer</h2>
              <p className="intro-description">
                A product designer that has experience in graphic design and digital
                design, creating designs that build an identity.
              </p>
            </div>
          </section>

          <div className="cta-row">
            <Link to="/contact" className="cta-button">Book a free discovery call →</Link>
          </div>
        </>
      )}
    </header>
  );
};
