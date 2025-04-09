
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import TractionSection from '../components/TractionSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AnimatedScrollObserver from '../components/AnimatedScrollObserver';
import PageTransition from '../components/PageTransition';

/**
 * Main Index Page Component
 * Developed by Anuj Kumar Singh
 */
const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <PageTransition>
      <AnimatedScrollObserver>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main>
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <TractionSection />
            <CTASection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </AnimatedScrollObserver>
    </PageTransition>
  );
};

export default Index;
