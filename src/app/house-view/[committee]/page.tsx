import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { houseViews } from "@/lib/house-views";

const paletteStyles: Record<string, { bg: string; text: string; accent: string; border: string }> = {
  am: { bg: "bg-am-bg", text: "text-am-text", accent: "text-am-accent", border: "border-am-text/15" },
  pe: { bg: "bg-pe-bg", text: "text-pe-text", accent: "text-pe-gold", border: "border-pe-text/15" },
  vc: { bg: "bg-vc-bg", text: "text-vc-text", accent: "text-vc-accent", border: "border-vc-text/15" },
};

export function generateStaticParams() {
  return Object.keys(houseViews).map((committee) => ({ committee }));
}

export function generateMetadata({
  params,
}: {
  params: { committee: string };
}): Metadata {
  const view = houseViews[params.committee];
  if (!view) return {};
  return {
    title: `${view.fullName} House View — Pareto Investments`,
    description: `The current position of the ${view.fullName} coverage team.`,
  };
}

export default function HouseViewPage({
  params,
}: {
  params: { committee: string };
}) {
  const view = houseViews[params.committee];
  if (!view) notFound();

  const styles = paletteStyles[view.palette];

  return (
    <main className={`${styles.bg} ${styles.text} min-h-[70vh]`}>
      <div className="mx-edge py-20 md:py-28">
        <Eyebrow className="opacity-50">{view.fullName} · House View</Eyebrow>

        {view.current ? (
          <>
            <h1 className="mt-6 max-w-column font-serif text-[36px] leading-tight sm:text-[44px]">
              {view.current.headline}
            </h1>
            <Tagline className={`mt-4 ${styles.accent}`}>{view.current.date}</Tagline>
            <div className="mt-10 max-w-column space-y-6 font-serif text-[17px] leading-relaxed opacity-85">
              {view.current.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-10 max-w-column">
            <p className="font-serif text-[20px] leading-relaxed opacity-70">
              The {view.fullName} house view publishes alongside the first quarterly
              research drop — December 2026.
            </p>
          </div>
        )}

        {view.archive.length > 0 && (
          <div className={`mt-24 border-t pt-10 ${styles.border}`}>
            <Tagline className="opacity-50">Archive</Tagline>
            <ul className="mt-6 space-y-4">
              {view.archive.map((entry) => (
                <li key={entry.date} className="font-serif text-[16px] opacity-70">
                  {entry.headline} — {entry.date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
