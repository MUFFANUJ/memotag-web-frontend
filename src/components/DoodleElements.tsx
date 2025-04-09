
import React from 'react';

interface DoodleProps {
  className?: string;
  type: 'brain' | 'wave' | 'dots' | 'zigzag' | 'spiral' | 'star' | 'heart' | 'cloud';
  color?: string;
  width?: string | number;
  height?: string | number;
  animated?: boolean;
}

const DoodleElements: React.FC<DoodleProps> = ({ 
  className = '', 
  type, 
  color = 'currentColor',
  width = 100,
  height = 100,
  animated = true
}) => {
  
  const animationClass = animated ? 'draw-path' : '';
  const dotAnimationClass = animated ? 'doodle-pulse' : '';
  
  const getDoodlePath = () => {
    switch (type) {
      case 'brain':
        return (
          <path 
            d="M20,70 Q30,60 25,50 Q20,40 30,30 Q45,15 60,30 Q70,40 65,50 Q60,60 70,70 Q60,80 50,75 Q40,80 30,70"
            stroke={color}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className={animationClass}
          />
        );
      case 'wave':
        return (
          <path 
            d="M10,50 Q25,30 40,50 Q55,70 70,50 Q85,30 100,50"
            stroke={color}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className={animationClass}
          />
        );
      case 'dots':
        return (
          <>
            <circle cx="20" cy="20" r="3" fill={color} className={dotAnimationClass} />
            <circle cx="40" cy="30" r="4" fill={color} className={dotAnimationClass} style={{animationDelay: "0.5s"}} />
            <circle cx="60" cy="20" r="5" fill={color} className={dotAnimationClass} style={{animationDelay: "0.2s"}} />
            <circle cx="80" cy="30" r="3" fill={color} className={dotAnimationClass} style={{animationDelay: "0.7s"}} />
            <circle cx="30" cy="50" r="5" fill={color} className={dotAnimationClass} style={{animationDelay: "0.3s"}} />
            <circle cx="50" cy="60" r="3" fill={color} className={dotAnimationClass} style={{animationDelay: "0.6s"}} />
            <circle cx="70" cy="50" r="4" fill={color} className={dotAnimationClass} style={{animationDelay: "0.4s"}} />
            <circle cx="20" cy="80" r="5" fill={color} className={dotAnimationClass} style={{animationDelay: "0.8s"}} />
            <circle cx="40" cy="70" r="3" fill={color} className={dotAnimationClass} style={{animationDelay: "0.2s"}} />
            <circle cx="60" cy="80" r="4" fill={color} className={dotAnimationClass} style={{animationDelay: "0.5s"}} />
            <circle cx="80" cy="70" r="5" fill={color} className={dotAnimationClass} style={{animationDelay: "0.3s"}} />
          </>
        );
      case 'zigzag':
        return (
          <path 
            d="M10,30 L30,70 L50,30 L70,70 L90,30"
            stroke={color}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animationClass}
          />
        );
      case 'spiral':
        return (
          <path 
            d="M50,50 C60,40 70,50 60,60 C50,70 40,60 50,50"
            stroke={color}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className={animationClass}
          />
        );
      case 'star':
        return (
          <path
            d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z"
            stroke={color}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animationClass}
          />
        );
      case 'heart':
        return (
          <path
            d="M50,80 C80,60 95,30 50,15 C5,30 20,60 50,80 Z"
            stroke={color}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className={animationClass}
          />
        );
      case 'cloud':
        return (
          <path
            d="M25,60 C15,60 10,50 15,40 C20,30 35,30 40,35 C40,25 50,15 65,20 C80,25 85,40 80,50 C90,50 90,65 80,70 C75,75 65,75 60,70 C55,80 40,80 30,70 C20,70 15,65 25,60 Z"
            stroke={color}
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            className={animationClass}
          />
        );
      default:
        return null;
    }
  };

  return (
    <svg 
      className={className}
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {getDoodlePath()}
    </svg>
  );
};

export default DoodleElements;
