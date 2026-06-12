import cornerTopLeft from '../assets/shared/corner-tl.svg';
import cornerTopRight from '../assets/shared/corner-tr.svg';
import cornerBottomLeft from '../assets/shared/corner-bl.svg';
import cornerBottomRight from '../assets/shared/corner-br.svg';
import moriahPhoto from '../assets/shared/moriah-photo.svg';
import resumePdf from '../assets/shared/resume.pdf';

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-intro-titles">
          <h1 className="about-greeting">Hello!</h1>
          <h2 className="about-name">My name is Moriah.</h2>
          <h2 className="about-title">I'm a freelance product designer.</h2>
        </div>
        <div className="about-intro-details">
          <p className="about-description">
            I have 8+ years of experience turning ideas into digital and print designs. I work closely with clients to ensure each design serves both users and business goals.
          </p>
          <div className="about-specialties">
            <p>My specialties:</p>
            <ul>
              <li>app design</li>
              <li>website design</li>
              <li>brand materials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Profile and Skills Section */}
      <section className="about-content">
        <div className="about-profile">
          <div className="profile-image-wrapper">
            <img src={moriahPhoto} alt="Moriah Chiang" className="profile-image" />
          </div>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="resume-button">Check out my resume</a>
        </div>

        <div className="about-skills">
          <h3 className="skills-title">Skills & Tools</h3>
          
          <div className="skills-cards-row">
            <div className="skills-card">
              <img src={cornerTopLeft} alt="" className="corner-decor corner-top-left" />
              <img src={cornerTopRight} alt="" className="corner-decor corner-top-right" />
              <img src={cornerBottomLeft} alt="" className="corner-decor corner-bottom-left" />
              <img src={cornerBottomRight} alt="" className="corner-decor corner-bottom-right" />
              
              <h4 className="skills-subtitle">Relevant Skills</h4>
              <ul className="skills-list">
                <li>Prototyping</li>
                <li>User Research (Competitive Analysis, User Interviews)</li>
                <li>User Flow</li>
                <li>Usability Testing</li>
                <li>Style Guide</li>
                <li>Layout Design</li>
                <li>Logo Design</li>
                <li>Basic HTML, CSS, & JavaScript</li>
              </ul>
            </div>

            <div className="skills-card">
              <img src={cornerTopLeft} alt="" className="corner-decor corner-top-left" />
              <img src={cornerTopRight} alt="" className="corner-decor corner-top-right" />
              <img src={cornerBottomLeft} alt="" className="corner-decor corner-bottom-left" />
              <img src={cornerBottomRight} alt="" className="corner-decor corner-bottom-right" />
              
              <h4 className="skills-subtitle">Tools</h4>
              <ul className="skills-list">
                <li>Figma</li>
                <li>Adobe Illustrator</li>
                <li>Adobe InDesign</li>
                <li>Adobe Photoshop</li>
                <li>Procreate</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
