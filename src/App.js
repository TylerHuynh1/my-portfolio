import { useState, useEffect } from "react";
import Navigation from "./components/navigation";
import MainContent from "./components/maincontent";
import BoidsBackground from "./components/BoidsBackground";
import MobileNavigation from "./components/MobileNavigation";
import { Home, User, Briefcase, FileText, Mail, Building } from "lucide-react";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  const tabs = [
    { name: "Home", icon: <Home size={16} /> },
    { name: "About Me", icon: <User size={16} /> },
    { name: "Experience", icon: <Building size={16} /> },
    { name: "Projects", icon: <Briefcase size={16} /> },
    { name: "Resume", icon: <FileText size={16} /> },
    { name: "Contact", icon: <Mail size={16} /> },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <BoidsBackground />
      {isMobile ? (
        // Mobile Layout with Swipe Navigation
        <div 
          className="absolute inset-0 flex flex-col" 
          style={{ paddingTop: 'env(safe-area-inset-top)' }}
        >
          <MobileNavigation 
            selectedTab={selectedTab} 
            setSelectedTab={setSelectedTab}
            tabs={tabs}
          >
            <div className="h-full overflow-y-auto pb-20" style={{ paddingBottom: `calc(5rem + env(safe-area-inset-bottom))` }}>
              <MainContent selectedTab={selectedTab} />
            </div>
          </MobileNavigation>
        </div>
      ) : (
        // Desktop Layout with Sidebar Navigation
        <div className="absolute inset-0 flex justify-center items-center p-2 sm:p-4 lg:p-8">
          <div className="border border-gray-700 w-full max-w-8xl h-[90vh] flex relative z-10 bg-gray-900 bg-opacity-80 overflow-hidden">
            <Navigation
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <div className="flex flex-col flex-grow justify-center items-center w-full overflow-hidden">
              <MainContent selectedTab={selectedTab} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
