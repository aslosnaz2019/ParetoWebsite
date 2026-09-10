import Link from "next/link";
import { BELGIUM_PATH, NL_PROVINCE_PATHS, NL_VIEWBOX } from "@/lib/netherlands-paths";

type CityPin = {
  name: string;
  href: string;
  x: number;
  y: number;
  labelAnchor: "start" | "end";
  labelDx: number;
  /** Status line revealed on hover/focus, e.g. "Founding chapter". */
  status: string;
  /** Not a real chapter yet — pin renders as an outline instead of solid. */
  comingSoon?: boolean;
};

// Coordinates are approximate, hand-placed within the correct province
// (Rotterdam in Zuid-Holland, Eindhoven in Noord-Brabant) — not surveyed.
// Leuven sits inside the schematic Belgium silhouette below the Netherlands
// outline, which is illustrative rather than a real border trace.
const cities: CityPin[] = [
  {
    name: "Rotterdam",
    href: "/rotterdam",
    x: 57,
    y: 128,
    labelAnchor: "end",
    labelDx: -7,
    status: "Founding chapter",
  },
  {
    name: "Eindhoven",
    href: "/eindhoven",
    x: 108,
    y: 178,
    labelAnchor: "start",
    labelDx: 7,
    status: "Opens February 2027",
  },
  {
    name: "Leuven",
    href: "/belgium",
    x: 100,
    y: 271,
    labelAnchor: "start",
    labelDx: 7,
    status: "Coming soon",
    comingSoon: true,
  },
];

/**
 * Real (simplified) outline of the Netherlands' twelve provinces, styled to
 * match the brand system, with Rotterdam, Eindhoven, and Leuven marked as
 * clickable navigation points. Belgium itself is drawn as a deliberately
 * schematic silhouette (dashed, muted) since it exists here only to host
 * the future Leuven marker, not as a surveyed boundary.
 */
export function NetherlandsMap() {
  return (
    <svg
      viewBox={NL_VIEWBOX}
      className="w-full max-w-[540px]"
      role="img"
      aria-label="Map of the Netherlands and Belgium — select a chapter"
    >
      {NL_PROVINCE_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="#C8AF6E"
          fillOpacity={0.35}
          stroke="#F5F0E6"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
      ))}

      {/* Belgium — schematic only, styled distinctly to read as "not surveyed" */}
      <path
        d={BELGIUM_PATH}
        fill="#C8AF6E"
        fillOpacity={0.12}
        stroke="#F5F0E6"
        strokeOpacity={0.7}
        strokeWidth={0.6}
        strokeDasharray="2.6 2.2"
        strokeLinejoin="round"
      />

      {/* City pins — hover or focus reveals each chapter's status */}
      {cities.map((city) => (
        <Link key={city.name} href={city.href} aria-label={`Go to ${city.name} — ${city.status}`}>
          <g className="group cursor-pointer" tabIndex={0}>
            <circle cx={city.x} cy={city.y} r="8" className="fill-transparent" />
            {city.comingSoon ? (
              <circle
                cx={city.x}
                cy={city.y}
                r="2.6"
                fill="none"
                strokeWidth={0.8}
                className="stroke-am-text/70 transition-colors group-hover:stroke-am-accent group-focus:stroke-am-accent"
              />
            ) : (
              <circle
                cx={city.x}
                cy={city.y}
                r="2.6"
                className="fill-am-text transition-colors group-hover:fill-am-accent group-focus:fill-am-accent"
              />
            )}
            <text
              x={city.x + city.labelDx}
              y={city.y + 1.5}
              textAnchor={city.labelAnchor}
              className="font-sans text-[6px] tracking-label uppercase fill-am-text transition-colors group-hover:fill-am-accent group-focus:fill-am-accent"
            >
              {city.name}
            </text>
            <text
              x={city.x + city.labelDx}
              y={city.y + 7}
              textAnchor={city.labelAnchor}
              className="font-sans text-[4.5px] tracking-label uppercase fill-am-text/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
            >
              {city.status}
            </text>
          </g>
        </Link>
      ))}
    </svg>
  );
}
