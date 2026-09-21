import type { Metadata } from "next";
import Link from "next/link";
import { contactEmail, cliRepo, securityDoc } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Sandrail terms stub — MIT CLI, authorized local use, founding offers by email. Not legal advice.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="section-label mb-3">Legal stub</p>
      <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
      <p className="mt-2 text-sm text-[var(--text-dim)]">
        Last updated: September 21, 2026 · Honest stub for a pre-revenue founder
        tool
      </p>
      <p className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--warn)]">
        Not legal advice. Lawyer review required before commercial / SaaS use.
        This is a minimal stub, not a full SaaS Terms of Service.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--text-muted)]">
        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Software license
          </h2>
          <p>
            The Sandrail CLI is released under the{" "}
            <strong className="font-medium text-[var(--text)]">MIT License</strong>{" "}
            — see the{" "}
            <a
              className="text-[var(--accent)] hover:underline"
              href={`${cliRepo}/blob/main/LICENSE`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LICENSE
            </a>{" "}
            in the repository. This marketing site content is provided as-is for
            information about that software.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Authorized use
          </h2>
          <p>
            You may only use Sandrail against agents, scripts, and APIs you own
            or for which you have explicit written authorization. Unauthorized
            scanning, probing, or testing of third-party systems is prohibited
            and may violate law and site Terms of Service. See{" "}
            <a
              className="text-[var(--accent)] hover:underline"
              href={securityDoc}
              target="_blank"
              rel="noopener noreferrer"
            >
              SECURITY.md
            </a>{" "}
            and this site&apos;s{" "}
            <Link href="/security" className="text-[var(--accent)] hover:underline">
              /security
            </Link>{" "}
            page. Sandrail is a defensive eval / sandbox harness — not offensive
            or pentest tooling.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Founding offers
          </h2>
          <p>
            Setup sprint and Founding Builder prices on{" "}
            <Link href="/pricing" className="text-[var(--accent)] hover:underline">
              /pricing
            </Link>{" "}
            are founding hypotheses sold by email today. Scope is confirmed in
            writing before payment. No SLA is implied by Founding Builder.
            Community OSS remains free under MIT.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            No warranties
          </h2>
          <p>
            Software and this site are provided &quot;as is&quot; without warranty of
            any kind, to the extent permitted by law. Early OSS; solo founder;
            pre-revenue.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Contact
          </h2>
          <p>
            Max McCutcheon ·{" "}
            <a
              className="text-[var(--accent)] hover:underline"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
