import type { Metadata } from "next";
import { Eyebrow } from "@/components/brand/eyebrow";
import { GoogleFormEmbed } from "@/components/apply/google-form-embed";
import { getApplyWindowStatus, daysUntilOpen } from "@/lib/apply-dates";

export const metadata: Metadata = {
  title: "Apply — Pareto Investments",
  description:
    "Pick a stock. Write a 300-word thesis. Defend it. Applications open August 15.",
};

export default function ApplyPage() {
  const status = getApplyWindowStatus();

  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">Apply</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        Pick a stock. Write a <em className="italic text-am-accent">300-word</em>{" "}
        thesis. Defend it.
      </h1>

      {status === "before" && (
        <div className="mt-16 max-w-column">
          <p className="font-serif text-[20px] text-am-text">
            Applications open in {daysUntilOpen()} days.
          </p>
          <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/60">
            The form goes live August 15 and closes September 20.
          </p>
        </div>
      )}

      {status === "closed" && (
        <div className="mt-16 max-w-column">
          <p className="font-serif text-[20px] text-am-text">Applications closed.</p>
          <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/60">
            The next cohort applications open August 2027.
          </p>
        </div>
      )}

      {status === "open" && (
        <div className="mt-16">
          <GoogleFormEmbed />
        </div>
      )}
    </main>
  );
}
