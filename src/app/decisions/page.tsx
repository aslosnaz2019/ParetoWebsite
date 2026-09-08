import type { Metadata } from "next";
import { Eyebrow } from "@/components/brand/eyebrow";
import { PageWatermark } from "@/components/brand/page-watermark";
import { decisions } from "@/lib/decisions";

export const metadata: Metadata = {
  title: "Decisions Log — Pareto Investments",
  description: "A public log of the founder board's key decisions and reasoning.",
};

export default function DecisionsPage() {
  return (
    <main>
      <section className="relative overflow-hidden py-20 md:pt-28">
        <PageWatermark />

        <div className="relative z-10 mx-edge">
          <Eyebrow className="text-am-text/66">Decisions Log</Eyebrow>
          <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
            Reasoning, made public.
          </h1>
        </div>
      </section>

      <div className="mx-edge pb-24 md:pb-28">
        <ul className="mt-8 max-w-column divide-y divide-am-text/10 border-t border-am-text/10 md:mt-0">
          {decisions.map((decision) => (
            <li key={decision.slug} id={decision.slug} className="py-10">
              <p className="font-sans text-[11px] tracking-label uppercase text-am-accent">
                {decision.date}
              </p>
              <h2 className="mt-2 font-serif text-[22px] leading-snug text-am-text">
                {decision.title}
              </h2>
              <p className="mt-4 font-serif text-[16px] leading-relaxed text-am-text/82">
                {decision.reasoning}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
