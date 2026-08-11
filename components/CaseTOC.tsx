"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type TocSection = { id: string; label: string };

const TOP_OFFSET = 120;

export default function CaseTOC({ sections }: { sections: TocSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= TOP_OFFSET) {
          current = el.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  return (
    <nav className="sticky top-24 hidden w-[200px] flex-none self-start lg:block">
      <Link
        href="/#work"
        className="mb-9 inline-block text-[13px] text-ink/45 transition-colors hover:text-ink/70"
      >
        ← All Work
      </Link>
      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`text-[15px] leading-snug transition-colors ${
              activeId === s.id
                ? "font-semibold text-ink"
                : "font-normal text-ink/40 hover:text-ink/70"
            }`}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
