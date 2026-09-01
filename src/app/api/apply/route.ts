import { NextRequest, NextResponse } from "next/server";

/**
 * Placeholder API route for application submissions.
 *
 * TODO before this is real:
 * 1. Wire up Supabase — insert into an `applications` table, keyed to a
 *    magic-link session (see Supabase Auth's signInWithOtp).
 * 2. Store any uploaded CV in Supabase Storage and save the resulting path.
 * 3. Send a confirmation email via Resend on successful insert.
 *
 * Until Supabase/Resend credentials are configured, this route intentionally
 * returns 501 so the UI surfaces a clear "not connected yet" state instead of
 * silently pretending to succeed.
 */
export async function POST(req: NextRequest) {
  await req.json().catch(() => null);

  return NextResponse.json(
    {
      error:
        "Not implemented — Supabase and Resend are not yet configured for this deployment.",
    },
    { status: 501 }
  );
}
