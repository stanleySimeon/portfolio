/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Data from './Data';

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  }, []);

  return (
    <section id="Portfolio" className="container-fluid w-full h-auto px-4 lg:px-32 md:px-16 py-16 md:pt-28 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col md:flex-row justify-start md:items-baseline md:gap-4 mb-6 md:mb-16">
        <h2 className="text-orange-600 text-5xl sm:text-6xl font-bold">
          My
          {' '}
          <span className="text-myPortfolio-white">Projects</span>
          .
        </h2>
        <span className="w-12 hidden md:w-52 h-1 bg-myPortfolio-logo" />
      </div>
      <div className="flex w-full flex-col justify-center items-center">
        {
          data.map((data) => (
            <li key={data.id} className="wow fadeInUp h-auto md:w-full lg:w-full md:flex md:justify-center border-myPortfolio-circle md:border-none md:bg-myPortfolio bg-myPortfolio-bgCard border px-2 md:px-0 pt-2 pb-6 md:mb-16 mb-10 md:gap-4 lg:gap-8 rounded-lg list-none shadow-md md:odd:flex md:even:flex-row-reverse md:z-40">
              <div className="w-full md:w-6/12 h-full lg:w-full flex flex-col gap-2 mb-4 md:flex-col-reverse">
                <img src={data.image} alt={data.title} className="rounded-lg md:border md:border-myPortfolio-circle" id="Resize" />
                <div className="md:flex md:justify-start md:items-baseline md:gap-2">
                  <span className="bar hidden md:flex md:w-8 lg:w-12 bg-myPortfolio-white" />
                  <h2 className="text-myPortfolio-white md:text-myPortfolio-secondaryText text-lg md:text-2xl font-bold uppercase">{data.title}</h2>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-full flex flex-col lg:py-8">
                <p className="text-gray-400 text-md md:text-lg font-light md:mt-8 lg:mt-2">{data.description}</p>
                <span className="hidden md:flex gap-2 md:mt-6">
                  {data.technologies.map((tech) => (
                    <span key={tech} className="text-myPortfolio-white text-sm lg:text-md md:px-1 lg:px-2 py-1 font-normal bg-myPortfolio-logo rounded-md">{tech}</span>
                  ))}
                </span>
                <div className="flex justify-center items-center md:justify-start gap-4 mt-4 md:mt-6 font-normal">
                  <a href={data.liveLink} target="_blank" rel="noreferrer" className="w-32 py-2 px-2 bg-myPortfolio-white text-center text-myPortfolio-logo hover:animate-pulse cursor-pointer rounded-md">
                    LIVE DEMO
                  </a>
                  <a href={data.sourceLink} target="_blank" rel="noreferrer" className="w-32 py-2 px-2 border border-myPortfolio-white text-center text-myPortfolio-white hover:animate-pulse cursor-pointer rounded-md">
                    SOURCE
                  </a>
                </div>
              </div>
            </li>
          ))
        }
      </div>
    </section>
  );
};

export default About;
