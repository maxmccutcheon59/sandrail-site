import type { Metadata } from "next";
import Link from "next/link";
import { mailtoContact, cliRepo, productVersionLabel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Sandrail is free and open source (MIT), including its suite packs. Nothing is for sale; email the founder for help wiring it into CI.",
};

const included = [
  "Full MIT CLI as published on GitHub",
  "Shipped suite packs: ci_gate, tool_sandbox, redaction",
  "Example suites, SECURITY.md, COMPLIANCE_NOTES.md",
  "Community issues (best-effort; solo maintainer)",
];

const help = [
  "Adapting a suite to your agent's smoke path",
  "A CI job that fails on eval regressions",
  "Extra cases: tool allow-list, secret non-leak, network-deny",
];

export default function PricingPage() {
  return (
    <>
      <section className="rail-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Pricing</p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Free and open source
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Sandrail is MIT-licensed and free, suite packs included. There are
            no paid plans and nothing to buy.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:grid-cols-2 sm:py-20">
          <div className="card glow-accent flex min-w-0 flex-col border-[var(--accent-dim)] p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
              Open source · {productVersionLabel}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
              Sandrail CLI
            </h2>
            <p className="mt-1 font-mono text-2xl text-[var(--accent)]">$0 · MIT</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-[var(--text-muted)]">
              {included.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden>
                    ·
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={cliRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-block text-center"
            >
              Clone on GitHub
            </a>
          </div>

          <div className="card flex min-w-0 flex-col p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
              Authorized repos only
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--text)]">
              Want help wiring it up?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              Email me about your agent and CI setup. I&apos;m happy to help
              get Sandrail running on code you own or are authorized to test.
            </p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-[var(--text-muted)]">
              {help.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-[var(--text-dim)]" aria-hidden>
                    ·
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a href={mailtoContact} className="btn-ghost mt-6 inline-block text-center">
              Email Max
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
          <p className="text-sm text-[var(--text-muted)]">
            Not included: a hosted multi-tenant sandbox cloud, enterprise
            SSO/DPA/SOC2, or guaranteed SLAs.
          </p>
          <Link href="/" className="btn-ghost mt-8 inline-block">
            Back to landing
          </Link>
        </div>
      </section>
    </>
  );
}
