import React, { useState, useEffect } from "react";
import { Button, Stepper, Typography } from "@material-tailwind/react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const AnimatedName = ({ name }) => {
  const [displayedName, setDisplayedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const timer = setTimeout(() => {
        setDisplayedName((prevName) => prevName + name[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [name, index]);

  return (
    <>
      <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-gray-800">Welcome</Typography>
      <Typography variant="h3" className="text-xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-bold bg-gradient-to-r from-green-600 to-orange-600 text-wrap text-transparent bg-clip-text whitespace-nowrap leading-snug md:leading-normal lg:leading-relaxed font-mono">
        I'm  {displayedName}
      </Typography>
    </>
  );
};



export function Home() {
  const myName = "Divyang Radadiya";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>

      <section
        className=" dark:bg-gray-900 animate-fade-in-up"

        id="home"
        aria-label="Home Section"
      >
        <div className="container mx-auto max-w-[800px] text-center py-[60px]">

          <AnimatedName name={myName} />

          <Typography as="h3" className="mt-5 px-2 text-base sm:text-lg md:text-xl text-slate-900 dark:text-gray-300 leading-relaxed">
            A highly motivated and detail-oriented React developer with a strong passion for crafting high-performance, scalable, and visually stunning web applications that deliver exceptional user experiences.
          </Typography>

          <Typography as="h3" className="mt-5 px-2 text-base sm:text-lg md:text-xl text-slate-900 dark:text-gray-300 leading-relaxed">
            Explore my work and projects to see how I can help bring your ideas to life.
          </Typography>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8">
            <a href="#projects" aria-label="View Projects">
              <Button variant="outlined" className="relative h-12 w-40 rounded-full overflow-hidden border border-transparent bg-purple-600 text-white transition-all duration-200 hover:bg-inherit hover:border-indigo-600 hover:text-black hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                View My Work
              </Button>
            </a>
            <a href="#contact" aria-label="Contact Me">
              <Button variant="filled" className="h-12 w-40 rounded-full bg-transparent border border-purple-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-purple-800 hover:text-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-filter backdrop-blur-md shadow-md shadow-gray-300 dark:shadow-gray-600">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>
      </section>
      <div className="absolute right-0 top-0 z-[1] opacity-30 lg:opacity-100">
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_var4)">
            <animate attributeName="r" values="225;250;225" dur="5s" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_var4)">
            <animate attributeName="cx" values="17.9997;30;17.9997" dur="3s" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_var4)">
            <animate attributeName="cy" values="288;300;288" dur="4s" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_var4)">
            <animate attributeName="r" values="180;200;180" dur="6s" repeatCount="indefinite"></animate>
          </circle>
          <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_var4)">
            <animate attributeName="cx" values="184.521;200;184.521" dur="5s" repeatCount="indefinite"></animate>
          </circle>
          <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_var4)">
            <animate attributeName="cy" values="290;300;290" dur="4s" repeatCount="indefinite"></animate>
          </circle>
          <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_var4)">
            <animate attributeName="r" values="133.362;150;133.362" dur="6s" repeatCount="indefinite"></animate>
          </circle>
          <defs>
            <linearGradient id="paint0_linear_var4" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient id="paint1_radial_var4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
            </radialGradient>
            <radialGradient id="paint2_radial_var4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
            </radialGradient>
            <linearGradient id="paint3_linear_var4" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint4_linear_var4" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint5_linear_var4" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint6_linear_var4" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

export default Home;
