import type { Metadata } from "next";
import { Eyebrow, Tagline } from "@/components/brand/eyebrow";
import { PageWatermark } from "@/components/brand/page-watermark";
import { GoogleFormEmbed } from "@/components/apply/google-form-embed";
import { getApplyWindowStatus, daysUntilOpen } from "@/lib/apply-dates";

export const metadata: Metadata = {
  title: "Apply — Pareto Investments",
  description:
    "Show us how you think. Applications open August 15.",
};

// This page branches on both the current date (open/closed window) and the
// `chapter` query param — both need to be evaluated per request, not frozen
// at build time, or the page would silently serve stale content between
// deploys (e.g. still showing "open" after the deadline, or ignoring
// ?chapter=eindhoven entirely on a statically-generated page).
export const dynamic = "force-dynamic";

const selectionStages = [
  {
    name: "Application form",
    detail: "The short form below, plus a one-paragraph thesis pitch — the stock, deal, or company you'd cover and why.",
  },
  {
    name: "Case screen",
    detail: "A short written case relevant to the committee you applied to, reviewed by that team's lead.",
  },
  {
    name: "Interview",
    detail: "A conversation with the committee lead and a board member — mostly a defence of your thesis pitch.",
  },
];

const evaluationCriteria = [
  "The reasoning behind your thesis pitch, not whether the call turns out right",
  "How you hold up a position when it's pushed on, rather than how polished it sounds going in",
  "Curiosity and follow-through outside of coursework — what you've read, tried, or built on your own",
  "Fit with the committee you're applying to, over general finance credentials",
];

const faqs = [
  {
    q: "Do I need a finance background?",
    a: "No. We've taken members from engineering, econometrics, law, and the humanities. What matters is the thesis pitch and how you defend it, not prior coursework.",
  },
  {
    q: "Can I apply to more than one committee?",
    a: "Pick one committee on the form — it's what your case screen and interview are built around. If there's a strong overlap with a second team, that's a conversation for the interview, not the form.",
  },
  {
    q: "What happens after I submit the form?",
    a: "Applications are reviewed on a rolling basis. If you move forward, the committee lead reaches out by email with the case screen and, after that, an interview slot.",
  },
  {
    q: "I'm not based in Rotterdam yet — can I still apply?",
    a: "Rotterdam members are expected to be based in or around the city for the year, since the work is in person. If you're set on Eindhoven, register your interest there instead — that chapter opens February 2027.",
  },
  {
    q: "What if I miss this deadline?",
    a: "The next Rotterdam cohort's applications open August 2027. There's no rolling admission outside the two windows.",
  },
];

export default function ApplyPage({
  searchParams,
}: {
  searchParams?: { chapter?: string };
}) {
  const status = getApplyWindowStatus();
  const chapter = searchParams?.chapter === "eindhoven" ? "eindhoven" : "rotterdam";

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
        {/* Quick facts: who can apply, positions, time commitment */}
        <section className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-3 md:mt-0">
          <div>
            <Tagline className="text-am-text/66">Who Can Apply</Tagline>
            <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/78">
              Any current student at a Dutch university, of any year or background. No
              finance coursework required — Rotterdam members need to be based in or
              around the city for the year.
            </p>
          </div>
          <div>
            <Tagline className="text-am-text/66">Available Positions</Tagline>
            <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/78">
              Analyst seats across five committees — Asset Management, Private Equity,
              Venture Capital, Events, and Marketing. Pick one on the form.
            </p>
          </div>
          <div>
            <Tagline className="text-am-text/66">Weekly Time Commitment</Tagline>
            <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/78">
              Roughly 4–6 hours a week during term, more in the run-up to a thesis
              presentation or a published report deadline.
            </p>
          </div>
        </section>

        {/* Selection stages + interview dates */}
        <section className="mt-20 max-w-column">
          <Tagline className="text-am-text/66">Selection Stages</Tagline>
          <h2 className="mt-3 font-serif text-[24px] leading-tight text-am-text">
            Three stages, same bar for every committee.
          </h2>
          <ol className="mt-8 space-y-6 border-l border-am-text/10 pl-6">
            {selectionStages.map((stage, index) => (
              <li key={stage.name}>
                <p className="font-sans text-[12px] tracking-label uppercase text-am-accent">
                  Stage {index + 1} — {stage.name}
                </p>
                <p className="mt-2 font-serif text-[15px] leading-relaxed text-am-text/75">
                  {stage.detail}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-serif text-[14px] leading-relaxed text-am-text/62">
            Interview dates: there&apos;s no fixed interview week — slots are scheduled on a
            rolling basis after the form closes on September 20, and sent by email once
            a committee lead has reviewed your application.
          </p>
        </section>

        {/* What applicants are evaluated on */}
        <section className="mt-20 max-w-column border-t border-am-text/10 pt-16">
          <Tagline className="text-am-text/66">What You&apos;re Evaluated On</Tagline>
          <ul className="mt-6 space-y-3">
            {evaluationCriteria.map((item) => (
              <li
                key={item}
                className="border-l border-am-text/10 pl-4 font-serif text-[15px] leading-relaxed text-am-text/78"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Rotterdam vs Eindhoven availability */}
        <section className="mt-20 border-t border-am-text/10 pt-16">
          <Tagline className="text-am-text/66">Rotterdam vs. Eindhoven</Tagline>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="border border-am-text/15 p-6">
              <p className="font-sans text-[12px] tracking-label uppercase text-am-accent">
                Rotterdam — founding chapter
              </p>
              <p className="mt-3 font-serif text-[15px] leading-relaxed text-am-text/78">
                Taking applications now, through September 20, 2026. This is the form
                below.
              </p>
            </div>
            <div className="border border-am-text/15 p-6">
              <p className="font-sans text-[12px] tracking-label uppercase text-am-text/60">
                Eindhoven — opening February 2027
              </p>
              <p className="mt-3 font-serif text-[15px] leading-relaxed text-am-text/78">
                Not taking applications for this cohort. Register your interest and
                you&apos;ll hear from us when that window opens.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 max-w-column border-t border-am-text/10 pt-16">
          <Tagline className="text-am-text/66">FAQ</Tagline>
          <dl className="mt-8 space-y-8">
            {faqs.map((item) => (
              <div key={item.q}>
                <dt className="font-serif text-[17px] text-am-text">{item.q}</dt>
                <dd className="mt-2 font-serif text-[15px] leading-relaxed text-am-text/75">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Application form / interest registration */}
        <section className="mt-20 border-t border-am-text/10 pt-16">
          {chapter === "eindhoven" ? (
            <div className="mt-8 max-w-column md:mt-0">
              <p className="font-serif text-[20px] text-am-text">
                Eindhoven opens February 2027.
              </p>
              <p className="mt-4 font-serif text-[15px] leading-relaxed text-am-text/72">
                The Eindhoven chapter isn&apos;t taking applications for this cohort.
                Email us and we&apos;ll reach out directly once that window opens —
                nothing here submits an Eindhoven application.
              </p>
              <a
                href="mailto:info@paretoinvestment.nl?subject=Eindhoven%20interest"
                className="mt-8 inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-all duration-200 hover:scale-[1.03] hover:bg-am-text hover:text-am-bg active:scale-[0.98]"
              >
                Register Interest ↗
              </a>
            </div>
          ) : (
            <>
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
            </>
          )}
        </section>
      </div>
    </main>
  );
}
