import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Testimonials } from './Data';

export default function Testimonial() {
  return (
    <section id="Testimonials" className="bg-black container-fluid w-full h-auto px-4 md:px-16 lg:px-32 py-6 md:py-24 flex flex-col md:flex-row md:justify-between justify-center items-center">
      <div className="w-full md:w-9/12 lg:w-7/12 flex flex-col justify-center md:justify-start items-start md:mb-6 mb-16">
        <h1 className="text-gray-600 text-xl font-normal uppercase pb-6">
          Testimonials
        </h1>
        <h1 className="wow bounceIn text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          What
          {' '}
          <span className="text-orange-600">people</span>
          {' '}
          say about
          {' '}
          <span className="text-myPortfolio-logo">me</span>
          .
        </h1>
      </div>
      <Carousel
        className="carouse md:w-7/12 lg:w-8/12 md:h-auto slide relative w-full text-white"
        data-bs-ride="carousel"
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={1000}
      >
        {
          Testimonials.map((test) => (
            <div key={test.id} className="md:h-auto text-start cursor-default px-6 md:px-8">
              <img src={test.personPicture} alt={test.personName} className="personCard h-12 rounded-full mb-4" />
              <p className="mb-4 text-md md:text-gray-400">{test.testimonial}</p>
              <h1 className="text-xl mb-4">
                <span className="font-medium text-orange-700">
                  <a href={test.linkedin} target="_blank" rel="noreferrer">{test.personName}</a>
                </span>
                {' '}
                {test.status}
              </h1>
            </div>
          ))
        }
      </Carousel>
    </section>
  );
}
