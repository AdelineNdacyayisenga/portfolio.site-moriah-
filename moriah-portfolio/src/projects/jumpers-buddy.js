import alexPhoto from '../assets/jumpers-buddy/alex@4x 1.svg';
import caseyPhoto from "../assets/jumpers-buddy/casey@4x 1.svg";
import userFlowImg from "../assets/jumpers-buddy/userflow@4x 1-jumper's body.svg";
import eventsLowFi from "../assets/jumpers-buddy/lowfi events-Jumper's body.svg";
import eventsHiFi1 from "../assets/jumpers-buddy/hifi1 events-Jumper's body.svg";
import eventsHiFi2 from "../assets/jumpers-buddy/hifi2 events-Jumper's body.svg";
import sessionLowFi from "../assets/jumpers-buddy/lowfi session-Jumper's body.svg";
import sessionHiFi1 from "../assets/jumpers-buddy/hifi1 session-Jumper's body.svg";
import sessionHiFi2 from "../assets/jumpers-buddy/hifi2 session-Jumper's body.svg";
import scheduleLowFi from "../assets/jumpers-buddy/lowfi schedule-Jumper's body.svg";
import scheduleHiFi1 from "../assets/jumpers-buddy/hifi1 schedule-Jumper's body.svg";
import scheduleHiFi2 from "../assets/jumpers-buddy/hifi2 schedule-Jumper's body.svg";
import colorPrimary from "../assets/jumpers-buddy/primary color - Jumper's body.svg";
import colorSecondary from "../assets/jumpers-buddy/secondary color - Jumper's body.svg";
import colorBackground from "../assets/jumpers-buddy/background color - Jumper's body.svg";
import colorPink from "../assets/jumpers-buddy/pink accent color - Jumper's body.svg";
import colorGold from "../assets/jumpers-buddy/gold accent color - Jumper's body.svg";
import cardPvInfo from "../assets/jumpers-buddy/pv info 1 - Jumper's body.svg";
import cardSessionCount from "../assets/jumpers-buddy/hori j sess count 1 - Jumper's body.svg";
import cardCalendar from "../assets/jumpers-buddy/calendar meet 1 - Jumper's body.svg";
import navBars from "../assets/jumpers-buddy/navigation bars - Jumper's body.svg";
import buttons from "../assets/jumpers-buddy/buttons - Jumper's body.svg";
import selectorEvent from "../assets/jumpers-buddy/event drop down 1 - selectors - Jumper's body.svg";
import selectorSteps from "../assets/jumpers-buddy/steps drop down 1 - selectors- Jumper's body.svg";
import selectorMonth from "../assets/jumpers-buddy/month drop down 1 - selectors - Jumper's body.svg";
import nextStepsImg from "../assets/jumpers-buddy/next-steps@2x 1.svg";
import conclusionImg from "../assets/jumpers-buddy/conclusion@2x 1.svg";
import hifi1Events from "../assets/jumpers-buddy/hifi1 events-Jumper's body.svg";
import hifi2Events from "../assets/jumpers-buddy/event challenge@4x.svg";
import hifi1Session from "../assets/jumpers-buddy/hifi1 session-Jumper's body.svg";
import hifi2Session from "../assets/jumpers-buddy/session challenge@4x 1.svg";

