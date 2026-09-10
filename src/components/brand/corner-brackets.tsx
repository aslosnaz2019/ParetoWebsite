type CornerBracketsProps = {
  tone?: "dark" | "light";
};

/**
 * 40px arms, 1px line, ~180/255 alpha — the "editorial object" frame.
 * Absolutely positioned; parent must be position: relative.
 */
export function CornerBrackets({ tone = "dark" }: CornerBracketsProps) {
  const color = tone === "dark" ? "rgba(16,26,56,0.7)" : "rgba(245,240,230,0.7)";
  const arm = 40;
  const style = { borderColor: color };

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        className="absolute top-0 left-0 border-t border-l"
        style={{ ...style, width: arm, height: arm }}
      />
      <div
        className="absolute top-0 right-0 border-t border-r"
        style={{ ...style, width: arm, height: arm }}
      />
      <div
        className="absolute bottom-0 left-0 border-b border-l"
        style={{ ...style, width: arm, height: arm }}
      />
      <div
        className="absolute bottom-0 right-0 border-b border-r"
        style={{ ...style, width: arm, height: arm }}
      />
    </div>
  );
}
