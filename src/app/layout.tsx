import type { Metadata } from "next";
import "@fontsource/eb-garamond/400.css";
import "@fontsource/eb-garamond/400-italic.css";
import "@fontsource/eb-garamond/500.css";
import "@fontsource/eb-garamond/600.css";
import "@fontsource/eb-garamond/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Pareto Investments",
  description:
    "An independent, student-led investment society. Capped membership, published research, three coverage teams.",
  openGraph: {
    title: "Pareto Investments",
    description:
      "An independent, student-led investment society. Capped membership, published research, three coverage teams.",
    url: "https://paretoinvestments.nl",
    siteName: "Pareto Investments",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pareto Investments",
    description:
      "An independent, student-led investment society. Capped membership, published research, three coverage teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-am-bg text-am-text min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}