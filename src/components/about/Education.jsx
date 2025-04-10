import React, { memo, useMemo } from "react";
import { EducationCard } from "./Cards";

const Education = memo(({ education }) => {
  const renderedEducation = useMemo(() => {
    return education.map(
      ({ title, icon, university, duration, description }, index) => (
        <EducationCard
          key={index}
          title={title}
          icon={icon}
          university={university}
          duration={duration}
          description={description}
          delay={index * 300}
        />
      )
    );
  }, [education]);

  return (
    <div className="mx-auto mt-6 py-4 rounded-lg shadow-md border border-gray-300">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-zoom-in-up">
        Education
      </h3>
      <div className="grid grid-cols-1 gap-6 px-4 animate-fade-up">
        {renderedEducation}
      </div>
    </div>
  );
});

export default Education;
