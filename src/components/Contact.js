import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="w-4/5 flex flex-col justify-center items-center text-center p-8 sm:p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Connect With Me
      </motion.h2>

      <motion.p
        className="text-gray-400 text-md sm:text-lg mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Feel free to reach out on any of these platforms. I'm always open to new
        opportunities and collaborations!
      </motion.p>

      <motion.div
        className="flex gap-6 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {[
          {
            href: "https://github.com/TylerHuynh1",
            icon: <Github />,
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/tylerhuynh1",
            icon: <Linkedin />,
            label: "LinkedIn",
          },
          {
            href: "https://www.instagram.com/yourinstagram",
            icon: <Instagram />,
            label: "Instagram",
          },
        ].map(({ href, icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-white transition"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
