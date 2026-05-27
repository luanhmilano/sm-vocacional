import { useEffect, useState } from "react";

export function useIntersectionObserver(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const triggerPoint = window.innerHeight * 0.35;

    const getActiveSection = () => {
      let current = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerPoint) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", getActiveSection, { passive: true });
    getActiveSection();

    return () => {
      window.removeEventListener("scroll", getActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
