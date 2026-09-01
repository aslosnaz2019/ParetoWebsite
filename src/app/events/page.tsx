import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";

export const metadata: Metadata = {
  title: "Events — Pareto Investments",
  description: "Upcoming and past Pareto Investments events.",
};

export default function EventsPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">Events</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        The social fabric is half of why people join.
      </h1>

      {/* Pareto Cup trophy showcase */}
      <section className="mt-16 border border-am-text/15 p-8 sm:p-10">
        <Tagline className="text-am-gold">Pareto Cup</Tagline>
        <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-am-text/20 font-sans text-[11px] tracking-label text-am-text/40"
            aria-hidden="true"
          >
            TBD
          </div>
          <p className="max-w-column font-serif text-[16px] leading-relaxed text-am-text/65">
            Reserved for the current holder, once the first Cup is held.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="mt-20">
        <Tagline className="text-am-text/50">Upcoming</Tagline>
        <p className="mt-6 max-w-column font-serif text-[17px] leading-relaxed text-am-text/70">
          Events open in October. Bring cash.
        </p>
      </section>

      {/* Past */}
      <section className="mt-20">
        <Tagline className="text-am-text/50">Past</Tagline>
        <p className="mt-6 max-w-column font-serif text-[15px] leading-relaxed text-am-text/50">
          No events yet — the archive fills in after the first one runs.
        </p>
      </section>
    </main>
  );
}
