export const DesignSystem = ({ sectionLabel, title, description, colors, typography, components, icons }) => {
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
    <section className="project-section design-system-section">
      <div className="design-system-header">
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{description}</p>
      </div>

      <div className="design-system-body">
        {/* Colors */}
        <div className="ds-row">
          <span className="ds-row-label" style={whiteText}>Color</span>
          <div className="ds-colors">
            {colors.map((color) => (
              <div key={color.name} className="ds-color-item">
                {color.swatchImage ? (
                  <img src={color.swatchImage} alt={color.name} className="ds-color-swatch-img" />
                ) : (
                  <div
                    className="ds-color-swatch"
                    style={{ backgroundColor: color.hex.startsWith('#PLACEHOLDER') ? '#888' : color.hex }}
                  />
                )}
                <p className="ds-color-name" style={whiteText}>{color.name}</p>
                <p className="ds-color-hex" style={whiteText}>{color.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="ds-row">
          <span className="ds-row-label" style={whiteText}>Typography</span>
          <div className="ds-typography">
            {typography.googleFontUrl && (
              <link rel="stylesheet" href={typography.googleFontUrl} />
            )}
            <p className="ds-font-name" style={{ fontFamily: typography.fontName, ...whiteText }}>
              {typography.fontName}
            </p>
            <p className="ds-font-alphabet" style={{ fontFamily: typography.fontName, ...whiteText }}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            </p>
            <p className="ds-font-numbers" style={{ fontFamily: typography.fontName, ...whiteText }}>
              1234567890
            </p>
          </div>
        </div>

        {/* Components */}
        {components && components.length > 0 && (
          <div className="ds-row">
            <span className="ds-row-label" style={whiteText}>Components</span>
            <div className="ds-components" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {components.map((group) => {
                const isVertical = group.layout === 'vertical';
                return (
                <div key={group.label} className="ds-component-group">
                  <p className="ds-component-group-label" style={{ ...whiteText, marginBottom: '1rem' }}>{group.label}</p>
                  <div className="ds-component-images" style={{ 
                    display: 'flex', 
                    flexDirection: isVertical ? 'column' : 'row', 
                    gap: '1.5rem',
                    alignItems: isVertical ? 'center' : 'flex-start'
                  }}>
                    {group.images.map((img, i) => {
                      const src = typeof img === 'string' ? img : img.src;
                      const caption = typeof img === 'string' ? null : img.caption;
                      return (
                        <figure key={i} className="ds-component-figure" style={{ margin: 0, textAlign: 'center' }}>
                          <img src={src} alt={caption || group.label} style={{ maxWidth: '100%', borderRadius: '4px' }} />
                          {caption && (
                            <figcaption style={{ ...whiteText, marginTop: '0.5rem' }}>{caption}</figcaption>
                          )}
                        </figure>
                      );
                    })}
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Icons */}
        {icons && icons.length > 0 && (
          <div className="ds-row">
            <span className="ds-row-label" style={whiteText}>Icons</span>
            <div className="ds-icons" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              {icons.map((group) => (
                <div key={group.label} className="ds-icon-group">
                  <p className="ds-icon-group-label" style={{ ...whiteText, marginBottom: '0.5rem' }}>{group.label}</p>
                  <div className="ds-icon-images">
                    {group.images.map((img, i) => {
                      const src = typeof img === 'string' ? img : img.src;
                      return (
                        <img key={i} src={src} alt={group.label} className="ds-icon-img" />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
