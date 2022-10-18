import {
  faFacebookSquare,
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';

const Data = [
  {
    id: 1,
    image: 'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
    title: 'Bookstore CMS',
    description: 'A content management system for a bookstore, built with React and Redux.The app allows users to add and remove books from the store, and filter books by category, and also allows users to add new categories.',
    technologies: ['React', 'Redux', 'JavaScript ES6', 'CSS', 'HTML'],
    liveLink: 'https://bookstore-cms-2021.herokuapp.com/',
    sourceLink: 'https://github.com/StanleySimeon/bookstore-cms',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0SamxDy7a2YFk5zKd_l9Cd7qr9xppYvj1ID4fuvg6gkl8_NpGYVS42mLj4G1P2gJn48&usqp=CAU',
    title: 'Leaderboard',
    description: 'A leaderboard app built with React and Redux. The app allows users to add scores to a leaderboard and sort them by highest score, and also allows users to filter scores by category.',
    technologies: ['React', 'Redux', 'JavaScript ES6', 'CSS', 'HTML'],
    liveLink: 'https://leaderboard-2021.herokuapp.com/',
    sourceLink: '',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCZulJPFNdqpTIfud-SbMDmE9PaL2ZO5N-XbX--fIoXMMg0MKKco-4eC5QciziSwerWE&usqp=CAU',
    title: 'Weather App',
    description: 'A weather app built with React and Redux. The app allows users to search for a city and view the current weather conditions and a 5-day forecast.',
    technologies: ['React', 'Redux', 'JavaScript ES6', 'CSS', 'HTML'],
    liveLink: 'https://weather-app-2021.herokuapp.com/',
    sourceLink: '',
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MF_LXIT85ljMWq4eUpreS1K7JFY6tuMNLTaXQbh3HnV9n6xCfHkIoMlPtOartT7GJT4&usqp=CAU',
    title: 'Calculator',
    description: 'A calculator app built with React and Redux. The app allows users to perform basic arithmetic operations.',
    technologies: ['React', 'Redux', 'JavaScript ES6', 'CSS', 'HTML'],
    liveLink: 'https://calculator-2021.herokuapp.com/',
    sourceLink: '',
  },
];
export const Testimonials = [
  {
    id: 1,
    personName: 'Stanley SIMEON',
    testimonial: 'This is a testimonial for To Do List project 6 by Stanley Simeon 2021 - 2022 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDfpni4Ucb87sjiaUk7HdK2-cEqaDbOZdHpVVKQYHSQ&s',
    status: 'Full-stack Developer',
  },
  {
    id: 2,
    personName: 'Stanley MARTIN',
    testimonial: 'This is a testimonial for To Do List project 6 by Stanley Simeon 2021 - 2022 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personPicture: 'https://c8.alamy.com/comp/2B9EEJ7/conceptual-image-of-a-neural-network-in-the-human-brain-2B9EEJ7.jpg',
    status: 'Full-stack Developer',
  },
  {
    id: 3,
    personName: 'Stanley JASON',
    testimonial: 'This is a testimonial for To Do List project 6 by Stanley Simeon 2021 - 2022 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    personPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmA_PNznQW8wSrgIaJYv8rrBH-OP9-G9hhw&usqp=CAU',
    status: 'Full-stack Developer',
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

export const skills = [
  {
    id: 1,
    logo: '../assets/skillsLogo/html.png',
    name: 'HTML',
  },
];

export default Data;
