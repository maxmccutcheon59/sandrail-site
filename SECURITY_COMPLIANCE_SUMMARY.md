# Security & Compliance Summary — Sandrail marketing site

**Audience:** Chief of Staff / Company Builder  
**Site repo:** https://github.com/maxmccutcheon59/sandrail-site  
**CLI product:** https://github.com/maxmccutcheon59/sandrail (v0.2.0)  
**Updated:** 2026-09-21  

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

Site copy is limited to what the CLI ships today:

- `sandrail run` JSON/YAML suites
- Backends: `mock`, `subprocess` (allow-listed argv, `shell=False`), optional `openai` via env + `--allow-network`
- Defaults: network deny, timeout, cwd jail, capture, exit-code scoring, secret redaction
- Prompt-injection / redaction fixtures; CI exit codes; optional JUnit XML
- MIT · early OSS · docs: `SECURITY.md`, `COMPLIANCE_NOTES.md`

**Not claimed:** customers, logos, ARR, waitlist counts, enterprise SSO/SOC2, hosted VM sandbox cloud, coverage wins vs Promptfoo/Braintrust/LangSmith.

Pricing numbers follow Company Builder `FOUNDING_OFFER.md` / `LANDING_COPY_FOR_WEB_PRESENCE.md` (Community $0; Setup sprint $500/$1,000; Founding Builder $99/yr or $19/mo; Team gate TBD / if demand).

## Competitor names handling

- Dedalus / Daytona / Netic-style names appear only as **category / market context** (e.g. FAQ: “not a Dedalus/Daytona competitor — those are hosted sandboxes”).
- **Never:** partnered with, logos, product-name embedding, trademark cosplay.

## Privacy / ToS stub status

- `/privacy` and `/terms` are **honest stubs** flagged: *not legal advice / lawyer review before commercial use*.
- They do **not** pretend to be full SaaS policies.
- Authorized local use + defensive eval framing restated on Terms and `/security`.

## Residual risks → CLI SECURITY.md

Site `/security` summarizes controls and points operators to:

- https://github.com/maxmccutcheon59/sandrail/blob/main/SECURITY.md  
- Residual risks: expanding allow-lists / `--allow-network`, unredacted archives, untrusted `OPENAI_BASE_URL`, best-effort deny when netns unavailable, allow-listed `python3` still OS-user-capable.

Vulnerability reports: private email to Max — not public issues for undisclosed vulns.
