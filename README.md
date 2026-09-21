# Sandrail marketing site

Static Next.js marketing site for **[Sandrail](https://github.com/maxmccutcheon59/sandrail)** — local-first AI eval harness / agent sandbox CLI.

**Live (GitHub Pages):** https://maxmccutcheon59.github.io/sandrail-site/

## Honest posture

- Pre-revenue · early OSS · MIT · no fake traction/logos/ARR/waitlists
- Claims bounded to shipped CLI features (see CLI README / SECURITY.md)
- Contact = mailto only (`MaxMcCutcheon1@outlook.com`) — **no email capture**
- Founding offers by email; Stripe later when Max enables
- Authorized local use only · defensive eval framing

## Local develop

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

See [DEPLOY.md](./DEPLOY.md). Workflow: `.github/workflows/pages.yml`.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing |
| `/install` | Real README commands |
| `/security` | SECURITY.md summary + residual risks |
| `/pricing` | Founding offers (hypotheses) |
| `/privacy` `/terms` | Honest stubs + lawyer-review flags |

Company Builder copy sources (claims): `LANDING_COPY_FOR_WEB_PRESENCE.md`, `FOUNDING_OFFER.md`.

## License

MIT © Max McCutcheon
