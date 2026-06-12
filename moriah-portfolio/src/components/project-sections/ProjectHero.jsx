export const ProjectHero = ({ title, description }) => {
  const whiteText = { color: '#fff' };

  return (
    <section className="project-hero">
      <div className="project-hero-inner">
        <h1 className="project-hero-title" style={whiteText}>{title}</h1>
        <p className="project-hero-description" style={whiteText}>{description}</p>
      </div>
    </section>
  );
};
