export const ProjectOverview = ({ problem, outcome, delivered, year }) => {
  const whiteText = { color: '#fff' };

  return (
    <section className="project-overview" style={{ backgroundColor: '#8E7147', padding: '2rem' }}>
      <div className="project-overview-grid">
        <div className="project-overview-col">
          <h3 className="overview-col-title" style={whiteText}>The Problem</h3>
          <p className="overview-col-body" style={whiteText}>{problem}</p>
        </div>
        <div className="project-overview-col">
          <h3 className="overview-col-title" style={whiteText}>The Outcome</h3>
          <p className="overview-col-body" style={whiteText}>{outcome}</p>
        </div>
        <div className="project-overview-col">
          <h3 className="overview-col-title" style={whiteText}>Delivered</h3>
          <ul className="overview-delivered-list" style={whiteText}>
            {delivered.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="project-overview-col">
          <h3 className="overview-col-title" style={whiteText}>Year</h3>
          <p className="overview-col-body" style={whiteText}>{year}</p>
        </div>
      </div>
    </section>
  );
};
