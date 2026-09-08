import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy — Pareto Investment Society",
  description: "How Pareto Investment Society collects, uses, and stores personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-edge py-20 md:py-28">
      <Eyebrow className="text-am-text/66">Privacy Policy</Eyebrow>
      <h1 className="mt-4 max-w-column font-serif text-[36px] leading-tight text-am-text sm:text-[44px]">
        What we collect, and why.
      </h1>
      <p className="mt-6 max-w-column font-serif text-[16px] leading-relaxed text-am-text/78">
        Last updated September 2026. This page explains what personal data Pareto
        Investment Society collects through this website, what we use it for, and how to
        reach us about it.
      </p>

      <div className="mt-16 space-y-14">
        <div>
          <Tagline className="text-am-text/66">What We Collect</Tagline>
          <p className="mt-4 max-w-column font-serif text-[16px] leading-relaxed text-am-text/78">
            When you apply to join Pareto, our application form collects your full name,
            email address, university, LinkedIn profile, a short stock thesis, and your
            CV. If you contact us by email, we hold whatever you send us in that message.
            We don&apos;t use cookies or analytics that track you individually — our
            analytics tooling reports aggregate page traffic only, not identifiable
            visitor data.
          </p>
        </div>

        <div>
          <Tagline className="text-am-text/66">Why We Collect It</Tagline>
          <p className="mt-4 max-w-column font-serif text-[16px] leading-relaxed text-am-text/78">
            Application data is used solely to evaluate membership applications for the
            relevant cohort — reviewing your background, contacting you about your
            application, and, if accepted, onboarding you into the society. We do not
            sell or share your data with third parties, and we do not use it for
            marketing.
          </p>
        </div>

        <div>
          <Tagline className="text-am-text/66">How Long We Keep It</Tagline>
          <p className="mt-4 max-w-column font-serif text-[16px] leading-relaxed text-am-text/78">
            If your application isn&apos;t successful, we delete your application data
            within 12 months of the decision. If you join, we keep member records for as
            long as you&apos;re active with the society, plus a short period afterward for
            alumni records, unless you ask us to delete it sooner.
          </p>
        </div>

        <div>
          <Tagline className="text-am-text/66">Your Rights</Tagline>
          <p className="mt-4 max-w-column font-serif text-[16px] leading-relaxed text-am-text/78">
            Under EU/Dutch data protection law (GDPR), you can ask us what personal data
            we hold about you, ask us to correct it, or ask us to delete it. Email{" "}
            <a
              href="mailto:info@paretoinvestment.nl"
              className="text-am-accent hover:text-am-text"
            >
              info@paretoinvestment.nl
            </a>{" "}
            and we&apos;ll respond within a reasonable time.
          </p>
        </div>

        <div className="border-t border-am-text/10 pt-10">
          <p className="max-w-column font-serif text-[14px] leading-relaxed text-am-text/50">
            This page is a plain-language summary written by the society, not a
            lawyer-drafted legal document. If you have specific concerns about how your
            data is handled, please get in touch using the email above.
          </p>
        </div>
      </div>
    </main>
  );
}
