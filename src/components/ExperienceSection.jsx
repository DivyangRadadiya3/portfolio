import React, { memo, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ExperienceSection = memo(({ experience }) => {
  const renderedExperience = useMemo(() => {
    return experience.map(
      ({ title, company, duration, points, number }, index) => (
        <div
          key={index}
          className="relative bg-white mx-auto mt-6 p-6 rounded-lg shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] hover:bg-slate-50 transition-all duration-300 border border-gray-300 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <div className="absolute left-0 -top-1 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-r-full flex items-center justify-center text-white font-bold text-xl">
              {number}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-800">{title}</h3>
              <p className="text-slate-600">{company}</p>
            </div>
            <span className="mt-2 md:mt-0 md:ml-auto px-4 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
              {duration}
            </span>
          </div>
          <ul className="space-y-2">
            {points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-indigo-600 mt-1"
                />
                <span className="text-slate-700 text-left">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  }, [experience]);

  return (
    <section id="experience" className="pb-16 pt-24">
      <div className="mx-auto px-4">
        <div className="mb-20 px-6 md:px-0 animate-fade-up">
          <h1 className="mb-4 text-4xl font-medium text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Work Experience
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-20 h-[3px] bg-[#5f4dc7] rounded-full"></div>
          </h1>
        </div>
        <div className="space-y-8 animate-fade-in">{renderedExperience}</div>
      </div>
    </section>
  );
});

export default ExperienceSection;
