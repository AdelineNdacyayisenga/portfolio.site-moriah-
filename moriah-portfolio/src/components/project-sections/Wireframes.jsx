export const Wireframes = ({ title, description, rows, groups, sectionLabel }) => {
  const whiteText = { color: '#fff' };

  const renderRow = (row) => (
    <div key={row.label} className="wireframes-row" style={{ display: 'flex', marginBottom: '2rem' }}>
      <div className="wireframes-row-label-col" style={{ minWidth: '120px' }}>
        <span className="wireframes-row-label" style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{row.label}</span>
      </div>
      <div className="wireframes-row-content" style={{ flex: 1 }}>
        {Array.isArray(row.images) ? (
          <div className="wireframes-images" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'flex-start' }}>
            {row.images.map((img, i) => (
              <img key={i} src={img} alt={`${row.label} ${i + 1}`} style={{ width: 'auto', maxWidth: '180px', height: 'auto', borderRadius: '4px' }} />
            ))}
          </div>
        ) : row.images ? (
          <img src={row.images} alt={row.label} className="wireframe-img" />
        ) : (
          <div className="image-placeholder-rect wireframe-placeholder" style={whiteText}>{row.label}</div>
        )}
      </div>
    </div>
  );

  return (
    <section className="project-section wireframes-section">
      <div className="wireframes-header">
        {sectionLabel && <span className="section-label">{sectionLabel}</span>}
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>

      <div className="wireframes-body">
        {rows && rows.map(renderRow)}

        {groups && groups.map((group) => (
          <div key={group.label} className="wireframes-group">
            <div className="wireframes-group-label-col">
              <span className="wireframes-group-label">{group.label}</span>
            </div>
            <div className="wireframes-group-content">
              <div className="wireframes-row">
                {group.rows.map((row) => (
                  <div key={row.title} className="wireframe-item">
                    {row.image ? (
                      <img src={row.image} alt={row.title} className="wireframe-img" />
                    ) : (
                      <div className="image-placeholder-rect wireframe-placeholder" style={whiteText}>{row.title}</div>
                    )}
                    <p className="wireframe-caption">{row.title}</p>
                  </div>
                ))}
              </div>
              {group.caption && <p className="wireframes-group-caption" style={whiteText}>{group.caption}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
