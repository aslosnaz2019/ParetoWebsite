import { NextResponse } from "next/server";
import { getQuotes, SAMPLE_QUOTES } from "@/lib/market-data";

export const revalidate = 300;

export async function GET() {
  try {
    const { quotes, isLive } = await getQuotes();
    return NextResponse.json({ quotes, isLive });
  } catch (error) {
    // getQuotes() already falls back to sample data internally, but this
    // guards against anything unexpected (a bad response shape, etc.) so
    // the ticker degrades gracefully instead of the route 500ing.
    console.error("GET /api/quotes failed", error);
    return NextResponse.json(
      { quotes: SAMPLE_QUOTES, isLive: false, error: "quotes_unavailable" },
      { status: 200 }
    );
  }
}
