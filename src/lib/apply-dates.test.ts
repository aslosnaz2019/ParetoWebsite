import { describe, expect, it } from "vitest";
import {
  APPLICATIONS_CLOSE,
  APPLICATIONS_OPEN,
  daysUntilOpen,
  getApplyWindowStatus,
  zonedTimeToUtc,
} from "./apply-dates";

describe("zonedTimeToUtc", () => {
  it("converts Amsterdam summer time (CEST, UTC+2) to the correct UTC instant", () => {
    // 2026-08-15 00:00 in Amsterdam is 2026-08-14 22:00 UTC during CEST.
    const result = zonedTimeToUtc(2026, 8, 15, 0, 0, 0, "Europe/Amsterdam");
    expect(result.toISOString()).toBe("2026-08-14T22:00:00.000Z");
  });

  it("converts Amsterdam winter time (CET, UTC+1) to the correct UTC instant", () => {
    // 2026-01-15 00:00 in Amsterdam is 2026-01-14 23:00 UTC during CET.
    const result = zonedTimeToUtc(2026, 1, 15, 0, 0, 0, "Europe/Amsterdam");
    expect(result.toISOString()).toBe("2026-01-14T23:00:00.000Z");
  });

  it("round-trips back to the requested wall-clock time in that zone", () => {
    const result = zonedTimeToUtc(2026, 9, 20, 23, 59, 59, "Europe/Amsterdam");
    const rendered = result.toLocaleString("en-GB", {
      timeZone: "Europe/Amsterdam",
      hour12: false,
    });
    expect(rendered).toBe("20/09/2026, 23:59:59");
  });
});

describe("application window dates", () => {
  it("opens and closes at the intended Amsterdam wall-clock times", () => {
    expect(APPLICATIONS_OPEN.toISOString()).toBe("2026-08-14T22:00:00.000Z");
    expect(APPLICATIONS_CLOSE.toISOString()).toBe("2026-09-20T21:59:59.000Z");
  });
});

describe("getApplyWindowStatus", () => {
  it("is 'before' ahead of the open date", () => {
    const now = new Date("2026-07-01T00:00:00Z");
    expect(getApplyWindowStatus(now)).toBe("before");
  });

  it("is 'open' inside the window", () => {
    const now = new Date("2026-09-01T00:00:00Z");
    expect(getApplyWindowStatus(now)).toBe("open");
  });

  it("is 'open' in the last second before the Amsterdam-local close time", () => {
    const now = new Date(APPLICATIONS_CLOSE.getTime() - 1000);
    expect(getApplyWindowStatus(now)).toBe("open");
  });

  it("is 'closed' after the close date", () => {
    const now = new Date("2026-10-01T00:00:00Z");
    expect(getApplyWindowStatus(now)).toBe("closed");
  });

  it("is 'closed' in the first second after the Amsterdam-local close time", () => {
    const now = new Date(APPLICATIONS_CLOSE.getTime() + 1000);
    expect(getApplyWindowStatus(now)).toBe("closed");
  });
});

describe("daysUntilOpen", () => {
  it("counts down to the open date", () => {
    const now = new Date(APPLICATIONS_OPEN.getTime() - 3 * 24 * 60 * 60 * 1000);
    expect(daysUntilOpen(now)).toBe(3);
  });

  it("never goes negative once the window has opened", () => {
    const now = new Date(APPLICATIONS_OPEN.getTime() + 1000);
    expect(daysUntilOpen(now)).toBe(0);
  });
});
