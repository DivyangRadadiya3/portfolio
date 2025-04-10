import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  memo,
  useMemo,
  useCallback,
} from "react";
import data from "./data.json"; // Import the JSON data containing skills, education, etc.

// Lazy load components for better performance
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
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faBolt,
  faRocket,
  faLightbulb,
  faChartLine,
  faGraduationCap,
};

// Main App component
const App = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [loading, setLoading] = useState(true); // Loading state
  const [loadedImages, setLoadedImages] = useState({}); // Track loaded images

  // Function to handle image load
  const handleImageLoad = useCallback((imageId) => {
    setLoadedImages((prev) => ({ ...prev, [imageId]: true }));
  }, []);

  // Function for smooth scrolling
  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  }, []);

  // Memoized skills data
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

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main className="min-h-screen text-center bg-[#f8f6f6] font-sans antialiased">
      {loading ? (
        <Laoder /> // Show loader while loading
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
