export const Assembly = ({ sectionLabel, title, description, animationFrames, cssCode }) => {
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
    <section className="project-section assembly-section">
      <div className="assembly-header" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>

      {animationFrames && (
        <div className="assembly-row" style={{ display: 'flex', marginBottom: '2rem' }}>
          <div className="assembly-label-col" style={{ minWidth: '120px' }}>
            <span style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{animationFrames.label}</span>
          </div>
          <div className="assembly-frames" style={{ display: 'flex', gap: '1rem', flex: 1 }}>
            {animationFrames.images.map((img, i) => (
              <img key={i} src={img} alt={`Animation Frame ${i + 1}`} style={{ maxWidth: '250px', borderRadius: '4px' }} />
            ))}
          </div>
        </div>
      )}

      {cssCode && (
        <div className="assembly-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div className="assembly-label-col" style={{ minWidth: '120px' }}>
            <span style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{cssCode.label}</span>
          </div>
          <div className="assembly-code-image" style={{ flex: 1 }}>
            {cssCode.image ? (
              <img src={cssCode.image} alt="CSS Code" style={{ maxWidth: '100%', borderRadius: '4px' }} />
            ) : (
              <div className="image-placeholder-rect" style={whiteText}>CSS Code</div>
            )}
          </div>
          <div className="assembly-code-description" style={{ maxWidth: '300px', marginLeft: '2rem' }}>
            <p style={whiteText}>{cssCode.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};
