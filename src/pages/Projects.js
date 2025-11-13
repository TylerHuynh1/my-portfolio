import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import { Edit } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/projects");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      // Fallback to empty array if API fails
      setProjects([]);
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
      {/* Edit Button - Fixed position */}
      <button
        onClick={() => navigate("/login")}
        className="fixed top-4 right-4 z-50 bg-gray-800/80 hover:bg-gray-700/90 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
        title="Edit Projects"
      >
        <Edit size={20} />
      </button>

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
            No projects found. Add some from the admin panel!
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
