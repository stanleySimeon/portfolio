import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import { socialMedia } from './Data';
import Navbar from './Navbar/Navigation';
import video from '../assets/bg2.mp4';

export default function Home() {
  const { pathname } = useLocation();

  const opacity = {
    opacity: 1,
  };

  return (
    <section id="Home" className="container-fluid relative w-full h-screen">
      <Navbar />
      <video autoPlay loop muted className="absolute top-0 left-0 mx-auto z-0 w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute left-0 top-0 w-full h-full px-4 md:mt-0 md:px-16 lg:px-32 flex flex-col justify-center bg-black bg-opacity-75">
        <div className="md:w-10/12 lg:w-7/12 md:bg-blue flex flex-col space-y-3 md:space-y-4 pt-20 sm:pt-0">
          <span className="text-myPortfolio-orange font-thin wow bounceInLeft text-5xl  md:text-7xl">I&#39;m Stanley</span>
          <h1 className="wow bounceInLeft text-white text-5xl  md:text-7xl font-bold">
            Glad to see you!
          </h1>
          <p className="wow fadeInUp text-myPortfolio-grayLight text-sm sm:text-md lg:text-lg font-light my-4 md:my-6 text-justify">
            I am a highly skilled software developer with extensive experience
            in building high-quality products, features, and websites.
            My work speaks for itself, and I am confident that I can help you
            achieve your project goals. If you are looking for a professional
            with a proven track record of success, look no further.
            Let&#39;s bring your vision to life, contact me now.
          </p>
          <div className="flex space-x-3 md:space-x-4 py-2 z-40">
            <Link
              style={pathname === '/About' ? opacity : {}}
              smooth
              duration={100}
              to="About"
              data-wow-duration=".5s"
              data-wow-delay=".8s"
              className="wow fadeInUp bg-myPortfolio-logo text-white text-sm md:text-md text-center py-2 px-4 md:px-8 rounded-md select-none cursor-pointer"
            >
              <span>GET STARTED</span>
            </Link>
            <Link
              style={pathname === '/Contact' ? opacity : {}}
              smooth
              duration={100}
              to="Contact"
              data-wow-duration=".8s"
              data-wow-delay=".9s"
              className="wow fadeInUp border border-bg-myPortfolio-white text-myPortfolio-white text-sm md:text-md text-center py-2 px-6 md:px-10 rounded-md select-none cursor-pointer"
            >
              <span>LET&#39;S TALK</span>
            </Link>
          </div>
          <div data-wow-iteration="1" className="fixed z-20 right-0 left-0 mx-auto wow bounceInRight w-full mt-4 uppercase hidden md:flex md:flex-col text-2xl text-myPortfolio-secondaryText">
            <div className="flex flex-col justify-end items-end space-y-3 md:px-8 lg:px-20">
              <div className="flex flex-col justify-center items-center space-y-4">
                <span className="vertical-bar border-r border-myPortfolio-orange w-0 h-24" />
                {
                  socialMedia.map((social) => (
                    <a href={social.link} target="_blank" rel="noreferrer" key={social.id} aria-label={social.ariaLabel}>
                      <FontAwesomeIcon icon={social.icon} size="2x" className="text-myPortfolio-white w-6 hover:animate-spin" />
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
