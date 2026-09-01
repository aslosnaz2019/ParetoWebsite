export interface Decision {
  slug: string;
  title: string;
  date: string;
  reasoning: string;
}

export const decisions: Decision[] = [
  {
    slug: "why-we-capped-at-30-members",
    title: "Why we capped at 30 members",
    date: "June 2026",
    reasoning:
      "Selection is the audition for the publishing standard. Thirty seats per chapter, per cohort, keeps the bar high enough that every accepted thesis is defensible, and small enough that the founder board can review each one directly.",
  },
  {
    slug: "why-we-deferred-the-platform-to-december",
    title: "Why we deferred the platform to December",
    date: "June 2026",
    reasoning:
      "The first cohort onboards in September, but their research output doesn't need platform-backed trade discipline until the December drop. Notion and TradingView cover the interim. Building in October–November means designing against three months of real workflow signal instead of a guess.",
  },
  {
    slug: "why-we-changed-vc-strategy-no-03",
    title: "Why we changed VC Strategy No. 03 from Power Law to The Mafia",
    date: "June 2026",
    reasoning:
      "Power Law described an outcome, not a decision process. The Mafia names the actual mechanism — founder networks that compound advantage across companies — which is what the Venture & Growth team screens for in practice.",
  },
];
