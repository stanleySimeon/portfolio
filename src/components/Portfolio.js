/* eslint-disable max-len */
import React from 'react';
import Data from './Data';

export default function Portfolio() {
  return (
    <section id="Portfolio" className="container-fluid w-full h-auto px-4 md:px-32 py-16 md:pt-28 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-6 md:mb-16">
        <h1 className="text-myPortfolio-white text-2xl md:text-4xl font-normal uppercase">
          Explore my work
        </h1>
        <span className="w-12 h-1 bg-myPortfolio-logo" />
      </div>
      <div className="w-full">
        {
          Data.map((data) => (
            <li key={data.id} className="w-full h-auto md:flex md:justify-center border-myPortfolio-circle md:border-none md:bg-myPortfolio bg-myPortfolio-bgCard border px-2 pt-2 pb-6 md:mb-16 mb-10 md:gap-8 rounded-md list-none shadow-md md:odd:flex md:even:flex-row-reverse">
              <div className="w-full flex flex-col gap-2 mb-4 md:flex-col-reverse">
                <img src={data.image} alt={data.title} className="rounded md:border md:border-myPortfolio-circle" />
                <div className="md:flex md:justify-start md:items-baseline md:gap-2">
                  <span className="bar hidden md:flex w-32 bg-myPortfolio-white" />
                  <h1 className="text-myPortfolio-white md:text-myPortfolio-secondaryText text-lg md:text-2xl font-bold uppercase">{data.title}</h1>
                </div>
              </div>
              <div className="w-full flex flex-col md:py-8">
                <p className="text-myPortfolio-secondaryButton text-xl text-light">{data.description}</p>
                <span className="hidden md:flex gap-4 md:mt-6">
                  {data.technologies.map((tech) => (
                    <span key={tech} className="text-myPortfolio-white text-lg font-normal bg-myPortfolio-logo px-4 rounded-sm animate-bounce">{tech}</span>
                  ))}
                </span>
                <div className="w-full flex justify-center items-center md:justify-start gap-4 mt-4 md:mt-6 font-normal">
                  <span className="w-32 py-2 px-2 bg-myPortfolio-white text-center text-myPortfolio-logo hover:animate-pulse">
                    <a href={data.liveLink} target="_blank" rel="noreferrer">LIVE DEMO</a>
                  </span>
                  <span className="w-32 py-2 px-2 border border-myPortfolio-white text-center text-myPortfolio-white hover:animate-pulse">
                    <a href={data.sourceLink} target="_blank" rel="noreferrer">SOURCE</a>
                  </span>
                </div>
              </div>
            </li>
          ))
        }
      </div>
    </section>
  );
}
