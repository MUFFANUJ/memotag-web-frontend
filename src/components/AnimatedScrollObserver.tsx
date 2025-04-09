
import React, { useEffect } from 'react';

interface AnimatedScrollObserverProps {
  children: React.ReactNode;
}

/**
 * AnimatedScrollObserver Component
 * Created by Anuj Kumar Singh
 * This component handles scroll animations for elements with reveal classes
 */
const AnimatedScrollObserver: React.FC<AnimatedScrollObserverProps> = ({ children }) => {
  useEffect(() => {
    // Initialize animation observers
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal-left')) {
            entry.target.classList.add('active-left');
          } else if (entry.target.classList.contains('reveal-right')) {
            entry.target.classList.add('active-right');
          } else if (entry.target.classList.contains('reveal-zoom')) {
            entry.target.classList.add('active-zoom');
          } else if (entry.target.classList.contains('reveal-rotate')) {
            entry.target.classList.add('active-rotate');
          } else if (entry.target.classList.contains('reveal-fade')) {
            entry.target.classList.add('active-fade');
          } else if (entry.target.classList.contains('reveal-bubble')) {
            entry.target.classList.add('active-bubble');
          } else {
            entry.target.classList.add('active');
          }
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger animations slightly before elements enter viewport
    });

    // Observe all elements with reveal classes
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rotate, .reveal-fade, .reveal-bubble').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};

export default AnimatedScrollObserver;
