import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { PageWatermark } from "@/components/brand/page-watermark";

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
    <main>
      <section className="relative overflow-hidden py-20 md:pt-28">
        <PageWatermark />

        <div className="relative z-10 mx-edge">
          <Eyebrow className="text-am-text/66">What We Read This Week</Eyebrow>
          <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
            Updated every Monday.
          </h1>
        </div>
      </section>

      <div className="mx-edge pb-24 md:pb-28">
        <div className="mt-8 grid grid-cols-1 gap-12 md:mt-0 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section.key}>
              <Tagline className="text-am-text/66">{section.label}</Tagline>
              <p className="mt-6 font-serif text-[15px] leading-relaxed text-am-text/72">
                This list fills in once the coverage teams are formed in September — each
                item flagged by a team member, with a one-sentence note on why it
                mattered.
              </p>
            </div>
          ))}
        </div>

        <p className="mt-20 max-w-column font-sans text-[12px] tracking-label uppercase text-am-text/60">
          RSS feed available once the first entries publish.
        </p>
      </div>
    </main>
  );
}
