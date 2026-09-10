const TIME_ZONE = "Europe/Amsterdam";

/**
 * Converts a wall-clock date/time as it would read on a clock in `timeZone`
 * into the corresponding absolute UTC instant. Handles the CEST/CET
 * daylight-saving transition automatically via Intl, so deadlines defined
 * here stay correct without a date library and without drifting by the
 * UTC+1/UTC+2 offset difference.
 */
export function zonedTimeToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  timeZone: string
): Date {
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, second);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const lookup: Record<string, string> = {};
  for (const part of formatter.formatToParts(new Date(utcGuess))) {
    if (part.type !== "literal") lookup[part.type] = part.value;
  }

  // What our guess actually renders as in the target zone, re-interpreted as UTC.
  const renderedAsUtc = Date.UTC(
    Number(lookup.year),
    Number(lookup.month) - 1,
    Number(lookup.day),
    Number(lookup.hour),
    Number(lookup.minute),
    Number(lookup.second)
  );

  // The gap between the guess and how it rendered is exactly the zone's offset.
  return new Date(utcGuess - (renderedAsUtc - utcGuess));
}

// Applications open August 15, 2026 at 00:00 and close September 20, 2026 at
// 23:59:59 — both as read on a clock in the Netherlands (Europe/Amsterdam),
// not raw UTC. Most applicants are reading these dates on Dutch time, so the
// window is defined in Dutch wall-clock time and converted to UTC here.
export const APPLICATIONS_OPEN = zonedTimeToUtc(2026, 8, 15, 0, 0, 0, TIME_ZONE);
export const APPLICATIONS_CLOSE = zonedTimeToUtc(2026, 9, 20, 23, 59, 59, TIME_ZONE);

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
