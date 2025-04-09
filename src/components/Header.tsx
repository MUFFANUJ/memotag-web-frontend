
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sharkTankIndiaS4Logo from "../../assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-memotag-primary to-memotag-accent flex items-center justify-center text-white font-bold">
              <img src={sharkTankIndiaS4Logo}  className='rounded-full'/>
            </div>
            <span className="text-xl font-bold text-memotag-text">MemoTag</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#problem" className="text-memotag-text/80 hover:text-memotag-primary transition-colors">
            Problem
          </a>
          <a href="#solution" className="text-memotag-text/80 hover:text-memotag-primary transition-colors">
            Solution
          </a>
          <a href="#traction" className="text-memotag-text/80 hover:text-memotag-primary transition-colors">
            Traction
          </a>
          <a href="#contact" className="text-memotag-text/80 hover:text-memotag-primary transition-colors">
            Contact
          </a>
          <Button 
            variant="default" 
            className="bg-memotag-primary hover:bg-memotag-accent text-white"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Waitlist
          </Button>
        </nav>

        <button 
          className="md:hidden text-memotag-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            <a 
              href="#problem" 
              className="text-memotag-text/80 hover:text-memotag-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem
            </a>
            <a 
              href="#solution" 
              className="text-memotag-text/80 hover:text-memotag-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a 
              href="#traction" 
              className="text-memotag-text/80 hover:text-memotag-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Traction
            </a>
            <a 
              href="#contact" 
              className="text-memotag-text/80 hover:text-memotag-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="default" 
              className="bg-memotag-primary hover:bg-memotag-accent text-white"
              onClick={() => {
                document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
