import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { PageWatermark } from "@/components/brand/page-watermark";

export const metadata: Metadata = {
  title: "Events — Pareto Investments",
  description: "Upcoming and past Pareto Investments events.",
};

export default function EventsPage() {
  return (
    <main>
      <section className="relative overflow-hidden py-20 md:pt-28">
        <PageWatermark />

        <div className="relative z-10 mx-edge">
          <Eyebrow className="text-am-text/66">Events</Eyebrow>
          <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
            The social fabric is half of why people join.
          </h1>
        </div>
      </section>

      <div className="mx-edge pb-24 md:pb-28">
        {/* Upcoming */}
        <section className="mt-8 md:mt-0">
          <Tagline className="text-am-text/66">Upcoming</Tagline>
          <p className="mt-6 max-w-column font-serif text-[17px] leading-relaxed text-am-text/78">
            No events yet — check back once the first cohort settles in.
          </p>
        </section>

        {/* Past */}
        <section className="mt-20">
          <Tagline className="text-am-text/66">Past</Tagline>
          <p className="mt-6 max-w-column font-serif text-[15px] leading-relaxed text-am-text/66">
            No events yet — the archive fills in after the first one runs.
          </p>
        </section>
      </div>
    </main>
  );
}