export const jumpersBuddy = {
  slug: 'jumpers-buddy',
  title: "Jumper's Buddy",
  description:
    "Track & Field jump athletes have a lot to remember in order to execute a jump attempt. I partnered with a track jumps coach to create an app that gives jump athletes a place to write down their run start, PR, equipment, notes and cues, meets and schedule, packing list, and session count.",

  overview: {
    problem:
      "An app where athletes can keep their information in one organized and easy to find spot that is designed for optimal information tracking for all Track and Field jump events.",
    outcome:
      "Constructed an app tailored to Track & Field athletes with it's own design system; structured systems around user feedback, developed intrigue in a tool that helps keep track of notes.",
    delivered: [
      "Product Design",
      "User Personas",
      "User Flow",
      "Wireframes",
      "Design System",
    ],
    year: "2025",
  },

  personas: {
    sectionLabel: "Target Audience",
    title: "User Personas",
    intro:
      "Jumper's Buddy is made for track jump athletes like Alex and Casey. Both athletes train in a Track & Field jumps event and are well versed in what it takes to perform well.",
    users: [
      { name: "Alex", image: alexPhoto },
      { name: "Casey", image: caseyPhoto },
    ],
  },

  userFlow: {
    sectionLabel: "Information Architecture",
    title: "User Flow",
    description:
      "The three main pages: Events, Sessions, Schedule; include features that are relevant to practices and meets.",
    image: userFlowImg,
  },

  wireframes: {
    title: "Wireframes",
    description:
      "Due to a limited amount of track jump apps, I wasn't sure of the best way to construct certain features on the app. I learned from other exercise tracking apps to find designs that have worked for them. Relying on my knowledge of jump events, the track specific features were adapted.",
    groups: [
      {
        label: "Events",
        caption:
          "The Events page connects the user to the information and videos for each of their events.",
        rows: [
          { title: "Low Fidelity", image: eventsLowFi },
          { title: "High Fidelity 1", image: eventsHiFi1 },
          { title: "High Fidelity 2", image: eventsHiFi2 },
        ],
      },
      {
        label: "Sessions",
        caption:
          "The Sessions page tracks each jump the athlete takes in a jump session. Each jump allows the athlete to take notes about the jump and what they jumped at.",
        rows: [
          { title: "Low Fidelity", image: sessionLowFi },
          { title: "High Fidelity 1", image: sessionHiFi1 },
          { title: "High Fidelity 2", image: sessionHiFi2 },
        ],
      },
      {
        label: "Schedule",
        caption:
          "The Schedule page is where the athlete inputs their workout routine, meet schedule, and rest days.",
        rows: [
          { title: "Low Fidelity", image: scheduleLowFi },
          { title: "High Fidelity 1", image: scheduleHiFi1 },
          { title: "High Fidelity 2", image: scheduleHiFi2 },
        ],
      },
    ],
  },

  designSystem: {
    sectionLabel: "User Interface",
    title: "Design System",
    description:
      "The Jumper's Buddy visual design was inspired by track details. The colors reflect the common red rubber and the white outlines mimic lane lines.",
    colors: [
      { name: "Primary", hex: "#803131", swatchImage: colorPrimary },
      { name: "Secondary", hex: "#3B0D0D", swatchImage: colorSecondary },
      { name: "Background", hex: "#1D1111", swatchImage: colorBackground },
      { name: "Pink Accent", hex: "#FF9292", swatchImage: colorPink },
      { name: "Gold Accent", hex: "#B7A173", swatchImage: colorGold },
    ],
    typography: {
      fontName: "Familjen Grotesk",
      googleFontUrl:
        "https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;700&display=swap",
    },
    components: [
      {
        label: "Cards",
        images: [
          { src: cardPvInfo, caption: "Pole Vault Event Card" },
          { src: cardSessionCount, caption: "Long Jump Session Count Card" },
          { src: cardCalendar, caption: "Schedule Card" },
        ],
      },
      { label: "Navigation Bars", images: [navBars] },
      { label: "Buttons", images: [buttons] },
      { label: "Selectors", images: [selectorEvent, selectorSteps, selectorMonth] },
    ],
  },

  challenges: {
    sectionLabel: "Trial and Error",
    title: "Challenges",
    description:
      "The Sessions page was the most difficult feature to design. Considering how to clearly show each jump attempt, details related to each jump, and methods for the user to look at past jumps and sessions required many rounds of iteration. After running usability tests, I was able to revise the informational architecture on the Events page and the Sessions cards.",
    groups: [
      {
        label: "Events",
        items: [
          {
            image: hifi1Events,
            caption: "HIFI 1",
            note: "Didn't want users to have to click through a lot of things to see their information.",
          },
          {
            image: hifi2Events,
            caption: "HIFI 2",
            note: "However, allowing the user to select what they are looking at makes it easier for the information to be processed.",
          },
        ],
      },
      {
        label: "Session",
        items: [
          {
            image: hifi1Session,
            caption: "HIFI 1",
            note: "Wanted the layout to include as much relevant information as can fit.",
          },
          {
            image: hifi2Session,
            caption: "HIFI 2",
            note: "Unfamiliarity with this feature encouraged the addition of instructions at the top.",
          },
        ],
      },
    ],
  },

  nextSteps: {
    sectionLabel: "Future Improvements",
    title: "Next Steps",
    description:
    "The next steps for the app is to get the app onto application platforms for people to download. As the app gets action in the real world, I hope to receive feedback from frequent users and upload updates that adjust the design as needed. I hope the app can help athletes improve their performance and overall jump routine.",
    image: nextStepsImg,
  },

  conclusion: {
    sectionLabel: "Final Thoughts",
    title: "Conclusion",
    description:
      "Jumper's Buddy posed an unique challenge of extending exercise tracking to track jump events. Creating the features required knowledge about how jump events operate during practice and meets, as well as research into what makes exercise apps so successful. I'm interested to explore what other topics can be combined and helped with design.",
    image: conclusionImg,
  },
};
