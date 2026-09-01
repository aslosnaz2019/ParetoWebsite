export const APPLICATIONS_OPEN = new Date("2026-08-15T00:00:00Z");
export const APPLICATIONS_CLOSE = new Date("2026-09-20T23:59:59Z");

export type ApplyWindowStatus = "before" | "open" | "closed";

export function getApplyWindowStatus(now: Date = new Date()): ApplyWindowStatus {
  if (now < APPLICATIONS_OPEN) return "before";
  if (now > APPLICATIONS_CLOSE) return "closed";
  return "open";
}

export function daysUntilOpen(now: Date = new Date()): number {
  const diff = APPLICATIONS_OPEN.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
