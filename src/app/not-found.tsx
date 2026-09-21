import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="section-label mb-3">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-[var(--text-muted)]">
        That route is not on this marketing site.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-block">
        Back home
      </Link>
    </div>
  );
}
