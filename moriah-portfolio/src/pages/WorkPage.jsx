import { ProjectCard } from '../components/ProjectCard'
import image1 from '../assets/thumbnails/jumpers-buddy.svg'
import image2 from '../assets/thumbnails/koi.svg'
import image3 from '../assets/thumbnails/portfolio.svg'
import image4 from '../assets/thumbnails/sf-animation.svg'

export const WorkPage = () => {
  return (
    <div className="projects-section">
      <ProjectCard
        number="1"
        title="Jumper's Buddy"
        description="Somewhere track jump athletes can their statistics and information in one place; such as their approach, PRs, equipment, notes and cues, jump count, meet and practice schedule."
        tools="Figma"
        imageAlt="Jumper's Buddy app"
        imageSrc={image1}
        link="/work/jumpers-buddy"
      />
      <ProjectCard
        number="2"
        title="Koi"
        description="Created a health app that focuses on building habits and completing goals. A central feature of Koi is a koi pond that tracks your progress. As the goal grows, so does the pond."
        tools="Figma, Adobe Photoshop, Adobe Illustrator, Procreate"
        imageAlt="Koi app"
        imageSrc={image2}
        link="/work/koi"
      />
      <ProjectCard
        number="3"
        title="Product Design Portfolio"
        description="Designed a portfolio website to display my product design work. Collaborated closely with a frontend developer to launch the website."
        tools="Figma, CSS, JavaScript"
        imageAlt="Product Design Portfolio"
        imageSrc={image3}
        link="/work/portfolio"
      />
      <ProjectCard
        number="4"
        title="San Francisco CSS Animation"
        description="Coded a basic animation using CSS highlighting my home town. The animation shows a day in San Francisco at the Golden Gate Bridge."
        tools="HTML, CSS"
        imageAlt="San Francisco CSS Animation"
        imageSrc={image4}
        link="/work/sf-animation"
      />
    </div>
  )
}
