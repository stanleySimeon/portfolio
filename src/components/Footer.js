import React from 'react';

export default function Footer() {
  return (
    <footer id="Footer" className="footer container-fluid w-full h-auto md:px-16 lg:px-32 py-4 flex flex-col justify-center items-center space-y-8 md:space-y-28 px-4">
      <div className="contact mb-4 md:mb-0 lg:mb-0 md:flex flex-col justify-center">
        <span className="flex items-baseline gap-2">
          <span className="bar w-full bg-gray-500" />
          <h2 className="text-md lg:text-lg font-bold text-myPortfolio-white">Contact</h2>
          <span className="bar w-full bg-gray-500" />
        </span>
        <div className="text-myPortfolio-grayLight flex flex-col justify-center md:mt-4">
          <p className="text-sm md:text-lg flex text-gray-600">Email: mstanley.me@gmail.com</p>
          <p className="text-sm md:text-lg flex text-gray-600">Phone: +(509)440-256-51</p>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs">
        Stanley SIMEON
        &copy;Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
      </p>
    </footer>
  );
}
