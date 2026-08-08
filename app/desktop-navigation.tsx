"use client";

import type { MouseEvent } from "react";

type NavItem = {
  href: string;
  label: string;
  restartEvent?: string;
};

export function DesktopNavigation({
  items,
  label,
}: {
  items: NavItem[];
  label: string;
}) {
  const follow = (event: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.restartEvent) {
      window.dispatchEvent(new Event(item.restartEvent));
    }

    if (!item.href.startsWith("#") || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const target = document.querySelector<HTMLElement>(item.href);
    if (!target) return;

    event.preventDefault();
    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.history.pushState(null, "", item.href);
    window.scrollTo({ top: Math.max(0, targetTop), behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <nav className="nav" aria-label={label}>
      {items.map((item) => (
        <a href={item.href} key={item.href} onClick={(event) => follow(event, item)}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
