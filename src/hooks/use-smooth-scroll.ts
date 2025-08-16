import { useCallback } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: 'easeInOut' | 'easeIn' | 'easeOut' | 'linear';
  offset?: number;
}

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((
    targetId: string, 
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 1000,
      easing = 'easeInOut',
      offset = 0
    } = options;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      console.warn(`Element with id "${targetId}" not found`);
      return;
    }

    const targetPosition = targetElement.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    // Easing functions
    const easingFunctions = {
      easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeIn: (t: number) => t * t,
      easeOut: (t: number) => t * (2 - t),
      linear: (t: number) => t
    };

    const ease = easingFunctions[easing];

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = ease(progress);
      const newPosition = startPosition + distance * easedProgress;
      
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const scrollToTop = useCallback((options: SmoothScrollOptions = {}) => {
    const {
      duration = 800,
      easing = 'easeOut'
    } = options;

    const startPosition = window.pageYOffset;
    let startTime: number | null = null;

    const easingFunctions = {
      easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeIn: (t: number) => t * t,
      easeOut: (t: number) => t * (2 - t),
      linear: (t: number) => t
    };

    const ease = easingFunctions[easing];

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = ease(progress);
      const newPosition = startPosition * (1 - easedProgress);
      
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  const scrollToElement = useCallback((
    element: HTMLElement, 
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 1000,
      easing = 'easeInOut',
      offset = 0
    } = options;

    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easingFunctions = {
      easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
      easeIn: (t: number) => t * t,
      easeOut: (t: number) => t * (2 - t),
      linear: (t: number) => t
    };

    const ease = easingFunctions[easing];

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easedProgress = ease(progress);
      const newPosition = startPosition + distance * easedProgress;
      
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return {
    scrollToSection,
    scrollToTop,
    scrollToElement
  };
};
