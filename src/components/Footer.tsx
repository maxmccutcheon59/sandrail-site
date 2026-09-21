import Link from "next/link";
import {
  contactEmail,
  cliRepo,
  productVersionLabel,
  watchwireSite,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-[var(--accent)]">≡</span>
            <span className="font-semibold">Sandrail</span>
          </div>
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Local-first AI eval harness / agent sandbox CLI — suite-driven
            regressions with network denied by default.
          </p>
          <p className="mt-3 text-xs text-[var(--text-dim)]">
            Founder: Max McCutcheon · Pre-revenue · Early OSS · MIT ·{" "}
            <a
              href={cliRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              {productVersionLabel}
            </a>
          </p>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Contact:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-[var(--accent)] hover:underline"
            >
              {contactEmail}
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:gap-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
              Product
            </p>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>
                <Link href="/install" className="hover:text-[var(--accent)]">
                  Install
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[var(--accent)]">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[var(--accent)]">
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href={cliRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  CLI on GitHub
                </a>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[var(--accent)]">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href={watchwireSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  Watchwire (sibling)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
              Legal
            </p>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li>
                <Link href="/privacy" className="hover:text-[var(--accent)]">
                  Privacy (draft)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--accent)]">
                  Terms (draft)
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-[var(--accent)]"
                >
                  Email Max
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-5 py-4 text-center text-xs text-[var(--text-dim)]">
        © {new Date().getFullYear()} Sandrail · Authorized local use only ·
        Defensive eval harness · No telemetry by design
      </div>
    </footer>
  );
}
