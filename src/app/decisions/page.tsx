import type { Metadata } from "next";
import { Eyebrow } from "@/components/brand/eyebrow";
import { decisions } from "@/lib/decisions";

export const metadata: Metadata = {
  title: "Decisions Log — Pareto Investments",
  description: "A public log of the founder board's key decisions and reasoning.",
};

export default function DecisionsPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">Decisions Log</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        Reasoning, made public.
      </h1>

      <ul className="mt-16 max-w-column divide-y divide-am-text/10 border-t border-am-text/10">
        {decisions.map((decision) => (
          <li key={decision.slug} id={decision.slug} className="py-10">
            <p className="font-sans text-[11px] tracking-label uppercase text-am-accent">
              {decision.date}
            </p>
            <h2 className="mt-2 font-serif text-[22px] leading-snug text-am-text">
              {decision.title}
            </h2>
            <p className="mt-4 font-serif text-[16px] leading-relaxed text-am-text/75">
              {decision.reasoning}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
