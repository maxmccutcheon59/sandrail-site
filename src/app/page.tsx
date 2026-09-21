import Link from "next/link";
import Terminal from "@/components/Terminal";
import {
  cliRepo,
  mailtoFounding,
  productVersionLabel,
  watchwireSite,
  securityDoc,
} from "@/lib/site";

const shipped = [
  "`sandrail run` with JSON/YAML suites",
  "Suite packs: `sandrail packs list|run` (ci_gate, tool_sandbox, redaction)",
  "Backends: mock, subprocess (allow-listed argv, shell=False), optional openai via env + --allow-network",
  "Defaults: network deny, timeout, cwd jail, capture, exit-code scoring, secret redaction",
  "Prompt-injection / redaction fixtures",
  "CI exit codes (0 pass · 1 fail · 2 usage) + optional JUnit XML",
  "MIT · early OSS · SECURITY.md + COMPLIANCE_NOTES.md",
];

const sandboxRows = [
  {
    control: "Network",
    def: "Deny",
    notes: "Opt in with --allow-network. Prefer unshare --net when available; else scrub proxy env (best-effort).",
  },
  {
    control: "Timeout",
    def: "30s",
    notes: "--timeout / per-case timeout_sec → exit 124",
  },
  {
    control: "Cwd jail",
    def: "Suite parent",
    notes: "--cwd-root; resolved paths must stay under root",
  },
  {
    control: "Commands",
    def: "Allow-list",
    notes: "python3, echo, true, false, cat, … — not curl / bash / sh / wget / nc",
  },
  {
    control: "Shell",
    def: "Off",
    notes: "subprocess with shell=False only — argv arrays, never shell strings",
  },
  {
    control: "Logs",
    def: "Redacted",
    notes: "Patterns + secrets_must_not_leak + known env secret values",
  },
];

const backends = [
  {
    name: "mock",
    use: "Deterministic local agent — CI default, no network",
  },
  {
    name: "subprocess",
    use: "Allow-listed argv under the sandbox (network still denied by default)",
  },
  {
    name: "openai",
    use: "POST to $OPENAI_BASE_URL/chat/completions when set; requires --allow-network",
  },
];

