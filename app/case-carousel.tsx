"use client";

import { useRef } from "react";

type CaseItem = {
  type: string;
  client: string;
  title: string;
  story: string;
  gain: string;
};

export function CaseCarousel({
  items,
  lang,
}: {
  items: CaseItem[];
  lang: "tr" | "en";
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.max(track.clientWidth, 320),
      behavior: "smooth",
    });
  };

  return (
    <div className="case-carousel-shell">
      <div className="case-carousel-actions" aria-label={lang === "en" ? "Project story navigation" : "Proje hikâyesi navigasyonu"}>
        <button type="button" onClick={() => move(-1)} aria-label={lang === "en" ? "Previous stories" : "Önceki hikâyeler"}>
          ←
        </button>
        <button type="button" onClick={() => move(1)} aria-label={lang === "en" ? "Next stories" : "Sonraki hikâyeler"}>
          →
        </button>
      </div>
      <div className="case-grid" ref={trackRef}>
        {items.map((item) => (
          <article className="case-card" key={item.client}>
            <div className="case-topline">
              <span className="case-client">{item.client}</span>
            </div>
            <p className="case-type">{item.type}</p>
            <h3>{item.title}</h3>
            <div className="case-details">
              <p className="case-story">{item.story}</p>
              <p className="case-gain">{item.gain}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
