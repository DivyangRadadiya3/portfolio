import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';


const ProjectsSection = memo(({ projectData, handleImageLoad, loadedImages }) => {
  return (
    <section id="projects" className="pb-16 pt-24">
      <div className="mx-auto space-y-4 px-4">
        <div className="mb-20 px-6 md:px-0">
          <h1 className="text-4xl font-medium text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate-fade-up">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 text-center mt-4 animate-fade-up">
            Explore my recent projects and discover what I can do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {projectData.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col border border-gray-200"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                {!loadedImages[`project-${index}`] && (
                  <div className="absolute inset-0 bg-slate-100 animate-pulse"></div>
                )}
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-cover"
                  onLoad={() => handleImageLoad(`project-${index}`)}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {value.title}
              </h3>
              <p className="text-slate-600 mb-4">{value.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {value.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 text-slate-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-end space-x-6 pt-4 border-t border-slate-200">
                <button
                  // onClick={() => window.open(value.repoLink, "_blank")}
                  className="px-6 py-2 space-x-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  <span>Code</span>
                </button>
                <button
                  // onClick={() => window.open(value.demoLink, "_blank")}
                  className="px-6 py-2 space-x-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faExternalLink} />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;