const faqs = [
  {
    q: "Is this a Dedalus / Daytona competitor?",
    a: "No. Those are hosted sandbox / VM products. Sandrail is a local / CI eval harness with secure-by-default scoring — a different layer.",
  },
  {
    q: "Do you have customers or logos?",
    a: "Pre-revenue. No logos, no fake traction, no waitlist counts.",
  },
  {
    q: "Can I scan other people’s systems?",
    a: "No. Authorized local use only — agents and code you own, or for which you have explicit written authorization. Not a pentest tool.",
  },
  {
    q: "Is there telemetry?",
    a: "Designed local-first. The CLI does not phone home or collect SaaS analytics. This marketing site is static GitHub Pages hosting only.",
  },
  {
    q: "How do paid offers work?",
    a: "Founding offer by email today (setup sprint or Founding Builder). Stripe later when Max enables live keys. Community OSS stays $0 forever. Team gate is TBD — if demand; not sold yet.",
  },
  {
    q: "Is this offensive / exploit tooling?",
    a: "No. Defensive eval harness framing only. Prompt-injection fixtures verify harness redaction — not attacks against systems you do not own.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="rail-grid relative overflow-hidden border-b border-[var(--border)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,165,36,0.1),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <p className="section-label mb-4">
            Local-first · Eval harness · Early OSS · {productVersionLabel}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl sm:leading-[1.1]">
            Suite-driven agent regressions
            <span className="text-glow text-[var(--accent)]">
              {" "}
              with network denied by default
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Local-first AI eval harness / agent sandbox CLI. Run YAML/JSON eval
            suites against mock, allow-listed subprocess, or optional
            OpenAI-compatible backends. Secure defaults: no network unless you
            opt in, cwd jail, timeouts, secret redaction, CI-friendly exit
            codes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cliRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
            <Link href="/install" className="btn-ghost">
              Install
            </Link>
            <a href={mailtoFounding} className="btn-ghost">
              Email about founding offer
            </a>
          </div>
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-[var(--text-dim)]">
            Pre-revenue founder-builder · MIT · Authorized local use only · Not
            a hosted VM sandbox cloud
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Problem</p>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Agents regress. Unconstrained tools make CI scary.
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--text-muted)] leading-relaxed">
            AI product teams need repeatable, local, CI-friendly evals before
            they trust an agent in production. Sandrail’s job:{" "}
            <strong className="font-medium text-[var(--text)]">
              fail the build when an agent regresses
            </strong>{" "}
            — without giving the agent unconstrained network or shell on your
            laptop or runner.
          </p>
          <p className="mt-4 max-w-2xl text-sm text-[var(--text-dim)]">
            Who it’s for: engineers at AI startups and agent-platform teams who
            need local/CI gates — not a replacement for hosted VM sandbox
            clouds.
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Shipped · {productVersionLabel}</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Shipped today
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {shipped.map((item) => (
              <li
                key={item}
                className="card flex gap-3 px-4 py-3 text-sm text-[var(--text-muted)]"
              >
                <span className="mt-0.5 font-mono text-[var(--accent)]" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Sandbox defaults</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Secure-by-default controls
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-[var(--text-muted)]">
            Full threat model and residual risks:{" "}
            <Link href="/security" className="text-[var(--accent)] hover:underline">
              /security
            </Link>{" "}
            ·{" "}
            <a
              href={securityDoc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cyan)] hover:underline"
            >
              SECURITY.md
            </a>
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Sandrail secure-by-default sandbox controls
              </caption>
              <thead>
                <tr className="border-b border-[var(--border)] text-[var(--text-dim)]">
                  <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-wider">
                    Control
                  </th>
                  <th scope="col" className="py-3 pr-4 font-mono text-xs uppercase tracking-wider">
                    Default
                  </th>
                  <th scope="col" className="py-3 font-mono text-xs uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {sandboxRows.map((row) => (
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

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Backends</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Pluggable scoring targets
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {backends.map((b) => (
              <div key={b.name} className="card p-5">
                <p className="font-mono text-sm text-[var(--cyan)]">{b.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {b.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Quick start</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Install and run a mock suite
          </h2>
          <Terminal title="bash · v0.3.0">
{`git clone https://github.com/maxmccutcheon59/sandrail.git
cd sandrail
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
sandrail demo
sandrail packs list
sandrail packs run ci_gate
sandrail run examples/suites/smoke.yaml --backend mock`}
          </Terminal>
          <p className="mt-4 text-sm text-[var(--text-dim)]">
            Exit codes: <code className="font-mono text-[var(--accent)]">0</code>{" "}
            pass ·{" "}
            <code className="font-mono text-[var(--accent)]">1</code> failures ·{" "}
            <code className="font-mono text-[var(--accent)]">2</code> usage/load
            errors. More commands on{" "}
            <Link href="/install" className="text-[var(--accent)] hover:underline">
              /install
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Security highlights</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Defaults that must not be weakened for convenience
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
            <li>
              · Network deny unless{" "}
              <code className="font-mono text-xs text-[var(--cyan)]">
                --allow-network
              </code>
            </li>
            <li>
              · Never{" "}
              <code className="font-mono text-xs text-[var(--cyan)]">
                shell=True
              </code>{" "}
              with user/suite strings
            </li>
            <li>· OpenAI base URL from environment only (SSRF mitigation)</li>
            <li>· YAML via safe_load only</li>
            <li>
              · Residual risks (operator responsibility) documented on{" "}
              <Link
                href="/security"
                className="text-[var(--accent)] hover:underline"
              >
                /security
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="faq"
        className="border-b border-[var(--border)]"
      >
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Honest answers
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-medium text-[var(--text)]">{f.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Portfolio siblings</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Same founder, different wedge
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={watchwireSite}
              target="_blank"
              rel="noopener noreferrer"
              className="card block p-5 transition-colors hover:border-[var(--accent-dim)]"
            >
              <p className="font-semibold text-[var(--text)]">Watchwire</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Local-first defensive CLI — secret scan, /proc, permission
                hygiene.
              </p>
            </a>
            <div className="card p-5 opacity-90">
              <p className="font-semibold text-[var(--text)]">Sandrail</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Agent eval + sandbox harness (this product).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rail-grid">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-20">
          <p className="section-label mb-3">Next step</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Clone the CLI or email about a setup sprint
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[var(--text-muted)]">
            Community stays $0 forever. Founding offer by email — no waitlist,
            no capture form. Stripe later when Max enables.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={cliRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GitHub · sandrail
            </a>
            <a href={mailtoFounding} className="btn-ghost">
              Email MaxMcCutcheon1@outlook.com
            </a>
            <Link href="/pricing" className="btn-ghost">
              Founding pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
