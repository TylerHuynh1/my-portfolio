import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  })
};

const FeaturedProject = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const current = project.pages?.[currentPageIndex];

  const nextPage = useCallback(() => {
    setDirection(1);
    setCurrentPageIndex((prev) => (prev + 1) % project.pages.length);
  }, [project.pages.length]);

  const prevPage = useCallback(() => {
    setDirection(-1);
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
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12">
        <div className="relative w-full lg:w-3/4 border-2 sm:border-4 border-gray-700 rounded-lg sm:rounded-xl overflow-hidden shadow-lg aspect-video">
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
          className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white text-base sm:text-lg py-2 px-4 rounded-lg"
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
              className="bg-gray-900 rounded-lg p-4 sm:p-6 max-w-3xl w-[90%] sm:w-full mx-4 relative overflow-hidden"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentPageIndex}
                    className="w-full"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <img
                      src={current.image}
                      alt={`Page ${currentPageIndex + 1}`}
                      className="w-full rounded-md mb-3"
                      loading="lazy"
                    />
                    <p className="text-white text-center text-sm sm:text-base lg:text-lg mb-3 px-2 sm:px-0">
                      {current.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center mb-2 px-2 sm:px-0">
                <button
                  onClick={prevPage}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base transition-colors"
                  aria-label="Previous image"
                >
                  ← Previous
                </button>
                
                <span className="text-gray-400 text-sm">
                  {currentPageIndex + 1} / {project.pages.length}
                </span>
                
                <button
                  onClick={nextPage}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base transition-colors"
                  aria-label="Next image"
                >
                  Next →
                </button>
              </div>

              <div className="flex justify-center gap-1.5 sm:gap-2">
                {project.pages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentPageIndex ? 1 : -1);
                      setCurrentPageIndex(idx);
                    }}
                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${
                      idx === currentPageIndex
                        ? "bg-blue-500 w-6 sm:w-8"
                        : "bg-gray-500/40 hover:bg-gray-400/60"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
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
