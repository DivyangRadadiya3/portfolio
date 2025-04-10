import React, { memo } from "react";
import { EducationCard } from "./Cards";

const Education = memo(({ education }) => {
  return (
    <div className="mx-auto mt-6 py-4 rounded-lg shadow-md border border-gray-300">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-zoom-in-up">
        Education
      </h3>
      <div className="grid grid-cols-1 gap-6 px-4 animate-fade-up">
        {education.map((value, index) => (
          <EducationCard
            key={index}
            title={value.title}
            icon={value.icon}
            university={value.university}
            duration={value.duration}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
});

export default Education;
