"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function segmentText(text, segmentBy) {
  if (segmentBy === "words") {
    return text.split(/(\s+)/);
  }

  return Array.from(text);
}

export default function SplitText({
  text,
  as: Tag = "span",
  className = "",
  segmentBy = "chars",
  delay = 45,
  duration = 650,
  blur = true,
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const segments = useMemo(() => segmentText(text, segmentBy), [segmentBy, text]);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(node);
          }
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`split-text ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{
        "--split-delay": `${delay}ms`,
        "--split-duration": `${duration}ms`,
      }}
      aria-label={text}
    >
      {segments.map((segment, index) => {
        if (segment === " ") {
          return (
            <span
              key={`${segment}-${index}`}
              className="split-unit split-space"
              aria-hidden="true"
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={`${segment}-${index}`}
            className={`split-unit ${blur ? "split-blur" : ""}`}
            style={{ "--split-index": index }}
            aria-hidden="true"
          >
            {segment}
          </span>
        );
      })}
    </Tag>
  );
}
