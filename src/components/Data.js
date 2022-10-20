/* eslint-disable array-callback-return */
import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';
import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import javascript from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import redux from '../assets/skills/redux.svg';
import ruby from '../assets/skills/ruby.svg';
import rails from '../assets/skills/rails.svg';
import postgresql from '../assets/skills/postgresql.svg';
import tailwind from '../assets/skills/tailwind.svg';
import figma from '../assets/skills/figma.svg';
import sass from '../assets/skills/sass.png';
import webpack from '../assets/skills/webpack.png';
import git from '../assets/skills/git.svg';
import github from '../assets/skills/github.svg';
import heroku from '../assets/skills/heroku.svg';
import netlify from '../assets/skills/netlify.svg';
import jest from '../assets/skills/jest.svg';
import photoshop from '../assets/skills/photoshop.png';
import npm from '../assets/skills/npm.svg';

const Data = [
  {
    id: 1,
    image: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    title: 'Bookstore',
    description: 'A content management system for a bookstore, built with React and Redux.The app allows users to add and remove books from the store, and filter books by category, and also allows users to add new categories.',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS', 'HTML'],
    liveLink: 'https://bookstore-cms-2021.herokuapp.com/',
    sourceLink: 'https://github.com/StanleySimeon/bookstore-cms',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0SamxDy7a2YFk5zKd_l9Cd7qr9xppYvj1ID4fuvg6gkl8_NpGYVS42mLj4G1P2gJn48&usqp=CAU',
    title: 'Leaderboard',
    description: 'A leaderboard app built with React and Redux. The app allows users to add scores to a leaderboard and sort them by highest score, and also allows users to filter scores by category.',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS', 'HTML'],
    liveLink: 'https://leaderboard-2021.herokuapp.com/',
    sourceLink: '',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCZulJPFNdqpTIfud-SbMDmE9PaL2ZO5N-XbX--fIoXMMg0MKKco-4eC5QciziSwerWE&usqp=CAU',
    title: 'Weather',
    description: 'A weather app built with React and Redux. The app allows users to search for a city and view the current weather conditions and a 5-day forecast.',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS', 'HTML'],
    liveLink: 'https://weather-app-2021.herokuapp.com/',
    sourceLink: '',
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MF_LXIT85ljMWq4eUpreS1K7JFY6tuMNLTaXQbh3HnV9n6xCfHkIoMlPtOartT7GJT4&usqp=CAU',
    title: 'Calculator',
    description: 'A calculator app built with React and Redux. The app allows users to perform basic arithmetic operations.',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS', 'HTML'],
    liveLink: 'https://calculator-2021.herokuapp.com/',
    sourceLink: '',
  },
];
export const Testimonials = [
  {
    id: 1,
    personName: 'Moïse Mulungu',
    testimonial: "Stanley is exactly the sort of software developer that any company would love. I worked with him building a couple of Single Page Applications (SPA), using JavaScript and React, Boostrap, and more, while struggling with a tough data structures problem, and within a few hours, he'd managed to explain a concept I'd been struggling with for days. He has a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. He is also just a fun person to chat with! If you need to get a job done simply and efficiently, Stanley is definitely the right person for you.",
    personPicture: 'https://media-exp1.licdn.com/dms/image/D4D35AQEIwCEfqJGgwg/profile-framedphoto-shrink_800_800/0/1650626895872?e=1666818000&v=beta&t=aqsgb5OQhuakrxb15pI494jEW7qGeFRSyhZpOPwSIbM',
    linkedin: 'https://www.linkedin.com/in/moisemulungu/',
    status: 'Full-stack Web Developer',
  },
  {
    id: 2,
    personName: 'Pascal Kabika',
    testimonial: 'Stanley is a joy to work with in software development. He handled our Web page capstone project at Microverse, with aplomb and diligence, displaying the ability to follow creative direction while adding his own creative input in a diplomatic and useful way to get a very well working and beautiful work. His work led to an increase in click-throughs. I recommend him to anyone who needs a diligent Full-stack software developer, a designer of mobile and website, a better javaScript understanding developer, and Website work.',
    personPicture: 'https://media-exp1.licdn.com/dms/image/D4D35AQEyxKcIHAVzBA/profile-framedphoto-shrink_800_800/0/1655921517353?e=1666821600&v=beta&t=JeG6VvbDpht5cmI9ai7FFg6rmVJVl6mQfg4wzOb3f5A',
    linkedin: 'https://www.linkedin.com/in/pascal-kabika/',
    status: 'Full-stack Software Developer',
  },
  {
    id: 3,
    personName: 'Chia Carlyle',
    testimonial: "Stanley is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled in Microverse, and during that time his work ethic blew me away. Stanley views writing clean, accessible code as a calling, and he's excellent at identifying areas where we can improve UI.He's also super friendly; by the time our project was done, I felt like we'd known each other for years.I can't recommend him enough!",
    personPicture: 'https://media-exp1.licdn.com/dms/image/D4E35AQGmr-TKksw2Vg/profile-framedphoto-shrink_800_800/0/1650124952321?e=1666818000&v=beta&t=a9iuAexvSxZNmIUfkmUc6eN7sg7sjWPDRavTEOTASx8',
    linkedin: 'https://www.linkedin.com/in/chia-carlyle/',
    status: 'Full-stack Software Developer',
  },
  {
    id: 4,
    personName: 'Denis Lafontant',
    testimonial: 'Stanley is a hard worker and a dedicated developer. I was Stanley Code and Project Reviewer at Microverse, I can tell by the quality of his work and his ability to be open to suggestions make him a great developer, and for sure he is the right guy you want on your team.',
    personPicture: 'https://media-exp1.licdn.com/dms/image/C4E03AQHTuP7F01foaw/profile-displayphoto-shrink_200_200/0/1626144070046?e=1671667200&v=beta&t=2XPRw_6PTPamDn1oTVies6zBHoJyvzD-9tx2Op4N_lc',
    linkedin: 'https://www.linkedin.com/in/denis-lafontant/',
    status: 'Full-stack Web Developer',
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: faGithubSquare,
    link: 'https://github.com/stanleySimeon',
  },
  {
    id: 2,
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/stanleysimeon/',
  },
  {
    id: 3,
    icon: faTwitterSquare,
    link: 'https://twitter.com/mstanleyme',
  },
  {
    id: 4,
    icon: faFacebookSquare,
    link: 'https://www.facebook.com/simeonmartialstanley',
  },
  {
    id: 5,
    icon: faAngellist,
    link: 'https://angel.co/u/stanleysimeon',
  },
];

