import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ExperienceSection = memo(({ experience }) => {
  return (
    <section id="experience" className="pb-16 pt-24">
      <div className="mx-auto px-4">
        <div className="mb-20 px-6 md:px-0 animate-fade-up">
          <h1 className="mb-4 text-4xl font-medium text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Work Experience
          </h1>
        </div>
        <div className="space-y-8 animate-fade-in">
          {experience.map((value, index) => (
            <div
              key={index}
              className="bg-white mx-auto mt-6 p-6 rounded-lg shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] hover:bg-slate-50 transition-all duration-300 border border-gray-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {value.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.company}</p>
                </div>
                <span className="ml-auto px-4 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  {value.duration}
                </span>
              </div>
              <ul className="space-y-2">
                {value.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-indigo-600 mt-1"
                    />
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;