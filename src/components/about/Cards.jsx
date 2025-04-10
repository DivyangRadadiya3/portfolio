import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillCard = memo(({ label, colorClass }) => {
  return (
    <div className="flex flex-col items-center group relative animate-fade-up">
      <div className="px-3 py-2 sm:px-4 bg-green-100 rounded-md shadow-md border border-green-200 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
        <span className="font-semibold">
          {label}
        </span>
      </div>
    </div>
  );
});

const EducationCard = memo(
  ({ title, icon, university, duration, description }) => {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-400">
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

const CoreCompetencyCard = memo(({ icon, title, description, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="flex flex-col items-center justify-center text-center">
        <FontAwesomeIcon
          icon={icon}
          className={`text-4xl sm:text-5xl ${color} mb-4 sm:mb-5 transform hover:rotate-12 transition-transform`}
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
});

export { SkillCard, EducationCard, CoreCompetencyCard };
