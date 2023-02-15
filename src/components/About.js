/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Languages, skills, socialMedia } from './Data';
import mePicture from '../assets/about-me-picture1.AVIF';

export default function About() {
  return (
    <section id="About" className="container-fluid w-full h-auto px-4 md:px-16 lg:px-32 py-16 md:pt-32 flex flex-col justify-center items-center bg-black">
      <div className="bg md:flex justify-between md:gap-6 md:mb-12">
        <div className="hidden wow slideInLeft md:block about-me-picture-desktop w-6/12 md:h-auto md:bg-myPortfolio rounded">
          <img src={mePicture} alt="Stanley SIMEON" className="w-full h-80 object-cover rounded" />
        </div>
        <div className="md:w-full md:flex md:flex-col justify-start z-10 backdrop-blur-3xl backdrop-brightness-100 backdrop-opacity-90 p-0 md:backdrop-blur-0 md:-mt-2">
          <div className="flex flex-col justify-center md:justify-start md:items-start mb-8 md:mb-0 mt-8 md:mt-0">
            <span className="flex justify-start items-baseline text-6xl md:text-7xl font-normal md:font-bold">
              <h2 className="wow bounceInDown text-myPortfolio-white text-5xl sm:text-6xl font-bold">
                About me
              </h2>
              <span className="text-orange-600 wow zoomInDown" data-wow-duration=".6s" data-wow-delay="1s">.</span>
            </span>
            <span className="w-32 md:hidden h-1 bg-myPortfolio-logo" />
          </div>
          <p className="wow bounceIn text-gray-400 text-justify text-md lg:text-lg font-light mt-6 md:mt-3">
            <strong>Full Stack Developer</strong>
            <br />
            <span className="text-green-500 md:p-1 rounded">
              Javascript | React & Redux | Ruby | Ruby on Rails | Laravel | HTML/CSS
            </span>
            <br />
            As a skilled software developer with extensive experience in building complex and scalable software applications,
            I am confident in my ability to help bring your vision to life.
            Whether you need a new product, an innovative feature, or a stunning website,
            I am committed to delivering top-notch results that meet your unique needs and exceed your expectations.
            Take a look at my impressive portfolio and see for yourself the quality of my work and the level of expertise
            I bring to every project. If you&#39;re ready to take your project to the next level,
            let&#39;s connect and bring your ideas to life!
          </p>
          <div className="flex md:hidden justify-start items-center space-x-4">
            <span className="vertical-bar border-b border-myPortfolio-orange w-12 h-0" />
            {
              socialMedia.map((social) => (
                <a href={social.link} target="_blank" rel="noreferrer" key={social.id}>
                  <FontAwesomeIcon icon={social.icon} size="2x" className="text-myPortfolio-white w-6 hover:animate-spin" />
                </a>
              ))
            }
          </div>
        </div>
      </div>
      <div className="marquee w-full hidden md:flex gap-4">
        {
          Languages.map((lang) => (
            <div key={lang.id} className="bounce flex w-full justify-between items-center animate-pulse">
              <img src={lang.logo} alt={lang.name} className="bounce text-myPortfolio-white md:w-14 lg:w-16 iconResize" />
            </div>
          ))
        }
        {
          skills.map((skill) => (
            <div key={skill.id} className="flex w-full justify-between items-center animate-pulse">
              <img src={skill.logo} alt={skill.name} className="bounce text-myPortfolio-white w-10 iconResize" />
            </div>
          ))
        }
      </div>
    </section>
  );
}
