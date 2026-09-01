import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { NetherlandsMap } from "@/components/brand/netherlands-map";

const hubs = [
  {
    name: "Rotterdam",
    href: "/rotterdam",
    status: "Founding chapter",
    description: "Home base. Three coverage teams, live since 2026.",
  },
  {
    name: "Eindhoven",
    href: "/eindhoven",
    status: "Opening February 2027",
    description: "The second chapter — engineering-led, opening next.",
  },
];

/**
 * The pan-Benelux map, moved to the foot of the homepage as a "hubs"
 * jump-off point rather than a mid-page decoration.
 */
export function HubsSection() {
  return (
    <div className="w-full">
      <div className="text-center">
        <Eyebrow className="text-am-text/50">Our Hubs</Eyebrow>
        <h2 className="mt-3 font-serif text-[28px] leading-tight text-am-text sm:text-[34px]">
          One society, <em className="not-italic italic text-am-accent">two</em> chapters.
        </h2>
      </div>

      <div className="mt-12 flex justify-center">
        <NetherlandsMap />
      </div>

      <div className="mx-auto mt-12 grid max-w-column grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {hubs.map((hub) => (
          <Link
            key={hub.name}
            href={hub.href}
            className="group border border-am-text/15 p-6 transition-colors hover:border-am-text/40"
          >
            <Tagline className="text-am-text/45">{hub.status}</Tagline>
            <h3 className="mt-2 font-serif text-[20px] text-am-text">{hub.name}</h3>
            <p className="mt-2 font-serif text-[14px] leading-relaxed text-am-text/60">
              {hub.description}
            </p>
            <span className="mt-4 inline-block font-sans text-[12px] tracking-label uppercase text-am-accent">
              Visit {hub.name} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
