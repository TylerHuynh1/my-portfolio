import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, CheckCircle, Code, ExternalLink } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Coye Law Firm",
    position: "Software Development Intern",
    duration: "May 2025 - Present",
    location: "Orlando, FL",
    type: "Internship",
    description: "Contributing to the digital transformation of legal services through modern web development and strategic SEO implementation.",
    responsibilities: [
      "Redesigned and launched a fully optimized legal services website using Next.js, enhancing performance, accessibility, and SEO to drive client acquisition",
      "Implemented local SEO strategies targeting personal injury-related search terms within a 50-mile radius of Orlando, contributing to improved Google Map Pack rankings",
      "Built type-safe, responsive UI components with TypeScript and Tailwind CSS, standardizing patterns across the app"
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "SEO", "Web Performance", "Accessibility"]
  };

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto p-4 sm:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Page Title */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h1>

      {/* Experience Card */}
      <motion.div
        className="bg-gray-800 bg-opacity-90 rounded-xl p-6 sm:p-8 shadow-xl border border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      >
        {/* Header Section */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
            <div>
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {experience.position}
              </motion.h2>
              <motion.a
                href="https://coyelaw.com"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xl sm:text-2xl text-blue-400 hover:text-blue-300 font-semibold mb-3 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {experience.company}
                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-gray-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm sm:text-base">{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-sm sm:text-base">{experience.location}</span>
              </div>
            </motion.div>
          </div>
          <motion.p 
            className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {experience.description}
          </motion.p>
        </div>

        {/* Responsibilities Section */}
        <div className="mb-6">
          <motion.div 
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Briefcase size={20} className="text-blue-400" />
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Key Achievements
            </h4>
          </motion.div>
          <ul className="space-y-3">
            {experience.responsibilities.map((responsibility, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <CheckCircle size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {responsibility}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Code size={20} className="text-blue-400" />
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Technologies Used
            </h4>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {experience.skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="bg-gray-700 text-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "#4a5568" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline indicator for future experiences */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="w-1 h-16 bg-gradient-to-b from-gray-700 to-transparent rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default Experience;