import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Testimonials } from './Data';

export default function Testimonial() {
  return (
    <section id="Testimonial" className="container-fluid w-full h-auto md:px-32 py-6 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-myPortfolio-white text-2xl font-normal uppercase">
          Testimonials
        </h1>
        <span className="w-12 h-1 bg-myPortfolio-logo" />
      </div>
      <Carousel className="w-full text-white autoPlay px-4">
        {
          Testimonials.map((test) => (
            <div key={test.id} className="border-myPortfolio-circle border rounded-md p-2 mt-20 mb-12 relative text-start">
              <img src={test.personPicture} alt={test.personName} className="personCard  origin-left -rotate-12 rounded-md border-myPortfolio-circle border h-28 absolute -translate-x-2/4" />
              <p className="mt-14 text-xl">{test.testimonial}</p>
              <h1 className="mt-2 text-xl">
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
  );
}
