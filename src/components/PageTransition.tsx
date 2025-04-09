
import React, { useEffect } from 'react';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Add a smooth transition effect when the page loads
    document.body.classList.add('opacity-0');
    
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
    }, 50);

    return () => {
      document.body.classList.remove('transition-opacity', 'duration-500', 'opacity-100');
    };
  }, []);

  return <>{children}</>;
};

export default PageTransition;
