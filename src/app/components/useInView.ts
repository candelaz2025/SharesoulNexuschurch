import { useEffect, useRef, useState } from "react";

export function useInView(options?: { margin?: string; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once) observer.unobserve(el);
        } else if (!options?.once) {
          setInView(false);
        }
      },
      { rootMargin: options?.margin ?? "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.margin, options?.once]);

  return [ref, inView] as const;
}
