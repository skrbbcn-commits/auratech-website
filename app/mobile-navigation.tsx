"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

type NavItem = {
  href: string;
  label: string;
  restartEvent?: string;
};

export function MobileNavigation({ items, label }: { items: NavItem[]; label: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [open]);

  const follow = (event: ReactMouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.restartEvent) {
      window.dispatchEvent(new Event(item.restartEvent));
    }

    if (!item.href.startsWith("#") || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      setOpen(false);
      return;
    }

    const target = document.querySelector<HTMLElement>(item.href);
    if (!target) {
      setOpen(false);
      return;
    }

    event.preventDefault();
    setOpen(false);
    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.history.pushState(null, "", item.href);
    window.scrollTo({ top: Math.max(0, targetTop), behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="mobile-menu" ref={menuRef}>
      <button
        className="mobile-menu-trigger"
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span></span><span></span><span></span>
      </button>
      {open && (
        <nav className="mobile-menu-panel" aria-label={label}>
          {items.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={(event) => follow(event, item)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
