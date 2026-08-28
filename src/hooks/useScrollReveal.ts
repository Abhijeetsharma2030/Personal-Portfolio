import { useEffect, useRef } from 'react';

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial reveal class
    element.classList.add('reveal-init');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (options.delay) {
            setTimeout(() => {
              element.classList.add('reveal-visible');
            }, options.delay);
          } else {
            element.classList.add('reveal-visible');
          }
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.delay, options.rootMargin, options.threshold]);

  return elementRef;
};

