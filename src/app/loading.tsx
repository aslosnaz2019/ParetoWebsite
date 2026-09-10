/**
 * Route-level loading state shown by Next while a page segment's data is
 * still resolving. Kept intentionally quiet — a thin pulse rather than a
 * spinner — since most pages here are static and this mainly covers the
 * brief gap on slower connections.
 */
export default function Loading() {
  return (
    <main className="mx-edge py-20 md:pt-28">
      <div className="max-w-column animate-pulse space-y-6">
        <div className="h-3 w-24 bg-am-text/10" />
        <div className="h-10 w-full max-w-md bg-am-text/10" />
        <div className="h-4 w-full bg-am-text/10" />
        <div className="h-4 w-5/6 bg-am-text/10" />
      </div>
    </main>
  );
}
