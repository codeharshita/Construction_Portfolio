import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 p-4 bg-charcoal border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-500 shadow-2xl animate-in fade-in slide-in-from-bottom-5 group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
          
          {/* Architectural corner accents */}
          <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-gold"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-gold"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
