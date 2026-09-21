# Security Policy — Sandrail marketing site

## Supported versions

Fixes apply to the latest `main` of this static site. Product sandbox controls live in the **[Sandrail CLI SECURITY.md](https://github.com/maxmccutcheon59/sandrail/blob/main/SECURITY.md)**.

## Reporting a vulnerability

Report privately — do **not** open a public GitHub issue for undisclosed vulnerabilities.

- **Contact:** [MaxMcCutcheon1@outlook.com](mailto:MaxMcCutcheon1@outlook.com)
- Include: URL/path, impact, reproduction steps, suggested fix if any.
- Acknowledgment within a few business days when possible.

## Scope

This repository is a **static Next.js → GitHub Pages** marketing export:

- No server-side forms, checkout API, or email capture (mailto only)
- No invented SOC2 / GDPR / ISO “certified” claims
- `/privacy` and `/terms` are **DRAFT stubs** for lawyer review — not enforceable SaaS policies

See also [SECURITY_COMPLIANCE_SUMMARY.md](./SECURITY_COMPLIANCE_SUMMARY.md).

## Secrets

Never commit `.env`, API keys, tokens, or private keys. Stripe live keys stay off until Max enables them deliberately.

## Authorized-use framing

Marketing copy must keep the CLI posture: operators may only eval agents/systems they own or have written authorization to test.
