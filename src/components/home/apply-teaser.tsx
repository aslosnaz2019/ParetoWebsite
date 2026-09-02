import Link from "next/link";
import { Tagline } from "@/components/brand/eyebrow";
import { getApplyWindowStatus, daysUntilOpen } from "@/lib/apply-dates";

/**
 * Condensed, date-aware echo of the /apply page — used on the homepage so
 * the CTA never claims a window that isn't actually open.
 */
export function ApplyTeaser() {
  const status = getApplyWindowStatus();

  return (
    <div className="max-w-column">
      <Tagline className="text-am-text/66">Apply</Tagline>
      <h2 className="mt-3 font-serif text-[28px] leading-tight text-am-text sm:text-[34px]">
        Show us how you <em className="italic text-am-accent">think</em>.
      </h2>

      {status === "before" && (
        <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/72">
          Applications open in {daysUntilOpen()} days — the form goes live August 15
          and closes September 20.
        </p>
      )}
      {status === "open" && (
        <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/72">
          Applications are open now, through September 20.
        </p>
      )}
      {status === "closed" && (
        <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/72">
          Applications are closed. The next cohort opens August 2027.
        </p>
      )}

      <Link
        href="/apply"
        className="mt-8 inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-all duration-200 hover:scale-[1.03] hover:bg-am-text hover:text-am-bg active:scale-[0.98]"
      >
        {status === "open" ? "Apply Now" : "Read the brief"}
      </Link>
    </div>
  );
}
