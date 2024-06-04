/* eslint-disable max-len */
import React from 'react';
import send from '../assets/buttons/send.svg';

export default function Contact() {
  return (
    <section id="Contact" className="contact container-fluid py-16 px-4 md:px-16 lg:px-32 xl:px-96 md:pt-32 md:flex justify-center">
      <div className="contact__container w-full md:w-full flex flex-col md:flex-row justify-center md:justify-between md:items-start items-center md:gap-10 z-40">
        <div className="w-full md:w-10/12 lg:w-11/12 flex flex-col justify-center items-center md:items-start md:text-start text-center text-myPortfolio-white mb-10 md:gap-10">
          <div className="hidden md:flex flex-col md:flex-row md:justify-start justify-center items-center md:items-baseline md:gap-2 mb-6 md:mb-2">
            <h2 className="wow slideInLeft text-xl uppercase text-myPortfolio-white md:font-lighter font-normal md:text-myPortfolio-logo select-none">
              Contact
            </h2>
            <span className="wow fadeInDown bar w-12 md:w-32 h-1 bg-myPortfolio-logo md:bg-gray-600" />
          </div>
          <h2 className="wow bounceInLeft text-5xl font-bold text-start sm:text-6xl md:text-7xl md:font-bold text-gray-200 mb-4 md:mb-2 select-none">
            Let&#39;s Discuss a new
            {' '}
            <span className="text-green-500">project</span>
            .
          </h2>
          <p className="text-md md:text:lg md:font-light tracking-wide hover:animate-pulse text-gray-300 text-start md:text-orange-600 md:backdrop-blur-xl p-2 select-none">
            Looking to bring your next big idea to life? Whether it&#39;s a new application, feature, or project that needs coding, you can count on me to help you make it a reality.
          </p>
        </div>
        <form action="https://formspree.io/f/xpzbqlab" method="POST" id="contact-form" className="w-full h-auto flex flex-col justify-center items-center gap-4 col text-myPortfolio-white">
          <label htmlFor="name" className="w-full flex flex-col gap-2">
            <span className="text-xl">Full Name</span>
            <input type="text" name="name" placeholder="Full Name" autoComplete="off" required id="name" className="w-full bg-transparent text-xl border-blue-50 outline-none focus-none rounded-md" />
          </label>
          <label htmlFor="email" className="w-full flex flex-col gap-2">
            <span className="text-xl">Email</span>
            <input type="email" name="email" placeholder="Email" autoComplete="off" required id="email" className="w-full bg-transparent text-xl border-blue-50 outline-none rounded-md" />
          </label>
          <label htmlFor="message" className="w-full flex flex-col gap-2">
            <span className="text-xl">Message</span>
            <textarea name="message" placeholder="Message" required id="message" className="w-full bg-transparent text-xl border-blue-50 outline-none h-32 rounded-md" />
          </label>
          <div className="w-full flex justify-end submitBtn">
            <button type="submit" className="flex overflow-hidden transition-all duration-75 uppercase text-white px-4 py-2 bg-orange-600 font-medium rounded-md">
              <div className="wrapper">
                <div className="wrapper-1">
                  <img src={send} alt="send" className="block transform origin-center transition-transform duration-300 ease-in-out" />
                </div>
              </div>
              <span className="text ml-2 transition-all duration-500 ease-in-out">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
