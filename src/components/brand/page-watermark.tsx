import Image from "next/image";

/**
 * Faint, oversized logo mark bled off the right edge of a page's hero
 * section — the same treatment used on the About page. Drop this as the
 * first child of a `relative overflow-hidden` section, with the section's
 * actual content wrapped in a sibling `relative z-10` element so it sits
 * above the watermark.
 *
 * Pass `dark` on a dark-background section (navy/wine house views) so the
 * mark inverts to a light smudge instead of disappearing into the grayscale
 * dark tones.
 */
export function PageWatermark({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute -right-16 top-1/2 hidden w-[420px] -translate-y-1/2 opacity-[0.07] sm:block md:-right-20 md:w-[560px] lg:w-[640px]`}
      aria-hidden="true"
    >
      <Image
        src="/images/pareto-logo.png"
        alt=""
        width={1000}
        height={998}
        className={`w-full grayscale ${dark ? "invert" : ""}`}
      />
    </div>
  );
}
