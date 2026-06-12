export const Challenges = ({ sectionLabel, title, description, groups }) => {
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
    <section className="project-section challenges-section">
      <div className="challenges-header">
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>

      {groups.map((group) => (
        <div key={group.label} className="challenges-group" style={{ display: 'flex', marginBottom: '2rem' }}>
          <div className="challenges-group-label-col" style={{ minWidth: '120px' }}>
            <span className="wireframes-group-label" style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{group.label}</span>
          </div>
          <div className="challenges-items" style={{ display: 'flex', gap: '2rem', flex: 1 }}>
            {group.items.map((item, i) => (
              <div key={i} className="challenge-item">
                {item.image ? (
                  <img src={item.image} alt={item.caption} className="challenge-img" />
                ) : (
                  <div className="image-placeholder-rect challenge-placeholder" style={whiteText}>
                    {item.caption}
                  </div>
                )}
                <p className="challenge-caption" style={whiteText}>{item.caption}</p>
                <p className="challenge-note" style={whiteText}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
