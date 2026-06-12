import samImage from '../assets/koi/sam@4x 1.svg';
import jordanImage from '../assets/koi/jordan@4x 1.svg';
import userFlowImage from '../assets/koi/user flow@4x 1.svg';
import lofiImage from '../assets/koi/lofi@4x 1.svg';
import hifi1Image from '../assets/koi/hifi1@4x 1.svg';
import hifi2Image from '../assets/koi/hifi2@4x 1.svg';
import walkThrough1 from '../assets/koi/walk through 1.svg';
import walkThrough2 from '../assets/koi/walk through 2.svg';
import walkThrough3 from '../assets/koi/walk through 3.svg';
import walkThrough4 from '../assets/koi/walk through 4.svg';
import walkThrough5 from '../assets/koi/walk through 5.svg';
import color1 from '../assets/koi/color1.svg';
import color2 from '../assets/koi/color2.svg';
import color3 from '../assets/koi/color3.svg';
import color4 from '../assets/koi/color4.svg';
import color5 from '../assets/koi/color5.svg';
import color6 from '../assets/koi/color6.svg';
import color7 from '../assets/koi/color7.svg';
import buttonsImage from '../assets/koi/buttons.svg';
import navigationBarsImage from '../assets/koi/navigationBars.svg';
import onboardingIcons from '../assets/koi/onboardingIcons.svg';
import achievementsIcons from '../assets/koi/achievementsIcons.svg';
import logoIcons from '../assets/koi/logoIcons.svg';
import pondIcons from '../assets/koi/pondIcons.svg';
import congratulationsIcon from '../assets/koi/congratulationsIcon.svg';
import pondDecorationIcon from '../assets/koi/pondDecorationIcon.svg';
import lofiChallenges from '../assets/koi/lofiChallenges.svg';
import hifi1Challenges from '../assets/koi/hifi1Challenges.svg';
import hifi2Challenges from '../assets/koi/hifi2Challenges.svg';
import lofiAddition from '../assets/koi/lofiAddition.svg';
import hifiAddition from '../assets/koi/hifiAddition.svg';
import koiConclusion from '../assets/koi/koiConclusion.svg';

export const koi = {
  slug: 'koi',
  title: "Koi",
  description:
  "Koi is made to help the user complete goals and build habits for a healthier life. This was also an app designed through the Career Foundry's product design course. In this project, I created a fully prototyped app that includes 6 main features that help the user cultivate a healthy lifestyle.",
  overview: {
    problem:
    "The user is not sure how to begin their health journey but knows they want to live a healthier lifestyle. Koi eliminates the growing pains of starting with guided goal plans and a focus on growth.",
    outcome: "An app that is able to keep track of goals based on the formation of daily habits. easy to accomplish tasks guide the user towards achieving their goal.",
    delivered: [
      "Product Design",
      "User Personas",
      "User Flow",
      "Wireframes",
      "Design System",
    ],
    year: "2024",
  },

  personas: {
    sectionLabel: "Target Audience",
    title: "User Personas",
    intro: "Sam and Jordan are both young and are decently tech savvy. Sam is interested in curating healthier habits into their life. Jordan wants working out to become one of his hobbies that helps him build his confidence and his muscles.",
    users: [
      { name: "Sam", image: samImage },
      { name: "Jordan", image: jordanImage },
    ],
  },

  userFlow: {
    sectionLabel: "Information Architecture",
    title: "User Flow",
    description: "Once the user signs in, they are brought to the pond, which is also the dashboard, where they can see the goals they are working on. Then the user can choose the activity they want to do to complete the task.",
    image: userFlowImage,
  },

  wireframes: {
    sectionLabel: "Prototyping",
    title: "Wireframes",
    description: "The low fidelity wireframes outlined the basic structure of the app. After revisions, I designed the first version of a high fidelity wireframe. This was the version I conducted usability tests on. Adjustment based on the usability tests, peer review feedback, and mentor feedback led me to the final version of Koi.",
    rows: [
      { label: "Low Fidelity", images: lofiImage },
      { label: "High Fidelity 1", images: hifi1Image },
      { label: "High Fidelity 2", images: hifi2Image },
      { label: "Walk Through for First Time Users", images: [walkThrough1, walkThrough2, walkThrough3, walkThrough4, walkThrough5] },
    ],
  },

  designSystem: {
    sectionLabel: "User Interface",
    title: "Design System",
    description: "Themes of growth, peace, and health inspired the design system. The UI should help the user understand they are in the right place to work on their goals.",
    colors: [
      { name: "White/BG", hex: "#EDFBF3", swatchImage: color1 },
      { name: "Primary", hex: "#85C7A4", swatchImage: color2 },
      { name: "Secondary", hex: "#295132", swatchImage: color3 },
      { name: "Black/Tertiary", hex: "#0D241A", swatchImage: color4 },
      { name: "Accent", hex: "#6D638B", swatchImage: color5 },
      { name: "Accent", hex: "#423075", swatchImage: color6 },
      { name: "Accent", hex: "#291646", swatchImage: color7 }
    ],
    typography: {
      fontName: "Familjen Grotesk",
      googleFontUrl: "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&display=swap",
      sample: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 1234567890"
    },
    components: [
      { label: "Buttons", images: [buttonsImage] },
      { label: "Navigation Bars", images: [navigationBarsImage] },
    ],
    icons: [
      { label: "Onboarding", images: [onboardingIcons] },
      { label: "Achievements", images: [achievementsIcons] },
      { label: "Logo", images: [logoIcons] },
      { label: "Pond Koi", images: [pondIcons] },
      { label: "Congratulations Koi", images: [congratulationsIcon] },
      { label: "Pond Decoration", images: [pondDecorationIcon] },
    ],
  },

  challenges: {
    sectionLabel: "Trial and Error",
    title: "Challenges",
    description:
      "The biggest challenge was deciding on a clear direction for Koi. I knew I wanted Koi to be a typical health tracking app, while also include goal tracking capabilities, and involve a gamified component. Inspiration came from multiple apps and I did not know how to distill them.",
    groups: [
      {
        label: "Transformation of progress rings",
        items: [
          {
            image: lofiChallenges,
            caption: "LowFi",
            note: "The initial design of progress tracking rings",
          },
          {
            image: hifi1Challenges,
            caption: "HiFi 1",
            note: "This is the design used in usability tests",
          },
          {
            image: hifi2Challenges,
            caption: "HiFi 2",
            note: "Progress 'rings' were changed to koi fishes in a pond that gradually gain color as tasks are completed",
          },
        ],
      },
      {
        label: "Addition of the Scheduled Task List",
        items: [
          {
            image: lofiAddition,
            caption: "LowFi",
            note: "This long list of tasks didn't provide much guidance for how the user could best use this tool",
          },
          {
            image: hifiAddition,
            caption: "HiFi",
            note: "Scheduling tasks for better pacing guides the user through a realistic time frame",
          },
        ],
      },
    ],
  },

  conclusion: {
    sectionLabel: "Future Improvements",
    title: "Conclusion",
    description:
      "Koi has developed into a unique app that has taught me much. An abundance of inspiration provided many options for Koi to become the app I envisioned. Through usability tests and iterations, the app has become better tailored for users ready to improve their habits.",
    image: koiConclusion,
  },
};
