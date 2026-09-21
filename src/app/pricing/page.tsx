import type { Metadata } from "next";
import Link from "next/link";
import { mailtoFounding, contactEmail, cliRepo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Sandrail founding offers: Community $0 forever, setup sprint $500/$1,000, Founding Builder $99/yr or $19/mo. Team gate TBD. By email only.",
};

const tiers = [
  {
    name: "Community",
    price: "$0",
    label: "OSS forever",
    highlight: false,
    primary: false,
    points: [
      "Full MIT CLI as published on GitHub",
      "Example suites, SECURITY.md / COMPLIANCE_NOTES.md",
      "Community issues (best-effort; solo founder)",
    ],
    cta: { href: cliRepo, text: "Clone on GitHub", external: true },
  },
  {
    name: "Setup sprint",
    price: "$500 / $1,000",
    label: "Founding service · authorized repos only",
    highlight: true,
    primary: true,
    points: [
      "$500 Wire-up: 1 owned repo — install + 1 suite adapted to your agent smoke path; CI job that fails on regressions; short README",
      "$1,000 Gate: everything in Wire-up + 2–3 extra cases (tool allow-list, secret non-leak, network-deny); 30-min walkthrough; 14-day email support on that install",
      "Timeline ~3–7 business days after repo access",
      "Included only for code/systems you own or have written permission to test",
    ],
    cta: {
      href: mailtoFounding,
      text: "Email about setup sprint",
      external: false,
    },
  },
  {
    name: "Founding Builder",
    price: "$99/yr or $19/mo",
    label: "Early supporter · not an SLA",
    highlight: false,
    primary: false,
    points: [
      "OSS Core",
      "Priority issue triage (best-effort, not SLA)",
      "Early access to suite packs when shipped",
      "Optional “founding supporter” listing only if you opt in — no fake logos",
    ],
    cta: {
      href: mailtoFounding,
      text: "Email about Founding Builder",
      external: false,
    },
  },
  {
    name: "Team gate",
    price: "TBD",
    label: "If demand — not sold yet",
    highlight: false,
    primary: false,
    points: [
      "Hypothesis only: shared suites + Action support later",
      "Do not treat as available today",
      "No checkout, no fake “join waitlist”",
    ],
    cta: null,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="rail-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Founding · hypotheses</p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Honest founding offers
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Pre-revenue. No fake logos or waitlists. Primary path to first
            revenue:{" "}
            <strong className="font-medium text-[var(--text)]">
              setup sprint
            </strong>{" "}
            on authorized repos. Buy by email today — Stripe later when Max
            enables live keys.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:grid-cols-2 sm:py-20">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`card flex flex-col p-6 ${
                t.highlight
                  ? "border-[var(--accent-dim)] glow-accent"
                  : ""
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
                {t.label}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
                {t.name}
              </h2>
              <p className="mt-1 font-mono text-2xl text-[var(--accent)]">
                {t.price}
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-[var(--text-muted)]">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-[var(--accent)]" aria-hidden>
                      ·
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {t.cta ? (
                <a
                  href={t.cta.href}
                  {...(t.cta.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`mt-6 inline-block text-center ${
                    t.primary ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  {t.cta.text}
                </a>
              ) : (
                <p className="mt-6 text-center text-xs text-[var(--text-dim)]">
                  Coming if demand — not available to buy
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">How to buy</p>
          <ol className="list-decimal space-y-3 pl-5 text-sm text-[var(--text-muted)]">
            <li>
              Email{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-[var(--accent)] hover:underline"
              >
                {contactEmail}
              </a>{" "}
              with: repo URL (or private access plan), which offer ($500 /
              $1,000 / founding license), and confirmation you own/authorize the
              target.
            </li>
            <li>Max confirms scope in writing.</li>
            <li>Payment link → work starts.</li>
            <li>Deliverables via PR + short notes.</li>
          </ol>
          <p className="mt-6 text-xs text-[var(--text-dim)]">
            Software remains MIT. Founding Builder fee is for priority + packs
            access — say so plainly. Setup sprints: if blocked &gt;7 days by
            missing access, pause or refund unused work (stated on invoice).
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
          <p className="text-sm text-[var(--text-muted)]">
            Not included: hosted multi-tenant sandbox cloud, enterprise
            SSO/DPA/SOC2, guaranteed SLAs, or “partners with [Big AI Co].”
          </p>
          <Link
            href="/"
            className="btn-ghost mt-8 inline-block"
          >
            Back to landing
          </Link>
        </div>
      </section>
    </>
  );
}
