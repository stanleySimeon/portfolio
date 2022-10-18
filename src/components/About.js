/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMedia, skills } from './Data';
import mePicture from '../assets/about-me-picture1.png';

export default function About() {
  return (
    <section id="About" className="container-fluid w-full h-auto px-4 md:px-32 py-16 flex flex-col justify-center items-center bg-black">
      <div className="bg md:flex justify-between md:gap-6 md:mb-12">
        <div className="hidden md:flex about-me-picture-desktop md:w-6/12 md:h-72 md:bg-gray-600 rounded">
          <img src={mePicture} alt="Stanley SIMEON" className="w-full h-full object-cover rounded" />
        </div>
        <div className="md:w-full md:flex md:flex-col justify-start z-10">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start mb-6 md:mb-0 mt-12 md:mt-0">
            <h1 className="text-myPortfolio-white text-2xl md:text-4xl font-normal uppercase">
              About me
            </h1>
            <span className="w-12 md:hidden h-1 bg-myPortfolio-logo" />
          </div>
          <p className="text-myPortfolio-grayLight text-center md:text-start text-xl font-light mt-6 md:mt-3">
            <strong>Self-taught Full-Stack Developer</strong>
            <br />
            <span className="text-green-500 md:p-1 md:bg-gray-900 rounded">
              Javascript | React & Redux | Ruby | Ruby on Rails | HTML/CSS
            </span>
            <br />
            I’m a software developer! I can help you build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
          </p>
          <span className="w-full mt-4 uppercase hidden md:flex md:flex-col text-2xl text-myPortfolio-secondaryText">
            <h2>Let&#39;s connect</h2>
            <div className="flex justify-start items-center gap-4">
              {
                socialMedia.map((social) => (
                  <a href={social.link} target="_blank" rel="noreferrer" key={social.id}>
                    <FontAwesomeIcon icon={social.icon} size="2x" className="text-myPortfolio-white w-6" />
                  </a>
                ))
              }
            </div>
          </span>
        </div>
      </div>
      <div className="hidden w-full md:flex flex-wrap">
        {
          skills.map((skill) => (
            <div key={skill.id} className="flex flex-col justify-center items-center gap-6">
              <img src={skill.logo} alt={skill.name} className="text-myPortfolio-white h-12" />
            </div>
          ))
        }
      </div>
    </section>
  );
}
