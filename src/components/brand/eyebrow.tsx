type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/** 8px-equivalent tracked label used above headlines, with a short accent
 * rule before the text (echoes the "— EST. 2017" kicker treatment). */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-3 font-sans text-[11px] tracking-eyebrow uppercase ${className}`}
    >
      <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
      {children}
    </p>
  );
}

type TaglineProps = {
  children: React.ReactNode;
  className?: string;
};

/** 4px-equivalent tracked label used for bottom taglines / metadata. */
export function Tagline({ children, className = "" }: TaglineProps) {
  return (
    <p className={`font-sans text-[11px] tracking-tagline uppercase ${className}`}>
      {children}
    </p>
  );
}

type PageNumberProps = {
  n: number;
  className?: string;
};

/** "— 01" format, sans-serif, 3px tracking. */
export function PageNumber({ n, className = "" }: PageNumberProps) {
  return (
    <span className={`font-sans text-[11px] tracking-label ${className}`}>
      {`— ${String(n).padStart(2, "0")}`}
    </span>
  );
}
