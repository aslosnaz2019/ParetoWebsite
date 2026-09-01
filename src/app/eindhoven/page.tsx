import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { CornerBrackets } from "@/components/brand/corner-brackets";
import { Eyebrow } from "@/components/brand/eyebrow";

export default function Eindhoven() {
  return (
    <main className="relative mx-edge flex min-h-[80vh] flex-col items-center justify-center pt-10 pb-24 text-center md:pt-14 md:pb-32">
      <CornerBrackets />
      <BrandLockup className="mb-16" />
      <Eyebrow className="text-am-text/50">Pareto Investments · Eindhoven</Eyebrow>
      <h1 className="mt-6 font-serif text-[40px] leading-[1.1] text-am-text sm:text-[52px]">
        Coming <em className="not-italic text-am-accent italic">soon</em>&hellip;
      </h1>
      <p className="mt-6 max-w-column font-serif text-[17px] leading-relaxed text-am-text/75">
        The Eindhoven chapter opens February 2027. The engineering team
        behind this platform is building it now.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border border-am-text px-8 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-colors hover:bg-am-text hover:text-am-bg"
      >
        ← Back
      </Link>
    </main>
  );
}