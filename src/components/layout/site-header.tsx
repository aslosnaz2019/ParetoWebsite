"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLockup } from "@/components/brand/brand-lockup";
import { Tagline } from "@/components/brand/eyebrow";
import { track } from "@vercel/analytics";

const mainLinks = [
  { href: "/about", label: "About Us" },
  { href: "/society", label: "Society" },
  { href: "/committees", label: "Committees" },
  { href: "/our-team", label: "Our Team" },
];

const insightsLinks = [
  { href: "/research", label: "Research" },
  { href: "/decisions", label: "Decision Log" },
  { href: "/reading", label: "What We Read" },
];

const joinLinks = [
  { href: "/apply", label: "Apply Now" },
  { href: "/press", label: "Press & Contact" },
];

function isActiveHref(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function DropdownGroup({
  label,
  links,
  pathname,
}: {
  label: string;
  links: { href: string; label: string }[];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const groupActive = links.some((link) => isActiveHref(pathname, link.href));

  // Close on click outside the group.
  useEffect(() => {
    if (!open) return;
    const onClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="group relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`font-sans text-[13px] tracking-label transition-colors ${
          groupActive ? "text-vc-accent" : "text-vc-gold hover:text-vc-accent"
        }`}
      >
        {label.toUpperCase()}
      </button>

      {/* Invisible bridge so the dropdown doesn't close on the gap */}
      <div className="absolute left-1/2 top-full h-3 w-full -translate-x-1/2" />

      <div
        className={`absolute left-1/2 top-full z-50 w-48 -translate-x-1/2 translate-y-1
                   border border-am-text/15 bg-am-bg shadow-sm transition-all duration-150
                   ${open ? "visible translate-y-2 opacity-100" : "invisible opacity-0"}`}
      >
        <ul className="py-2">
          {links.map((link) => {
            const active = isActiveHref(pathname, link.href);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => {
                    if (link.label === "Apply Now") track("apply_cta_click", { source: "header_nav" });
                    setOpen(false);
                  }}
                  aria-current={active ? "page" : undefined}
                  className={`block px-4 py-2 font-serif text-[15px] transition-colors duration-150 hover:bg-am-text/5 hover:text-am-accent ${
                    active ? "text-am-accent" : "text-am-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/** Thin gold line under the header that fills left-to-right with how far
 *  down the page you've scrolled, instead of just sitting there static. */
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="h-1 w-full bg-vc-gold/25">
      <div
        className="h-full origin-left bg-vc-gold transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const eventsActive = isActiveHref(pathname, "/events");

  return (
    <header className="sticky top-0 z-50 bg-vc-bg/95 backdrop-blur">
      <div className="mx-edge flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Pareto Investments — Home">
          <BrandLockup tone="light" />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          <DropdownGroup label="Society" links={mainLinks} pathname={pathname} />
          <DropdownGroup label="Insights" links={insightsLinks} pathname={pathname} />
          <Link
            href="/events"
            aria-current={eventsActive ? "page" : undefined}
            className={`font-sans text-[13px] tracking-label transition-colors ${
              eventsActive ? "text-vc-accent" : "text-vc-gold hover:text-vc-accent"
            }`}
          >
            EVENTS
          </Link>
          <DropdownGroup label="Join" links={joinLinks} pathname={pathname} />
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

      <ScrollProgressBar />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t-4 border-am-gold bg-am-bg md:hidden">
          <div className="mx-edge grid grid-cols-1 gap-8 py-8">
            <div>
              <Tagline className="mb-3 text-am-text/66">Main</Tagline>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActiveHref(pathname, link.href) ? "page" : undefined}
                      className={`font-serif text-[16px] ${
                        isActiveHref(pathname, link.href) ? "text-am-accent" : "text-am-text"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Tagline className="mb-3 text-am-text/66">Insights</Tagline>
              <ul className="space-y-2">
                {insightsLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      aria-current={isActiveHref(pathname, link.href) ? "page" : undefined}
                      className={`font-serif text-[16px] ${
                        isActiveHref(pathname, link.href) ? "text-am-accent" : "text-am-text"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Tagline className="mb-3 text-am-text/66">Timeline</Tagline>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/events"
                    onClick={() => setMobileOpen(false)}
                    aria-current={eventsActive ? "page" : undefined}
                    className={`font-serif text-[16px] ${eventsActive ? "text-am-accent" : "text-am-text"}`}
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <Tagline className="mb-3 text-am-text/66">Join</Tagline>
              <ul className="space-y-2">
                {joinLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => {
                        if (link.label === "Apply Now") track("apply_cta_click", { source: "mobile_nav" });
                        setMobileOpen(false);
                      }}
                      aria-current={isActiveHref(pathname, link.href) ? "page" : undefined}
                      className={`font-serif text-[16px] ${
                        isActiveHref(pathname, link.href) ? "text-am-accent" : "text-am-text"
                      }`}
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
