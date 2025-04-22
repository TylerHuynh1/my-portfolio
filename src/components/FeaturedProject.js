import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const FeaturedProject = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const current = project.pages?.[currentPageIndex];

  const nextPage = useCallback(() => {
    setCurrentPageIndex((prev) => (prev + 1) % project.pages.length);
  }, [project.pages.length]);

  const prevPage = useCallback(() => {
    setCurrentPageIndex((prev) =>
      prev === 0 ? project.pages.length - 1 : prev - 1
    );
  }, [project.pages.length]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentPageIndex(0);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "ArrowLeft") prevPage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen, nextPage, prevPage, closeModal]);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative w-full md:w-3/4 border-4 border-gray-700 rounded-xl overflow-hidden shadow-lg aspect-video">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="w-full h-full relative text-left"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover block"
            />
            <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
              Click to Preview
            </span>
          </motion.button>
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

      <AnimatePresence>
        {isModalOpen && project.pages?.length > 0 && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 rounded-lg p-6 max-w-3xl w-full relative overflow-hidden"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPageIndex}
                  className="w-full"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img
                    src={current.image}
                    alt={`Page ${currentPageIndex + 1}`}
                    className="w-full rounded-md mb-4"
                  />
                  <p className="text-white text-center text-lg mb-4">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mb-4">
                <button
                  onClick={prevPage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>

              <div className="flex justify-center gap-2 mb-2">
                {project.pages.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-full ${
                      idx === currentPageIndex
                        ? "bg-blue-500"
                        : "bg-gray-500/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={closeModal}
                className="absolute top-2 right-4 text-white text-2xl"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedProject;
