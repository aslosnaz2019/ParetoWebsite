import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";

export const metadata: Metadata = {
  title: "What We Read This Week — Pareto Investments",
  description: "What the research team is reading, updated every Monday.",
};

const sections = [
  { key: "am", label: "Asset Management" },
  { key: "pe", label: "Private Equity" },
  { key: "vc", label: "Venture & Growth" },
];

export default function ReadingPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">What We Read This Week</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        Updated every Monday.
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.key}>
            <Tagline className="text-am-text/50">{section.label}</Tagline>
            <p className="mt-6 font-serif text-[15px] leading-relaxed text-am-text/60">
              This list fills in once the coverage teams are formed in September — each
              item flagged by a team member, with a one-sentence note on why it
              mattered.
            </p>
          </div>
        ))}
      </div>

      <p className="mt-20 max-w-column font-sans text-[12px] tracking-label uppercase text-am-text/40">
        RSS feed available once the first entries publish.
      </p>
    </main>
  );
}
