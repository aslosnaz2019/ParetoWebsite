export interface HouseViewEntry {
  headline: string;
  date: string;
  paragraphs: string[];
}

export interface HouseViewData {
  committee: "asset-management" | "private-equity" | "venture-growth";
  fullName: string;
  palette: "am" | "pe" | "vc";
  current: HouseViewEntry | null;
  archive: HouseViewEntry[];
}

export const houseViews: Record<string, HouseViewData> = {
  "asset-management": {
    committee: "asset-management",
    fullName: "Asset Management",
    palette: "am",
    current: null,
    archive: [],
  },
  "private-equity": {
    committee: "private-equity",
    fullName: "Private Equity",
    palette: "pe",
    current: null,
    archive: [],
  },
  "venture-growth": {
    committee: "venture-growth",
    fullName: "Venture & Growth",
    palette: "vc",
    current: null,
    archive: [],
  },
};
