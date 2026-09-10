import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { NetherlandsMap } from "@/components/brand/netherlands-map";

const hubs = [
  {
    name: "Rotterdam",
    href: "/rotterdam",
    image: "/images/rotterdam.jpg",
    status: "Founding chapter",
    description: "Home base. Three coverage teams, live since 2026.",
  },
  {
    name: "Eindhoven",
    href: "/eindhoven",
    image: "/images/eindhoven.jpg",
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
        <Eyebrow className="text-am-text/66">Our Hubs</Eyebrow>
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
            className="group relative isolate flex min-h-[200px] flex-col justify-end overflow-hidden border border-am-text/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-am-text/30 hover:shadow-xl"
          >
            <Image
              src={hub.image}
              alt=""
              fill
              sizes="(min-width: 640px) 320px, 90vw"
              className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-am-text/70 transition-colors group-hover:bg-am-text/60" />
            <Tagline className="text-am-gold/80">{hub.status}</Tagline>
            <h3 className="mt-2 font-serif text-[20px] text-am-bg">{hub.name}</h3>
            <p className="mt-2 font-serif text-[14px] leading-relaxed text-am-bg/75">
              {hub.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 font-sans text-[12px] tracking-label uppercase text-am-gold">
              Visit {hub.name}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
