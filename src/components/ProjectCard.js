import { motion } from "framer-motion";

const ProjectCard = ({ title, description, techStack, image, link, index }) => (
  <motion.div
    className="flex flex-col justify-between bg-gray-800 p-6 rounded-xl shadow-md"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{
      scale: 1.03,
      boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.4)",
    }}
  >
    {/* Top content */}
    <div className="flex-grow">
      {/* Image or placeholder */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-gray-600 rounded-md overflow-hidden mb-4 h-48 flex items-center justify-center text-gray-400 text-sm">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-3">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Button */}
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-block bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-4 rounded-lg"
    >
      View Project
    </a>
  </motion.div>
);

export default ProjectCard;
