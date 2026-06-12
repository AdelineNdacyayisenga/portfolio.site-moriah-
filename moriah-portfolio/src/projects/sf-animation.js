import vectorImage from '../assets/sf-animation/Vector.svg';
import animation1 from '../assets/sf-animation/Animation 1.svg';
import animation2 from '../assets/sf-animation/Animation 2.svg';
import animation3 from '../assets/sf-animation/Animation 3.svg';
import cssCode from '../assets/sf-animation/CSS.svg';

export const sfAnimation = {
  slug: 'sf-animation',
  title: "San Francisco CSS Animation",
  description:
    "San Francisco is a beautiful city with it's own quirks. I'm proud to call this city my home. This animation, created in CSS, highlights one of the city's most popular landmark, the Golden Gate Bridge.",
  overview: {
    problem: "Learn basic CSS for frontend development.",
    outcome: "Create an animated vector using CSS.",
    delivered: [
      "Adobe Illustrator",
      "CSS Animation",
    ],
    year: "2025",
  },

  purpose: {
    sectionLabel: "Objective",
    title: "Purpose",
    description: "CSS animation is responsible for moving elements such as a rotating loading wheel. Giving certain elements movements can be essential for the function of the website and overall increase the energy of the site. This project covers a few types of movements and the details required for an animation.",
  },

  vectorIllustration: {
    sectionLabel: "Vector Illustration",
    image: vectorImage,
    description: "The first step was to find a vector. This vector was sourced from Freepik and posted by pikisuperstar. Next the layers were properly labeled and grouped so that the SVG code had the proper ids.",
  },

  assembly: {
    sectionLabel: "Construction",
    title: "Assembly",
    description: "Now that the file is ready to animate, I decided the clouds will move since SF is known for it's foggy and cloudy climate. Then the sky color is changed to reflect the sky changing to night and back to day. The animation depicts a glimpse into the Golden Gate Bridge's day.",
    animationFrames: {
      label: "Animation Frames",
      images: [animation1, animation2, animation3],
    },
    cssCode: {
      label: "CSS Code",
      image: cssCode,
      description: "The code that put all the pieces together.",
    },
  },

  conclusion: {
    sectionLabel: "Final Thoughts",
    title: "Conclusion",
    description: "This project gave me appreciation for the animated details on websites. Animation on websites have become so integrated into a website structure, it is easily overlooked.\n\nIn my future learnings, I want to incorporate element interactions that require the user to hover the mouse over to activate the animation. This can create an interesting element for the user to play with and add a unique movement to my portfolio site.",
    image: animation1,
  },
};
