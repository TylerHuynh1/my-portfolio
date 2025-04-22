<<<<<<< HEAD
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      className="w-4/5 flex flex-col justify-center items-center text-center p-8 sm:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-400 text-md sm:text-lg mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Download my resume to learn more about my experience and skills.
      </motion.p>

      {/* Download Button */}
      <motion.a
        href="/Huynh, Tyler Resume.pdf" // File should be in the public folder
        download="Tyler_Huynh_Resume.pdf"
        aria-label="Download Tyler Huynh's Resume"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white text-lg sm:text-2xl py-3 px-6 rounded-lg shadow-lg"
      >
        <FileText size={24} />
        Download Resume
      </motion.a>
    </motion.div>
  );
};

export default Resume;
=======
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      className="w-4/5 flex flex-col justify-center items-center text-center p-8 sm:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-400 text-md sm:text-lg mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Download my resume to learn more about my experience and skills.
      </motion.p>

      {/* Download Button */}
      <motion.a
        href="/Huynh, Tyler Resume.pdf" // File should be in the public folder
        download="Tyler_Huynh_Resume.pdf"
        aria-label="Download Tyler Huynh's Resume"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white text-lg sm:text-2xl py-3 px-6 rounded-lg shadow-lg"
      >
        <FileText size={24} />
        Download Resume
      </motion.a>
    </motion.div>
  );
};

export default Resume;
>>>>>>> 2adb806644f6ad6a9f4981f840569b3dafa049ee
