import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/default-monochrome-white.svg';
import LogoIcon from '../../assets/default-monochrome-icon.svg';

export default function Navbar() {
  const { pathname } = useLocation();
  const focus = {
    opacity: 1,
  };

  const [isOpen, setIsOpen] = useState(false);
  let menu;
  let close;

  if (isOpen) {
    menu = (
      <>
        <ul className="Nav-links-mobile fixed top-0 left-0 h-screen w-full flex flex-col justify-center items-center gap-8 bg-myPortfolio">
          <li>
            <Link
              style={pathname === '/About' ? focus : {}}
              onClick={() => setIsOpen(!isOpen)}
              smooth
              duration={300}
              className="link"
              to="About"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/Portfolio' ? focus : {}}
              onClick={() => setIsOpen(!isOpen)}
              smooth
              duration={300}
              className="link"
              to="Portfolio"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/Contact' ? focus : {}}
              onClick={() => setIsOpen(!isOpen)}
              smooth
              duration={200}
              className="link"
              to="Contact"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1vgkAh5mW9u_2YQrT0An5NfFqqgCTacWBIUdvVgSWoio"
              rel="noreferrer"
            >
              RESUME
            </a>
          </li>
        </ul>
      </>
    );
    close = <FontAwesomeIcon icon={faTimes} className="faTimes text-4xl text-white font-light" onClick={() => setIsOpen(false)} />;
  }

  return (
    <header className="Navbar bg-black w-full h-auto fixed left-0 top-0 z-50 py-4">
      <nav className="Nav-container w-full flex justify-between items-center px-4 md:px-32">
        <div className="Nav-logo w-32 cursor-pointer">
          <Link style={pathname === '/' ? focus : {}} smooth duration={100} className="link hidden md:flex" to="Home"><img className="logo" src={Logo} alt="logo" /></Link>
          <Link style={pathname === '/' ? focus : {}} smooth duration={100} className="link md:hidden" to="Home"><img className="logo" src={LogoIcon} alt="logo" /></Link>
        </div>
        <span className="Nav-mobile-open-close flex flex-col md:hidden">
          <FontAwesomeIcon className="faBars text-3xl text-white text-normal" icon={faBars} onClick={() => setIsOpen(true)} />
          {menu}
          {close}
        </span>
        <ul className="Nav-links hidden md:flex items-center md:gap-12">
          <li>
            <Link
              style={pathname === '/About' ? focus : {}}
              smooth
              duration={300}
              className="link"
              to="About"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/Portfolio' ? focus : {}}
              smooth
              duration={300}
              className="link"
              to="Portfolio"
            >
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link
              style={pathname === '/Contact' ? focus : {}}
              smooth
              duration={200}
              className="link"
              to="Contact"
            >
              CONTACT
            </Link>
          </li>
          <li className="py-1 px-4 bg-myPortfolio-logo hover:bg-white hover:text-myPortfolio-logo">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1vgkAh5mW9u_2YQrT0An5NfFqqgCTacWBIUdvVgSWoio"
              rel="noreferrer"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
