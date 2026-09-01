import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { CoverageTeamsGrid } from "@/components/brand/coverage-teams-grid";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative mx-edge pt-10 pb-24 md:pt-14 md:pb-32">
        <div className="mx-auto mt-24 max-w-column text-center md:mt-32">
          <Eyebrow className="text-am-text/50">Pareto Investments · MMXXVI</Eyebrow>
          <h1 className="mt-6 font-serif text-[40px] leading-[1.1] text-am-text sm:text-[52px]">
            An <em className="not-italic text-am-accent italic">independent</em> student-led
            investment society.
          </h1>
          <p className="mt-6 font-serif text-[17px] leading-relaxed text-am-text/75">
            Capped membership. Published research. Three coverage teams, each running a
            €1M virtual mandate.
          </p>
          <div className="mt-10">
            <Link
              href="/apply"
              className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-colors hover:bg-am-text hover:text-am-bg"
            >
              Applications open August 15
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage teams */}
      <section className="mx-edge py-20 md:py-28">
        <Tagline className="text-am-text/50">Coverage Teams</Tagline>
        <div className="mt-8">
          <CoverageTeamsGrid />
        </div>
      </section>

      {/* Currently reading */}
      <section className="mx-edge py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[240px_1fr]">
          <div>
            <Tagline className="text-am-text/50">This Week</Tagline>
            <h2 className="mt-3 font-serif text-[22px] text-am-text">What we&apos;re reading</h2>
          </div>
          <div className="max-w-column border-l border-am-text/10 pl-8">
            <p className="font-serif text-[16px] leading-relaxed text-am-text/60">
              The research team&apos;s weekly reading list lands here once the coverage
              teams are formed in September. Books, articles, and podcasts — three
              sections, one for each team.
            </p>
          </div>
        </div>
      </section>

      {/* Recent research */}
      <section className="mx-edge py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[240px_1fr]">
          <div>
            <Tagline className="text-am-text/50">Publishing</Tagline>
            <h2 className="mt-3 font-serif text-[22px] text-am-text">Recent research</h2>
          </div>
          <div className="max-w-column border-l border-am-text/10 pl-8">
            <p className="font-serif text-[16px] leading-relaxed text-am-text/60">
              First quarterly drop publishes December 2026.
            </p>
            <Link
              href="/research"
              className="mt-4 inline-block font-sans text-[12px] tracking-label uppercase text-am-accent"
            >
              Visit Research →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
