export type CoverageTeamId = "asset-management" | "private-equity" | "venture-growth";

export interface CoverageTeam {
  id: CoverageTeamId;
  shortName: string;
  fullName: string;
  tagline: string;
  description: string;
  palette: "am" | "pe" | "vc";
  href: string;
}

export const coverageTeams: CoverageTeam[] = [
  {
    id: "asset-management",
    shortName: "AM",
    fullName: "Asset Management",
    tagline: "Public-equity research and portfolio construction.",
    description:
      "Sector deep-dives, single-name theses, and the virtual portfolio tracking its own record alongside the work.",
    palette: "am",
    href: "/house-view/asset-management",
  },
  {
    id: "private-equity",
    shortName: "PE",
    fullName: "Private Equity",
    tagline: "LBO case studies and mid-market European deal reviews.",
    description:
      "Precedent transactions and deal reviews, held to the same publishing standard as the other two teams.",
    palette: "pe",
    href: "/house-view/private-equity",
  },
  {
    id: "venture-growth",
    shortName: "V&G",
    fullName: "Venture & Growth",
    tagline: "Early-stage ecosystem analysis across Benelux and Europe.",
    description:
      "Sector landscapes and growth-equity theses, tracked against a virtual mandate like the others.",
    palette: "vc",
    href: "/house-view/venture-growth",
  },
];
