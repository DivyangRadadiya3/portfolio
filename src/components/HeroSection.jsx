import React, { memo } from 'react';

const HeroSection = memo(({ handleSmoothScroll }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 font-sans">
      <div className="max-w-6xl w-full gap-10 p-4">
        <p className="text-lg font-medium mb-2 text-center sm:text-left">Hello I'm</p>
        <h1 className="text-[#4cb133] text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-center sm:text-left animate-fade-up">
          Divyang Radadiya
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center sm:text-left animate-fade-up">
          Frontend Web Developer
        </h2>
        <p className="mb-8 text-base sm:text-lg md:text-xl text-center sm:text-left animate-fade-up">
          Frontend Developer dedicated to building modern, responsive, and user-friendly websites that engage users and elevate brands through seamless digital experiences.
        </p>
        <div
          className="flex justify-center md:justify-start mt-8 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <div className="relative px-3 py-3 max-w-[10rem] rounded-lg border border-gray-400 overflow-hidden bg-purple-100 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] group text-purple-500 hover:text-white transition duration-300 animate-zoom-in-up">
            <span className="absolute inset-0 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "projects")}
              className="block text-center"
              aria-label="View My Work"
            >
              <span className="relative z-10 font-medium group-hover:text-white">
                View My Work
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;