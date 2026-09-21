import type { Metadata } from "next";
import { contactEmail, cliRepo, complianceDoc } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Sandrail privacy stub — local CLI, no email capture on this site. Not legal advice.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="section-label mb-3">DRAFT · for lawyer review</p>
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-2 text-sm text-[var(--text-dim)]">
        Last updated: September 21, 2026 · Pre-revenue founder tool
      </p>
      <p
        role="note"
        className="mt-4 rounded-lg border border-[var(--warn)] bg-[var(--bg-elevated)] px-4 py-3 text-sm text-[var(--warn)]"
      >
        <strong className="font-semibold text-[var(--text)]">DRAFT — not legal advice.</strong>{" "}
        Lawyer review required before commercial use or collecting personal data.
        This is a minimal stub, not a full Privacy Policy. No SOC2 / GDPR
        &quot;certified&quot; / ISO badges are claimed.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--text-muted)]">
        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Short version
          </h2>
          <p>
            The Sandrail CLI is designed to run locally with no SaaS telemetry.
            This marketing site is a static GitHub Pages export. There is{" "}
            <strong className="font-medium text-[var(--text)]">
              no email capture / waitlist form
            </strong>{" "}
            on this site. Contact is mailto only.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            The CLI product
          </h2>
          <p>
            Sandrail (open-source CLI at{" "}
            <a
              className="text-[var(--accent)] hover:underline"
              href={cliRepo}
            >
              github.com/maxmccutcheon59/sandrail
            </a>
            ) reads suites locally, scores backends, and writes reports you
            choose (stdout / --junit-xml). It does not operate accounts or cloud
            sync. Optional openai backend sends requests only to the{" "}
            <code className="font-mono text-xs text-[var(--cyan)]">
              OPENAI_BASE_URL
            </code>{" "}
            you configure. See{" "}
            <a
              className="text-[var(--accent)] hover:underline"
              href={complianceDoc}
              target="_blank"
              rel="noopener noreferrer"
            >
              COMPLIANCE_NOTES.md
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            This website
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              GitHub Pages / CDN may collect IP addresses, user-agent, and
              request logs as part of normal hosting.
            </li>
            <li>We do not run a customer database or waitlist on this site.</li>
            <li>
              If you email Max about a founding offer, that email is processed by
              your mail provider and Max&apos;s inbox — not by a site form
              backend.
            </li>
            <li>
              Stripe may process payments later when Max enables live keys;
              until then founding offers are by email only.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-[var(--text)]">
            Contact
          </h2>
          <p>
            Founder: Max McCutcheon ·{" "}
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
