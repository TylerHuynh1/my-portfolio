import {
  Code,
  MonitorSmartphone,
  Server,
  Palette,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const techStack = [
  { name: "JavaScript", icon: <Code size={20} /> },
  { name: "React", icon: <MonitorSmartphone size={20} /> },
  { name: "Node.js", icon: <Server size={20} /> },
  { name: "Tailwind CSS", icon: <Palette size={20} /> },
  { name: "MongoDB", icon: <Database size={20} /> },
];

const AboutMe = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl font-mono mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      {/* Introduction */}
      <motion.p
        className="text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hey! I'm{" "}
        <span className="text-blue-400 font-semibold">Tyler Huynh</span>, a
        passionate software developer and student at
        <span className="text-blue-400 font-semibold">
          {" "}
          University of Central Florida
        </span>
        . I love building modern, user-friendly web applications with a strong
        focus on clean design and efficient code.
      </motion.p>

      {/* Tech Stack */}
      <div className="mt-12">
        <motion.h2
          className="text-3xl text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My Tech Stack
        </motion.h2>
        <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
          {techStack.map(({ name, icon }, index) => (
            <motion.div
              key={name}
              className="flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg shadow-md"
              whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {icon}
              {name}
            </motion.div>
          ))}
        </div>
      </div>

      {/* More About Me */}
      <div className="mt-12">
        <motion.h2
          className="text-3xl text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          More About Me
        </motion.h2>
        <motion.p
          className="text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          When I'm not coding, you'll probably find me exploring new tech,
          working on personal projects, or rock climbing. I also have a strong
          interest in UI/UX design and always aim to make applications both
          beautiful and functional.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutMe;
