import { useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

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
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-gray-400 text-md sm:text-lg mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have a question or want to work together? Drop me a message!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-xl py-3 px-6 rounded-lg w-full transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        className="mt-10 flex gap-6 text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
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
