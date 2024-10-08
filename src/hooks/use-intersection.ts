import { useEffect, useRef, useState, type RefObject } from "react";

interface Opts {
  height?: number;
}
export const useIntersectionObserver = (
  opts: Opts = {},
): [boolean, RefObject<HTMLElement>] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(!entry.isIntersecting);
        });
      },
      {
        threshold: 1.0,
        rootMargin: `-${opts.height}px 0px 0px 0px`,
        ...opts,
      },
    );
    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  });

  return [isIntersecting, targetRef];
};
