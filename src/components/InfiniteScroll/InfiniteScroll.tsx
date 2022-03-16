import React, { useEffect, useRef } from "react";

interface UIInfiniteScrollProps {
  fetchMore: () => void;
}

export function UIInfiniteScroll({ fetchMore }: UIInfiniteScrollProps) {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        fetchMore();
      }
    }, options);

    observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={containerRef} />;
}
