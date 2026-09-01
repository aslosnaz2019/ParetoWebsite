export interface Quote {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
}

/**
 * Symbols with a deliberate tie to the society: Philips and ASML anchor
 * Eindhoven, ING/Unilever/Adyen/Prosus anchor Rotterdam/Benelux, and KKR /
 * Blackstone represent the Private Equity coverage team.
 */
export const TICKER_SYMBOLS: { symbol: string; name: string }[] = [
  { symbol: "ASML", name: "ASML Holding" },
  { symbol: "PHIA.AS", name: "Philips" },
  { symbol: "INGA.AS", name: "ING Group" },
  { symbol: "PRX.AS", name: "Prosus" },
  { symbol: "HEIA.AS", name: "Heineken" },
  { symbol: "KKR", name: "KKR & Co." },
  { symbol: "BX", name: "Blackstone" },
  { symbol: "ADYEN.AS", name: "Adyen" },
];

/**
 * Sample quotes shown when FINNHUB_API_KEY isn't configured, so the ticker
 * never sits empty during development or before the key is added. Values
 * are illustrative, not real prices.
 */
export const SAMPLE_QUOTES: Quote[] = [
  { symbol: "ASML", name: "ASML Holding", price: 968.4, changePercent: 1.2 },
  { symbol: "PHIA.AS", name: "Philips", price: 28.6, changePercent: -0.4 },
  { symbol: "INGA.AS", name: "ING Group", price: 17.85, changePercent: 0.6 },
  { symbol: "PRX.AS", name: "Prosus", price: 41.3, changePercent: 2.1 },
  { symbol: "HEIA.AS", name: "Heineken", price: 74.2, changePercent: -0.2 },
  { symbol: "KKR", name: "KKR & Co.", price: 132.7, changePercent: 0.9 },
  { symbol: "BX", name: "Blackstone", price: 158.1, changePercent: -1.1 },
  { symbol: "ADYEN.AS", name: "Adyen", price: 1620.0, changePercent: 3.4 },
];

export async function getQuotes(): Promise<{ quotes: Quote[]; isLive: boolean }> {
  const apiKey = process.env.FINNHUB_API_KEY;
  if (!apiKey) {
    return { quotes: SAMPLE_QUOTES, isLive: false };
  }

  try {
    const results = await Promise.all(
      TICKER_SYMBOLS.map(async ({ symbol, name }) => {
        const res = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${apiKey}`,
          { next: { revalidate: 300 } }
        );
        if (!res.ok) return null;
        const data = (await res.json()) as { c?: number; dp?: number };
        if (typeof data.c !== "number" || data.c === 0) return null;
        return { symbol, name, price: data.c, changePercent: data.dp ?? 0 };
      })
    );

    const quotes = results.filter((q): q is Quote => q !== null);
    if (quotes.length === 0) {
      return { quotes: SAMPLE_QUOTES, isLive: false };
    }
    return { quotes, isLive: true };
  } catch {
    return { quotes: SAMPLE_QUOTES, isLive: false };
  }
}
