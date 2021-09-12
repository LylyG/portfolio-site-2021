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
    img: 'project.jpg',
    title: 'Program Assessment Tool (PAT)',
    info: 'Context',
    blurb: 'blurb',
    info2: 'Lessons Learned',
    blurb2: 'blurb'
    info3: 'Web Stack + Explanation',
    blurb3: 'blurb'
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Engineering Online',
    info: 'Context',
    blurb: 'blurb',
    info2: 'Lessons Learned',
    blurb2: 'blurb',
    info3: 'Web Stack + Explanation',
    blurb3: 'blurb',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Foundation',
    info: 'Context',    
    blurb: 'blurb',
    info2: 'Lessons Learned',
    blurb2: 'blurb',
    info3: 'Web Stack + Explanation',
    blurb3: 'blurb',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
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
