export const Wireframes = ({ title, description, rows, groups }) => {
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

  const renderGroupRow = (row) => (
    <div key={row.title} className="wireframes-row" style={{ display: 'flex', marginBottom: '2rem' }}>
      <div className="wireframes-row-label-col" style={{ minWidth: '120px' }}>
        <span className="wireframes-row-label" style={{ ...whiteText, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>{row.title}</span>
      </div>
      <div className="wireframes-row-content" style={{ flex: 1 }}>
        {row.image ? (
          <img src={row.image} alt={row.title} className="wireframe-img" />
        ) : (
          <div className="image-placeholder-rect wireframe-placeholder" style={whiteText}>{row.title}</div>
        )}
      </div>
    </div>
  );

  return (
    <section className="project-section wireframes-section">
      <div className="wireframes-header">
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>

      <div className="wireframes-body">
        {rows && rows.map(renderRow)}

        {groups && groups.map((group) => (
          <div key={group.label} className="wireframes-group">
            <h3 className="wireframes-group-title" style={whiteText}>{group.label}</h3>
            {group.caption && <p className="wireframes-group-caption" style={whiteText}>{group.caption}</p>}
            <div className="wireframes-group-rows">
              {group.rows.map(renderGroupRow)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
