/** Shared site config — Pages-aware. */

const rawBase =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  process.env.BASE_PATH ??
  "";

/** e.g. "/sandrail-site" on GitHub Pages; "" on local root. */
export const basePath = rawBase.replace(/\/$/, "");

export const isStaticExport =
  process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" ||
  process.env.STATIC_EXPORT === "true" ||
  process.env.GITHUB_PAGES === "true";

const pagesDefault =
  "https://maxmccutcheon59.github.io/sandrail-site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (isStaticExport ? pagesDefault : "http://localhost:3000")
).replace(/\/$/, "");

export const contactEmail = "MaxMcCutcheon1@outlook.com";

export const cliRepo = "https://github.com/maxmccutcheon59/sandrail";
export const cliRelease =
  "https://github.com/maxmccutcheon59/sandrail/releases/tag/v0.3.0";
export const productVersion = "0.3.0";
export const productVersionLabel = "v0.3.0";

export const watchwireSite =
  "https://maxmccutcheon59.github.io/watchwire-site/";
export const watchwireRepo = "https://github.com/maxmccutcheon59/watchwire";
export const securityDoc =
  "https://github.com/maxmccutcheon59/sandrail/blob/main/SECURITY.md";
export const complianceDoc =
  "https://github.com/maxmccutcheon59/sandrail/blob/main/COMPLIANCE_NOTES.md";

export const mailtoContact = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Sandrail"
)}&body=${encodeURIComponent(
  "Hi Max,\n\nWhat I'm building / how I'd use Sandrail:\n\nWhere I'm stuck (if anywhere):\n\nThanks,\n"
)}`;
