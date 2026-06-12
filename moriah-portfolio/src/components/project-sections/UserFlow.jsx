export const UserFlow = ({ sectionLabel, title, description, image }) => {
  const whiteText = { color: '#fff' };
  const labelStyle = {
    ...whiteText,
    display: 'inline-block',
    padding: '0.5rem 1rem',
    border: '1px solid #8E7147',
    borderRadius: '20px',
    fontSize: '0.875rem',
    marginBottom: '1rem',
  };

  return (
    <section className="project-section user-flow-section">
      <div className="user-flow-left">
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>
      <div className="user-flow-image">
        {image ? (
          <img src={image} alt="User flow diagram" className="flow-img" />
        ) : (
          <div className="image-placeholder-rect" style={whiteText}>User Flow Diagram</div>
        )}
      </div>
    </section>
  );
};
