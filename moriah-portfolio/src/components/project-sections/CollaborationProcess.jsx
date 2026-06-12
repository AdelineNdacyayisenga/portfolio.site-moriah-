export const CollaborationProcess = ({ sectionLabel, title, description, sections }) => {
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
    <section className="project-section collaboration-process-section">
      <div className="collaboration-header" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>

      {sections && sections.map((section, index) => (
        <div key={index} className="collaboration-row" style={{ display: 'flex', marginBottom: '2rem', alignItems: 'flex-start' }}>
          <div className="collaboration-label-col" style={{ minWidth: '120px' }}>
            <span style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{section.label}</span>
          </div>
          <div className="collaboration-items" style={{ display: 'flex', gap: '2rem', flex: 1 }}>
            {section.items.map((item, i) => (
              <div key={i} className="collaboration-item" style={{ flex: 1 }}>
                {item.image ? (
                  <img src={item.image} alt={item.caption} style={{ maxWidth: '100%', borderRadius: '4px' }} />
                ) : (
                  <div className="image-placeholder-rect" style={{ ...whiteText, minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.caption}</div>
                )}
                <p className="collaboration-caption" style={{ ...whiteText, fontWeight: 'bold', marginTop: '1rem' }}>{item.caption}</p>
                <p className="collaboration-note" style={whiteText}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
