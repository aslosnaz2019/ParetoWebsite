import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { PersonCard } from "@/components/brand/person-card";
import { eindhovenFounders, eindhovenTeam } from "@/lib/people";

const milestones = [
  {
    status: "Now",
    label: "Platform & governance build",
    description:
      "The founding team is building the engineering platform and the chapter's governance model, mirroring Rotterdam's discipline from day one.",
  },
  {
    status: "February 2027",
    label: "Chapter opens",
    description:
      "Applications open for the founding Eindhoven cohort — the second stop in Pareto's pan-Benelux design.",
  },
];

export default function Eindhoven() {
  return (
    <main>
      {/* Hero — full-bleed, dark, pre-launch */}
      <section className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="relative flex h-[64vh] min-h-[440px] items-end overflow-hidden">
          <Image
            src="/images/eindhoven.jpg"
            alt="Eindhoven at night"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vc-bg/95 via-vc-bg/55 to-vc-bg/20" />
          <div className="relative z-10 mx-edge w-full pb-16 pt-28">
            <Tagline className="text-vc-accent">Opening February 2027 · Founding Team</Tagline>
            <Eyebrow className="mt-4 text-vc-text/75">Pareto Investments · Eindhoven</Eyebrow>
            <h1 className="mt-6 max-w-2xl font-serif text-[36px] leading-[1.1] text-vc-text sm:text-[52px]">
              Building the <em className="not-italic italic text-vc-accent">second</em> chapter.
            </h1>
            <p className="mt-5 max-w-xl font-serif text-[16px] leading-relaxed text-vc-text/85 sm:text-[17px]">
              {eindhovenTeam.description}
            </p>
          </div>
        </div>
      </section>

      {/* Founding team */}
      <section className="mx-edge py-20 md:py-28">
        <Tagline className="text-am-text/66">Founding Team</Tagline>
        <p className="mt-4 max-w-column font-serif text-[16px] leading-relaxed text-am-text/82">
          {eindhovenTeam.composition}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
          {eindhovenFounders.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-edge py-20 md:py-28">
        <Tagline className="text-am-text/66">Timeline</Tagline>
        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {milestones.map((milestone) => (
            <div key={milestone.label} className="border-l-2 border-vc-accent/40 pl-6">
              <Tagline className="text-vc-accent">{milestone.status}</Tagline>
              <h2 className="mt-2 font-serif text-[20px] text-am-text">{milestone.label}</h2>
              <p className="mt-2 max-w-column font-serif text-[15px] leading-relaxed text-am-text/78">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-edge pb-24 md:pb-32">
        <div className="max-w-column border-t border-am-text/10 pt-12">
          <p className="font-serif text-[16px] leading-relaxed text-am-text/82">
            Want to be part of the founding Eindhoven cohort?
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-all duration-200 hover:scale-[1.03] hover:bg-am-text hover:text-am-bg active:scale-[0.98]"
            >
              Register interest
            </Link>
            <Link
              href="/"
              className="inline-block px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-accent transition-colors hover:text-am-text"
            >
              ← Back to Pareto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
