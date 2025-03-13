
export const fadeIn = (delay = 0, duration = 0.3) => ({
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeInLeft = (delay = 0, duration = 0.3) => ({
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const fadeInRight = (delay = 0, duration = 0.3) => ({
  hidden: { 
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const scaleUp = (delay = 0, duration = 0.3) => ({
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren: number, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// New subtle pulse animation
export const pulseSlow = {
  initial: { 
    opacity: 0.7,
    scale: 0.97
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Utility function to initialize animation observers
export const initAnimationObservers = () => {
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }
  
  return () => {};
};
