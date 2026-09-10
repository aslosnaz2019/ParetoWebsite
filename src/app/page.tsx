import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { CoverageTeamsGrid } from "@/components/brand/coverage-teams-grid";
import { FoundingPostureGrid } from "@/components/brand/founding-posture-grid";
import { JourneySection } from "@/components/home/journey-section";
import { StatsBar } from "@/components/home/stats-bar";
import { StockTicker } from "@/components/home/stock-ticker";
import { Reveal } from "@/components/reveal";

// The journey section below shows an apply-window-aware line that depends
// on the current date; revalidate hourly so it doesn't go stale for months
// between deploys on an otherwise-static homepage.
export const revalidate = 3600;

const section = "mx-edge py-20 md:py-28";
const sectionDivider = `${section} border-t border-am-text/10`;

const memberJourney = [
  {
    title: "Join one coverage team",
    description: "Pick Asset Management, Private Equity, or Venture Capital — or Events or Marketing if research isn't the focus you want.",
  },
  {
    title: "Train on research and valuation",
    description: "Learn the team's process before you're asked to apply it — how the society actually builds and checks a thesis.",
  },
  {
    title: "Prepare an investment thesis",
    description: "Build the case for a stock, deal, or company against your team's €1M virtual mandate.",
  },
  {
    title: "Present to the investment committee",
    description: "Defend the thesis in front of the committee — the same scrutiny before anything gets published.",
  },
  {
    title: "Publish selected research",
    description: "The strongest theses go out under the society's name, held to its public publishing standard.",
  },
  {
    title: "Attend company and networking events",
    description: "Socials, speaker sessions, and the events the Events committee runs across both chapters.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero — full-bleed, split Rotterdam / Eindhoven photography */}
      <section className="relative left-1/2 w-screen -translate-x-1/2">
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
            <Reveal className="mx-edge max-w-xl">
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
                <TrackedLink
                  href="/apply"
                  event="apply_cta_click"
                  eventData={{ source: "hero" }}
                  className="inline-block border border-am-bg px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-bg transition-all duration-200 hover:scale-[1.03] hover:bg-am-bg hover:text-am-text active:scale-[0.98]"
                >
                  Apply
                </TrackedLink>
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
        <div className="bg-am-text">
          <StockTicker dark />
        </div>
      </section>

      {/* About Us */}
      <section className={section}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <Eyebrow className="text-am-text/66">About Us</Eyebrow>
          <h2 className="mt-3 max-w-column font-serif text-[26px] leading-tight text-am-text sm:text-[32px]">
            An independent society, built for the long run.
          </h2>
          <p className="mt-5 max-w-column font-serif text-[16px] leading-relaxed text-am-text/78">
            Pareto Investments is a student-led investment society founded in Rotterdam in
            2026, designed from day one for pan-Benelux expansion. Capped membership.
            Published research. No shortcuts.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-sans text-[12px] tracking-label uppercase text-am-accent"
          >
            Learn more about us →
          </Link>
          <div className="mt-14">
            <StatsBar />
          </div>
        </Reveal>
      </section>

      {/* Society / founding posture */}
      <section className={sectionDivider}>
        <Reveal className="mx-auto w-full max-w-5xl">
          <Tagline className="text-am-text/66">Society</Tagline>
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

      {/* Coverage teams / departments */}
      <section className={sectionDivider}>
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

      {/* What members actually do, in order */}
      <section className={sectionDivider}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <Tagline className="text-am-text/66">The Member Experience</Tagline>
          <h2 className="mt-3 max-w-column font-serif text-[26px] leading-tight text-am-text sm:text-[32px]">
            What a year at Pareto actually looks like.
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {memberJourney.map((step, index) => (
              <li key={step.title} className="border-l border-am-text/15 pl-5">
                <p className="font-sans text-[12px] tracking-label uppercase text-am-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-serif text-[17px] leading-tight text-am-text">
                  {step.title}
                </p>
                <p className="mt-2 font-serif text-[14px] leading-relaxed text-am-text/70">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Your journey starts here — the two chapters, framed as the application entry point */}
      <section className={sectionDivider}>
        <Reveal className="mx-auto w-full max-w-4xl">
          <JourneySection />
        </Reveal>
      </section>
    </main>
  );
}
