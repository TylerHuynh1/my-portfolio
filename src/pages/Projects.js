import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import { Edit } from "lucide-react";
import { API_URL, isDevelopment } from "../config";

// Fallback data for production (when API is not available)
const FALLBACK_PROJECTS = {
  featuredProject: {
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
          "Courses page allowing users to view, add, and manage the classes they're enrolled in. These courses are used to filter relevant study sessions.",
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
  },
  otherProjects: [
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
  ],
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/api/projects`);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.log("API not available, using fallback data");
      // Convert fallback data to API format
      const fallbackData = [
        {
          id: 1,
          title: FALLBACK_PROJECTS.featuredProject.title,
          description: FALLBACK_PROJECTS.featuredProject.description,
          link: FALLBACK_PROJECTS.featuredProject.link,
          mainImage: FALLBACK_PROJECTS.featuredProject.image,
          isFeatured: true,
          techStack: ["MongoDB", "Express", "React", "Node.js"],
          images: FALLBACK_PROJECTS.featuredProject.pages.map((page, idx) => ({
            id: idx,
            imagePath: page.image,
            description: page.description,
            order: idx,
          })),
        },
        ...FALLBACK_PROJECTS.otherProjects.map((proj) => ({
          ...proj,
          mainImage: proj.image,
          isFeatured: false,
          images: [],
        })),
      ];
      setProjects(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  const featuredProject = projects.find((p) => p.isFeatured);
  const otherProjects = projects.filter((p) => !p.isFeatured);

  // Convert API project to FeaturedProject format
  const formatFeaturedProject = (project) => {
    if (!project) return null;
    return {
      title: project.title,
      description: project.description,
      image: project.mainImage,
      link: project.link,
      pages: project.images.map((img) => ({
        image: img.imagePath,
        description: img.description,
      })),
    };
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6 lg:p-8 w-full flex items-center justify-center text-white">
        <div className="text-xl">Loading projects...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-4 sm:p-6 lg:p-8 w-full flex flex-col items-center text-center overflow-y-auto max-h-full relative"
    >
      {/* Edit Button - Only show in development */}
      {isDevelopment && (
        <button
          onClick={() => navigate("/login")}
          className="fixed top-4 right-4 z-50 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
          title="Edit Projects"
        >
          <Edit size={20} />
        </button>
      )}

      <div className="w-full max-w-6xl">
        {featuredProject && (
          <FeaturedProject project={formatFeaturedProject(featuredProject)} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.mainImage}
              link={project.link}
              index={index}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-gray-400 text-center py-12">
            No projects found.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
