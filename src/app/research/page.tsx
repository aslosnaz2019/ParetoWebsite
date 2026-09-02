import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";

export const metadata: Metadata = {
  title: "Research — Pareto Investments",
  description: "The quarterly research drop, published every quarter starting December 2026.",
};

export default function ResearchPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/66">Research</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        Empty by design. For now.
      </h1>

      <div className="mt-10 flex gap-6 border-b border-am-text/10 pb-4">
        {["All", "Asset Management", "Private Equity", "Venture & Growth"].map((f) => (
          <span
            key={f}
            className="font-sans text-[12px] tracking-label uppercase text-am-text/60"
          >
            {f}
          </span>
        ))}
      </div>

      <p className="mt-16 max-w-column font-serif text-[18px] leading-relaxed text-am-text/78">
        The first quarterly drop publishes December 2026. Until then, this surface is
        empty by design.
      </p>

      <div className="mt-6">
        <Tagline className="text-am-accent">
          Full drop available as a PDF alongside the web reader, from December.
        </Tagline>
      </div>
    </main>
  );
}
