import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { PersonCard } from "@/components/brand/person-card";
import { FoundingPostureGrid } from "@/components/brand/founding-posture-grid";
import { foundingBoard, marketingTeam, eindhovenTeam } from "@/lib/people";

export const metadata: Metadata = {
  title: "The Society — Pareto Investments",
  description:
    "Mission, posture, founding board, and the pan-Benelux vision behind Pareto Investments.",
};

export default function SocietyPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/66">The Society</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        The discipline is the <em className="italic text-am-accent">brand</em>.
      </h1>

      {/* Mission */}
      <div className="mt-16 max-w-column space-y-6 font-serif text-[17px] leading-relaxed text-am-text/86">
        <p>
          Pareto Investments is an independent, student-led investment society, founded
          in Rotterdam in 2026 and designed from day one for pan-Benelux expansion. It
          is not a generalist club, and it is not an exclusive access network.
        </p>
        <p>
          The society&apos;s identity rests on a single discipline: capped membership,
          published research, and three coverage teams that report their own
          performance against a public publishing standard.
        </p>
      </div>

      {/* Founding posture */}
      <section className="mt-24">
        <Tagline className="text-am-text/66">Founding Posture</Tagline>
        <div className="mt-8">
          <FoundingPostureGrid />
        </div>
      </section>

      {/* Founding board */}
      <section className="mt-24">
        <Tagline className="text-am-text/66">Founding Board</Tagline>
        <div className="mt-8 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {foundingBoard.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Marketing team */}
      <section className="mt-24">
        <Tagline className="text-am-text/66">Marketing Team</Tagline>
        <div className="mt-8 grid grid-cols-2 gap-10 sm:grid-cols-3">
          {marketingTeam.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Eindhoven team */}
      <section className="mt-24 max-w-column">
        <Tagline className="text-am-text/66">Eindhoven Team</Tagline>
        <p className="mt-6 font-serif text-[16px] leading-relaxed text-am-text/82">
          {eindhovenTeam.description}
        </p>
        <p className="mt-4 font-serif text-[14px] leading-relaxed text-am-text/68">
          {eindhovenTeam.composition}
        </p>
      </section>

      {/* Why we exist */}
      <section className="mt-24 max-w-column border-t border-am-text/10 pt-16">
        <Tagline className="text-am-text/66">Why We Exist</Tagline>
        <div className="mt-6 space-y-6 font-serif text-[17px] leading-relaxed text-am-text/86">
          <p>
            The European student-fund landscape splits into two patterns. The first is
            the broad university club that organises pitch competitions without
            sustained output. The second is the exclusive access network that
            emphasises corporate visits without producing analytical work.
          </p>
          <p>Pareto sits outside both patterns. The discipline is the brand.</p>
        </div>
      </section>
    </main>
  );
}
