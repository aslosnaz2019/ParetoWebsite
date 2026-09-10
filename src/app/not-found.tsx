import Link from "next/link";
import { Eyebrow } from "@/components/brand/eyebrow";
import { PageWatermark } from "@/components/brand/page-watermark";

export default function NotFound() {
  return (
    <main>
      <section className="relative overflow-hidden py-20 md:pt-28">
        <PageWatermark />

        <div className="relative z-10 mx-edge">
          <Eyebrow className="text-am-text/66">404</Eyebrow>
          <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-6 max-w-column font-serif text-[16px] leading-relaxed text-am-text/72">
            The link may be out of date, or the page may have moved. Head back to the
            homepage, or check the navigation above.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-all duration-200 hover:scale-[1.03] hover:bg-am-text hover:text-am-bg active:scale-[0.98]"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
