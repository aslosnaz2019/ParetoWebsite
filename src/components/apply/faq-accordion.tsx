"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

/**
 * Single-open FAQ accordion. Uses the CSS grid 0fr/1fr trick so the expand
 * animation is pure CSS (no JS height measurement), and gates all motion
 * behind motion-safe so it no-ops for reduced-motion visitors.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-8 divide-y divide-am-text/10 border-t border-am-text/10">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-serif text-[16px] text-am-text sm:text-[17px]">
                {item.q}
              </span>
              <span
                aria-hidden="true"
                className={`shrink-0 font-sans text-[20px] leading-none text-am-accent motion-safe:transition-transform motion-safe:duration-300 ${
                  open ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              className={`grid motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-column pb-5 font-serif text-[15px] leading-relaxed text-am-text/75">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
