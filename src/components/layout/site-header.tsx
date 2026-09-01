"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { Tagline } from "@/components/brand/eyebrow";

const mainLinks = [
  { href: "/society", label: "Society" },
  { href: "/committees", label: "Committees" },
  { href: "/our-team", label: "Our Team" },
];

const insightsLinks = [
  { href: "/research", label: "Research" },
  { href: "/decisions", label: "Decision Log" },
  { href: "/reading", label: "What We Read" },
];

const timelineLinks = [
  { href: "/events", label: "Calendar" },
  { href: "/events", label: "Events" },
];

const joinLinks = [
  { href: "/apply", label: "Apply Now" },
  { href: "/press", label: "Press & Contact" },
];

function DropdownGroup({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="font-sans text-[13px] tracking-label text-vc-gold transition-colors hover:text-vc-accent"
      >
        {label.toUpperCase()}
      </button>

      {/* Invisible bridge so the dropdown doesn't close on the gap */}
      <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />

      <div
        className="invisible absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 translate-y-1
                   border border-am-text/15 bg-am-bg opacity-0 shadow-sm transition-all duration-150
                   group-hover:visible group-hover:translate-y-2 group-hover:opacity-100
                   group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100"
      >
        <ul className="py-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-2 font-serif text-[15px] text-am-text hover:bg-am-text/5 hover:text-am-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-vc-gold bg-vc-bg/95 backdrop-blur">
      <div className="mx-edge flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Pareto Investments — Home">
          <BrandLockup tone="light" />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          <DropdownGroup label="Society" links={mainLinks} />
          <DropdownGroup label="Insights" links={insightsLinks} />
          <DropdownGroup label="Timeline" links={timelineLinks} />
          <DropdownGroup label="Join" links={joinLinks} />
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-vc-gold" />
          <span className="h-px w-6 bg-vc-gold" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t-4 border-am-gold bg-am-bg md:hidden">
          <div className="mx-edge grid grid-cols-1 gap-8 py-8">
            <div>
              <Tagline className="mb-3 text-am-text/50">Main</Tagline>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-[16px] text-am-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Tagline className="mb-3 text-am-text/50">Insights</Tagline>
              <ul className="space-y-2">
                {insightsLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-[16px] text-am-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Tagline className="mb-3 text-am-text/50">Timeline</Tagline>
              <ul className="space-y-2">
                {timelineLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-[16px] text-am-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Tagline className="mb-3 text-am-text/50">Join</Tagline>
              <ul className="space-y-2">
                {joinLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-serif text-[16px] text-am-text"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}