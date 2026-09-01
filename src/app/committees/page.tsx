import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageNumber, Tagline } from "@/components/brand/eyebrow";
import { committees } from "@/lib/committees";

export const metadata: Metadata = {
  title: "Committees — Pareto Investments",
  description:
    "Five committees, one society: Asset Management, Private Equity, Venture & Growth, Events, and Marketing.",
};

const accentClasses: Record<string, string> = {
  am: "text-am-accent",
  pe: "text-pe-gold",
  vc: "text-vc-accent",
};

export default function CommitteesPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">Pareto Investments</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        Finance doesn&apos;t have to be boring.
      </h1>

      {/* Introduction */}
      <div className="mt-16 max-w-column space-y-6 font-serif text-[17px] leading-relaxed text-am-text/80">
        <p>
          Most investment communities feel the same — formal, distant, full of jargon.
          We built Pareto Investment Society to do things differently.
        </p>
        <p>
          Pareto is a community for people curious about markets, investing, companies,
          strategy — the way money actually moves the world. Not textbook finance. Not
          headlines. Real discussions, sharp research, bold ideas, and a sharper way to
          learn.
        </p>
        <p>Our focus is simple: understand what matters most.</p>
        <p>
          The name comes from the Pareto Principle, the 80/20 rule — the idea that a
          small share of actions drives a large share of outcomes.
        </p>
        <p>
          For us, that&apos;s how we invest. Not every decision carries the same
          weight. Not every idea deserves the same attention. Good investing comes down
          to focus, research, discipline — and knowing which questions are worth
          asking.
        </p>
        <p>
          Pareto Investment Society is built around that mindset. We help students
          learn investing through practical research, investment theses, and virtual
          portfolios — understanding not just what moves markets, but why some
          decisions matter more than others.
        </p>
        <p>
          Join one of our five committees — Asset Management, Private Equity, Venture
          &amp; Growth, Events, or Marketing — and take on real responsibility
          throughout the year.
        </p>
        <p>
          Explore the committees below, see what each one does, and apply for the one
          that fits you best.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          href="/apply"
          className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-colors hover:bg-am-text hover:text-am-bg"
        >
          Applications Are Rolling
        </Link>
        <a
          href="mailto:paretoinvestment1@gmail.com"
          className="font-sans text-[12px] tracking-label uppercase text-am-accent hover:text-am-text"
        >
          Questions? paretoinvestment1@gmail.com
        </a>
      </div>

      {/* Committees */}
      <div className="mt-24 divide-y divide-am-text/10 border-t border-am-text/10">
        {committees.map((committee) => (
          <section key={committee.id} className="grid grid-cols-1 gap-8 py-16 md:grid-cols-[240px_1fr]">
            <div>
              {committee.number ? (
                <PageNumber n={committee.number} className="text-am-text/40" />
              ) : (
                <Tagline className="text-am-text/40">Committee</Tagline>
              )}
              <h2 className="mt-3 font-serif text-[26px] leading-tight text-am-text">
                {committee.name}
              </h2>
              {committee.href && (
                <Link
                  href={committee.href}
                  className={`mt-4 inline-block font-sans text-[12px] tracking-label uppercase ${
                    committee.palette ? accentClasses[committee.palette] : "text-am-accent"
                  }`}
                >
                  {committee.linkLabel ?? "Learn more"} →
                </Link>
              )}
            </div>

            <div className="max-w-column">
              <p className="font-serif text-[16px] leading-relaxed text-am-text/75">
                {committee.description}
              </p>

              <Tagline className="mt-8 text-am-text/45">
                Responsibility — what you&apos;ll own
              </Tagline>
              <ul className="mt-4 space-y-3 border-l border-am-text/10 pl-6">
                {committee.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="font-serif text-[15px] leading-relaxed text-am-text/65"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
