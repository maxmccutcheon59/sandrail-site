#!/usr/bin/env node
/**
 * Static / GitHub Pages build for Sandrail marketing site.
 * No API routes — plain next build with output: 'export'.
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const env = {
  ...process.env,
  STATIC_EXPORT: "true",
  GITHUB_PAGES: "true",
  NEXT_PUBLIC_STATIC_EXPORT: "true",
  BASE_PATH: process.env.BASE_PATH || "/sandrail-site",
  NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "/sandrail-site",
  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://maxmccutcheon59.github.io/sandrail-site",
};

const result = spawnSync("npx", ["next", "build"], {
  cwd: root,
  env,
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);
