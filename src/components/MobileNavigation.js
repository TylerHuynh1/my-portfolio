import { useState, useEffect } from "react";

const MobileNavigation = ({ selectedTab, setSelectedTab, tabs, children }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Initialize current index based on selected tab
  useEffect(() => {
    const index = tabs.findIndex(tab => tab.name === selectedTab);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [selectedTab, tabs]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const onTouchMove = (e) => {
    if (isSwiping) {
      setTouchEnd(e.targetTouches[0].clientX);
      // Prevent vertical scrolling while swiping horizontally
      if (Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
        e.preventDefault();
      }
    }
  };

  const onTouchEnd = () => {
    setIsSwiping(false);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < tabs.length - 1) {
      // Swipe left - go to next tab
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedTab(tabs[newIndex].name);
    }
    
    if (isRightSwipe && currentIndex > 0) {
      // Swipe right - go to previous tab
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedTab(tabs[newIndex].name);
    }
  };

  const goToTab = (index) => {
    setCurrentIndex(index);
    setSelectedTab(tabs[index].name);
  };


  return (
    <>
      {/* Swipeable Content Container */}
      <div
        className="flex-1 w-full overflow-hidden relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-98 backdrop-blur-sm border-t border-gray-700 px-4 py-2 z-50" 
           style={{ paddingBottom: `calc(0.5rem + env(safe-area-inset-bottom))` }}>
        <div className="flex items-center justify-center gap-4">
          {/* Dot Indicators with Labels */}
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => goToTab(index)}
              className="flex flex-col items-center gap-1 p-1"
              aria-label={`Go to ${tab.name}`}
            >
              <div
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-blue-500"
                    : "w-1 bg-gray-500 hover:bg-gray-400"
                }`}
              />
              <span className={`text-xs transition-colors ${
                index === currentIndex ? "text-white" : "text-gray-500"
              }`}>
                {tab.name}
              </span>
            </button>
          ))}
        </div>

      </div>
    </>
  );
};

export default MobileNavigation;