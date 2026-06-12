export const VectorIllustration = ({ sectionLabel, image, description }) => {
  const whiteText = { color: '#fff' };

  return (
    <div className="vector-illustration-section" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', padding: '2rem 0' }}>
      <div className="vector-label-col" style={{ minWidth: '120px' }}>
        <span className="section-label" style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{sectionLabel}</span>
      </div>
      <div className="vector-image" style={{ flex: 1 }}>
        {image ? (
          <img src={image} alt="Vector Illustration" style={{ maxWidth: '100%', borderRadius: '4px' }} />
        ) : (
          <div className="image-placeholder-rect" style={whiteText}>Vector Image</div>
        )}
      </div>
      <div className="vector-description" style={{ flex: 1, maxWidth: '300px' }}>
        <p style={whiteText}>{description}</p>
      </div>
    </div>
  );
};
