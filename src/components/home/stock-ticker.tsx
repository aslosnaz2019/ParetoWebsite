"use client";

import { useEffect, useState } from "react";
import { Tagline } from "@/components/brand/eyebrow";
import { SAMPLE_QUOTES, type Quote } from "@/lib/market-data";

/**
 * A slow, continuous scroll of coverage-adjacent tickers. Falls back to
 * clearly-labelled sample data until FINNHUB_API_KEY is configured — see
 * .env.local.example.
 */
export function StockTicker() {
  const [quotes, setQuotes] = useState<Quote[]>(SAMPLE_QUOTES);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/quotes")
      .then((res) => res.json())
      .then((data: { quotes: Quote[]; isLive: boolean }) => {
        if (!cancelled && data.quotes?.length) {
          setQuotes(data.quotes);
          setIsLive(data.isLive);
        }
      })
      .catch(() => {
        /* keep sample data on failure */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const track = [...quotes, ...quotes];

  return (
    <div className="border-y border-am-text/10 py-3">
      <div className="mb-2 flex items-center justify-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-am-accent" : "bg-am-text/30"}`}
          aria-hidden="true"
        />
        <Tagline className="text-am-text/40">
          {isLive ? "Live Market" : "Sample Market Data"}
        </Tagline>
      </div>

      <div className="group relative overflow-hidden">
        <div className="animate-ticker flex w-max gap-10 group-hover:[animation-play-state:paused]">
          {track.map((q, i) => (
            <div key={`${q.symbol}-${i}`} className="flex shrink-0 items-baseline gap-2">
              <span className="font-sans text-[12px] tracking-label uppercase text-am-text/50">
                {q.symbol}
              </span>
              <span className="font-serif text-[15px] text-am-text">
                {q.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span
                className={`font-sans text-[12px] ${
                  q.changePercent >= 0 ? "text-emerald-700" : "text-am-accent"
                }`}
              >
                {q.changePercent >= 0 ? "+" : ""}
                {q.changePercent.toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
