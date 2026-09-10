"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import type { ComponentProps } from "react";

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  /** Analytics event name recorded on click. */
  event: string;
  /** Extra key/value context attached to the event (e.g. which section the click came from). */
  eventData?: Record<string, string>;
}

/**
 * Drop-in replacement for next/link that fires a Vercel Analytics custom
 * event on click before navigating. Used on the apply/application CTAs so
 * we can see click-through rate into the (external) application form.
 */
export function TrackedLink({ event, eventData, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        track(event, eventData);
        onClick?.(e);
      }}
    />
  );
}
