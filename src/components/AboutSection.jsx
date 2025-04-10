import React, { Suspense, memo } from "react";
const Skills = React.lazy(() => import("./about/Skills"));
const CoreCompetencies = React.lazy(() => import("./about/CoreCompetencies"));
const Education = React.lazy(() => import("./about/Education"));
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutSection = memo(({ skills, coreCompetencies, education }) => {
  return (
    <section id="about" className="pb-16 pt-24">
      <div className="mx-auto px-4">
        <div
          className="mb-14 px-6 md:px-0 opacity-0 animate-fade-up"
          data-aos="fade-up"
        >
          <h1 className="mb-2 text-4xl font-medium text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About Me
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-20 h-[3px] bg-[#5f4dc7] rounded-full"></div>
          </h1>
        </div>
        <div className="mx-auto mt-4 p-4 animate-fade-up">
          <p className="text-lg text-left font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            I am a skilled web developer with expertise in React, JavaScript,
            and modern web technologies. I love creating beautiful and
            functional websites that make a difference.
          </p>
          {/* Skills */}
          <Suspense fallback={<div>Loading Skills...</div>}>
            <Skills skills={skills} />
          </Suspense>
          <div className="mt-4 flex justify-center mx-auto">
            <a
              href="/public/Divyang_M._Radadiya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-md px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:shadow-lg"
              aria-label="Resume"
            >
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Resume
            </a>
          </div>
        </div>

        {/* Core Competencies */}
        <Suspense fallback={<div>Loading Core Competencies...</div>}>
          <CoreCompetencies coreCompetencies={coreCompetencies} />
        </Suspense>

        {/* Education */}
        <Suspense fallback={<div>Loading Education...</div>}>
          <Education education={education} />
        </Suspense>
      </div>
    </section>
  );
});

export default AboutSection;
