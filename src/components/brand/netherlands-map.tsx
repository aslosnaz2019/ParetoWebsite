import Link from "next/link";
import { NL_PROVINCE_PATHS, NL_VIEWBOX } from "@/lib/netherlands-paths";

type CityPin = {
  name: string;
  href: string;
  x: number;
  y: number;
  labelAnchor: "start" | "end";
  labelDx: number;
};

// Coordinates are approximate, hand-placed within the correct province
// (Rotterdam in Zuid-Holland, Eindhoven in Noord-Brabant) — not surveyed.
const cities: CityPin[] = [
  { name: "Rotterdam", href: "/rotterdam", x: 57, y: 128, labelAnchor: "end", labelDx: -7 },
  { name: "Eindhoven", href: "/eindhoven", x: 108, y: 178, labelAnchor: "start", labelDx: 7 },
];

/**
 * Real (simplified) outline of the Netherlands' twelve provinces, styled to
 * match the brand system, with Rotterdam and Eindhoven marked as clickable
 * navigation points.
 */
export function NetherlandsMap() {
  return (
    <svg
      viewBox={NL_VIEWBOX}
      className="w-full max-w-[540px]"
      role="img"
      aria-label="Map of the Netherlands — select Rotterdam or Eindhoven"
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

      {/* City pins */}
      {cities.map((city) => (
        <Link key={city.name} href={city.href} aria-label={`Go to ${city.name}`}>
          <g className="group cursor-pointer">
            <circle cx={city.x} cy={city.y} r="7" className="fill-transparent" />
            <circle
              cx={city.x}
              cy={city.y}
              r="2.6"
              className="fill-am-text transition-colors group-hover:fill-am-accent"
            />
            <text
              x={city.x + city.labelDx}
              y={city.y + 1.5}
              textAnchor={city.labelAnchor}
              className="font-sans text-[6px] tracking-label uppercase fill-am-text transition-colors group-hover:fill-am-accent"
            >
              {city.name}
            </text>
          </g>
        </Link>
      ))}
    </svg>
  );
}
