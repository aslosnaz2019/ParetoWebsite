type BrandLockupProps = {
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Three rising bars + PARETO wordmark + INVESTMENT SOCIETY subtitle.
 * "tone=light" is for use on dark (navy / wine) backgrounds.
 */
export function BrandLockup({ tone = "dark", className = "" }: BrandLockupProps) {
  const barColor = tone === "dark" ? "#101A38" : "#F5F0E6";
  const textColor = tone === "dark" ? "text-am-text" : "text-am-bg";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true">
        <rect x="0" y="10" width="6" height="10" fill={barColor} />
        <rect x="10" y="5" width="6" height="15" fill={barColor} />
        <rect x="20" y="0" width="6" height="20" fill={barColor} />
      </svg>
      <div className="leading-none">
        <div className={`font-sans font-medium tracking-label text-[13px] ${textColor}`}>
          PARETO
        </div>
        <div className={`font-sans text-[9px] tracking-label ${textColor} opacity-70`}>
          INVESTMENT SOCIETY
        </div>
      </div>
    </div>
  );
}
