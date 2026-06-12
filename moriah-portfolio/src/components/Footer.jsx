import { NavLink, useLocation } from 'react-router-dom';
import logoIcon from '../assets/shared/logo.svg';
import linkedInIcon from '../assets/shared/linkedin.svg';

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      {/* Top row: logo + nav */}
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logoIcon} alt="Moriah Chiang logo" className="footer-logo" />
        </div>

        <nav className="footer-nav">
          <NavLink to="/work" className={({ isActive }) => `footer-nav-link ${isActive || location.pathname === '/' ? 'footer-nav-link--active' : ''}`}>Work</NavLink>
          <NavLink to="/services" className={({ isActive }) => `footer-nav-link ${isActive ? 'footer-nav-link--active' : ''}`}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => `footer-nav-link ${isActive ? 'footer-nav-link--active' : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `footer-nav-link ${isActive ? 'footer-nav-link--active' : ''}`}>Contact</NavLink>
        </nav>
      </div>

      {/* Bottom row: contact + LinkedIn */}
      <div className="footer-contact-row">
        <div className="footer-contact">
          <a href="mailto:moriahchiang2@gmail.com" className="footer-contact-link">moriahchiang2@gmail.com</a>
          <a href="tel:4158454536" className="footer-contact-link">415 · 845 · 4536</a>
        </div>

        <a
          href="https://www.linkedin.com/in/moriah-chiang-147736158/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-linkedin"
          aria-label="LinkedIn"
        >
          <img src={linkedInIcon} alt="LinkedIn" width="28" height="28" />
        </a>
      </div>

      <div className="footer-bottom">
        <p className="footer-rights">© {new Date().getFullYear()} Moriah Chiang. All rights reserved.</p>
      </div>
    </footer>
  );
};
