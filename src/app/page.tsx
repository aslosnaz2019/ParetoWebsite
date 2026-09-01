import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { CoverageTeamsGrid } from "@/components/brand/coverage-teams-grid";
import { FoundingPostureGrid } from "@/components/brand/founding-posture-grid";
import { ApplyTeaser } from "@/components/home/apply-teaser";
import { HubsSection } from "@/components/home/hubs-section";
import { StatsBar } from "@/components/home/stats-bar";
import { Reveal } from "@/components/reveal";

const snapSection =
  "mx-edge flex min-h-screen flex-col justify-center py-24 sm:snap-start sm:scroll-mt-[72px]";

export default function Home() {
  return (
    <main className="sm:h-screen sm:overflow-y-auto sm:snap-y sm:snap-proximity motion-reduce:snap-none">
      {/* Hero */}
      <section className={snapSection}>
        <Reveal className="mx-auto max-w-column text-center">
          <Eyebrow className="text-am-text/50">Pareto Investments</Eyebrow>
          <h1 className="mt-6 font-serif text-[30px] leading-[1.1] text-am-text sm:text-[44px]">
            An <em className="not-italic text-am-accent italic">independent</em> student-led
            investment society.
          </h1>
          <p className="mt-5 font-serif text-[16px] leading-relaxed text-am-text/75">
            Capped membership. Published research. Three coverage teams, each running a
            €1M virtual mandate. Two chapters, one publishing standard.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/apply"
              className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-colors hover:bg-am-text hover:text-am-bg"
            >
              Apply
            </Link>
            <Link
              href="/society"
              className="inline-block px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-accent transition-colors hover:text-am-text"
            >
              The Society →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className={snapSection}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <Tagline className="text-center text-am-text/50">By The Numbers</Tagline>
          <div className="mt-10">
            <StatsBar />
          </div>
        </Reveal>
      </section>

      {/* Coverage teams / departments */}
      <section className={snapSection}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <Tagline className="text-am-text/50">Coverage Teams</Tagline>
          <h2 className="mt-3 max-w-column font-serif text-[26px] leading-tight text-am-text sm:text-[32px]">
            Three departments, one publishing standard.
          </h2>
          <div className="mt-10">
            <CoverageTeamsGrid />
          </div>
        </Reveal>
      </section>

      {/* Founding posture */}
      <section className={snapSection}>
        <Reveal className="mx-auto w-full max-w-5xl">
          <Tagline className="text-am-text/50">Founding Posture</Tagline>
          <h2 className="mt-3 max-w-column font-serif text-[26px] leading-tight text-am-text sm:text-[32px]">
            The discipline is the <em className="italic text-am-accent">brand</em>.
          </h2>
          <div className="mt-10">
            <FoundingPostureGrid />
          </div>
          <Link
            href="/society"
            className="mt-10 inline-block font-sans text-[12px] tracking-label uppercase text-am-accent"
          >
            Read the full mission →
          </Link>
        </Reveal>
      </section>

      {/* Apply */}
      <section className={snapSection}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <ApplyTeaser />
        </Reveal>
      </section>

      {/* Hubs — kept last, right above the footer */}
      <section className={snapSection}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <HubsSection />
        </Reveal>
      </section>
    </main>
  );
}
