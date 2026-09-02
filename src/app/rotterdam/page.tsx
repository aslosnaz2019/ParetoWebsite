import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { CoverageTeamsGrid } from "@/components/brand/coverage-teams-grid";

export default function Home() {
  return (
    <main>
      {/* Photo band — bright, daytime, live chapter */}
      <section className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="relative h-[42vh] min-h-[280px] overflow-hidden">
          <Image
            src="/images/rotterdam.jpg"
            alt="Rotterdam skyline"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-am-text/15 via-transparent to-am-bg" />
        </div>
      </section>

      {/* Hero */}
      <section className="relative mx-edge pb-24 pt-4 md:pb-32">
        <div className="mx-auto -mt-6 max-w-column text-center">
          <Tagline className="text-am-accent">Founding Chapter · Live Since 2026</Tagline>
          <Eyebrow className="mt-4 text-am-text/66">Pareto Investments · MMXXVI</Eyebrow>
          <h1 className="mt-6 font-serif text-[40px] leading-[1.1] text-am-text sm:text-[52px]">
            An <em className="not-italic text-am-accent italic">independent</em> student-led
            investment society.
          </h1>
          <p className="mt-6 font-serif text-[17px] leading-relaxed text-am-text/82">
            Capped membership. Published research. Three coverage teams, each running a
            €1M virtual mandate.
          </p>
          <div className="mt-10">
            <Link
              href="/apply"
              className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-all duration-200 hover:scale-[1.03] hover:bg-am-text hover:text-am-bg active:scale-[0.98]"
            >
              Applications open August 15
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage teams */}
      <section className="mx-edge py-20 md:py-28">
        <Tagline className="text-am-text/66">Coverage Teams</Tagline>
        <div className="mt-8">
          <CoverageTeamsGrid />
        </div>
      </section>

      {/* Currently reading */}
      <section className="mx-edge py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[240px_1fr]">
          <div>
            <Tagline className="text-am-text/66">This Week</Tagline>
            <h2 className="mt-3 font-serif text-[22px] text-am-text">What we&apos;re reading</h2>
          </div>
          <div className="max-w-column border-l border-am-text/10 pl-8">
            <p className="font-serif text-[16px] leading-relaxed text-am-text/72">
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
            <Tagline className="text-am-text/66">Publishing</Tagline>
            <h2 className="mt-3 font-serif text-[22px] text-am-text">Recent research</h2>
          </div>
          <div className="max-w-column border-l border-am-text/10 pl-8">
            <p className="font-serif text-[16px] leading-relaxed text-am-text/72">
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
