import { motion } from "framer-motion";

const FeaturedProject = ({ project }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
    <div className="relative w-full md:w-3/4 border-4 border-gray-700 rounded-xl overflow-hidden shadow-lg">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6 }}
      />
      <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
        App Preview
      </span>
    </div>
    <motion.div
      className="md:w-1/2 text-center md:text-left"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p className="text-gray-300 text-lg mt-3">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg py-2 px-4 rounded-lg"
      >
        View Project
      </a>
    </motion.div>
  </div>
);

export default FeaturedProject;
