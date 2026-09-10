type IconProps = {
  className?: string;
};

/** Shared stroke defaults so every committee icon reads as one family. */
const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AssetManagementIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 22V13" />
      <path d="M13.5 22V6" />
      <path d="M22 22V16" />
      <path d="M4 22h20" />
    </svg>
  );
}

export function PrivateEquityIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 22V9.5L14 4l9 5.5V22" />
      <path d="M4 22h20" />
      <path d="M10.5 22v-6h7v6" />
    </svg>
  );
}

export function VentureGrowthIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 22V12" />
      <path d="M14 12c0-4 -3-6-7-6 0 4 3 6 7 6Z" />
      <path d="M14 15c0-4 3-7 8-7 0 4.5 -3.5 7-8 7Z" />
    </svg>
  );
}

export function EventsIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="4" y="6" width="20" height="17" rx="1.5" />
      <path d="M4 11h20" />
      <path d="M9 3v5" />
      <path d="M19 3v5" />
      <path d="M9 15.5h.01" />
      <path d="M14 15.5h.01" />
      <path d="M19 15.5h.01" />
    </svg>
  );
}

export function MarketingIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 12.5v3a1.5 1.5 0 0 0 1.5 1.5H7l4.5 5V6l-4.5 5H5.5A1.5 1.5 0 0 0 4 12.5Z" />
      <path d="M17 5.5c3 2 3 15 0 17" />
      <path d="M11.5 6v11" opacity="0" />
      <path d="M21.5 8.5c1.6 1.4 1.6 9.6 0 11" />
    </svg>
  );
}
