"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedMetricProps = {
  end: number;
  rangeEnd?: number;
  prefix?: string;
  suffix?: string;
  locale: "tr-TR" | "en-US";
  duration?: number;
  restartEvent?: string;
};

export function AnimatedMetric({
  end,
  rangeEnd,
  prefix = "",
  suffix = "",
  locale,
  duration = 1300,
  restartEvent,
}: AnimatedMetricProps) {
  const elementRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState<number | null>(null);

  const formatter = useMemo(
    () => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }),
    [locale],
  );

  const finalText = rangeEnd === undefined
    ? `${prefix}${formatter.format(end)}${suffix}`
    : `${prefix}${formatter.format(end)}–${formatter.format(rangeEnd)}${suffix}`;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    let observer: IntersectionObserver;

    const startAnimation = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      setProgress(0);
      const startedAt = performance.now();

      const tick = (now: number) => {
        const elapsed = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        setProgress(eased);
        if (elapsed < 1) frameRef.current = requestAnimationFrame(tick);
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const observeUntilVisible = () => {
      observer?.disconnect();
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          startAnimation();
        },
        { threshold: 0.3 },
      );
      observer.observe(element);
    };

    const restart = () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      setProgress(0);
      observeUntilVisible();
    };

    observeUntilVisible();
    if (restartEvent) window.addEventListener(restartEvent, restart);

    return () => {
      observer?.disconnect();
      if (restartEvent) window.removeEventListener(restartEvent, restart);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [duration, restartEvent]);

  const visibleProgress = progress ?? 1;
  const current = Math.round(end * visibleProgress);
  const currentRangeEnd = rangeEnd === undefined
    ? undefined
    : Math.round(rangeEnd * visibleProgress);
  const visibleText = currentRangeEnd === undefined
    ? `${prefix}${formatter.format(current)}${suffix}`
    : `${prefix}${formatter.format(current)}–${formatter.format(currentRangeEnd)}${suffix}`;

  return (
    <strong ref={elementRef} aria-label={finalText} suppressHydrationWarning>
      {visibleText}
    </strong>
  );
}
