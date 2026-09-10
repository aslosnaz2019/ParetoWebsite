import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Canonical host is the apex domain (paretoinvestment.nl) — this matches
// metadataBase, the sitemap, and Organization JSON-LD in layout.tsx. This
// redirect is a code-level safety net so www always lands on the apex
// domain even if a Vercel Domains dashboard redirect isn't (or stops
// being) configured; a 308 preserves the request method.
const CANONICAL_HOST = "paretoinvestment.nl";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  if (host && host.toLowerCase() === `www.${CANONICAL_HOST}`) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except static assets and Next internals, so the
     * redirect applies site-wide without adding overhead to asset requests.
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
