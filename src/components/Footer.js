import React from 'react';
import resume from '../assets/files/Stanley_SIMEON_Resume.pdf';
import { Languages, skills } from './Data';

export default function Footer() {
  return (
    <footer id="Footer" className="footer container-fluid w-full h-auto md:px-16 lg:px-32 py-4 flex flex-col justify-center items-center px-4">
      <div className="w-full md:grid grid-cols-3 justify-between md:items-start mb-6 mt-6 gap-14">
        <div className="">
          <span className="flex items-baseline gap-2">
            <h1 className="text-md lg:text-lg font-bold text-myPortfolio-white">
              Techs
            </h1>
            <span className="bar w-full bg-gray-500" />
          </span>
          <div className="text-gray-600 flex flex-col mt-4 mb-6">
            {
              Languages.map((lang) => {
                const { id, name } = lang;
                return (
                  <div key={id} className="flex flex-col">
                    <span className="text-sm lg:text-xl text-start">{name}</span>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="">
          <span className="flex items-baseline gap-2">
            <h1 className="text-md lg:text-lg font-bold text-myPortfolio-white">
              Skills
            </h1>
            <span className="bar w-full bg-gray-500" />
          </span>
          <div className="text-gray-600 flex flex-col flex-wrap h-64 gap-2 mt-4 mb-6">
            {
              skills.map((skill) => {
                const { id, name } = skill;
                return (
                  <div key={id} className="flex flex-col">
                    <span className="text-sm lg:text-xl text-start">{name}</span>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="contact mb-4 md:mb-0 lg:mb-0">
          <span className="flex items-baseline gap-2">
            <h1 className="text-md lg:text-lg font-bold text-myPortfolio-white">Contact</h1>
            <span className="bar w-full bg-gray-500" />
          </span>
          <div className="text-myPortfolio-grayLight flex flex-col justify-center md:mt-4">
            <span className="text-sm lg:text-xl flex text-gray-600">Email: mstanley.me@gmail.com</span>
            <span className="text-sm lg:text-xl flex text-gray-600">Phone: +(509)440-256-51</span>
            <a
              target="_blank"
              href={resume}
              rel="noreferrer"
              className="w-32 lg:w-48 btn bg-white  lg:bg-myPortfolio-logo text-myPortfolio-logo font-semibold animate-bounce lg:text-white px-2 lg:px-4 py-2 text-xs lg:text-md mt-4 rounded-sm"
            >
              GET MY RESUME
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs">
        Stanley SIMEON
        &copy;Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
      </p>
    </footer>
  );
}
