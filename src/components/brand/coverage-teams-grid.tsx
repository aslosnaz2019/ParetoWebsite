import Link from "next/link";
import { Tagline } from "@/components/brand/eyebrow";
import {
  AssetManagementIcon,
  PrivateEquityIcon,
  VentureGrowthIcon,
} from "@/components/brand/committee-icons";
import { coverageTeams } from "@/lib/coverage-teams";

const paletteClasses: Record<string, { bg: string; text: string; accent: string }> = {
  am: { bg: "bg-am-bg", text: "text-am-text", accent: "text-am-accent" },
  pe: { bg: "bg-pe-bg", text: "text-pe-text", accent: "text-pe-gold" },
  vc: { bg: "bg-vc-bg", text: "text-vc-text", accent: "text-vc-accent" },
};

const teamIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "asset-management": AssetManagementIcon,
  "private-equity": PrivateEquityIcon,
  "venture-growth": VentureGrowthIcon,
};

/**
 * The three coverage-team cards (Asset Management / Private Equity /
 * Venture & Growth) — the society's "departments". Shared between the
 * homepage and the Rotterdam chapter page so the copy never drifts.
 */
export function CoverageTeamsGrid() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-am-text/10 md:grid-cols-3">
      {coverageTeams.map((team) => {
        const palette = paletteClasses[team.palette];
        const Icon = teamIcons[team.id];
        return (
          <Link
            key={team.id}
            href={team.href}
            className={`group relative flex min-h-[280px] flex-col justify-between p-8 ${palette.bg} ${palette.text} transition-opacity hover:opacity-90 ${
              team.palette === "pe" ? "grain" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <Tagline className="opacity-60">{team.shortName}</Tagline>
              {Icon && <Icon className="h-6 w-6 opacity-70" />}
            </div>
            <div>
              <h2 className="font-serif text-[24px] leading-tight">{team.fullName}</h2>
              <p className="mt-3 font-serif text-[15px] leading-relaxed opacity-75">
                {team.tagline}
              </p>
              <span
                className={`mt-6 inline-block font-sans text-[12px] tracking-label uppercase ${palette.accent}`}
              >
                House view →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
