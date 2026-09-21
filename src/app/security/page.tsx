import type { Metadata } from "next";
import Link from "next/link";
import {
  contactEmail,
  securityDoc,
  complianceDoc,
  productVersionLabel,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Sandrail secure-by-default controls, threat model summary, residual risks — from SECURITY.md.",
};

const controls = [
  {
    control: "Network",
    def: "Deny",
    notes:
      "Opt in only with --allow-network. Prefer unshare --net when the kernel allows; otherwise scrub proxy env (best-effort on restricted hosts).",
  },
  {
    control: "Shell",
    def: "Off",
    notes:
      "subprocess always uses shell=False and argument arrays — never shell-string interpolation of user/suite data.",
  },
  {
    control: "Commands",
    def: "Allow-list",
    notes:
      "Subprocess backend only runs allow-listed basenames (python3, echo, true, false, cat, …). Not curl / wget / bash / sh / nc.",
  },
  {
    control: "Cwd jail",
    def: "On",
    notes:
      "Resolved working directories must stay under --cwd-root after realpath.",
  },
  {
    control: "Timeouts",
    def: "On",
    notes: "Default 30s; per-case timeout_sec; timed-out cases score exit 124.",
  },
  {
    control: "Log redaction",
    def: "On",
    notes:
      "Literal fixture secrets, common key patterns, and known env secret values scrubbed before table/JSON/JUnit.",
  },
  {
    control: "OpenAI URL",
    def: "Env only",
    notes:
      "Optional openai backend uses OPENAI_BASE_URL / OPENAI_API_KEY from the environment only — no per-case URL override (SSRF mitigation).",
  },
  {
    control: "Suite parsing",
    def: "Safe",
    notes: "YAML via yaml.safe_load only; never yaml.load / unsafe deserialize.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="rail-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Security · {productVersionLabel}</p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Secure-by-default eval harness
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Summary of shipped controls from the CLI{" "}
            <a
              href={securityDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              SECURITY.md
            </a>
            . Sandrail is a local-first harness — not a multi-tenant cloud
            sandbox, container escape mitigator, or exploit framework.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Authorized use</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Own systems only
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-muted)]">
            Sandrail is for evaluating agents and code{" "}
            <strong className="font-medium text-[var(--text)]">you own</strong>{" "}
            or for which you have{" "}
            <strong className="font-medium text-[var(--text)]">
              explicit written authorization
            </strong>
            . It is not a pentest tool, not for probing third-party systems, and
            not offensive security software. Unauthorized testing may violate law
            and Terms of Service.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Controls</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Defaults that must not be weakened for convenience
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-[var(--text-dim)]">
                  <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider">
                    Control
                  </th>
                  <th className="py-3 pr-4 font-mono text-xs uppercase tracking-wider">
                    Default
                  </th>
                  <th className="py-3 font-mono text-xs uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {controls.map((row) => (
                  <tr
                    key={row.control}
                    className="border-b border-[var(--border)] text-[var(--text-muted)]"
                  >
                    <td className="py-3 pr-4 font-medium text-[var(--text)]">
                      {row.control}
                    </td>
                    <td className="py-3 pr-4 font-mono text-[var(--accent)]">
                      {row.def}
                    </td>
                    <td className="py-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Residual risks</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Operator responsibility
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-[var(--text-muted)]">
            <li>
              Expanding allow_commands or passing --allow-network increases blast
              radius — treat as a security-sensitive change.
            </li>
            <li>
              Archiving unredacted raw agent output outside Sandrail bypasses
              harness controls.
            </li>
            <li>
              Pointing OPENAI_BASE_URL at an untrusted host can exfiltrate
              prompts; keep it loopback / org-approved.
            </li>
            <li>
              Network deny via netns may be unavailable in restricted CI; deny is
              then best-effort via allow-list + proxy scrub.
            </li>
            <li>
              Allow-listed python3 -c can still read files the OS user can
              already read — cwd jail + allow-list reduce accident surface; they
              are not a VM.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Out of scope</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--text-muted)]">
            <li>Multi-tenant SaaS isolation or browser sandboxing</li>
            <li>Malware analysis / offensive scanning of third-party networks</li>
            <li>Kernel-level guarantees for a deliberately malicious binary on every host</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Report a vulnerability</p>
          <p className="text-sm text-[var(--text-muted)]">
            Do not open a public GitHub issue for undisclosed vulnerabilities.
            Contact{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-[var(--accent)] hover:underline"
            >
              {contactEmail}
            </a>{" "}
            with version/commit, reproduction, impact, and suggested fix.
          </p>
          <p className="mt-4 text-sm text-[var(--text-dim)]">
            Deep docs:{" "}
            <a
              href={securityDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan)] hover:underline"
            >
              SECURITY.md
            </a>{" "}
            ·{" "}
            <a
              href={complianceDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan)] hover:underline"
            >
              COMPLIANCE_NOTES.md
            </a>{" "}
            ·{" "}
            <Link href="/privacy" className="text-[var(--accent)] hover:underline">
              Privacy stub
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
