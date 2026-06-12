export const NextSteps = ({ sectionLabel, title, description, image }) => {
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
    <section className="project-section next-steps-section" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
      <div className="split-section-left" style={{ maxWidth: '400px' }}>
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>
      <div className="split-section-right" style={{ flex: 1 }}>
        {image ? (
          <img src={image} alt="Next steps" style={{ maxWidth: '100%', borderRadius: '4px' }} />
        ) : (
          <div className="image-placeholder-rect split-section-placeholder" style={whiteText}>
            Next Steps Image
          </div>
        )}
      </div>
    </section>
  );
};
