# Pareto Investment Society — Website

The website for Pareto Investment Society, an independent, student-led investment
society with chapters in Rotterdam (founding, live) and Eindhoven (opening February
2027). Live at [paretoinvestment.nl](https://paretoinvestment.nl).

Built with Next.js 14 (App Router) and Tailwind CSS, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # production build
npm run start      # run the production build locally
npm run lint       # ESLint
npm run test       # run the test suite once
npm run test:watch # run tests in watch mode
```

## Environment variables

Copy `.env.local.example` to `.env.local` (already git-ignored) and fill in what you
need. Everything is optional — the site works with sample data if nothing is set.

| Variable           | Required | Purpose                                                                                           |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `FINNHUB_API_KEY`  | No       | Enables live quotes in the homepage stock ticker (`src/lib/market-data.ts`). Get a free key at [finnhub.io](https://finnhub.io/register). Without it, the ticker shows labelled sample data — nothing breaks. |

Vercel Analytics (`@vercel/analytics`) is wired in via `<Analytics />` in the root
layout and needs no environment variable — it activates automatically once the site
is deployed on Vercel.

## Architecture

- **`src/app/`** — Next.js App Router routes. Every top-level folder is a page
  (`about`, `society`, `committees`, `our-team`, `research`, `decisions`, `reading`,
  `events`, `apply`, `members`, `press`, `privacy`, `rotterdam`, `eindhoven`), plus
  `house-view/[committee]` for the three coverage teams' house views. `not-found.tsx`
  and `loading.tsx` provide the 404 page and route-level loading state. The one route
  with a live data dependency is `src/app/api/quotes/route.ts`, which backs the
  ticker.
- **`src/lib/`** — content and data as plain TypeScript, kept separate from
  presentation so copy changes don't require touching JSX: `people.ts` (founding
  board, marketing team), `committees.ts`, `coverage-teams.ts`, `house-views.ts`,
  `decisions.ts` (the decision log), `apply-dates.ts` (the application window, in
  Amsterdam local time — see below), `market-data.ts` (ticker symbols and the
  Finnhub integration).
- **`src/components/`** — `brand/` holds the shared visual language (eyebrows,
  taglines, page watermark, person cards, committee icons); `layout/` is the header
  and footer; `home/` and `apply/` hold page-specific sections; `analytics/` wraps
  `@vercel/analytics` event tracking for CTAs.
- **Brand palettes** — Tailwind is extended with three coverage-team palettes in
  `tailwind.config.ts`: `am` (Asset Management — parchment/navy/red/gold), `vc`
  (Venture Capital — navy/parchment/red/gold), `pe` (Private Equity —
  wine/parchment/gold/muted). Custom tokens: `spacing.edge` (`mx-edge`, the site's
  horizontal page margin) and `maxWidth.column` (`max-w-column`, the standard prose
  width).
- **Application window** — `src/lib/apply-dates.ts` defines the open/close dates in
  **Europe/Amsterdam** local time (not UTC) and converts them to the correct UTC
  instant, handling the CEST/CET daylight-saving change automatically. `src/app/apply/page.tsx`
  reads this at request time (`export const dynamic = "force-dynamic"`, since the
  status and the `?chapter=` query param both need to reflect the current moment,
  not whatever was true at the last deploy).
- **Rotterdam vs. Eindhoven applications** — Rotterdam takes real applications
  through the Google Form embed. Eindhoven isn't open yet: its "Register Interest"
  link goes to `/apply?chapter=eindhoven`, which shows an interest-registration card
  instead of the live form.

## Testing

Tests use [Vitest](https://vitest.dev/). Currently covers the application-date
logic (`src/lib/apply-dates.test.ts`) — window status transitions, the
Amsterdam-time conversion, and the CEST/CET boundary. Run with `npm run test`.

## Deployment

The site auto-deploys to [paretoinvestment.nl](https://paretoinvestment.nl) via
Vercel on every push to `main` on GitHub (`aslosnaz2019/ParetoWebsite`). No manual
deploy step — push to `main` and Vercel builds and promotes it.
