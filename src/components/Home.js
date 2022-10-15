/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Data, { Testimonials } from './Data';
import './style.css';

export default function Home() {
  return (
    <>
      {/* This is the section that is displaying the about me section. */}
      <section className="container-fluid w-full h-screen -mt-12 px-4 md:mt-0 md:px-32 flex flex-col justify-center">
        <h1 className="text-white text-4xl font-bold">
          I&#39;m Stanley
          <br />
          Glad to see
          <br />
          you!
        </h1>
        <p className="text-myPortfolio-secondaryButton text-md font-light mt-4">
          I&#39;m a software developer!
          I can help you build a product, feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded, don&#39;t hesitate to contact me.
        </p>
        <div className="flex gap-2">
          <button type="button" className="bg-myPortfolio-logo text-white text-sm py-2 px-2 rounded-sm mt-4">
            GET STARTED
          </button>
          <button type="button" className="bg-myPortfolio-white text-myPortfolio-logo text-sm py-2 px-2 rounded-sm mt-4">
            LET&#39;S CONNECT
          </button>
        </div>
      </section>

      {/* This is the section that is displaying the about me section. */}

      <section className="container-fluid w-full h-auto px-4 md:px-32 py-6 bg-black flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-myPortfolio-white text-2xl font-normal uppercase">
            About me
          </h1>
          <span className="w-12 h-1 bg-myPortfolio-logo" />
        </div>
        <p className="text-myPortfolio-secondaryButton text-sm text-center font-light mt-6">
          I’m a software developer! I can help you build a product,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don&#39;t hesitate to contact me.
        </p>
      </section>

      {/* A section that is displaying the projects I have worked on. */}

      <section className="container-fluid w-full h-auto px-4 md:px-32 py-6 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-myPortfolio-white text-2xl font-normal uppercase">
            Explore my work
          </h1>
          <span className="w-12 h-1 bg-myPortfolio-logo" />
        </div>
        <div className="w-full">
          {
            Data.map((data) => (
              <li key={data.id} className="w-full h-auto border-myPortfolio-circle bg-myPortfolio-bgCard border p-2 mb-10 rounded-md list-none shadow-md">
                <div className="w-full flex flex-col gap-2 mb-4">
                  <img src={data.image} alt={data.title} className="rounded" />
                  <h1 className="text-myPortfolio-white text-lg font-bold uppercase">{data.title}</h1>
                </div>
                <div className="w-full flex flex-col">
                  <p className="text-myPortfolio-secondaryButton text-sm text-light">{data.description}</p>
                  <span className="hidden">
                    {data.technologies}
                  </span>
                  <div className="w-full flex items-center gap-4 mt-4 font-normal">
                    <span className="w-32 py-1 px-2 bg-myPortfolio-white text-center text-myPortfolio-logo">
                      <a href={data.liveLink} target="_blank" rel="noreferrer">LIVE DEMO</a>
                    </span>
                    <span className="w-32 py-1 px-2 border border-myPortfolio-white text-center text-myPortfolio-white">
                      <a href={data.sourceLink} target="_blank" rel="noreferrer">SOURCE</a>
                    </span>
                  </div>
                </div>
              </li>
            ))
          }
        </div>
      </section>

      {/* This is the section that is displaying the testimonials of the people I have worked with. */}

      <section className="container-fluid w-full h-auto md:px-32 py-6 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-6">
          <h1 className="text-myPortfolio-white text-2xl font-normal uppercase">
            Testimonials
          </h1>
          <span className="w-12 h-1 bg-myPortfolio-logo" />
        </div>
        <Carousel className="text-white autoPlay px-4">
          {
            Testimonials.map((test) => (
              <div key={test.id} className="border-myPortfolio-circle border rounded-md p-2 mt-20 mb-12 relative text-start">
                <img src={test.personPicture} alt={test.personName} className="personCard  origin-left -rotate-12 rounded-md border-myPortfolio-circle border h-28 absolute -translate-x-2/4" />
                <p className="mt-16 text-sm">{test.testimonial}</p>
                <h1 className="mt-2 text-sm">
                  <span className="font-medium">
                    {test.personName}
                  </span>
                  {' '}
                  {test.status}
                </h1>
              </div>
            ))
          }
        </Carousel>
      </section>
    </>
  );
}
