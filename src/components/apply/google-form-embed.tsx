const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSen2zlPdV2p2nNg9RKXYI9mZfccxtemxWv8wuGh5QvbnsICKQ/viewform";

/**
 * Applications run through an external Google Form. This embeds it inline
 * (styled to match the site) with an always-visible "open in a new tab"
 * fallback, since some browsers/orgs block third-party iframes.
 */
export function GoogleFormEmbed() {
  return (
    <div className="max-w-3xl">
      <p className="font-serif text-[15px] leading-relaxed text-am-text/60">
        Applications run through the form below. If it doesn&apos;t load, open it
        directly in a new tab.
      </p>

      <div className="mt-6">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-colors hover:bg-am-text hover:text-am-bg"
        >
          Open Application Form ↗
        </a>
      </div>

      <div className="mt-10 border border-am-text/15 bg-white/40 p-2 sm:p-3">
        <iframe
          src={`${FORM_URL}?embedded=true`}
          title="Pareto Investments application form"
          loading="lazy"
          className="h-[1400px] w-full bg-am-bg"
        >
          Loading application form…
        </iframe>
      </div>
    </div>
  );
}
