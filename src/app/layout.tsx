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
import { Analytics } from "@vercel/analytics/react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const siteUrl = "https://paretoinvestment.nl";
const description =
  "An independent, student-led investment society. Capped membership, published research, three coverage teams.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pareto Investment Society",
    template: "%s | Pareto Investment Society",
  },
  description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Pareto Investment Society",
    description,
    url: siteUrl,
    siteName: "Pareto Investment Society",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Pareto Investment Society" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pareto Investment Society",
    description,
    images: ["/og-image.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pareto Investment Society",
  url: siteUrl,
  logo: `${siteUrl}/images/pareto-logo.png`,
  description,
  sameAs: [
    "https://www.instagram.com/paretoinvestmentsociety",
    "https://www.linkedin.com/company/pareto-investment-society/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased bg-am-bg text-am-text min-h-screen flex flex-col overflow-x-hidden">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
