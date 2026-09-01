import { NextResponse } from "next/server";
import { getQuotes } from "@/lib/market-data";

export const revalidate = 300;

export async function GET() {
  const { quotes, isLive } = await getQuotes();
  return NextResponse.json({ quotes, isLive });
}
