import { Home, User, Briefcase, FileText, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = ({ selectedTab, setSelectedTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const tabs = [
    { name: "Home", icon: <Home size={16} /> },
    { name: "About Me", icon: <User size={16} /> },
    { name: "Projects", icon: <Briefcase size={16} /> },
    { name: "Resume", icon: <FileText size={16} /> },
    { name: "Contact", icon: <Mail size={16} /> },
  ];

  const handleTabClick = (name) => {
    setSelectedTab(name);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation Sidebar - Desktop */}
      <div className="hidden lg:flex w-1/5 p-16 h-full flex-col items-start bg-gray-900 text-white">
        <ul className="w-full">
          {tabs.map(({ name, icon }) => (
            <li
              key={name}
              className="flex items-center justify-between w-full cursor-pointer py-2 text-lg px-4 hover:bg-gray-700 rounded-lg transition duration-300"
              onClick={() => handleTabClick(name)}
            >
              <div className="flex items-center gap-3">
                {icon}
                <span
                  className={selectedTab === name ? "font-bold" : "text-gray-400"}
                >
                  {name}
                </span>
              </div>
              {selectedTab === name && (
                <div className="w-3 h-3 bg-white rounded-md"></div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Sidebar - Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed left-0 top-0 h-full w-64 bg-gray-900 text-white z-40 pt-16"
          >
            <ul className="w-full px-4">
              {tabs.map(({ name, icon }) => (
                <li
                  key={name}
                  className="flex items-center justify-between w-full cursor-pointer py-3 text-lg px-4 hover:bg-gray-700 rounded-lg transition duration-300"
                  onClick={() => handleTabClick(name)}
                >
                  <div className="flex items-center gap-3">
                    {icon}
                    <span
                      className={selectedTab === name ? "font-bold" : "text-gray-400"}
                    >
                      {name}
                    </span>
                  </div>
                  {selectedTab === name && (
                    <div className="w-3 h-3 bg-white rounded-md"></div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
