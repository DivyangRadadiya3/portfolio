import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Typography,
    Stepper, Step,
    Tooltip,
    Button,
    Heading,
    IconButton,
} from "@material-tailwind/react";
import { FiDownload } from "react-icons/fi";
// import {
//     HomeIcon,
//     ChatBubbleLeftEllipsisIcon,
//     Cog6ToothIcon,
//     PencilIcon,
// } from "@heroicons/react/24/solid";
// import { Link } from "react-router-dom";
// import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
// import { platformSettingsData, conversationsData, projectsData } from "@/data";
import {
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaCode,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { Helmet } from 'react-helmet';

const Section = ({ title, children }) => (
    <div className="text-center mb-12">
        <Typography variant="h3" color="blue-gray" className="mb-6 font-mono">
            {title || ""}
        </Typography>
        {children || ""}
    </div>
);

const AboutSection = () => {

    return (

        <div className="text-center mx-auto p-6 sm:p-8 md:p-10 lg:p-12">

            <Typography variant="h1" color="purple" className="mb-4 font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                About Me
            </Typography>
            <Typography as="h3"
                className="mt-5 px-2 text-base text-justify sm:text-lg md:text-xl text-slate-900 dark:text-gray-300 leading-relaxed"
            >
                I am a passionate React developer with a strong focus on modern web technologies.
                My main skills include JavaScript, React, and Tailwind CSS for building responsive user interfaces. I also have experience with Node.js for backend development and use Git for version control. My knowledge of HTML & CSS helps me write clean and maintainable code. I strive to create efficient and user-friendly applications.
            </Typography>

            <div className="mt-6 flex justify-center mx-auto">
                <Button
                    variant="gradient"
                    color="purple"
                    onClick={() => window.open("/public/Divyang_M._Radadiya.pdf", "_blank")}
                    className="flex items-center gap-2"
                    aria-label="Download Resume"
                >
                    <FiDownload className="w-5 h-5" />
                    Download Resume
                </Button>
            </div>
        </div>
    )
};

const TechnicalSkills = () => {
    const skills = [
        {
            name: "JavaScript",
            icon: <FaJsSquare className="text-6xl text-yellow-500" />,
        },
        {
            name: "React",
            icon: <FaReact className="text-6xl text-blue-500" />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-6xl text-teal-500" />,
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="text-6xl text-green-500" />,
        },
        {
            name: "Git",
            icon: <FaGitAlt className="text-6xl text-orange-500" />,
        },
        {
            name: "HTML & CSS",
            icon: <FaCode className="text-6xl text-indigo-500" />,
        },
    ];
    const [hovered, setHovered] = useState(null);

    return (
        <div>
            <Typography
                variant="h3"
                color="purple"
                className="text-center font-mono font-bold py-3"
            >
                Technical Skills
            </Typography>
            <div className=" dark:bg-gray-900 rounded-lg py-10 text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2 text-gray-800">
                    What Skills I Have
                </Typography>
                <div className="bg-gray-800 dark:bg-gray-700 text-white rounded-lg p-6  w-3/4 mx-auto">
                    <Typography variant="h6" color="blue" className="mb-2">
                        Frontend Development
                    </Typography>
                    <Typography variant="small" color="white">
                        Hover To Reveal Skills
                    </Typography>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center mt-4">
                        {skills.map((skill, index) => (
                            <Tooltip
                                key={index}
                                content={skill.name}
                                placement="bottom"
                                className="bg-gray-900 dark:bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium shadow-md"
                            >
                                <IconButton
                                    variant="text"
                                    size="lg"
                                    color="white"
                                    className="p-4 bg-inherite rounded-full shadow-md transition-all duration-300 transform hover:scale-125 "
                                >
                                    {React.cloneElement(skill.icon, {
                                        className: `${skill.icon.props.className} transition-transform duration-300`,
                                    })}
                                </IconButton>
                            </Tooltip>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

const AdditionalSkills = () => {
    const skills = [
        {
            title: "Problem Solving",
            description:
                "Strong analytical skills in debugging and optimizing applications. Implementing efficient algorithms and data structures.",
            icon: <FaCode className="text-6xl text-indigo-500" />,
        },
        {
            title: "Modern Technologies",
            description:
                "Staying updated with modern frameworks, best practices, and cloud technologies for efficient development.",
            icon: <FaJsSquare className="text-6xl text-yellow-500" />,
        },
        {
            title: "Version Control",
            description:
                "Proficient in using Git for version control, enabling collaboration and maintaining code integrity across projects.",
            icon: <FaGitAlt className="text-6xl text-orange-500" />,
        },
        {
            title: "Responsive Design",
            description:
                "Skilled in creating responsive and user-friendly interfaces using CSS frameworks like Tailwind CSS and Bootstrap.",
            icon: <SiTailwindcss className="text-6xl text-teal-500" />,
        },
    ];

    return (
        <div className="w-full">
            <Typography
                variant="h3"
                color="purple"
                className="text-center font-mono font-bold py-3"
            >
                Additional Skills
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4">
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        className="p-6 bg-white dark:bg-gray-800 space-y-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-2xl hover:bg-blue-300 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white "
                    >
                        <div className="flex items-center gap-4 ">
                            <Typography variant="h5" className="font-semibold mb-2 ">
                                {skill.title}
                            </Typography>
                        </div>
                        <Typography variant="paragraph" className="leading-7 text-base">
                            {skill.description}
                        </Typography>

                    </Card>
                ))}
            </div>
        </div>
    );
};

const WorkExperience = () => {

    const [activeStep, setActiveStep] = React.useState(0);

    const steps = [

        {
            number: 1,
            title: "Web Developer Intern",
            description: "Provide your contact details for communication",
            company: "CodexByte",
            duration: "6 months",
            points: [
                "Worked on web application projects using React.js and Tailwind CSS.",
                "Improved application performance through optimization techniques.",
                "Participated in code reviews and collaborated with team members to ensure high-quality code.",
            ],
        },
        {
            number: 2,
            title: "Junior React Developer",
            description: "Enter your personal details to get started",
            company: "HK DigiVerse & IT Consultancy",
            duration: "3 months",
            points: [
                "Worked on product-based applications, focusing on scalable and user-centric designs.",
                "Designed and developed core features to improve functionality and usability.",
                "Collaborated with the product team to define requirements and deliver timely solutions.",
            ],
        },
    ];


    return (

        <div className="w-full ">
            <Typography
                variant="h3"
                color="purple"
                className="text-center font-mono font-bold py-3"
            >
                Work Experience
            </Typography>
            <div className="flex flex-col gap-8 mt-6 px-4">
                {steps.map((step, index) => (
                    <div
                        key={step.number}
                        onClick={() => setActiveStep(index)}
                        className="relative flex items-center gap-4 p-6 rounded-xl cursor-pointer transition-all hover:shadow-lg hover:border-blue-500 border-2 border-dashed border-[#bebebe] duration-300 bg-blue-50 shadow-md"
                    >
                        <div className="absolute -left-3 -top-1 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                            {step.number}
                        </div>
                        <div className="flex-1">
                            <CardHeader color="blue-gray" className="p-4 md:p-6 lg:p-8 border-b border-gray-300 dark:border-gray-600">
                                <Typography variant="h4" color="white" className="font-semibold text-lg md:text-xl lg:text-2xl">
                                    {step.title}
                                </Typography>
                                <Typography variant="small" color="white" className="mb-2 font-sans text-base leading-relaxed font-normal">
                                    {step.company} | {step.duration}
                                </Typography>
                            </CardHeader>
                            <CardBody className="p-4 md:p-6 lg:p-8">
                                <ul className="list-disc pl-4 space-y-1">
                                    {step.points && step.points.map((point, idx) => (
                                        <li key={idx} className="text-left font-sans text-base leading-relaxed font-normal text-gray-700">
                                            <Typography variant="paragraph" color="blue-gray">
                                                {point}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

const Education = () => {
    const education = [
        {
            title: "Bachelor of Computer Application",
            university: "S.V.Patel College",
            duration: "2021 - 2024",
            description:
                "Specialized in Frontend developer with a focus on web technologies and distributed systems. Graduated with honors.",
        },
    ];

    return (
        <div className="w-full">
            <Typography
                variant="h3"
                color="purple"
                className="text-center font-mono font-bold py-3"
            >
                Education
            </Typography>

            <div className="px-4">
                {education.map((edu, index) => (
                    <div key={index} className={`relative flex flex-col items-center gap-4 p-6 rounded-xl cursor-pointer transition-all bg-blue-50 hover:shadow-lg hover:border-blue-500 border-2 border-dashed border-[#bebebe] duration-300 `}>
                        <div className="flex-1">

                            <CardHeader color="blue-gray" className="p-4  border-b border-gray-300 dark:border-gray-600">
                                <Typography variant="h4" color="white" className="font-semibold text-lg md:text-xl lg:text-2xl">
                                    {edu.title}
                                </Typography>
                                <Typography variant="small" color="white" className="mb-2 font-sans text-base leading-relaxed font-normal">
                                    {edu.university} | {edu.duration}
                                </Typography>
                            </CardHeader>
                            <CardBody className="p-4">
                                <ul className="list-disc pl-4 space-y-1">
                                    <li className="text-left font-sans text-base leading-relaxed font-normal text-gray-700">
                                        <Typography variant="paragraph" color="blue-gray">
                                            {edu.description}
                                        </Typography>
                                    </li>
                                </ul>
                            </CardBody>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export function About() {
    return (
        <>
            <section id="aboutUs" className=" pt-24 bg-muted/50 dark:bg-gray-900 animate-fade-in-up">
                <div className="container mx-auto space-y-12 ">
                    <AboutSection />

                    <TechnicalSkills />

                    <AdditionalSkills />
                    <div className="absolute left-0 top-0 z-[1] opacity-30 lg:opacity-100">
                        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_var3)">
                                <animate attributeName="cx" values="17.9997;30;17.9997" dur="3s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_var3)">
                                <animate attributeName="cy" values="288;300;288" dur="4s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_var3)">
                                <animate attributeName="r" values="180;200;180" dur="6s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_var3)">
                                <animate attributeName="cx" values="184.521;200;184.521" dur="5s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_var3)">
                                <animate attributeName="cy" values="290;300;290" dur="4s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_var3)">
                                <animate attributeName="r" values="133.362;150;133.362" dur="6s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle cx="100" cy="100" r="50" fill="url(#paint7_linear_var3)">
                                <animate attributeName="r" values="50;60;50" dur="4s" repeatCount="indefinite"></animate>
                            </circle>
                            <circle cx="300" cy="150" r="70" fill="url(#paint8_linear_var3)">
                                <animate attributeName="r" values="70;80;70" dur="5s" repeatCount="indefinite"></animate>
                            </circle>
                            <defs>
                                <linearGradient id="paint0_linear_var3" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4A6CF7"></stop>
                                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                                </linearGradient>
                                <radialGradient id="paint1_radial_var3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                                    <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0"></stop>
                                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
                                </radialGradient>
                                <radialGradient id="paint2_radial_var3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                                    <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0"></stop>
                                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
                                </radialGradient>
                                <linearGradient id="paint3_linear_var3" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4A6CF7"></stop>
                                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint4_linear_var3" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4A6CF7"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint5_linear_var3" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4A6CF7"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint6_linear_var3" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#4A6CF7"></stop>
                                    <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint7_linear_var3" x1="50" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF6347"></stop>
                                    <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint8_linear_var3" x1="250" y1="100" x2="350" y2="200" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF6347"></stop>
                                    <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <WorkExperience />
                    <div className="absolute -left-10 top-[43rem] z-[1] opacity-30 lg:opacity-100">
                        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="50" y1="50" x2="400" y2="50" stroke="url(#paint0_linear_var1)" strokeWidth="2">
                                <animate attributeName="x2" values="400;50;400" dur="4s" repeatCount="indefinite"></animate>
                            </line>
                            <line x1="50" y1="100" x2="400" y2="100" stroke="url(#paint1_radial_var1)" strokeWidth="2">
                                <animate attributeName="x1" values="50;400;50" dur="5s" repeatCount="indefinite"></animate>
                            </line>
                            <line x1="50" y1="150" x2="400" y2="150" stroke="url(#paint2_radial_var1)" strokeWidth="2">
                                <animate attributeName="y1" values="150;50;150" dur="6s" repeatCount="indefinite"></animate>
                            </line>
                            <line x1="50" y1="200" x2="400" y2="200" stroke="url(#paint3_linear_var1)" strokeWidth="2">
                                <animate attributeName="y2" values="200;300;200" dur="7s" repeatCount="indefinite"></animate>
                            </line>
                            <line x1="50" y1="250" x2="400" y2="250" stroke="url(#paint4_linear_var1)" strokeWidth="2">
                                <animate attributeName="x1" values="50;200;50" dur="8s" repeatCount="indefinite"></animate>
                            </line>
                            <line x1="50" y1="300" x2="400" y2="300" stroke="url(#paint5_linear_var1)" strokeWidth="2">
                                <animate attributeName="x2" values="400;300;400" dur="9s" repeatCount="indefinite"></animate>
                            </line>
                            <line x1="50" y1="350" x2="400" y2="350" stroke="url(#paint6_linear_var1)" strokeWidth="2">
                                <animate attributeName="y1" values="350;400;350" dur="10s" repeatCount="indefinite"></animate>
                            </line>
                            <defs>
                                <linearGradient id="paint0_linear_var1" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF6347"></stop>
                                    <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                                </linearGradient>
                                <radialGradient id="paint1_radial_var1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 100) rotate(90) scale(18)">
                                    <stop offset="0.145833" stopColor="#FF6347" stopOpacity="0"></stop>
                                    <stop offset="1" stopColor="#FF6347" stopOpacity="0.08"></stop>
                                </radialGradient>
                                <radialGradient id="paint2_radial_var1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 150) rotate(90) scale(34)">
                                    <stop offset="0.145833" stopColor="#FF6347" stopOpacity="0"></stop>
                                    <stop offset="1" stopColor="#FF6347" stopOpacity="0.08"></stop>
                                </radialGradient>
                                <linearGradient id="paint3_linear_var1" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF6347"></stop>
                                    <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint4_linear_var1" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF6347"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint5_linear_var1" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF6347"></stop>
                                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint6_linear_var1" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF6347"></stop>
                                    <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <Education />
                </div>
            </section>
        </>
    );
}

About.displayName = "/src/widgets/layout/About.jsx";

export default About;
