import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import Navbar from './Navbar/Navigation';

export default function Home() {
  const { pathname } = useLocation();
  const focus = {
    opacity: 1,
  };
  return (
    <section id="Home" className="container-fluid w-full h-screen px-4 md:mt-0 md:px-16 lg:px-32 flex flex-col justify-center">
      <Navbar />
      <div className="md:w-10/12 lg:w-8/12 md:bg-blue">
        <h1 className="wow bounceInLeft text-white text-5xl  md:text-7xl lg:text-8xl font-bold">
          I&#39;m Stanley
          <br />
          Glad to see you!
        </h1>
        <p className="wow fadeInUp text-gray-300 text-md lg:text-xl font-light my-4 md:my-6">
          I&#39;m a software developer!
          I can help you build a product, feature or website Look through
          some of my work and experience!
          If you like what you see and have a project you need coded,
          don&#39;t hesitate to contact me.
        </p>
        <div className="flex gap-6 md:gap-10">
          <Link
            style={pathname === '/About' ? focus : {}}
            smooth
            duration={100}
            to="About"
            data-wow-duration=".5s"
            data-wow-delay=".8s"
            className="wow fadeInUp bg-myPortfolio-logo text-white text-md py-2 px-4 rounded-sm select-none"
          >
            GET STARTED
          </Link>
          <Link
            style={pathname === '/Contact' ? focus : {}}
            smooth
            duration={300}
            to="Contact"
            data-wow-duration=".8s"
            data-wow-delay=".9s"
            className="wow fadeInUp border border-bg-myPortfolio-white text-myPortfolio-white text-md py-2 px-4 rounded-sm select-none"
          >
            LET&#39;S TALK
          </Link>
        </div>
      </div>
    </section>
  );
}
