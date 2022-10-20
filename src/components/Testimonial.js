import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Testimonials } from './Data';

export default function Testimonial() {
  return (
    <section id="Testimonial" className=" bg-black container-fluid w-full h-auto md:px-32 py-6 flex flex-col md:flex-row md:justify-between md:items-start justify-center items-center px-4 md:gap-12">
      <div className="md:w-6/12 flex flex-col justify-center items-start md:mb-6 mb-16 gap-4">
        <h1 className="text-gray-600 text-xl font-normal uppercase">
          Testimonials
        </h1>
        <h1 className="wow bounceIn text-white text-4xl md:text-7xl font-bold">What people say about me.</h1>
      </div>
      <Carousel
        className="carouse md:w-full md:h-auto slide relative w-full text-white"
        data-bs-ride="carousel"
      >
        {
          Testimonials.map((test) => (
            <div key={test.id} className="md:h-auto md:w-auto text-start cursor-default px-6 md:px-8">
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
