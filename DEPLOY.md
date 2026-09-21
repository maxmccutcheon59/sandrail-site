# Deploy Sandrail marketing site

**Primary (zero keys):** GitHub Pages static export. No Stripe, no Vercel required.

---

## GitHub Pages

Static export via `npm run build:pages`. Site URL after deploy:

**https://maxmccutcheon59.github.io/sandrail-site/**

### One-time: enable Pages

Via API (preferred once workflow exists):

```bash
gh api -X POST repos/maxmccutcheon59/sandrail-site/pages \
  -f build_type=workflow \
  -f source[branch]=main \
  -f source[path]=/
```

Or UI: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

### How the workflow works

- Canonical: `.github/workflows/pages.yml` (copy also in `docs/pages.yml`)
- Triggers: push to `main`, or **workflow_dispatch**
- Runs `npm run build:pages` with `BASE_PATH=/sandrail-site`
- Uploads `out/` via `actions/upload-pages-artifact` + `actions/deploy-pages`

### Local static verify

```bash
npm ci
npm run build:pages
npx serve out   # optional; note basePath /sandrail-site
```

### Verify live

```bash
curl -sI https://maxmccutcheon59.github.io/sandrail-site/ | head -5
curl -sI https://maxmccutcheon59.github.io/sandrail-site/install/ | head -5
curl -sI https://maxmccutcheon59.github.io/sandrail-site/security/ | head -5
curl -sI https://maxmccutcheon59.github.io/sandrail-site/pricing/ | head -5
curl -sI https://maxmccutcheon59.github.io/sandrail-site/privacy/ | head -5
curl -sI https://maxmccutcheon59.github.io/sandrail-site/terms/ | head -5
```

---

## Notes

- No API routes; no Stripe on this site yet.
- Founding CTAs are mailto to `MaxMcCutcheon1@outlook.com`.
- Do not force-push secrets. Do not invent waitlists or logos.
