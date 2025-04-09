
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Activity, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import DoodleElements from './DoodleElements';

const BubbleAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={i}
          className={`absolute rounded-full bg-gradient-to-r from-memotag-primary/10 to-memotag-accent/5 bubble-animate`}
          style={{
            width: `${Math.random() * 120 + 20}px`,
            height: `${Math.random() * 120 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            opacity: 0.3 + Math.random() * 0.3
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center brain-bg pt-20 pb-16 overflow-hidden neural-network relative">
      <BubbleAnimation />
      
      <div className="absolute top-20 left-10 opacity-20 transform -rotate-12">
        <DoodleElements type="dots" color="#9b87f5" width={100} height={100} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 transform rotate-12">
        <DoodleElements type="wave" color="#6E59A5" width={150} height={80} />
      </div>
      <div className="absolute top-1/3 right-[5%] opacity-10">
        <DoodleElements type="zigzag" color="#7E69AB" width={120} height={60} />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="reveal-fade">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-memotag-secondary/30 text-memotag-primary mb-4">
                <Sparkles size={16} className="animate-pulse" />
                AI-Powered Dementia Care
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight reveal-left">
              Reimagining <span className="gradient-text">Memory Care</span> Through AI Innovation
            </h1>
            <p className="text-lg md:text-xl text-memotag-text/80 max-w-2xl reveal-right">
              MemoTag helps caregivers and families support loved ones with dementia through personalized AI technology that enhances memory, tracks cognitive patterns, and provides crucial insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 reveal">
              <Button 
                size="lg" 
                className="bg-memotag-primary hover:bg-memotag-accent text-white px-8 group relative overflow-hidden"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Join Waitlist</span>
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-memotag-accent to-purple-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-memotag-primary text-memotag-primary hover:bg-memotag-primary/10 group"
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="flex items-center gap-1.5">
                  Learn How It Works
                  <Activity size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
          <div className={cn(
  "w-full aspect-square rounded-full bg-gradient-to-br from-memotag-primary/20 to-memotag-accent/5",
  "flex items-center justify-center relative overflow-hidden reveal-zoom",
  "hidden lg:block"
)}>
              <div className="absolute inset-4 rounded-full bg-white/50 backdrop-blur-sm shadow-custom flex items-center justify-center">
               
                <div className="relative w-3/4 h-3/4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BrainCircuit
                      className="w-full h-full text-memotag-primary animate-pulse"
                      strokeWidth={1}
                    />
                  </div>
                  
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-memotag-accent rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-memotag-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-memotag-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                  
                  <div className="absolute top-1/4 left-1/4 w-28 h-[1px] bg-gradient-to-r from-memotag-primary to-transparent rotate-45 origin-left"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-24 h-[1px] bg-gradient-to-l from-memotag-accent to-transparent -rotate-45 origin-right"></div>
                  <div className="absolute top-1/3 right-1/4 w-20 h-[1px] bg-gradient-to-l from-memotag-primary to-transparent rotate-12 origin-right"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-16 h-[1px] bg-gradient-to-r from-purple-500 to-transparent -rotate-12 origin-left"></div>
                </div>
              </div>
              
              <div className="absolute top-1/4 -right-4 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full float"></div>
              <div className="absolute -bottom-2 left-1/3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full float-slow"></div>
              <div className="absolute top-1/2 -left-3 w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-memotag-accent/20 backdrop-blur-sm rounded-full float-slow"></div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white py-3 px-6 rounded-full shadow-lg flex items-center gap-3 shimmer">
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
              <span className="text-sm font-medium">Memory Care Technology</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-center reveal">
          {['AI-Powered', 'Smart Device', 'Mobile App', 'Data Analysis', '24/7 Monitoring', 'Privacy First'].map((text, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-2">
                <div className="w-6 h-6 text-memotag-primary">
                  <DoodleElements 
                    type={i % 5 === 0 ? 'brain' : i % 5 === 1 ? 'wave' : i % 5 === 2 ? 'dots' : i % 5 === 3 ? 'zigzag' : 'spiral'} 
                    color="currentColor"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <span className="text-xs font-medium text-memotag-text/70">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
