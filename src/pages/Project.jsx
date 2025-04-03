import React, { memo } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProjectCard = (
  ({ title, description, image, techStack, repoLink, demoLink }) => {
    return (
      <Card className="w-full dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]">
        <CardHeader floated={false} className="h-[16rem] md:h-[20rem] lg:h-[24rem] xl:h-[28rem]">
          <img
            src={image}
            alt={`Project: ${title}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </CardHeader>
        <CardBody className="p-6 flex flex-col justify-between h-full">
          <div>
            <Typography variant="h5" color="blue-gray" className="font-semibold mb-2">
              {title}
            </Typography>
            <Typography variant="paragraph" color="gray" className="mb-4">
              {description}
            </Typography>

            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm capitalize font-semibold bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button
              variant="outlined"
              color="purple"
              size="sm"
              className="flex items-center justify-center w-full sm:w-auto"
              onClick={() => window.open(repoLink, "_blank")}
              aria-label={`View code for ${title}`}
            >
              <FaGithub className="mr-2" /> View Code
            </Button>

            <Button
              variant="gradient"
              color="purple"
              size="sm"
              className="flex items-center justify-center w-full sm:w-auto"
              onClick={() => window.open(demoLink, "_blank")}
              aria-label={`View live demo for ${title}`}
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }
);

export const Project = (() => {

  const projectData = [
    {
      title: "E-Learning Website",
      description:
        "An interactive e-learning platform offering a user-friendly interface and multimedia content delivery. It features a course management system, allowing learners to access a variety of courses conveniently, enhancing the educational experience for students of all ages.",
      image: "https://storage.googleapis.com/a1aa/image/sample-portfolio.jpg",
      techStack: ["react", "tailwind css"],
      repoLink: "https://github.com/example/elearning",
      demoLink: "https://elearning-demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing projects and skills.",
      image: "https://storage.googleapis.com/a1aa/image/sample-portfolio.jpg",
      techStack: ["react", "tailwind css"],
      repoLink: "https://github.com/example/portfolio",
      demoLink: "https://portfolio-demo.com",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-24 dark:bg-gray-900 animate-fade-in-up">
      <div className="container mx-auto space-y-10 ">

        <Typography
          variant="h3"
          color="purple"
          className="text-center font-mono font-bold"
        >
          My Projects
        </Typography>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
});

Project.displayName = "/src/widgets/layout/Project.jsx";

export default Project;