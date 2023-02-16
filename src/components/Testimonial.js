import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../carousel/carousel.css';
import { Testimonials } from './Data';

export default function Testimonial() {
  return (
    <section id="Testimonials" className="bg-myPorfolio container-fluid w-full h-auto px-4 md:px-16 lg:px-32 py-6 md:py-24 flex flex-col md:flex-row md:justify-between justify-center items-center">
      <div className="w-full md:w-9/12 lg:w-7/12 flex flex-col justify-center md:justify-start items-start md:mb-6 mb-16">
        <h2 className="text-gray-400 text-xl font-normal uppercase pb-6">
          Testimonials
        </h2>
        <h1 className="wow bounceIn text-white text-5xl sm:text-6xl md:text-7xl font-bold">
          What
          {' '}
          <span className="text-orange-600">people</span>
          {' '}
          <br />
          say about
          {' '}
          <span className="text-myPortfolio-logo">me</span>
          .
        </h1>
      </div>
      <Carousel
        className="carousel md:w-7/12 md:h-auto slide relative w-full text-white"
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={10000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 639,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        aria-hidden="true"
        aria-label="Slider"
      >
        {
          Testimonials.map((test) => (
            <div key={test.id} className="md:h-auto text-start cursor-default px-2 md:px-8" aria-hidden="true">
              <img src={test.personPicture} alt={test.personName} className="personCard h-12 rounded-full mb-4" />
              <p className="mb-4 text-md md:text-gray-300 text-justify">{test.testimonial}</p>
              <p className="text-lg mb-4">
                <span className="font-medium text-orange-700">
                  <a href={test.linkedin} target="_blank" rel="noreferrer">{test.personName}</a>
                </span>
                {' '}
                {test.status}
              </p>
            </div>
          ))
        }
      </Carousel>
    </section>
  );
}
