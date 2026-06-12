export const UserPersonas = ({ sectionLabel, title, intro, users }) => {
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
    <section className="project-section personas-section">
      <div className="personas-left">
        <span style={labelStyle}>{sectionLabel}</span>
        <h2 className="section-title" style={whiteText}>{title}</h2>
        <p className="section-body" style={whiteText}>{intro}</p>
      </div>

      <div className="personas-cards">
        {users.map((user) => (
          <div key={user.name} className="persona-card">
            {user.image ? (
              <img src={user.image} alt={user.name} className="persona-card-img" />
            ) : (
              <div className="image-placeholder-rect persona-placeholder" style={whiteText}>{user.name}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
