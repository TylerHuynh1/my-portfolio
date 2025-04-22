import { Home, User, Briefcase, FileText, Mail } from "lucide-react";

const Navigation = ({ selectedTab, setSelectedTab }) => {
  const tabs = [
    { name: "Home", icon: <Home size={16} /> },
    { name: "About Me", icon: <User size={16} /> },
    { name: "Projects", icon: <Briefcase size={16} /> },
    { name: "Resume", icon: <FileText size={16} /> },
    { name: "Contact", icon: <Mail size={16} /> },
  ];

  return (
    <div className="w-1/5 p-16 h-full flex flex-col items-start bg-gray-900 text-white">
      <ul className="w-full">
        {tabs.map(({ name, icon }) => (
          <li
            key={name}
            className="flex items-center justify-between w-full cursor-pointer py-2 text-lg px-4 hover:bg-gray-700 rounded-lg transition duration-300"
            onClick={() => setSelectedTab(name)}
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
  );
};

export default Navigation;
