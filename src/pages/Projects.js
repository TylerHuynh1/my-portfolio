// pages/Projects.jsx or wherever your main page lives
import { motion } from "framer-motion";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const featuredProject = {
    title: "Scholar Knights",
    description:
      "A MERN stack web app that helps UCF students find and join study groups based on classes and interests.",
    image: "/scholar-knights.png",
    link: "https://github.com/yourgithub/studybuddy",
  };

  const otherProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Tailwind.",
      techStack: ["React", "Tailwind"],
      image: "/images/portfolio.png",
      link: "https://yourportfolio.com",
    },
    {
      id: 2,
      title: "Contact Manager",
      description: "A simple contact management tool using vanilla JS, HTML, and CSS.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "/contact-cloud.png",
      link: "https://github.com/TylerHuynh1/Contact-Cloud",
    },
    {
      id: 3,
      title: "Expense Tracker",
      description: "Track your expenses and incomes using this full-stack app.",
      techStack: ["React", "MongoDB"],
      image: "/images/expense.png",
      link: "https://github.com/yourgithub/expense-tracker",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-8 w-4/5 flex flex-col justify-center items-center text-center"
    >
      <FeaturedProject project={featuredProject} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {otherProjects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
