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
];
