import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";

export const metadata: Metadata = {
  title: "Press & Contact — Pareto Investments",
  description: "Press inquiries and partnership contact for Pareto Investments.",
};

export default function PressPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">Press &amp; Contact</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        One line to the right person.
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <Tagline className="text-am-text/50">Press Inquiries</Tagline>
          <a
            href="mailto:paretoinvestment1@gmail.com"
            className="mt-4 inline-block font-sans text-[13px] tracking-label uppercase text-am-accent"
          >
            paretoinvestment1@gmail.com
          </a>
        </div>
        <div>
          <Tagline className="text-am-text/50">Partnerships</Tagline>
          <p className="mt-4 font-serif text-[16px] leading-relaxed text-am-text/70">
            Same inbox — lead with &quot;Partnership&quot; in the subject line.
          </p>
          <a
            href="mailto:paretoinvestment1@gmail.com?subject=Partnership%20Inquiry"
            className="mt-4 inline-block font-sans text-[13px] tracking-label uppercase text-am-accent"
          >
            paretoinvestment1@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-16 border-t border-am-text/10 pt-12">
        <Tagline className="text-am-text/50">Follow</Tagline>
        <div className="mt-4 flex gap-6">
          <a
            href="https://www.instagram.com/paretoinvestmentsociety"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] tracking-label uppercase text-am-accent"
          >
            Instagram →
          </a>
          <a
            href="https://www.linkedin.com/company/pareto-investment-society/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] tracking-label uppercase text-am-accent"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <div className="mt-24 border-t-4 border-am-gold pt-16">
        <Tagline className="text-am-text/50">Recent Mentions</Tagline>
        <p className="mt-6 max-w-column font-serif text-[15px] leading-relaxed text-am-text/50">
          Empty until the first press hit.
        </p>
      </div>
    </main>
  );
}
