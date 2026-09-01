import { foundingPosture } from "@/lib/founding-posture";

/**
 * The five founding-posture pillars. Shared between the Society page and
 * the homepage so the discipline reads identically everywhere.
 */
export function FoundingPostureGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {foundingPosture.map((pillar) => (
        <div key={pillar.title} className="max-w-[220px]">
          <h3 className="font-serif text-[16px] text-am-text">{pillar.title}</h3>
          <p className="mt-2 font-serif text-[14px] leading-relaxed text-am-text/65">
            {pillar.body}
          </p>
        </div>
      ))}
    </div>
  );
}
