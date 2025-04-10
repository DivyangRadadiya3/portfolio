import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = memo(({ label, colorClass, delay }) => {
  return (
    <div
      className={`flex flex-col items-center group relative transition-all duration-300 opacity-0 animate-slideInLeft delay-[${delay}ms]`}
    >
      <div
        className={`px-3 py-2 sm:px-4 ${colorClass} rounded-md shadow-md border transition-transform duration-300 transform hover:scale-110 hover:shadow-lg`}
      >
        <span className="font-semibold">{label}</span>
      </div>
    </div>
  );
});

const EducationCard = memo(
  ({ title, icon, university, duration, description }) => {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h4 className="text-2xl font-bold text-white mb-2 md:mb-0">
            {title}
          </h4>
          <span className="px-4 py-1 max-w-[7rem] bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 hover:text-blue-900">
            {duration}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <FontAwesomeIcon icon={icon} className="text-white" />
          <span className="text-white font-medium text-base">{university}</span>
        </div>
        <p className="text-white leading-relaxed text-base">{description}</p>
      </div>
    );
  }
);

const CoreCompetencyCard = memo(
  ({ icon, title, description, colorText, delay }) => {
    return (
      <div
        className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 group relative transition-all duration-300 opacity-0 animate-fade-in delay-[${delay}ms]`}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <FontAwesomeIcon
            icon={icon}
            className={` ${colorText} text-4xl sm:text-5xl mb-4 sm:mb-5 transform hover:rotate-12 transition-transform`}
          />
          <h4 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
            {title}
          </h4>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }
);

export { SkillCard, EducationCard, CoreCompetencyCard };
