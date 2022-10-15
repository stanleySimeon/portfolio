/* eslint-disable no-param-reassign */
import React from 'react';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/default-monochrome-white.svg';
import MenuItems from './MenuItems';

export default function Navigation() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    const nav = document.querySelector('.nav-menu');
    nav.classList.toggle('hidden');
  };

  return (
    <nav className="NavItems flex justify-between items-center nav w-full h-auto px-2 py-4 md:px-32 bg-myPortfolio">
      <a href="/" className="nav-logo">
        <img src={logo} alt="logo" className="w-24 md:w-32" />
      </a>
      <div className="menu-icon md:hidden">
        <FontAwesomeIcon
          icon={clicked ? faTimes : faBars}
          onClick={handleClick}
          className="text-white w-6 h-6"
        />
      </div>
      <ul className="nav-menu hidden flex-col md:flex md:flex-row md:justify-center md:items-center w-6/12 md:w-auto md:gap-20 h-full md:h-auto absolute md:relative top-0 left-0 md:pt-0 pt-20 bg-myPortfolio md:bg-transparent opacity-95">
        {
          MenuItems.map((item) => (
            <li key={item.id} role="presentation" className="text-white text-xl pb-4 md:pb-0 text-center">
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
