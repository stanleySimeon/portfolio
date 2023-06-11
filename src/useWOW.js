import { useEffect } from 'react';
import WOW from 'wowjs';

const useWOW = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init({
      live: true,
    });

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scrolling down
        wow.sync();
      } else {
        // Scrolling up
        const elements = document.querySelectorAll('.wow');
        elements.forEach((element) => {
          element.classList.remove('wow');
        });
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    // Register an event listener to call handleScroll() on scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useWOW;
