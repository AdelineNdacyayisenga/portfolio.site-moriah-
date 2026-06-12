import screenshotWork from '../assets/portfolio/screenshot-work-page.png';
import screenshotServices from '../assets/portfolio/screenshot-services-page.png';
import meetingImage from '../assets/portfolio/meeting.png';
import heroSectionImage from '../assets/portfolio/hero section image.svg';
import caseStudyStepsImage from '../assets/portfolio/case study steps image.svg';
import contactButtonImage from '../assets/portfolio/contact button image.svg';
import mobileWireframe from '../assets/portfolio/Mobile.svg';
import tabletWireframe from '../assets/portfolio/Tablet.svg';
import desktopWireframe from '../assets/portfolio/Desktop.svg';
import color1 from '../assets/portfolio/color1.svg';
import color2 from '../assets/portfolio/color 2.svg';
import decorations from '../assets/portfolio/decorations.svg';
import projectCard1 from '../assets/portfolio/project-card1.svg';
import projectCard2 from '../assets/portfolio/project-card2.svg';
import serviceCard1 from '../assets/portfolio/service-card1.svg';
import serviceCard2 from '../assets/portfolio/service-card2.svg';
import conclusionImage from '../assets/portfolio/conclusion.svg';
import nextStepsImage from '../assets/portfolio/next steps.svg';

export const portfolio = {
  slug: 'portfolio',
  title: "Product Design Portfolio",
  description:
    "Designed a portfolio to best show off my digital product design work. My heritage as a Chinese American inspired my choice of decorative elements throughout the UI. After designing a responsive website in Figma, collaboration with a frontend developer brings the website to life on the internet.",
  overview: {
    problem: "My work needs a professional portfolio to be housed. The website must also be easy for visitors to learn who I am and get in contact.",
    outcome: "A portfolio website that has a case study for each project; a page with my services; a bio about me; and a way to contact me.",
    delivered: [
      "Product Design",
      "Wireframes",
      "Design System",
      "Portfolio Website",
    ],
    year: "2026",
  },

  versionAudit: {
    sectionLabel: "Revision",
    title: "Version 1 Audit",
    description: "First attempt at creating a portfolio did not result in a product that I was proud of. This is because Version 1 of my portfolio was created while learning how to use HTML, CSS, and JavaScript. Running an audit to find what I wanted to change offered next steps for the second version.",
    sections: [
      {
        label: "Hero Section",
        image: heroSectionImage,
        description: "The hero section is the first thing a user would see and gives them an idea of who I am. Version 1's hero section lacked a reflection of my personality, leaving the page looking generic.",
      },
      {
        label: "Case Study Steps",
        image: caseStudyStepsImage,
        description: "Each step in a project's case study is accompanied with a paragraph description. Version 1's paragraphs were long and badly spaced so that it was hard to tell which photo the description is for.",
      },
      {
        label: "Contact Button",
        image: contactButtonImage,
        description: "The contact button on version 1 would only lead to the footer that had my contact information. The important contact information is available, however, it looks simple and unprofessional.",
      },
    ],
  },

  wireframes: {
    sectionLabel: "Prototyping",
    title: "Wireframes",
    description: "In this design, I prioritized ensuring the website was responsive, the UI stood out and represented who I am, and having buttons and pages easily accessible. The user should not have trouble looking for the information they need from the website.",
    rows: [
      { label: "Mobile", images: mobileWireframe },
      { label: "Tablet", images: tabletWireframe },
      { label: "Desktop", images: desktopWireframe },
    ],
  },

  designSystem: {
    sectionLabel: "User Interface",
    title: "Design System",
    description: "Researching Chinese ornate decorations inspired many visual design choices. It combines my Chinese and American heritage while showing off my design abilities.",
    colors: [
      { name: "Primary", hex: "#546357", swatchImage: color1 },
      { name: "Secondary", hex: "#3B0D0D", swatchImage: color2 },
    ],
    typography: {
      fontName: "Montseratt",
      googleFontUrl: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      sample: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890"
    },
    components: [
      { label: "Decorations", images: [decorations], layout: "horizontal" },
      { label: "Project Cards", images: [
        { src: projectCard1, caption: "Mobile Project Card" },
        { src: projectCard2, caption: "Large Screen Project Card" },
      ], layout: "vertical" },
      { label: "Services Cards", images: [
        { src: serviceCard1, caption: "Larger Screen Services Card" },
        { src: serviceCard2, caption: "Services Icons" },
      ], layout: "horizontal" },
    ],
  },

  collaborationProcess: {
    sectionLabel: "Design and Develop",
    title: "Collaboration Process",
    description: "The construction of this website is done with the help of my friend, Adeline Ndacyayisenga, who is a developer. We met biweekly to talk about the changes I've made on Figma and to talk about the additions she's made on the website. Each check in helped keep both of us on track with our goals.",
    sections: [
      {
        label: "Meetings",
        items: [
          {
            image: meetingImage,
            caption: "Design Check-in",
            note: "Reviewed Figma updates and discussed priorities for the next sprint.",
          },
          {
            image: meetingImage,
            caption: "Progress Review",
            note: "Moriah walked through responsive breakpoints and we aligned on layout decisions.",
          },
        ],
      },
      {
        label: "Adeline's Code",
        items: [
          {
            image: screenshotWork,
            caption: "Work Page",
            note: "Built the responsive Work page with project cards, corner decorations, the striped hero section, and the CTA button.",
          },
          {
            image: screenshotServices,
            caption: "Services Page",
            note: "Implemented the 2×2 service grid with SVG icons, decorative corner elements, and the Book a Discovery Call CTA.",
          },
        ],
      },
    ],
  },

  nextSteps: {
    sectionLabel: "Future Improvements",
    title: "Next Steps",
    description: "As I make more designs, I will need to be able to make adjustments to the website, so I must learn Java Script and brush up on my CSS. This will also allow me to refine the overall design as my skills improve with time.",
    image: nextStepsImage,
  },

  conclusion: {
    sectionLabel: "Final Thoughts",
    title: "Conclusion",
    description: "This design is a significant improvement from my version 1 portfolio. Version 2 better represents my style and helps clients understand what work I can provide. I look forward to expanding my list of works as I learn more about development.",
    image: conclusionImage,
  },
};
