
import { MotionProps } from 'framer-motion';

// Animation constants
export const floatAnimation = {
  style: {
    animation: 'float 6s ease-in-out infinite',
  }
};

export const pulseSlow = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
  },
  transition: { 
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" as const,
  }
};

export const shineEffect = {
  initial: { x: '-100%' },
  animate: { x: '200%' },
  transition: { 
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 3,
  }
};

/**
 * Initializes animation observers for elements with animation classes
 * @returns A cleanup function to disconnect observers
 */
export const initAnimationObservers = () => {
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  // Select elements with the animate-on-scroll class and observe them
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach((el) => fadeObserver.observe(el));

  // Cleanup function
  return () => {
    fadeObserver.disconnect();
  };
};
