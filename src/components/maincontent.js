import { motion, AnimatePresence } from "framer-motion";
import AboutMe from "./AboutMe";
import Projects from "../pages/Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const MainContent = ({ selectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case "Home":
        return (
          <div key="Home">
            <motion.h1
              className="text-5xl sm:text-6xl font-mono mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tyler Huynh
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Software Developer
            </motion.h2>
            <motion.p
              className="text-gray-300 max-w-3xl text-center leading-relaxed text-md sm:text-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I am an aspiring software developer and a student at the University
              of Central Florida, passionate about building intuitive and efficient
              web applications. With a strong focus on clean design and modern
              technologies like React, I enjoy turning ideas into functional,
              user-friendly experiences. Explore my work to see what I have been creating.
            </motion.p>
          </div>
        );
      case "About Me":
        return <AboutMe key="AboutMe" />;
      case "Projects":
        return <Projects key="Projects" />;
      case "Resume":
        return <Resume key="Resume" />;
      case "Contact":
        return <Contact key="Contact" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-4/5 flex flex-col justify-center items-center text-center p-8 sm:p-16 h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainContent;
