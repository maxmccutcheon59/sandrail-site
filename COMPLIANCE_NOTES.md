# Compliance Notes — Sandrail marketing site

> Not legal advice. Lawyer review before commercial use or collecting personal data.

## Product posture

- Static marketing site for the open-source Sandrail CLI (local-first eval harness).
- GitHub Pages export — no app backend, accounts, or email capture forms.
- Contact = mailto only (`MaxMcCutcheon1@outlook.com`).
- Pre-revenue · early OSS · MIT · no fake traction / logos / ARR / waitlist counts.

## Data handled by this site

| Data | Collected? | Stored by us? | Notes |
|------|------------|---------------|-------|
| Email / waitlist form | **No** | — | Mailto only |
| Analytics / pixels | None intentional | — | Static Pages hosting |
| Payment cards | **No** | — | Stripe deferred |
| CLI runtime data | N/A | — | Operator machines only (CLI `COMPLIANCE_NOTES.md`) |

## Privacy / Terms stubs

- `/privacy` and `/terms` are **honest DRAFT stubs** (not full SaaS policies).
- **Do not invent** final Privacy Policy or Terms of Service here.
- Lawyer review required before collecting personal data or presenting policies as final.

## Claims discipline

Bounded to shipped CLI features (**v0.3.0**): suite packs, mock/subprocess/openai backends, network deny defaults, redaction, JUnit XML.

**Not claimed:** customers, enterprise SSO/SOC2, hosted VM sandbox cloud, partnership logos.

## Open items for humans

- [ ] Finalize Privacy / Terms if email capture or checkout is added
- [ ] Confirm founding-offer copy before Stripe live keys
- [ ] WCAG 2.2 AA pass if positioning as a commercial product site

Longer audit trail: [SECURITY_COMPLIANCE_SUMMARY.md](./SECURITY_COMPLIANCE_SUMMARY.md).
