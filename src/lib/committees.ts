export interface Committee {
  id: string;
  /** "Committee No. 0X" numbering — only the three investment desks carry one. */
  number?: number;
  name: string;
  description: string;
  responsibilities: string[];
  /** Link to the committee's dedicated page, where one exists. */
  href?: string;
  linkLabel?: string;
  palette?: "am" | "pe" | "vc";
}

export const committees: Committee[] = [
  {
    id: "asset-management",
    number: 1,
    name: "Asset Management",
    description:
      "You'll join our student-run investment fund and cover one of three sectors — TMT, consumer & healthcare, or financials & industrials. You'll research companies, build investment ideas, pitch them to the team, and track how they perform. Over the year, you'll know your sector properly, develop your own views, and learn to back your calls with solid research and valuation.",
    responsibilities: [
      "Research companies across your sector and decide which ideas are worth taking further.",
      "Build the full investment case behind your strongest ideas, from the business to the valuation.",
      "Defend those ideas in front of the committee and respond to pushback on your assumptions.",
      "Keep following the companies you cover and update your view when the thesis or the facts change.",
    ],
    href: "/house-view/asset-management",
    linkLabel: "House view",
    palette: "am",
  },
  {
    id: "private-equity",
    number: 2,
    name: "Private Equity",
    description:
      "You'll work through companies and deals across the mid-market European landscape, deciding which are worth taking further and building the case behind them. Over the year, you'll learn to underwrite a deal from entry to exit — not just fill in a pre-built model.",
    responsibilities: [
      "Screen companies and transactions for potential buyout cases.",
      "Build and present LBO cases around the strongest opportunities.",
      "Challenge the entry price, financing, operating assumptions, and exit behind each return.",
      "Turn selected work into deal breakdowns and broader PE research.",
    ],
    href: "/house-view/private-equity",
    linkLabel: "House view",
    palette: "pe",
  },
  {
    id: "venture-growth",
    number: 3,
    name: "Venture & Growth",
    description:
      "You'll cover one VC sector — technology, consumer, or healthcare — and turn your research into published investment work throughout the year. You'll track emerging companies and funding trends, build sector theses, and write deep dives on startups worth watching. The strongest work comes together in our annual European venture report.",
    responsibilities: [
      "Track your vertical and identify companies, rounds, and themes worth covering.",
      "Build investment cases around selected startups and defend your view.",
      "Develop deeper sector theses and map the companies shaping the space.",
      "Turn the strongest work into published investment memos and research.",
    ],
    href: "/house-view/venture-growth",
    linkLabel: "House view",
    palette: "vc",
  },
  {
    id: "events",
    name: "Events",
    description:
      "The team that turns a calendar into a room full of people. You'll plan the nights that make thirty strangers feel like one committee — and the one hour a quarter where a real investor stands in the room and says something worth remembering.",
    responsibilities: [
      "Plan the socials that make new members actually know each other by week three.",
      "Source and host the speakers who change how the room thinks about the industry.",
      "Run the launch event, the December drop party, and everything in between.",
      "Build the one night a semester people plan their whole semester around.",
    ],
    href: "/events",
    linkLabel: "Calendar",
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "The team that decides how Pareto looks, sounds, and shows up. You'll run every channel Pareto has, and decide what the applications, the drop, and the everyday posts actually look like. Nothing goes out with the Pareto name on it before it goes through you.",
    responsibilities: [
      "Shoot and edit the content that puts a face behind the research — reels, recaps, behind-the-scenes.",
      "Design the visual system for every drop, from the first carousel to the December cover page.",
      "Build the campaign that gets the next thirty seats filled with the right applicants.",
    ],
  },
];
