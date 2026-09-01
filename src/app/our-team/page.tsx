import { PersonCard } from "@/components/brand/person-card";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { foundingBoard, eindhovenFounders } from "@/lib/people";

export default function OurTeam() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">Pareto Investments</Eyebrow>
      <h1 className="mt-4 font-serif text-[40px] leading-[1.1] text-am-text sm:text-[48px]">
        Our team.
      </h1>

      {/* Rotterdam founders */}
      <section className="mt-20">
        <Tagline className="text-am-text/50">Rotterdam</Tagline>
        <h2 className="mt-3 font-serif text-[24px] text-am-text">Founding board</h2>
        <div className="mt-8 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {foundingBoard.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Eindhoven founders */}
      <section className="mt-20">
        <Tagline className="text-am-text/50">Eindhoven</Tagline>
        <h2 className="mt-3 font-serif text-[24px] text-am-text">Founding team</h2>
        <div className="mt-8 grid grid-cols-2 gap-10 sm:grid-cols-3">
          {eindhovenFounders.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>
    </main>
  );
}