import React, { memo, useMemo } from "react";
import { SkillCard } from "./Cards"; // Changed to named import

const Skills = memo(({ skills }) => {
  const renderedSkills = useMemo(() => {
    return skills.map(({ id, label, colorClass }) => (
      <SkillCard key={id} label={label} colorClass={colorClass} />
    ));
  }, [skills]);

  return (
    <div className="mx-auto mt-6 transition-all duration-300">
      <h3 className="text-xl text-center font-semibold mb-4 animate-zoom-in-up">
        Skills
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        {renderedSkills}
      </div>
    </div>
  );
});

export default Skills;
