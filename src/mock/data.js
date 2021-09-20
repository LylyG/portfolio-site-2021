import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'LGP | Dev', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a bookworm turned designer that likes to code. Currently, I work at NC State University as a User Experience Developer.",
  paragraphTwo: "I love having variety in my daily tasks and opportunities to learn. Most of time, I am opening PRs for UIs I've put together using Vuetify. When I need help adding more complexity to an interface, I pair program with the other developers and we learn as a team.",
  paragraphThree: "Sometimes, I'm called to do some graphic design, facilitate client meetings, or even teach during a breakout session.",
  resume: 'https://lylyg.github.io/LGP%20Resume%20Suite%202021.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pat.png',
    title: 'Program Assessment Tool (PAT)',
    info: 'Context',
    blurb: 'This app provides engineering programs with reporting and data collection software that will help faculty maintain' + { abet } + ' accreditation. A higher level goal is for PAT to part of a larger continuous improvement process.',
    info2: 'Lessons Learned',
    blurb2: 'The fewer filters between the development team and the actual software users the better. Feedback is an invaluable part of creating things that people will care about and use. Creating the right environment for that feedback cycle to happen gets harder as that distance grows.',
    info3: 'Type',
    blurb3: 'Team project',
    abet: 'https://www.abet.org/',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'foundation.png',
    title: 'Foundation',
    info: 'Context',    
    blurb: 'I managed this software development from end-to-end and also worked alongside my team as the UI/UX developer.',
    info2: 'Lessons Learned',
    blurb2: 'When I ran into friction during a sprint, I had to have one-on-one conversations with my coworkers to understand their motivations or obstacles. As the project manager, it was on me to remove roadblocks for things to move forward and that was a new responsibility to experience.',
    info3: 'Type',
    blurb3: 'Team project',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
  {
    id: nanoid(),
    img: 'eol.png',
    title: 'Engineering Online',
    info: 'Context',
    blurb: 'This app caters to students interested in an online engineering program. ',
    info2: 'Lessons Learned',
    blurb2: 'Balancing two different audiences (students and EOL staff) was difficult because while their workflows were separate, they impacted each other. I had to develop a deep understanding of both sides to develop layouts that would update in a way that made sense as data and content passed back and forth. ',
    info3: 'Type',
    blurb3: 'Team project',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lgalarzapunter@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lgalarzapunter/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LylyG',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
