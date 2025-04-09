
import React from 'react';
import { 
  Brain, 
  Smartphone, 
  BarChart3, 
  Shield, 
  Clock3, 
  MessageSquare,
  Sparkles,
  Lightbulb,
  Bot,
  Gauge,
  Activity
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import DoodleElements from './DoodleElements';

const features = [
  {
    icon: <Brain className="w-12 h-12 text-memotag-primary" />,
    title: 'AI Memory Assistant',
    description: 'Personalized memory prompts and cognitive exercises tailored to each person\'s needs and interests.'
  },
  {
    icon: <Smartphone className="w-12 h-12 text-memotag-primary" />,
    title: 'Smart Tracking Device',
    description: 'Wearable hardware that monitors location, activity, and provides emergency assistance when needed.'
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-memotag-primary" />,
    title: 'Cognitive Pattern Analysis',
    description: 'Advanced algorithms track changes in memory and cognition to detect early signs of decline.'
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-memotag-primary" />,
    title: 'Caregiver Support',
    description: 'Tools and resources for family and professional caregivers to improve quality of care.'
  },
  {
    icon: <Shield className="w-12 h-12 text-memotag-primary" />,
    title: 'Privacy-Focused Design',
    description: 'Strong data protection and user consent controls built into every aspect of the platform.'
  },
  {
    icon: <Clock3 className="w-12 h-12 text-memotag-primary" />,
    title: 'Routine Management',
    description: 'Smart reminders and schedule assistance to maintain daily structure and independence.'
  }
];

const steps = [
  {
    number: '01',
    title: 'Smart Assessment',
    description: 'Initial evaluation of memory and cognitive function to establish personalized care baseline.',
    icon: <Gauge className="w-6 h-6 text-memotag-primary" />
  },
  {
    number: '02',
    title: 'Custom AI Model',
    description: 'Machine learning creates a unique cognitive profile to tailor memory support interventions.',
    icon: <Bot className="w-6 h-6 text-memotag-primary" />
  },
  {
    number: '03',
    title: 'Continuous Monitoring',
    description: 'Ongoing tracking of memory patterns, activities, and health indicators via the MemoTag device.',
    icon: <Activity className="w-6 h-6 text-memotag-primary" />
  },
  {
    number: '04',
    title: 'Adaptive Memory Support',
    description: 'AI adjusts memory cues and cognitive exercises based on performance and needs.',
    icon: <Lightbulb className="w-6 h-6 text-memotag-primary" />
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute top-10 left-10 opacity-20 doodle-float">
        <DoodleElements type="brain" width={120} height={120} color="#9b87f5" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 doodle-float float-delay-2">
        <DoodleElements type="spiral" width={100} height={100} color="#7E69AB" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-10 doodle-float float-delay-1">
        <DoodleElements type="dots" width={150} height={150} color="#8B5CF6" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-zoom relative inline-block">
            How <span className="gradient-text">MemoTag</span> Works
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-memotag-primary to-memotag-accent transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto reveal">
            MemoTag combines AI technology with wearable devices to provide comprehensive 
            memory support and cognitive health monitoring.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <span className="inline-block px-4 py-1.5 rounded-full bg-memotag-primary/10 text-memotag-primary font-medium text-sm mb-3 reveal-fade">OUR SOLUTION</span>
          </div>
        <div className="mb-24">
          <div className="relative">
            <div className="hidden md:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-memotag-primary/80 to-memotag-accent/80"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-memotag-primary to-memotag-accent flex items-center justify-center mb-6 z-10 shadow-lg">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-semibold text-xl text-memotag-primary">
                      {step.number}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-full border border-gray-100">
                    <div className="flex items-center justify-center mb-4 bg-memotag-primary/10 w-12 h-12 rounded-full mx-auto">
                      {step.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12 reveal">
            <h3 className="text-2xl font-bold inline-flex items-center gap-2">
              <Sparkles className="text-memotag-primary" size={24} />
              <span>Key Features</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} 
                className={cn(
                  "bg-white rounded-xl p-6 border-2 border-dashed border-memotag-primary/30 relative",
                  "transform transition-all duration-500 hover:-translate-y-2",
                  "reveal-fade overflow-visible"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 -right-4 w-8 h-8 opacity-70">
                  <DoodleElements type="spiral" width={32} height={32} color="#6366F1" className="doodle-float" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 opacity-70">
                  <DoodleElements type="dots" width={24} height={24} color="#4F46E5" className="doodle-float float-delay-2" />
                </div>
                
                <div className="bg-gradient-to-br from-memotag-primary/10 to-memotag-accent/5 rounded-lg p-4 mb-4 flex items-center justify-center w-16 h-16">
                  {feature.icon}
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
                
                <svg className="mt-4 w-3/4 mx-auto" height="6" viewBox="0 0 100 6" fill="none">
                  <path d="M0,3 Q25,0 50,3 T100,3" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" className="doodle-draw" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-20 reveal relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <DoodleElements type="dots" width="100%" height="100%" color="#000" />
          </div>
          
          <div className="absolute top-10 right-10 w-16 h-16 opacity-30">
            <DoodleElements type="brain" width={64} height={64} color="#6366F1" className="doodle-float" />
          </div>
          <div className="absolute bottom-10 left-10 w-12 h-12 opacity-20">
            <DoodleElements type="wave" width={48} height={48} color="#4F46E5" className="doodle-float float-delay-3" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-memotag-accent/10 text-memotag-accent font-medium text-sm mb-3">CORE TECHNOLOGY</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Personalized Memory Care</h3>
              <p className="text-gray-600 mb-6">
                MemoTag learns from each interaction, adapting support to the individual's evolving needs. 
                Our approach combines cutting-edge AI with years of research in cognitive science.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Advanced ML Algorithms', '24/7 Monitoring', 'Early Detection'].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 relative overflow-hidden rounded-full text-sm text-memotag-primary bg-memotag-primary/10 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:bg-[length:250%_100%] before:animate-[shine_3s_ease-in-out_infinite] before:opacity-60 before:blur-[1px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <svg className="w-64 h-64 md:w-72 md:h-72" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#e5deff" strokeWidth="4" strokeDasharray="5,5" className="animate-spin-slow" style={{ animationDuration: '20s' }} />
                  
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#d6bcfa" strokeWidth="3" strokeDasharray="3,3" className="animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                  
                  <circle cx="100" cy="100" r="45" fill="#f8f7ff" stroke="#9b87f5" strokeWidth="2" />
                  
                  <g transform="translate(82, 85) scale(0.05, 0.05)">
                    <path
                      d="M475.9 224.33c-3.31-9.79-13.62-15.42-23.41-12.11a19.761 19.761 0 0 0-12.11 23.41c3.49 11.17 5.44 22.74 5.44 34.48 0 68.83-55.96 124.79-124.79 124.79S196.23 338.94 196.23 270.11c0-68.11 55.96-123.58 124.07-123.58 12.57 0 25.05 1.86 37.06 5.53 9.87 2.99 20.18-2.51 23.15-12.29 2.99-9.78-2.51-20.18-12.29-23.15a164.738 164.738 0 0 0-47.92-7.15c-52.11 0-100.84 24.53-132.25 67.11-8.69-8.27-20.47-13.35-33.4-13.35-26.5 0-48.04 21.54-48.04 48.04 0 14.98 6.88 28.33 17.63 37.15-2.18 9.61-3.3 19.54-3.3 29.69 0 10.26 1.18 20.27 3.42 29.97-10.91 8.84-17.89 22.28-17.89 37.38 0 26.5 21.54 48.04 48.04 48.04 6.66 0 13.01-1.36 18.79-3.82 8.34 10.75 18.25 20.08 29.37 27.67V422.4c0 10.26 8.33 18.59 18.59 18.59h223.45c10.26 0 18.59-8.33 18.59-18.59v-23.4c11.11-7.59 21.02-16.91 29.37-27.67 5.78 2.46 12.13 3.82 18.79 3.82 26.5 0 48.04-21.54 48.04-48.04 0-14.98-6.88-28.33-17.63-37.15 2.18-9.61 3.3-19.54 3.3-29.69 0-10.26-1.18-20.27-3.42-29.97 10.91-8.84 17.89-22.28 17.89-37.38 0-26.5-21.54-48.04-48.04-48.04-6.66 0-13.01 1.36-18.79 3.82-8.81-11.37-19.3-21.07-31.04-28.74zM168.04 158.22c5.98 0 11.53 1.81 16.15 4.9-8.68 15.3-14.97 32.01-18.36 49.73a11.254 11.254 0 0 0-4.16-.8c-6.17 0-11.18 5.01-11.18 11.18s5.01 11.18 11.18 11.18c.39 0 .77-.02 1.14-.06a167.03 167.03 0 0 0-2.35 27.76c0 9.66.83 19.11 2.42 28.3-.39-.02-.78-.04-1.18-.04-6.17 0-11.18 5.01-11.18 11.18s5.01 11.18 11.18 11.18c1.46 0 2.85-.28 4.13-.78 3.43 17.64 9.73 34.27 18.39 49.49-4.62 3.09-10.17 4.9-16.15 4.9-15.97 0-28.96-13-28.96-28.96 0-9.05 4.17-17.42 11.07-22.9 3.08-2.41 4.62-6.21 4.06-10.08-2.36-10.47-3.56-21.29-3.56-32.18 0-10.77 1.16-21.49 3.46-31.84.57-3.85-1-7.63-4.08-10.04-6.8-5.47-10.9-13.78-10.9-22.77 0-16.5 13.43-29.93 29.93-29.93h-.04zm166.78 263.48v9.59h-148.5v-9.59c23.06 12.76 49.51 20.03 77.63 19.93 28.03.1 53.62-7.17 70.87-19.93zm119.52-95.59c0 15.97-12.99 28.96-28.96 28.96-5.98 0-11.53-1.81-16.15-4.9 8.68-15.3 14.97-32.01 18.36-49.73a11.254 11.254 0 0 0 4.16.8c6.17 0 11.18-5.01 11.18-11.18s-5.01-11.18-11.18-11.18c-.39 0-.77.02-1.14.06a167.03 167.03 0 0 0 2.35-27.76c0-9.66-.83-19.11-2.42-28.3.39.02.78.04 1.18.04 6.17 0 11.18-5.01 11.18-11.18s-5.01-11.18-11.18-11.18c-1.46 0-2.85.28-4.13.78-3.43-17.64-9.73-34.27-18.39-49.49 4.62-3.09 10.17-4.9 16.15-4.9 15.97 0 28.96 13 28.96 28.96 0 9.05-4.17 17.42-11.07 22.9-3.08 2.41-4.62 6.21-4.06 10.08 2.36 10.47 3.56 21.29 3.56 32.18 0 10.77-1.16 21.49-3.46 31.84-.57 3.85 1 7.63 4.08 10.04 6.8 5.47 10.9 13.78 10.9 22.77l.08.24z"
                      fill="#9b87f5"
                      className="draw-path"
                    />
                  </g>
                  
                  <circle cx="160" cy="100" r="6" fill="#7E69AB" className="animate-pulse" />
                  <circle cx="40" cy="100" r="6" fill="#7E69AB" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <circle cx="100" cy="160" r="6" fill="#7E69AB" className="animate-pulse" style={{ animationDelay: '1s' }} />
                  <circle cx="100" cy="40" r="6" fill="#7E69AB" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  
                  <path d="M100,55 L100,85" stroke="#d6bcfa" strokeWidth="2" strokeLinecap="round" strokeDasharray="2,2" />
<path d="M100,145 L100,115" stroke="#d6bcfa" strokeWidth="2" strokeLinecap="round" strokeDasharray="2,2" />
<path d="M55,100 L85,100" stroke="#d6bcfa" strokeWidth="2" strokeLinecap="round" strokeDasharray="2,2" />
<path d="M145,100 L115,100" stroke="#d6bcfa" strokeWidth="2" strokeLinecap="round" strokeDasharray="2,2" />

                </svg>
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-memotag-primary px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow border border-memotag-primary/30">
                  <span className="flex items-center gap-1">
                    <Bot size={14} />
                    AI Core
                  </span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-memotag-primary px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow border border-memotag-primary/30">
                  <span className="flex items-center gap-1">
                    <BarChart3 size={14} />
                    Analytics
                  </span>
                </div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white text-memotag-primary px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow border border-memotag-primary/30">
                  <span className="flex items-center gap-1">
                    <Lightbulb size={14} />
                    Support
                  </span>
                </div>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white text-memotag-primary px-3 py-1 rounded-full text-xs font-medium shadow-md hover:shadow-lg transition-shadow border border-memotag-primary/30">
                  <span className="flex items-center gap-1">
                    <Clock3 size={14} />
                    Assistance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <div className="text-center mb-10 reveal">
            <h3 className="text-2xl font-bold">Technology Breakdown</h3>
            <p className="text-gray-600 mt-2">Our integrated system works together seamlessly</p>
            
            <div className="w-20 h-12 mx-auto mt-4">
              <svg viewBox="0 0 100 60" className="w-full h-full">
                <path d="M50,5 C60,20 40,35 50,50 L40,45 L50,60 L60,45 L50,50" stroke="#9b87f5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="doodle-draw" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 reveal-left border-2 border-dashed border-memotag-primary/20 relative">
              <div className="absolute -top-3 -right-3 opacity-60">
                <DoodleElements type="dots" width={30} height={30} color="#7E69AB" className="doodle-float" />
              </div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-memotag-primary/10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" x2="22" y1="20" y2="20"></line>
                </svg>
              </div>
              <h4 className="font-bold text-xl mb-4">Wearable Device</h4>
              <ul className="space-y-3">
                {['GPS location tracking', 'Biometric monitoring', 'Voice assistant integration', 'Emergency alert system'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-memotag-primary/20 p-1 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 reveal transform translate-y-4 md:translate-y-0 border-2 border-dashed border-memotag-primary/20 relative">
              <div className="absolute -bottom-3 -left-3 opacity-60">
                <DoodleElements type="spiral" width={30} height={30} color="#6366F1" className="doodle-float float-delay-2" />
              </div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-memotag-primary/10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                  <path d="M12 2a4 4 0 0 0-4 4v12a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z"></path>
                  <path d="M16 8h2a2 2 0 1 1 0 4h-2"></path>
                  <path d="M8 8H6a2 2 0 1 0 0 4h2"></path>
                  <path d="M12 18v4"></path>
                </svg>
              </div>
              <h4 className="font-bold text-xl mb-4">AI Platform</h4>
              <ul className="space-y-3">
                {['Neural network prediction models', 'Pattern recognition algorithms', 'Natural language processing', 'Adaptive learning system'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-memotag-primary/20 p-1 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 reveal-right border-2 border-dashed border-memotag-primary/20 relative">
              <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 opacity-60">
                <DoodleElements type="wave" width={30} height={30} color="#4F46E5" className="doodle-float float-delay-1" />
              </div>
              
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-memotag-primary/10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M16 14h.01"></path>
                </svg>
              </div>
              <h4 className="font-bold text-xl mb-4">Mobile App</h4>
              <ul className="space-y-3">
                {['Caregiver dashboard', 'Real-time notifications', 'Cognitive exercise library', 'Progress reports & insights'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="rounded-full bg-memotag-primary/20 p-1 mr-3 mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
