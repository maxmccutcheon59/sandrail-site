# Sandrail site

**Marketing site** for [Sandrail](https://github.com/maxmccutcheon59/sandrail) — local-first AI eval harness / agent sandbox CLI.

**Live:** [https://maxmccutcheon59.github.io/sandrail-site/](https://maxmccutcheon59.github.io/sandrail-site/)

## One-liner

Honest static pages for an early OSS CLI: install commands, sandbox defaults, security stance, and a free-and-open-source pricing page — **no fake traction, no invented compliance**.

## Honest posture

- Early open source · MIT · nothing for sale
- Claims bounded to shipped CLI features (**v0.3.0**: suite packs + secure defaults)
- Contact = mailto only (`MaxMcCutcheon1@outlook.com`) — **no email capture**
- Privacy / Terms = **DRAFT stubs** for lawyer review (not full SaaS policies)
- Authorized local use only · defensive eval framing

## Security stance

Product sandbox controls: [CLI SECURITY.md](https://github.com/maxmccutcheon59/sandrail/blob/main/SECURITY.md) · [COMPLIANCE_NOTES.md](https://github.com/maxmccutcheon59/sandrail/blob/main/COMPLIANCE_NOTES.md). Site: [SECURITY.md](./SECURITY.md) · [COMPLIANCE_NOTES.md](./COMPLIANCE_NOTES.md) · [SECURITY_COMPLIANCE_SUMMARY.md](./SECURITY_COMPLIANCE_SUMMARY.md).

## Install (local develop)

```bash
npm ci
npm run dev
```

## Static / Pages build

```bash
npm ci
npm run build:pages
# Output in out/ with basePath /sandrail-site
```

## Deploy

See [DEPLOY.md](./DEPLOY.md). Workflow: `.github/workflows/pages.yml` (requires GitHub `workflow` scope to push if missing).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing |
| `/install` | Real README commands (incl. `sandrail packs`) |
| `/security` | SECURITY.md summary + residual risks |
| `/pricing` | Free and open source; email for help wiring it up |
| `/privacy` `/terms` | Honest stubs + lawyer-review flags |

Company Builder copy sources (claims): `LANDING_COPY_FOR_WEB_PRESENCE.md`, `FOUNDING_OFFER.md`, `LEGAL_GAPS.md`.

## License

MIT © Max McCutcheon (`MaxMcCutcheon1@outlook.com`)
