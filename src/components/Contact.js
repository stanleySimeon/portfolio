import React from 'react';

export default function Contact() {
  return (
    <section id="Contact" className="contact container-fluid py-16 px-4 md:px-32">
      <div className="contact__container w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center text-center text-myPortfolio-white mb-10">
          <div className="flex flex-col justify-center items-center mb-6">
            <h1 className="text-myPortfolio-white text-2xl font-normal uppercase">
              contact me
            </h1>
            <span className="w-12 h-1 bg-myPortfolio-logo" />
          </div>
          <p className="text-xl">
            If you have an application you are interested in developing,
            a feature that you need built or a project that needs coding.
            I’d love to help with it
          </p>
        </div>
        <form action="https://formspree.io/f/xpzbqlab" method="POST" autoComplete="off" id="contact-form" className="w-full h-auto flex flex-col justify-center items-center gap-4 col text-myPortfolio-white">
          <label htmlFor="name" className="w-full flex flex-col gap-2">
            <span className="text-xl">Name</span>
            <input type="text" name="name" placeholder="Full Name" required id="name" className="w-full bg-transparent text-xl border-blue-50 outline-none" />
          </label>
          <label htmlFor="email" className="w-full flex flex-col gap-2">
            <span className="text-xl">Email</span>
            <input type="email" name="email" placeholder="Email" required id="email" className="w-full bg-transparent text-xl border-blue-50 outline-none" />
          </label>
          <label htmlFor="message" className="w-full flex flex-col gap-2">
            <span className="text-xl">Message</span>
            <textarea name="message" placeholder="Message" required id="message" className="w-full bg-transparent text-xl border-blue-50 outline-none h-32 " />
          </label>
          <span className="w-full flex justify-end">
            <button type="submit" className="w-32 uppercase bg-white px-4 py-2 text-myPortfolio-logo font-medium">submit</button>
          </span>
        </form>
      </div>
    </section>
  );
}
