import type { Metadata } from "next";
import { Eyebrow } from "@/components/brand/eyebrow";
import { PageWatermark } from "@/components/brand/page-watermark";
import { GoogleFormEmbed } from "@/components/apply/google-form-embed";
import { getApplyWindowStatus, daysUntilOpen } from "@/lib/apply-dates";

export const metadata: Metadata = {
  title: "Apply — Pareto Investments",
  description:
    "Show us how you think. Applications open August 15.",
};

export default function ApplyPage() {
  const status = getApplyWindowStatus();

  return (
    <main>
      <section className="relative overflow-hidden py-20 md:pt-28">
        <PageWatermark />

        <div className="relative z-10 mx-edge">
          <Eyebrow className="text-am-text/66">Apply</Eyebrow>
          <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
            Show us how you <em className="italic text-am-accent">think</em>.
          </h1>
        </div>
      </section>

      <div className="mx-edge pb-24 md:pb-28">
        {status === "before" && (
          <div className="mt-8 max-w-column md:mt-0">
            <p className="font-serif text-[20px] text-am-text">
              Applications open in {daysUntilOpen()} days.
            </p>
            <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/72">
              The form goes live August 15 and closes September 20.
            </p>
          </div>
        )}

        {status === "closed" && (
          <div className="mt-8 max-w-column md:mt-0">
            <p className="font-serif text-[20px] text-am-text">Applications closed.</p>
            <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/72">
              The next cohort applications open August 2027.
            </p>
          </div>
        )}

        {status === "open" && (
          <div className="mt-8 md:mt-0">
            <GoogleFormEmbed />
          </div>
        )}
      </div>
    </main>
  );
}