export const Languages = [
  {
    id: 1,
    logo: `${html}`,
    name: 'HTML',
  },
  {
    id: 2,
    logo: `${css}`,
    name: 'CSS',
  },
  {
    id: 3,
    logo: `${javascript}`,
    name: 'JavaScript',
  },
  {
    id: 4,
    logo: `${react}`,
    name: 'React',
  },
  {
    id: 5,
    logo: `${redux}`,
    name: 'Redux',
  },
  {
    id: 6,
    logo: `${ruby}`,
    name: 'Ruby',
  },
  {
    id: 7,
    logo: `${rails}`,
    name: 'Rails',
  },
  {
    id: 8,
    logo: `${postgresql}`,
    name: 'PostgreSQL',
  },
  {
    id: 9,
    logo: `${tailwind}`,
    name: 'Tailwind CSS',
  },
];

export const skills = [
  {
    id: 1,
    logo: `${git}`,
    name: 'Git',
  },
  {
    id: 2,
    logo: `${github}`,
    name: 'Github',
  },
  {
    id: 3,
    logo: `${npm}`,
    name: 'NPM',
  },
  {
    id: 4,
    logo: `${heroku}`,
    name: 'Heroku',
  },
  {
    id: 5,
    logo: `${netlify}`,
    name: 'Netlify',
  },
  {
    id: 6,
    logo: `${webpack}`,
    name: 'Webpack',
  },
  {
    id: 7,
    logo: `${sass}`,
    name: 'SASS',
  },
  {
    id: 8,
    logo: `${jest}`,
    name: 'Jest',
  },
  {
    id: 9,
    logo: `${figma}`,
    name: 'Figma',
  },
  {
    id: 10,
    logo: `${photoshop}`,
    name: 'Photoshop',
  },
];

export default Data;
