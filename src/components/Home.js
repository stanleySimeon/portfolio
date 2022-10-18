import React from 'react';
import Navbar from './Navbar/Navigation';

export default function Home() {
  return (
    <section id="Home" className="container-fluid w-full h-screen px-4 md:mt-0 md:px-32 flex flex-col justify-center">
      <Navbar />
      <div className="md:w-8/12 md:bg-blue">
        <h1 className="text-white text-4xl md:text-8xl font-bold">
          I&#39;m Stanley
          <br />
          Glad to see you!
        </h1>
        <p className="text-myPortfolio-secondaryButton text-xl font-light mt-4 md:mt-6">
          I&#39;m a software developer!
          I can help you build a product, feature or website Look through
          some of my work and experience!
          If you like what you see and have a project you need coded,
          don&#39;t hesitate to contact me.
        </p>
        <div className="flex gap-4 md:gap-6">
          <button type="button" className="bg-myPortfolio-logo text-white text-md py-2 px-2 rounded-sm mt-4">
            GET STARTED
          </button>
          <button type="button" className="bg-myPortfolio-white text-myPortfolio-logo text-md py-2 px-2 rounded-sm mt-4">
            LET&#39;S CONNECT
          </button>
        </div>
      </div>
    </section>
  );
}
