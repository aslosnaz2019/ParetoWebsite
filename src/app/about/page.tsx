import type { Metadata } from "next";
import Image from "next/image";
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
    <main>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute -right-16 top-1/2 hidden w-[420px] -translate-y-1/2 opacity-[0.07] sm:block md:-right-20 md:w-[560px] lg:w-[640px]"
          aria-hidden="true"
        >
          <Image
            src="/images/pareto-logo.png"
            alt=""
            width={1000}
            height={998}
            className="w-full grayscale"
          />
        </div>

        <div className="relative z-10 mx-edge">
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
        </div>
      </section>

      <div className="mx-edge">
        <div className="mt-4 md:mt-8">
          <Tagline className="text-center text-am-text/66">By The Numbers</Tagline>
          <div className="mx-auto mt-10 max-w-4xl">
            <StatsBar />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <StockTicker />
      </div>

      <div className="mx-edge pb-24 pt-20 md:pb-32 md:pt-28">
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
