import Link from "next/link";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { Tagline } from "@/components/brand/eyebrow";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/social-icons";

export function SiteFooter() {
  return (
    <footer>
      <div className="mt-6 border-t-4 border-vc-gold" />
      <div className="relative bg-vc-bg grain">
        <div className="mx-edge py-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="origin-left scale-90">
              <BrandLockup tone="light" />
            </div>

            <div className="flex flex-col gap-2">
              <Tagline className="text-vc-gold/60">Contact</Tagline>
              <a
                href="mailto:info@paretoinvestment.nl"
                className="font-serif text-[15px] text-vc-gold hover:text-vc-accent"
              >
                info@paretoinvestment.nl
              </a>
              <Link
                href="/press"
                className="font-sans text-[11px] tracking-label uppercase text-vc-gold hover:text-vc-accent"
              >
                Press &amp; Contact →
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Tagline className="text-vc-gold/60">Follow</Tagline>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/paretoinvestmentsociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-vc-gold transition-colors hover:text-vc-accent"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pareto-investment-society/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-vc-gold transition-colors hover:text-vc-accent"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:items-end">
              <Tagline className="text-vc-gold/60">
                Pareto Investments · Rotterdam &amp; Eindhoven
              </Tagline>
              <Link
                href="/privacy"
                className="font-sans text-[11px] tracking-label uppercase text-vc-gold/60 hover:text-vc-accent"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <p className="mt-10 max-w-3xl border-t border-vc-gold/15 pt-6 font-serif text-[12px] leading-relaxed text-vc-gold/50">
            The €1M mandates run by each coverage team are virtual — Pareto Investments
            does not manage real capital, and no positions described on this site are
            actually held. All research, theses, and commentary published here are
            student work, produced for educational purposes only, and do not constitute
            financial, investment, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
