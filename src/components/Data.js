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
import php from '../assets/skills/php.svg';
import laravel from '../assets/skills/laravel.svg';
import java from '../assets/skills/java.svg';
import postgresql from '../assets/skills/postgresql.svg';
import tailwind from '../assets/skills/tailwind.svg';
import figma from '../assets/skills/figma.svg';
// import sass from '../assets/skills/sass.AVIF';
// import webpack from '../assets/skills/webpack.AVIF';
import git from '../assets/skills/git.svg';
import github from '../assets/skills/github.svg';
import heroku from '../assets/skills/heroku.svg';
import netlify from '../assets/skills/netlify.svg';
import jest from '../assets/skills/jest.svg';
// import photoshop from '../assets/skills/photoshop.AVIF';
import npm from '../assets/skills/npm.svg';
import bookstore from '../assets/screenshots/bookstore.AVIF';
import mathmagician from '../assets/screenshots/mathmagician.AVIF';
import space from '../assets/screenshots/space.AVIF';
import netflix from '../assets/screenshots/netflix.AVIF';
import recipe from '../assets/screenshots/recipe.AVIF';
import budget from '../assets/screenshots/budget.AVIF';

const Data = [
  {
    id: 1,
    image: `${budget}`,
    title: 'Budget App',
    description: 'A mobile Web Application built using Ruby on Rails, which allows users to manage their budget. The application provides a list of transactions associated with a category, helping users to keep track of their expenses and understand where their money is going.',
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Tailwind CSS'],
    liveLink: 'https://bdgt-app.herokuapp.com/',
    sourceLink: 'https://github.com/stanleySimeon/Budget_App',
  },
  {
    id: 2,
    image: `${recipe}`,
    title: 'Recipe App',
    description: 'This is a recipe app that allows users to search for recipes by ingredients. It also allows users to add recipes to their favorites and view them later. Users are able to generate a shopping list of ingredients for the recipes they have added to their favorites. the app is built using the following technologies: Ruby, Ruby on Rails, Tailwind CSS and devise to the authentication system.​',
    technologies: ['Ruby', 'Ruby on Rails', 'Tailwind CSS'],
    liveLink: 'https://recp-app.herokuapp.com/',
    sourceLink: 'https://github.com/stanleySimeon/Recipe_App',
  },
  {
    id: 3,
    image: `${space}`,
    title: 'Space Travelers',
    description: 'A web app for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions. Users can also cancel rockets or leave space missions, and view all reserved rockets and joined missions on their profile page.',
    technologies: ['React', 'Redux', 'JavaScript', 'Tailwind'],
    liveLink: 'https://space-travellers.vercel.app',
    sourceLink: 'https://github.com/stanleySimeon/space-travellers',
  },
  {
    id: 4,
    image: `${bookstore}`,
    title: 'Bookstore',
    description: 'Built with React and Redux, this robust content management system empowers bookstore owners to effortlessly manage their inventory. With its intuitive interface, users can easily add or remove books from their store, as well as filter books by category. Plus, with the ability to add new categories, this app offers unparalleled flexibility and customization. Say goodbye to the hassle of manual inventory management and say hello to an efficient, streamlined workflow with this cutting-edge CMS.',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    liveLink: 'https://bookstore-three-sand.vercel.app',
    sourceLink: 'https://github.com/stanleySimeon/BOOKSTORE',
  },
  {
    id: 5,
    image: `${mathmagician}`,
    title: 'Calculator',
    description: 'A calculator app built with React and Redux. The app allows users to perform basic arithmetic operations, including addition, subtraction, division, and multiplication, and chaining and nesting of operations (as well as the +/- button which changes a negative number positive and vice-versa).',
    technologies: ['React', 'Redux', 'JavaScript', 'CSS'],
    liveLink: 'https://kalkilanm.vercel.app',
    sourceLink: 'https://github.com/stanleySimeon/maths-magician',
  },
  {
    id: 6,
    image: `${netflix}`,
    title: 'Netflix Clone',
    description: 'NETFLIX CLONE is a web app built with React JS and Ruby on Rails offers a user-friendly streaming platform that resembles the original Netflix. It features a catalog of movies and TV shows, user authentication, intuitive search options, video streaming, and playback controls.',
    technologies: ['React', 'Redux', 'JavaScript', 'Ruby on Rails', 'TailwindCSS'],
    liveLink: 'https://netflix-clone-gold-iota.vercel.app`',
    sourceLink: 'https://github.com/stanleySimeon/Netflix-Clone',
  },
];
export const Testimonials = [
  {
    id: 1,
    personName: 'Moïse Mulungu',
    testimonial: "Stanley is exactly the sort of software developer that any company would love. I worked with him building a couple of Single Page Applications (SPA), using JavaScript and React, Boostrap, and more, while struggling with a tough data structures problem, and within a few hours, he'd managed to explain a concept I'd been struggling with for days. He has a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. He is also just a fun person to chat with! If you need to get a job done simply and efficiently, Stanley is definitely the right person for you.",
    personPicture: 'https://media.licdn.com/dms/image/C4D03AQEnkWR7HpGrjg/profile-displayphoto-shrink_400_400/0/1650626892318?e=1681344000&v=beta&t=M0r1Cbaclt_-nDMfj-lMiRQpT8MrzuVcbwUafHyGROY',
    linkedin: 'https://www.linkedin.com/in/moisemulungu/',
    status: 'Full-stack Web Developer',
  },
  {
    id: 2,
    personName: 'Pascal Kabika',
    testimonial: 'Stanley is a joy to work with in software development. He handled our Web page capstone project at Microverse, with aplomb and diligence, displaying the ability to follow creative direction while adding his own creative input in a diplomatic and useful way to get a very well working and beautiful work. His work led to an increase in click-throughs. I recommend him to anyone who needs a diligent Full-stack software developer, a designer of mobile and website, a better javaScript understanding developer, and Website work.',
    personPicture: 'https://avatars.githubusercontent.com/u/82823425?v=4',
    linkedin: 'https://www.linkedin.com/in/pascal-kabika/',
    status: 'Full-stack Software Developer',
  },
  {
    id: 3,
    personName: 'Chia Carlyle',
    testimonial: "Stanley is a fantastic software engineer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled in Microverse, and during that time his work ethic blew me away. Stanley views writing clean, accessible code as a calling, and he's excellent at identifying areas where we can improve UI.He's also super friendly; by the time our project was done, I felt like we'd known each other for years.I can't recommend him enough!",
    personPicture: 'https://media.licdn.com/dms/image/C4D03AQHGwNW4bzGM9Q/profile-displayphoto-shrink_400_400/0/1641141037543?e=1681344000&v=beta&t=9L9RexCWI8vEXkQ-MsMmTR6CXVyY0NBGmYqyettdiZ4',
    linkedin: 'https://www.linkedin.com/in/chia-carlyle/',
    status: 'Full-stack Software Developer',
  },
  {
    id: 4,
    personName: 'Denis Lafontant',
    testimonial: 'Stanley is a hard worker and a dedicated developer. I was Stanley Code and Project Reviewer at Microverse, I can tell by the quality of his work and his ability to be open to suggestions make him a great developer, and for sure he is the right guy you want on your team.',
    personPicture: 'https://media.licdn.com/dms/image/C4E03AQHTuP7F01foaw/profile-displayphoto-shrink_800_800/0/1626144070046?e=1679529600&v=beta&t=c-HmNbEbPnTnpbw4uI1fMlCtT222J1JZWAZoxWVjk3M',
    linkedin: 'https://www.linkedin.com/in/denis-lafontant/',
    status: 'Full-stack Web Developer',
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: faGithubSquare,
    link: 'https://github.com/stanleySimeon',
    ariaLabel: 'Github',
  },
  {
    id: 2,
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/stanleysimeon/',
    ariaLabel: 'Linkedin',
  },
  {
    id: 3,
    icon: faTwitterSquare,
    link: 'https://twitter.com/mstanleyme',
    ariaLabel: 'Twitter',
  },
  {
    id: 4,
    icon: faFacebookSquare,
    link: 'https://www.facebook.com/simeonmartialstanley',
    ariaLabel: 'Facebook',
  },
  {
    id: 5,
    icon: faAngellist,
    link: 'https://angel.co/u/stanleysimeon',
    ariaLabel: 'AngelList',
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
    logo: `${php}`,
    name: 'PHP',
  },
  {
    id: 9,
    logo: `${laravel}`,
    name: 'Laravel',
  },
  {
    id: 10,
    logo: `${java}`,
    name: 'Java',
  },
  {
    id: 11,
    logo: `${postgresql}`,
    name: 'PostgreSQL',
  },
  {
    id: 12,
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
    logo: `${jest}`,
    name: 'Jest',
  },
  {
    id: 7,
    logo: `${figma}`,
    name: 'Figma',
  },
];

export default Data;
