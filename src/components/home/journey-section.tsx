import Image from "next/image";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { NetherlandsMap } from "@/components/brand/netherlands-map";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { daysUntilOpen, getApplyWindowStatus } from "@/lib/apply-dates";

const houses = [
  {
    name: "Rotterdam",
    href: "/rotterdam",
    image: "/images/rotterdam.jpg",
    alt: "Aerial view of the Rotterdam skyline and Erasmusbrug at dusk",
    status: "Founding chapter",
    description: "Home base. Three coverage teams, live since 2026.",
    applyEnabled: true,
    applyHref: "/apply?chapter=rotterdam",
  },
  {
    name: "Eindhoven",
    href: "/eindhoven",
    image: "/images/eindhoven.jpg",
    alt: "Eindhoven city center with the Philips building and De Blob",
    status: "Opening February 2027",
    description: "The second chapter — engineering-led, opening next.",
    applyEnabled: false,
    // Eindhoven isn't taking applications for this cohort — this sends
    // people to an interest-registration card on the apply page instead of
    // the live Rotterdam application form.
    applyHref: "/apply?chapter=eindhoven",
  },
];

/**
 * Closing homepage section: the two chapters framed explicitly as the
 * application entry point, with an apply-window-aware intro line so the
 * copy never claims a window that isn't actually open.
 */
export function JourneySection() {
  const status = getApplyWindowStatus();

  return (
    <div className="w-full">
      <div className="mx-auto max-w-column text-center">
        <Eyebrow className="mx-auto justify-center text-am-text/66">
          Your Journey Starts Here
        </Eyebrow>
        <h2 className="mt-3 font-serif text-[28px] leading-tight text-am-text sm:text-[36px]">
          Two chapters. <em className="not-italic italic text-am-accent">One</em> standard.
        </h2>
        <p className="mx-auto mt-4 max-w-column font-serif text-[15px] leading-relaxed text-am-text/72">
          {status === "before" &&
            `Applications open in ${daysUntilOpen()} days — the form goes live August 15 and closes September 20. Pick the chapter you're applying to below.`}
          {status === "open" &&
            "Applications are open now, through September 20. Pick the chapter you're applying to below."}
          {status === "closed" &&
            "Applications are closed for this cohort. The next one opens August 2027 — register your interest below."}
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <NetherlandsMap />
      </div>

      <div className="mx-auto mt-12 grid max-w-column grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {houses.map((house) => (
          <div
            key={house.name}
            className="group relative isolate flex min-h-[280px] flex-col justify-end overflow-hidden border border-am-text/15 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-am-text/30 hover:shadow-xl"
          >
            <Image
              src={house.image}
              alt={house.alt}
              fill
              sizes="(min-width: 640px) 400px, 90vw"
              className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-am-text/95 via-am-text/75 to-am-text/35 transition-opacity duration-300 group-hover:opacity-90" />
            <Tagline className="text-am-gold/80">{house.status}</Tagline>
            <h3 className="mt-2 font-serif text-[22px] text-am-bg">{house.name}</h3>
            <p className="mt-2 font-serif text-[14px] leading-relaxed text-am-bg/78">
              {house.description}
            </p>
            <TrackedLink
              href={house.applyHref}
              event="apply_cta_click"
              eventData={{ source: "journey_card", chapter: house.name }}
              className="mt-6 inline-flex w-fit items-center gap-2 border border-am-bg/70 px-5 py-2.5 font-sans text-[12px] tracking-label uppercase text-am-bg transition-all duration-200 hover:scale-[1.03] hover:bg-am-bg hover:text-am-text active:scale-[0.98]"
            >
              {house.applyEnabled ? "Apply Now" : "Register Interest"}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </TrackedLink>
          </div>
        ))}
      </div>
    </div>
  );
}
