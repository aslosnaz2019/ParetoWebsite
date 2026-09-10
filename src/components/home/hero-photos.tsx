import Image from "next/image";
import { CornerBrackets } from "@/components/brand/corner-brackets";
import { Tagline } from "@/components/brand/eyebrow";

/**
 * The two-chapter photo composition beside the homepage hero copy —
 * Rotterdam (founding chapter) and Eindhoven (opening next), framed to
 * match the site's "editorial object" treatment.
 */
export function HeroPhotos() {
  return (
    <div className="relative mx-auto grid w-full max-w-sm grid-cols-2 gap-4 sm:max-w-md md:mx-0 md:max-w-none">
      <CornerBrackets />
      <div className="relative col-span-1 aspect-[3/4] overflow-hidden border border-am-text/15">
        <Image
          src="/images/rotterdam.jpg"
          alt="Rotterdam skyline"
          fill
          sizes="(min-width: 768px) 220px, 45vw"
          className="object-cover grayscale-[20%] contrast-[1.05]"
          priority
        />
        <div className="absolute inset-0 bg-am-text/15" />
        <Tagline className="absolute bottom-3 left-3 text-am-bg">Rotterdam</Tagline>
      </div>
      <div className="relative col-span-1 mt-10 aspect-[3/4] overflow-hidden border border-am-text/15">
        <Image
          src="/images/eindhoven.jpg"
          alt="Eindhoven at night"
          fill
          sizes="(min-width: 768px) 220px, 45vw"
          className="object-cover grayscale-[15%] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-vc-bg/25" />
        <Tagline className="absolute bottom-3 left-3 text-am-bg">Eindhoven</Tagline>
      </div>
    </div>
  );
}
