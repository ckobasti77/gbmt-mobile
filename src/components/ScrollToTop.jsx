import React, { useState, useEffect } from "react";
import { ChevronFirst } from "lucide-react";

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTop = () => {

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight >= 1000) {
        setShowScrollToTop(true);
      } else if (currentHeight < 1000) {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
  
      <button
        className={`z-[99999999] fixed backdrop-blur-2xl transition-all bottom-6 lg:bottom-16 rounded-full text-white border-4 border-blue-600 w-14 h-14 grid place-items-center ${
          showScrollToTop
            ? "right-6 scale-100 opacity-100"
            : "-right-6 scale-0 opacity-0"
        }`}
        onClick={() => scrollToTop()}
        title="Skroluj do vrha"
      >
        <ChevronFirst className="h-8 w-8 rotate-[90deg]" />
      </button>
  );
};

export default ScrollToTop;
