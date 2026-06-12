import { Link } from 'react-router-dom';
import cornerTopLeft from '../assets/services/corner-tl.svg';
import cornerTopRight from '../assets/services/corner-tr.svg';
import cornerBottomLeft from '../assets/services/corner-bl.svg';
import cornerBottomRight from '../assets/services/corner-br.svg';
import iconPhone from '../assets/services/icon-phone.svg';
import iconWebsite from '../assets/services/icon-website.svg';
import iconGraphic from '../assets/services/icon-graphic.svg';
import iconBrand from '../assets/services/icon-brand.svg';

const ServiceCard = ({ iconSrc, iconAlt, title, items }) => (
  <div className="service-card">
    <img src={cornerTopLeft} alt="" className="services-decor decor-tl" />
    <img src={cornerTopRight} alt="" className="services-decor decor-tr" />
    <img src={cornerBottomLeft} alt="" className="services-decor decor-bl" />
    <img src={cornerBottomRight} alt="" className="services-decor decor-br" />

    <div className="service-card-icon">
      <img src={iconSrc} alt={iconAlt} className="service-icon" />
    </div>
    <div className="service-card-body">
      <h3 className="service-card-title">{title}</h3>
      <ul className="service-card-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="services-intro">
        <div className="services-intro-content">
          <h1 className="services-title">Services</h1>
          <p className="services-description">
            Need help translating your ideas into applications, websites, and a brand identity? I can help you create a visual design of something that represents your mission and vision while increasing the reach of your brand.
          </p>
        </div>
      </section>

      <div className="cta-row">
        <Link to="/contact" className="cta-button">Book a free discovery call →</Link>
      </div>

      <section className="services-grid-wrapper">
        <div className="services-grid">
          <div className="grid-line grid-line--h grid-line--h-top" />
          <div className="grid-line grid-line--h grid-line--h-bottom" />
          <div className="grid-line grid-line--v grid-line--v-left" />
          <div className="grid-line grid-line--v grid-line--v-right" />

          <ServiceCard
            iconSrc={iconPhone}
            iconAlt="Mobile app design"
            title="Mobile App Design"
            items={['Mobile optimization', 'Prototype', 'Design System', 'UX/UI']}
          />
          <ServiceCard
            iconSrc={iconWebsite}
            iconAlt="Website design"
            title="Website Design"
            items={['Responsive Design', 'Prototype', 'Design System', 'UX/UI']}
          />
          <ServiceCard
            iconSrc={iconGraphic}
            iconAlt="Graphic design"
            title="Graphic Design"
            items={['Branded Materials', 'Print and Digital', 'Layout Design']}
          />
          <ServiceCard
            iconSrc={iconBrand}
            iconAlt="Brand guideline"
            title="Brand Guideline"
            items={['Visual Identity', 'Brand assets in use', 'Vision and Values']}
          />
        </div>
      </section>
    </div>
  );
};
