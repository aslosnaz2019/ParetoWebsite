import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { CoverageTeamsGrid } from "@/components/brand/coverage-teams-grid";
import { FoundingPostureGrid } from "@/components/brand/founding-posture-grid";
import { ApplyTeaser } from "@/components/home/apply-teaser";
import { HubsSection } from "@/components/home/hubs-section";
import { Reveal } from "@/components/reveal";

const snapSection =
  "mx-edge flex min-h-0 flex-col justify-center py-16 sm:min-h-[50vh] sm:py-10 sm:snap-start sm:scroll-mt-[72px]";

export default function Home() {
  return (
    <main className="sm:h-screen sm:overflow-y-auto sm:overflow-x-hidden sm:snap-y sm:snap-proximity motion-reduce:snap-none">
      {/* Hero — full-bleed, split Rotterdam / Eindhoven photography */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 sm:snap-start sm:scroll-mt-[72px]">
        <div className="relative flex h-[82vh] min-h-[560px] items-end overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="relative">
              <Image
                src="/images/rotterdam.jpg"
                alt="Rotterdam skyline"
                fill
                sizes="50vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/eindhoven.jpg"
                alt="Eindhoven at night"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-am-text/90 via-am-text/45 to-am-text/15" />

          <div className="relative z-10 w-full pb-16 pt-28 sm:pb-20">
            <Reveal className="mx-edge max-w-2xl">
              <Eyebrow className="text-am-bg/75">Pareto Investments</Eyebrow>
              <h1 className="mt-6 font-serif text-[32px] leading-[1.1] text-am-bg sm:text-[52px]">
                An <em className="not-italic italic text-am-gold">independent</em> student-led
                investment society.
              </h1>
              <p className="mt-5 font-serif text-[16px] leading-relaxed text-am-bg/85 sm:text-[17px]">
                Capped membership. Published research. Three coverage teams, each running a
                €1M virtual mandate. Two chapters, one publishing standard.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/apply"
                  className="inline-block border border-am-bg px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-bg transition-all duration-200 hover:scale-[1.03] hover:bg-am-bg hover:text-am-text active:scale-[0.98]"
                >
                  Apply
                </Link>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-gold transition-colors hover:text-am-bg"
                >
                  About Us →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Coverage teams / departments */}
      <section className={snapSection}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <Tagline className="text-am-text/66">Coverage Teams</Tagline>
          <h2 className="mt-3 max-w-column font-serif text-[26px] leading-tight text-am-text sm:text-[32px]">
            Three departments, one publishing standard.
          </h2>
          <div className="mt-10">
            <CoverageTeamsGrid />
          </div>
          <Link
            href="/committees"
            className="mt-8 inline-block font-sans text-[12px] tracking-label uppercase text-am-accent"
          >
            See all five committees, including Events &amp; Marketing →
          </Link>
        </Reveal>
      </section>

      {/* Founding posture */}
      <section className={snapSection}>
        <Reveal className="mx-auto w-full max-w-5xl">
          <Tagline className="text-am-text/66">Founding Posture</Tagline>
          <h2 className="mt-3 max-w-column font-serif text-[26px] leading-tight text-am-text sm:text-[32px]">
            The discipline is the <em className="italic text-am-accent">brand</em>.
          </h2>
          <div className="mt-10">
            <FoundingPostureGrid />
          </div>
          <Link
            href="/about"
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
