import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Testimonials } from './Data';

export default function Testimonial() {
  return (
    <section id="Testimonial" className="container-fluid w-full h-auto md:px-32 py-6 flex flex-col justify-center items-center px-4">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-myPortfolio-white text-2xl md:text-4xl font-normal uppercase">
          Testimonials
        </h1>
        <span className="w-12 h-1 bg-myPortfolio-logo" />
      </div>
      <Carousel
        className="carouse md:w-6/12 md:min-h-52 slide relative w-full text-white autoPlay"
        data-bs-ride="carousel"
      >
        {
          Testimonials.map((test) => (
            <div key={test.id} className="border-myPortfolio-circle border rounded-md p-2 md:p-8 mt-20 md:mt-28 mb-12 md:mb-16 relative text-start">
              <img src={test.personPicture} alt={test.personName} className="personCard  origin-left -rotate-12 rounded-md border-myPortfolio-circle border h-28 absolute -translate-x-2/4" />
              <p className="mt-14 md:mt-20 mb-4 text-xl md:text-gray-400">{test.testimonial}</p>
              <h1 className="text-xl mb-4">
                <span className="font-medium text-orange-700">
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
  );
}
