/* eslint-disable max-len */
import React from 'react';
import Data from './Data';

export default function Portfolio() {
  return (
    <section id="Portfolio" className="container-fluid w-full h-auto px-4 md:px-32 py-16 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-myPortfolio-white text-2xl font-normal uppercase">
          Explore my work
        </h1>
        <span className="w-12 h-1 bg-myPortfolio-logo" />
      </div>
      <div className="w-full">
        {
          Data.map((data) => (
            <li key={data.id} className="w-full h-auto border-myPortfolio-circle bg-myPortfolio-bgCard border px-2 pt-2 pb-6 mb-10 rounded-md list-none shadow-md">
              <div className="w-full flex flex-col gap-2 mb-4">
                <img src={data.image} alt={data.title} className="rounded" />
                <h1 className="text-myPortfolio-white text-lg font-bold uppercase">{data.title}</h1>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-myPortfolio-secondaryButton text-xl text-light">{data.description}</p>
                <span className="hidden">
                  {data.technologies}
                </span>
                <div className="w-full flex justify-center items-center gap-4 mt-4 font-normal">
                  <span className="w-32 py-2 px-2 bg-myPortfolio-white text-center text-myPortfolio-logo">
                    <a href={data.liveLink} target="_blank" rel="noreferrer">LIVE DEMO</a>
                  </span>
                  <span className="w-32 py-2 px-2 border border-myPortfolio-white text-center text-myPortfolio-white">
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
