import { motion } from "framer-motion";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const featuredProject = {
    title: "Scholar Knights",
    description:
      "A MERN stack web app that helps UCF students find and join study groups based on classes and interests.",
    image: "/scholar-knights-home.png",
    link: "https://github.com/kalypso2/scholar-knights/tree/Live-Server",
    pages: [
      {
        image: "/scholar-knights-login.png",
        description:
          "Secure login screen with UCF email verification to ensure only registered students can access the platform.",
      },
      {
        image: "/scholar-knights-signup.png",
        description:
          "User registration form where students can create an account using their full name, email, and password, followed by a verification step.",
      },
      {
        image: "/scholar-knights-home.png",
        description:
          "Main landing dashboard after login, displaying quick navigation to join sessions, view profile, and explore courses.",
      },
      {
        image: "/scholar-knights-courses.png",
        description:
          "Courses page allowing users to view, add, and manage the classes they’re enrolled in. These courses are used to filter relevant study sessions.",
      },
      {
        image: "/scholar-knights-find-session.png",
        description:
          "Search and filter screen where users can browse all available study sessions by course, tags, date, and mode (online/in-person).",
      },
      {
        image: "/scholar-knights-joined.png",
        description:
          "Shows a personalized list of all study sessions the user has joined or requested to join, with options to view details or leave.",
      },
      {
        image: "/scholar-knights-create-session.png",
        description:
          "Session creation form where users can specify a title, description, location, course, date/time, tags, and privacy level (public or private).",
      },
      {
        image: "/scholar-knights-approve.png",
        description:
          "Management interface for session creators to review incoming join requests, approve or deny them, and monitor attendee lists.",
      },
      {
        image: "/scholar-knights-profile.png",
        description:
          "User profile page that displays and allows editing of profile details such as name, username, bio, and enrolled courses.",
      },
    ],
  };

  const otherProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Tailwind.",
      techStack: ["React", "Tailwind"],
      image: "/portfolio-home.png",
      link: "https://github.com/TylerHuynh1/my-portfolio",
    },
    {
      id: 2,
      title: "Contact Cloud",
      description:
        "A contact management app built with the LAMP stack (Linux, Apache, MySQL, PHP) supporting full CRUD operations.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: "/contact-cloud.png",
      link: "https://github.com/TylerHuynh1/Contact-Cloud",
    },
    // {
    //   id: 3,
    //   title: "Expense Tracker",
    //   description: "Track your expenses and incomes using this full-stack app.",
    //   techStack: ["React", "MongoDB"],
    //   image: "/images/expense.png",
    //   link: "https://github.com/yourgithub/expense-tracker",
    // },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-4 sm:p-6 lg:p-8 w-full flex flex-col items-center text-center overflow-y-auto max-h-full"
    >
      <div className="w-full max-w-6xl">
        <FeaturedProject project={featuredProject} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
