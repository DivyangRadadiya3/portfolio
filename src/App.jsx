import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  memo,
  useMemo,
  useCallback,
} from "react";
import data from "./data.json"; // Import the JSON data
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const Laoder = lazy(() => import("./components/Loader"));

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons"; // Import the necessary icons

// Import solid icons if needed
import {
  faArrowUp,
  faBolt,
  faChartLine,
  faGraduationCap,
  faLightbulb,
  faRocket,
} from "@fortawesome/free-solid-svg-icons"; // Import solid icons

// Create a mapping of icon names to actual icons
const iconMapping = {
  faReact: faReact,
  faJs: faJs,
  faHtml5: faHtml5,
  faCss3Alt: faCss3Alt,
  faGitAlt: faGitAlt,
  faBolt: faBolt,
  faRocket: faRocket,
  faLightbulb: faLightbulb,
  faChartLine: faChartLine,
  faGraduationCap: faGraduationCap,
};

const App = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [loadedImages, setLoadedImages] = useState({}); // Initialize as an empty object

  // const navItem = ["home", "about", "experience", "projects", "contact"];

  // const skills = [
  //   { icon: faReact, label: "React", color: "#61DAFB" },
  //   { icon: faJs, label: "JavaScript", color: "#F7DF1E" },
  //   { icon: faHtml5, label: "HTML5", color: "#E34F26" },
  //   { icon: faCss3Alt, label: "CSS3", color: "#1572B6" },
  //   { icon: faGitAlt, label: "Git", color: "#F05032" },
  // ];

  // const coreCompetencies = [
  //   {
  //     icon: faBolt,
  //     title: "Problem Solving",
  //     description:
  //       "Strong analytical skills in debugging and optimizing applications.",
  //     color: "text-indigo-600",
  //   },
  //   {
  //     icon: faRocket,
  //     title: "Modern Technologies",
  //     description:
  //       "Staying updated with modern frameworks, best practices, and cloud technologies for efficient development.",
  //     color: "text-amber-500",
  //   },
  //   {
  //     icon: faLightbulb,
  //     title: "Responsive Design",
  //     description:
  //       "Skilled in creating responsive and user-friendly interfaces using CSS frameworks like Tailwind CSS and Bootstrap.",
  //     color: "text-emerald-500",
  //   },
  //   {
  //     icon: faChartLine,
  //     title: "Adaptability",
  //     description:
  //       "Ability to quickly learn and adapt to new technologies and methodologies, ensuring continuous improvement.",
  //     color: "text-blue-500",
  //   },
  // ];

  // const education = [
  //   {
  //     title: "Bachelor of Computer Application",
  //     icon: faGraduationCap,
  //     university: "S.V.Patel College",
  //     duration: "2021 - 2024",
  //     description:
  //       "Specialized in Frontend development with a focus on web technologies and distributed systems. Graduated with honors.",
  //   },
  // ];

  // const experience = [
  //   {
  //     number: 1,
  //     title: "Web Developer Intern",
  //     company: "CodexByte",
  //     duration: "6 months",
  //     points: [
  //       "Worked on web application projects using React.js and Tailwind CSS.",
  //       "Improved application performance through optimization techniques.",
  //       "Participated in code reviews and collaborated with team members to ensure high-quality code.",
  //     ],
  //   },
  //   {
  //     number: 2,
  //     title: "Junior React Developer",
  //     company: "HK DigiVerse & IT Consultancy",
  //     duration: "3 months",
  //     points: [
  //       "Worked on product-based applications, focusing on scalable and user-centric designs.",
  //       "Designed and developed core features to improve functionality and usability.",
  //       "Collaborated with the product team to define requirements and deliver timely solutions.",
  //     ],
  //   },
  // ];

  // const projectData = [
  //   {
  //     title: "E-Learning Website",
  //     description:
  //       "An interactive e-learning platform offering a user-friendly interface and multimedia content delivery.",
  //     image: "https://storage.googleapis.com/a1aa/image/sample-portfolio.jpg",
  //     techStack: ["React", "Tailwind CSS"],
  //     repoLink: "https://github.com/example/elearning",
  //     demoLink: "https://elearning-demo.com",
  //   },
  //   {
  //     title: "Portfolio Website",
  //     description: "A modern portfolio website showcasing projects and skills.",
  //     image: "https://storage.googleapis.com/a1aa/image/sample-portfolio.jpg",
  //     techStack: ["React", "Tailwind CSS"],
  //     repoLink: "https://github.com/example/portfolio",
  //     demoLink: "https://portfolio-demo.com",
  //   },
  // ];

  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages((prev) => ({ ...prev, [imageId]: true }));
  }, []);

  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  }, []);

  const skills = useMemo(
    () =>
      data.skills.map((skill) => ({
        ...skill,
        icon: iconMapping[skill.icon], // Map icon names to actual icons
      })),
    [data.skills]
  );

  const coreCompetencies = useMemo(
    () =>
      data.coreCompetencies.map((comp) => ({
        ...comp,
        icon: iconMapping[comp.icon], // Map icon names to actual icons
      })),
    [data.coreCompetencies]
  );

  const education = useMemo(
    () =>
      data.education.map((edu) => ({
        ...edu,
        icon: iconMapping[edu.icon], // Map icon names to actual icons
      })),
    [data.education]
  );

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main className="min-h-screen text-center bg-[#F7F7F7] antialiased">
      {loading ? (
        <Laoder />
      ) : (
        <>
          <Header
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navItem={data.navItem}
            handleSmoothScroll={handleSmoothScroll}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection handleSmoothScroll={handleSmoothScroll} />
            <AboutSection
              skills={skills}
              coreCompetencies={coreCompetencies}
              education={education}
            />
            <ExperienceSection experience={data.experience} />
            <ProjectsSection
              projectData={data.projectData}
              handleImageLoad={handleImageLoad}
              loadedImages={loadedImages}
            />
            <ContactSection />
          </Suspense>

          {window.scrollY > 200 && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition opacity-0 pointer-events-none"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          )}

          <Footer />
        </>
      )}
    </main>
  );
});

export default App;
