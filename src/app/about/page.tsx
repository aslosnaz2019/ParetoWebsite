import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { FoundingPostureGrid } from "@/components/brand/founding-posture-grid";
import { StatsBar } from "@/components/home/stats-bar";
import { StockTicker } from "@/components/home/stock-ticker";

export const metadata: Metadata = {
  title: "About Us — Pareto Investments",
  description:
    "An independent, student-led investment society founded in Rotterdam in 2026, designed from day one for pan-Benelux expansion.",
};

export default function AboutUs() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/66">About Us</Eyebrow>
      <h1 className="mt-6 max-w-3xl font-serif text-[34px] leading-[1.1] text-am-text sm:text-[46px]">
        The discipline is the <em className="italic text-am-accent">brand</em>.
      </h1>
      <div className="mt-8 max-w-column space-y-5 font-serif text-[17px] leading-relaxed text-am-text/86">
        <p>
          Pareto Investments is an independent, student-led investment society, founded in
          Rotterdam in 2026 and designed from day one for pan-Benelux expansion. It is not a
          generalist club, and it is not an exclusive access network.
        </p>
        <p>
          The society&apos;s identity rests on a single discipline: capped membership,
          published research, and three coverage teams that report their own performance
          against a public publishing standard.
        </p>
      </div>
      <Link
        href="/society"
        className="mt-6 inline-block font-sans text-[12px] tracking-label uppercase text-am-accent"
      >
        Read the full society story →
      </Link>

      <div className="mt-20 md:mt-28">
        <Tagline className="text-center text-am-text/66">By The Numbers</Tagline>
        <div className="mx-auto mt-10 max-w-4xl">
          <StatsBar />
        </div>
        <div className="relative left-1/2 mt-12 w-screen -translate-x-1/2">
          <StockTicker />
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <Tagline className="text-am-text/66">Founding Posture</Tagline>
        <h2 className="mt-3 max-w-column font-serif text-[26px] leading-tight text-am-text sm:text-[32px]">
          Five commitments, made at founding.
        </h2>
        <div className="mt-10">
          <FoundingPostureGrid />
        </div>
      </div>
    </main>
  );
}
