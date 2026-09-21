# Security & Compliance Summary — Sandrail marketing site

**Audience:** Chief of Staff / Company Builder  
**Site repo:** https://github.com/maxmccutcheon59/sandrail-site  
**CLI product:** https://github.com/maxmccutcheon59/sandrail (v0.3.0)  
**Updated:** 2026-09-21 (re-audit ET)  
**Live URL:** https://maxmccutcheon59.github.io/sandrail-site/

---

## Re-audit log (2026-09-21)

| Check | Result |
|-------|--------|
| Claim accuracy vs CLI v0.3.0 | Aligned: backends mock/subprocess/openai; suite paths `examples/suites/*`; `sandrail demo`; secure defaults; JUnit optional. Softened marketing heading “What you can claim today” → “Shipped today.” |
| Overreach (SaaS / SLA / customers / SOC2 / Promptfoo wins) | None found on site. FAQ states pre-revenue; Team gate TBD; Dedalus/Daytona category-only. |
| Privacy / ToS | Marked **DRAFT — for lawyer review**; not legal advice; no fake compliance badges. |
| Email capture | Mailto only; no waitlist/form. |
| Competitor / trademark | Dedalus/Daytona FAQ category framing only; no logos/partnership. |
| WCAG easy wins | Skip link + `#main-content`; focus-visible; table captions/scope; `--text-dim` contrast raised (~3.8→~5.7); home logo `aria-label`. |
| Security page | Residual risks honest; links CLI `SECURITY.md`; no VM-isolation overclaim. |
| Security headers | GH Pages provides HSTS only; CSP/XFO/etc. not configurable on user Pages (documented in `DEPLOY.md`). |

---

## Product posture

- **Local CLI** eval harness / agent sandbox — not a multi-tenant SaaS.
- **No SaaS telemetry** in the CLI by design (see CLI `COMPLIANCE_NOTES.md`).
- Marketing site is a **static** Next.js export on GitHub Pages (no server-side forms, no checkout API).

## No email capture on site

- Contact = **mailto only** (`MaxMcCutcheon1@outlook.com`).
- No waitlist, newsletter, or lead-capture form until compliance is ready for that.
- Founding offers: “by email”; Stripe deferred until Max enables live keys.

## Claims bounded to shipped features

Site copy is limited to what the CLI ships today (release **v0.3.0**):

- `sandrail run` JSON/YAML suites (+ `sandrail demo`)
- Suite packs: `sandrail packs list` · `sandrail packs run ci_gate|tool_sandbox|redaction` (bundled under `examples/packs/`; `allow_network: false`)
- Backends: `mock`, `subprocess` (allow-listed argv, `shell=False`), optional `openai` via env + `--allow-network`
- Defaults: network deny, timeout, cwd jail, capture, exit-code scoring, secret redaction
- Prompt-injection / redaction fixtures; CI exit codes; optional JUnit XML
- Suite paths: `examples/suites/smoke.yaml` (and related suites) — not the older `examples/suite.yaml` shorthand in Company Builder landing notes
- MIT · early OSS · docs: `SECURITY.md`, `COMPLIANCE_NOTES.md`

**Not claimed:** customers, logos, ARR, waitlist counts, enterprise SSO/SOC2, hosted VM sandbox cloud, coverage wins vs Promptfoo/Braintrust/LangSmith.

Pricing numbers follow Company Builder `FOUNDING_OFFER.md` / `LANDING_COPY_FOR_WEB_PRESENCE.md` (Community $0; Setup sprint $500/$1,000; Founding Builder $99/yr or $19/mo; Team gate TBD / if demand). **Not changed in this audit.**

## Competitor names handling

- Dedalus / Daytona / Netic-style names appear only as **category / market context** (FAQ: not a Dedalus/Daytona competitor — those are hosted sandboxes).
- **Never:** partnered with, logos, product-name embedding, trademark cosplay.

## Privacy / ToS stub status

- `/privacy` and `/terms` are **DRAFT stubs for lawyer review** — flagged *not legal advice / required before commercial use or collecting personal data*.
- They do **not** pretend to be full SaaS policies.
- No SOC2 / GDPR “certified” / ISO badges.
- Authorized local use + defensive eval framing restated on Terms and `/security`.

## Residual risks → CLI SECURITY.md

Site `/security` summarizes controls and points operators to:

- https://github.com/maxmccutcheon59/sandrail/blob/main/SECURITY.md  
- Residual risks: expanding allow-lists / `--allow-network`, unredacted archives, untrusted `OPENAI_BASE_URL`, best-effort deny when netns unavailable, allow-listed `python3` still OS-user-capable.

Vulnerability reports: private email to Max — not public issues for undisclosed vulns.

## Legal gaps checklist

Company Builder gap list (not legal advice): `/workspace/max-career/company/sandrail/LEGAL_GAPS.md` — also mirrored intent below. **No waitlist / analytics / live Stripe** until Max clears that list.

## Still needs Max / lawyer

- [ ] Lawyer review of Privacy + Terms before collecting personal data or selling as a hosted product
- [ ] Company Builder: update `LANDING_COPY_FOR_WEB_PRESENCE.md` demo to `examples/suites/smoke.yaml` + optional packs (`sandrail packs run ci_gate`); site already on v0.3.0
- [ ] Clear items in `LEGAL_GAPS.md` before waitlist, analytics, or live Stripe
- [ ] Optional: refresh `gh` token with `workflow` scope to enable Actions Pages (currently `gh-pages` branch deploy)
- [ ] Do not invent traction; Stripe live keys only when Max enables
