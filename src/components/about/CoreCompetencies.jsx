import React from "react";
import { CoreCompetencyCard } from "./Cards"; // Changed to named import

const CoreCompetencies = ({ coreCompetencies }) => {
  return (
    <div className="mx-auto mt-6 py-4 rounded-t-[6.4rem] shadow-md border border-gray-300">
      <h3 className="text-xl text-center font-semibold mb-6 animate-zoom-in-up">
        Core Competencies
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 animate-fade-up">
        {coreCompetencies.map(({ icon, title, description, color }, index) => (
          <CoreCompetencyCard
            key={index}
            icon={icon}
            title={title}
            description={description}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreCompetencies;
