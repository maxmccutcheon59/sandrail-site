# Deploy Sandrail marketing site

**Live URL:** https://maxmccutcheon59.github.io/sandrail-site/

Two paths. **Primary today:** `gh-pages` branch (no `workflow` OAuth scope needed). **Preferred long-term:** GitHub Actions from `docs/pages.yml` once a token with `workflow` scope can commit `.github/workflows/pages.yml`.

---

## Primary — gh-pages branch (current)

1. Build: `npm ci && npm run build:pages`
2. Publish contents of `out/` (plus `.nojekyll`) to branch `gh-pages` at repo root
3. Pages settings: **Deploy from a branch** → `gh-pages` / `/` (legacy build)

API enable / inspect:

```bash
gh api repos/maxmccutcheon59/sandrail-site/pages
# source.branch should be gh-pages, path /
```

Redeploy script sketch:

```bash
npm run build:pages
rm -rf /tmp/sandrail-pages && mkdir -p /tmp/sandrail-pages
cp -a out/. /tmp/sandrail-pages/ && touch /tmp/sandrail-pages/.nojekyll
cd /tmp/sandrail-pages && git init -b gh-pages
git add -A && git commit -m "Deploy Sandrail site"
git remote add origin https://github.com/maxmccutcheon59/sandrail-site.git
git push -u origin gh-pages --force
```

---

## Preferred — GitHub Actions (needs `workflow` scope)

Canonical workflow: `docs/pages.yml` (also intended as `.github/workflows/pages.yml`).

The authenticated `gh` OAuth token for this environment has scopes `gist, read:org, repo` — **not** `workflow`. Git rejects pushes that create/update `.github/workflows/*`.

When Max refreshes auth with `workflow` scope:

```bash
cp docs/pages.yml .github/workflows/pages.yml
git add .github/workflows/pages.yml && git commit -m "Add Pages workflow" && git push
gh api -X PUT repos/maxmccutcheon59/sandrail-site/pages -f build_type=workflow
```

Then pushes to `main` auto-build with `BASE_PATH=/sandrail-site`.

---

## Local verify

```bash
npm ci
npm run build:pages
```

## Live verify

```bash
for p in "" install/ security/ pricing/ privacy/ terms/; do
  echo -n "/$p "
  curl -sI "https://maxmccutcheon59.github.io/sandrail-site/$p" | head -1
done
```

## Notes

- No Stripe / email capture on this site
- Founding CTAs are mailto to MaxMcCutcheon1@outlook.com
- Do not force-push secrets
