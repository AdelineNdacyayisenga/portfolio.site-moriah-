export const VersionAudit = ({ sectionLabel, title, description, sections }) => {
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
    <section className="project-section version-audit-section">
      <div className="version-audit-header" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>

      {sections && sections.map((section, index) => (
        <div key={index} className="version-audit-row" style={{ display: 'flex', marginBottom: '2rem', alignItems: 'flex-start' }}>
          <div className="version-audit-label-col" style={{ minWidth: '120px' }}>
            <span style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{section.label}</span>
          </div>
          <div className="version-audit-image" style={{ flex: 1 }}>
            {section.image ? (
              <img src={section.image} alt={section.label} style={{ maxWidth: '100%', borderRadius: '4px' }} />
            ) : (
              <div className="image-placeholder-rect" style={{ ...whiteText, minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{section.label}</div>
            )}
          </div>
          <div className="version-audit-description" style={{ maxWidth: '300px', marginLeft: '2rem' }}>
            <p style={whiteText}>{section.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
