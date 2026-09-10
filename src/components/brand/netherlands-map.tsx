import Link from "next/link";
import {
  BELGIUM_PROVINCE_PATHS,
  NL_PROVINCE_PATHS,
  NL_VIEWBOX,
} from "@/lib/netherlands-paths";

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
// Leuven's coordinates are projected from its real lon/lat using the same
// affine transform calibrated against these two pins (see
// netherlands-paths.ts), so it lands inside the real Vlaams Brabant
// province shape below.
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
    x: 68.5,
    y: 236.9,
    labelAnchor: "start",
    labelDx: 7,
    status: "Coming soon",
    comingSoon: true,
  },
];

/**
 * Real (simplified) outline of the Netherlands' twelve provinces and
 * Belgium's provinces (plus Brussels), styled to match the brand system,
 * with Rotterdam, Eindhoven, and Leuven marked as clickable navigation
 * points. Both countries are real, surveyed administrative geometry
 * rendered in one shared coordinate space — see netherlands-paths.ts.
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
          key={`nl-${i}`}
          d={d}
          fill="#C8AF6E"
          fillOpacity={0.35}
          stroke="#F5F0E6"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
      ))}

      {BELGIUM_PROVINCE_PATHS.map((d, i) => (
        <path
          key={`be-${i}`}
          d={d}
          fill="#C8AF6E"
          fillOpacity={0.35}
          stroke="#F5F0E6"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />
      ))}

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
