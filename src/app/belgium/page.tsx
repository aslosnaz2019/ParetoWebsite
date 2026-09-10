import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { PageWatermark } from "@/components/brand/page-watermark";

export const metadata: Metadata = {
  title: "Belgium — Pareto Investments",
  description:
    "Leuven is next in Pareto's pan-Benelux design. No founding team or opening date yet — register your interest.",
};

const milestones = [
  {
    status: "Now",
    label: "Rotterdam and Eindhoven come first",
    description:
      "The founding chapter is live in Rotterdam, with Eindhoven opening February 2027. Leuven follows once both chapters are running on their own footing.",
  },
  {
    status: "Next",
    label: "A founding team, then a date",
    description:
      "Belgium doesn't have a founding team or an opening date yet — both come before any applications open. Register your interest and you'll hear from us first.",
  },
];

export default function Belgium() {
  return (
    <main>
      {/* Hero — no fixed date, no team yet, so no imagery is promised here either */}
      <section className="relative overflow-hidden py-20 md:pt-28">
        <PageWatermark />

        <div className="relative z-10 mx-edge">
          <Tagline className="text-am-accent">Coming Soon · No Fixed Date</Tagline>
          <Eyebrow className="mt-4 text-am-text/66">Pareto Investments · Belgium</Eyebrow>
          <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
            Leuven is <em className="italic text-am-accent">next</em>.
          </h1>
          <p className="mt-5 max-w-column font-serif text-[16px] leading-relaxed text-am-text/78">
            Pareto&apos;s pan-Benelux design puts Leuven third, after Rotterdam and
            Eindhoven. There&apos;s no founding team and no opening date yet — this page
            exists so you can register your interest ahead of either.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-edge py-20 md:py-28">
        <Tagline className="text-am-text/66">Timeline</Tagline>
        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {milestones.map((milestone) => (
            <div key={milestone.label} className="border-l-2 border-am-accent/40 pl-6">
              <Tagline className="text-am-accent">{milestone.status}</Tagline>
              <h2 className="mt-2 font-serif text-[20px] text-am-text">{milestone.label}</h2>
              <p className="mt-2 max-w-column font-serif text-[15px] leading-relaxed text-am-text/78">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-edge pb-24 md:pb-32">
        <div className="max-w-column border-t border-am-text/10 pt-12">
          <p className="font-serif text-[16px] leading-relaxed text-am-text/82">
            Want to hear when Belgium takes shape?
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:info@paretoinvestment.nl?subject=Belgium%20interest"
              className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-all duration-200 hover:scale-[1.03] hover:bg-am-text hover:text-am-bg active:scale-[0.98]"
            >
              Register Interest ↗
            </a>
            <Link
              href="/"
              className="inline-block px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-accent transition-colors hover:text-am-text"
            >
              ← Back to Pareto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
