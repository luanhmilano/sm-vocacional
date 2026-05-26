import { useEffect, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver(
  sectionIds: string[],
  options: UseIntersectionObserverOptions = {}
) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: options.threshold || 0.3,
      root: options.root || null,
      rootMargin: options.rootMargin || "-20% 0px -35% 0px",
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observar todas as seções
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options.threshold, options.root, options.rootMargin]);

  return activeSection;
}
