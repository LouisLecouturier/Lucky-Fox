import { useState, useEffect } from "react";

const useIntersection = (elements, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    elements.forEach((element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { rootMargin }
      );

      element && observer.observe(element);

      return () => observer.unobserve(element);
    });
  }, []);

  return isVisible;
};
