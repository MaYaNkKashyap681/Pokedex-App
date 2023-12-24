import { useEffect, useRef} from "react";

type UseIntersectionObserverProps = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  { root = null, rootMargin = "0px", threshold = [0.5] }: UseIntersectionObserverProps = {}
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { root, rootMargin, threshold });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      observer.disconnect();
    };
  }, [callback, root, rootMargin, threshold]);

  return targetRef;
};

export default useIntersectionObserver;
