import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Preloader: React.FC<PreloaderProps> = ({ 
  loading: externalLoading,
  size = 'large'
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (externalLoading !== undefined) {
      setLoading(externalLoading);
      return;
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [externalLoading]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 0,
      transition: { 
        duration: 0.8,
        when: "afterChildren" 
      }
    }
  };

  const loaderVariants = {
    hidden: { scale: 1 },
    visible: { 
      scale: 0,
      transition: { 
        duration: 0.6,
        ease: "easeInOut" 
      }
    }
  };

  const doodlePathVariants = {
    initial: { pathLength: 0 },
    animate: { 
      pathLength: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const getSizeStyles = () => {
    switch(size) {
      case 'small':
        return {
          container: 'fixed inset-0 bg-white bg-opacity-80 z-30 flex items-center justify-center',
          width: 'w-12 h-12',
          marginBottom: 'mb-2',
          titleClass: 'text-sm',
          subtitleClass: 'text-xs'
        };
      case 'medium':
        return {
          container: 'fixed inset-0 bg-white bg-opacity-90 z-40 flex items-center justify-center',
          width: 'w-16 h-16',
          marginBottom: 'mb-3',
          titleClass: 'text-base',
          subtitleClass: 'text-sm'
        };
      case 'large':
      default:
        return {
          container: 'fixed inset-0 bg-white z-[100] flex items-center justify-center',
          width: 'w-24 h-24',
          marginBottom: 'mb-4',
          titleClass: 'text-xl',
          subtitleClass: 'text-sm'
        };
    }
  };

  const sizeStyles = getSizeStyles();

  if (!loading) return null;

  return (
    <motion.div 
      className={sizeStyles.container}
      variants={containerVariants}
      initial="hidden"
      animate={loading ? "hidden" : "visible"}
      exit="visible"
    >
      <motion.div 
        className="flex flex-col items-center"
        variants={loaderVariants}
      >
        <div className={`${sizeStyles.width} relative ${sizeStyles.marginBottom}`}>
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
          >
            <motion.path
              d="M50 10C27.91 10 10 27.91 10 50C10 72.09 27.91 90 50 90C72.09 90 90 72.09 90 50C90 38.95 85.36 28.86 77.78 21.22C70.21 13.57 60.12 10 50 10Z"
              stroke="#9b87f5"
              strokeWidth="4"
              strokeLinecap="round"
              variants={doodlePathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M30 40C35 35 45 35 50 40C55 45 65 45 70 40"
              stroke="#7E69AB"
              strokeWidth="3"
              strokeLinecap="round"
              variants={doodlePathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              d="M30 60C35 55 45 55 50 60C55 65 65 65 70 60"
              stroke="#6E59A5"
              strokeWidth="3"
              strokeLinecap="round"
              variants={doodlePathVariants}
              initial="initial"
              animate="animate"
            />
          </svg>
        </div>
        <h2 className={`font-bold text-memotag-primary gradient-text ${sizeStyles.titleClass}`}>MemoTag</h2>
        <p className={`text-memotag-text/60 mt-2 ${sizeStyles.subtitleClass}`}>Loading amazing experiences...</p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
