"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Intersection Observer hook for scroll-triggered animations.
 * Adds "visible" class when element enters the viewport.
 */
export function useReveal(): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A direct link to a section should never leave its content hidden while
    // the browser settles its initial hash scroll position.
    if (window.location.hash) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Simple classname joiner.
 */
export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
