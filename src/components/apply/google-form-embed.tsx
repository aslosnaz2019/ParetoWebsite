const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSen2zlPdV2p2nNg9RKXYI9mZfccxtemxWv8wuGh5QvbnsICKQ/viewform";

/**
 * Applications run through an external Google Form. Google no longer embeds
 * this form inline (it renders a generic branded "Fill out form" card inside
 * the iframe instead of the actual questions), so this is a styled standalone
 * card pointing to the form in a new tab rather than a broken embed.
 */
export function GoogleFormEmbed() {
  return (
    <div className="max-w-xl border border-am-text/15 bg-white/40 p-8 sm:p-10">
      <p className="font-sans text-[12px] tracking-label uppercase text-am-text/66">
        Application form
      </p>
      <p className="mt-4 font-serif text-[17px] leading-relaxed text-am-text/78">
        Applications run through a short external form. It takes about ten
        minutes — have your stock thesis idea ready before you start.
      </p>

      <div className="mt-8">
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-am-text px-6 py-3 font-sans text-[13px] tracking-label uppercase text-am-text transition-all duration-200 hover:scale-[1.03] hover:bg-am-text hover:text-am-bg active:scale-[0.98]"
        >
          Open Application Form ↗
        </a>
      </div>
    </div>
  );
}
