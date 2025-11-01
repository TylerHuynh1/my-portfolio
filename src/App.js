import { useState } from "react";
import Navigation from "./components/navigation";
import MainContent from "./components/maincontent";
import BoidsBackground from "./components/BoidsBackground";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <BoidsBackground />
      <div className="absolute inset-0 flex justify-center items-center p-2 sm:p-4 lg:p-8">
        <div className="border border-gray-700 w-full max-w-8xl h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] lg:h-[90vh] flex relative z-10 bg-gray-900 bg-opacity-80 overflow-hidden">
          <Navigation
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <div className="flex flex-col flex-grow justify-center items-center w-full pt-12 sm:pt-14 lg:pt-0 overflow-hidden">
            <MainContent selectedTab={selectedTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
