import type { Metadata } from "next";
import Link from "next/link";
import Terminal from "@/components/Terminal";
import { cliRepo, cliRelease, productVersionLabel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Install",
  description:
    "Install Sandrail v0.2.0: pip install -e ., sandrail demo, smoke and sandbox suites.",
};

export default function InstallPage() {
  return (
    <>
      <section className="rail-grid border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">Install · {productVersionLabel}</p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Clone, install, run demo
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            Requires{" "}
            <strong className="font-medium text-[var(--text)]">
              Python 3.10+
            </strong>
            . Runtime dep:{" "}
            <code className="font-mono text-sm text-[var(--accent)]">PyYAML</code>{" "}
            (+ stdlib). Console script:{" "}
            <code className="font-mono text-sm text-[var(--cyan)]">sandrail</code>
            .
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={cliRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              CLI repository
            </a>
            <a
              href={cliRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Release {productVersionLabel}
            </a>
            <Link href="/security" className="btn-ghost">
              Security
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">1 · Install + demo</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            60-second path (v0.2.0)
          </h2>
          <Terminal title="bash">
{`git clone https://github.com/maxmccutcheon59/sandrail.git
cd sandrail
python3 -m venv .venv && source .venv/bin/activate
pip install -e .
sandrail demo`}
          </Terminal>
        </div>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">2 · Suites</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Pinned demo commands
          </h2>
          <Terminal title="mock · subprocess · deny · timeout · redaction">
{`sandrail run examples/suites/smoke.yaml --backend mock
sandrail run examples/suites/subprocess_smoke.yaml --backend subprocess
sandrail run examples/suites/allowlist_deny.json --backend subprocess
sandrail run examples/suites/timeout.yaml --backend subprocess
sandrail run examples/suites/redaction.yaml --backend mock`}
          </Terminal>
          <Terminal title="more from README" className="mt-6">
{`# Human table + JSON
sandrail run examples/suites/smoke.yaml --backend mock --format both

# Redaction with synthetic fixture secret
export SANDRAIL_FIXTURE_SECRET='synth-secret-DO-NOT-USE-9f3a2c1b'
sandrail run examples/suites/redaction.yaml --backend mock --format json

# CI gate demo (expect exit 1)
sandrail run examples/suites/mock_pass_fail.yaml --backend mock

# Optional JUnit XML
sandrail run examples/suites/smoke.yaml --backend mock --junit-xml junit.xml`}
          </Terminal>
          <Terminal title="openai · opt-in network" className="mt-6">
{`# Optional local OpenAI-compatible API (explicit network opt-in)
# export OPENAI_BASE_URL=http://127.0.0.1:11434/v1
# export OPENAI_API_KEY=...          # from env only — never commit
# export OPENAI_MODEL=llama3.2
# sandrail run path/to/llm_suite.yaml --backend openai --allow-network`}
          </Terminal>
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Exit codes:{" "}
            <strong className="text-[var(--text)]">0</strong> pass ·{" "}
            <strong className="text-[var(--text)]">1</strong> one or more cases
            failed · <strong className="text-[var(--text)]">2</strong> bad suite
            / usage. List backends:{" "}
            <code className="font-mono text-xs text-[var(--cyan)]">
              sandrail backends
            </code>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
          <p className="section-label mb-3">3 · Development</p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Tests and lint
          </h2>
          <Terminal title="dev">
{`pip install -e ".[dev]"
pytest -q
ruff check src tests`}
          </Terminal>
          <p className="mt-6 text-xs text-[var(--text-dim)]">
            Fixture secrets are synthetic. Never commit real API keys. Authorized
            local use only. Release:{" "}
            <a
              href={cliRelease}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              {productVersionLabel}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
