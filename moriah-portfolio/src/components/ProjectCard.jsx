import { Link } from 'react-router-dom';
import cornerTopLeft from '../assets/shared/corner-tl.svg';
import cornerTopRight from '../assets/shared/corner-tr.svg';
import cornerBottomLeft from '../assets/shared/corner-bl.svg';
import cornerBottomRight from '../assets/shared/corner-br.svg';

export const ProjectCard = ({ number, title, description, tools, imageAlt, imageSrc, link }) => {
  return (
    <div className="project-card">
      {/* Corner decorations */}
      <img src={cornerTopLeft} alt="" className="corner-decor corner-top-left" />
      <img src={cornerTopRight} alt="" className="corner-decor corner-top-right" />
      <img src={cornerBottomLeft} alt="" className="corner-decor corner-bottom-left" />
      <img src={cornerBottomRight} alt="" className="corner-decor corner-bottom-right" />

      <div className="project-number">#{number}</div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {tools && <p className="project-tools">{tools}</p>}
        {link ? (
          <Link to={link} className="view-button">View Me</Link>
        ) : (
          <button className="view-button" disabled>View Me</button>
        )}
      </div>

      <div className="project-image">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className="project-img" />
        ) : (
          <div className="image-placeholder"></div>
        )}
      </div>
    </div>
  );
};
