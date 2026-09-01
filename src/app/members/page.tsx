import type { Metadata } from "next";
import { Eyebrow } from "@/components/brand/eyebrow";

export const metadata: Metadata = {
  title: "Members — Pareto Investments",
  description: "The 2026–27 cohort, live after September selection.",
};

export default function MembersPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/50">Members</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        Cohort 2026–27.
      </h1>
      <p className="mt-10 max-w-column font-serif text-[18px] leading-relaxed text-am-text/70">
        The first cohort is being selected. Names land in late September.
      </p>
    </main>
  );
}
