# PeptideEmails.com — Content Architecture & Interlink Map

Companion to [`00-SEO-BLOG-PLAYBOOK.md`](00-SEO-BLOG-PLAYBOOK.md) and [`01-article-roadmap.csv`](01-article-roadmap.csv). This file defines the **hub-and-spoke topology**, the **entity graph**, and the **internal-link rules** that turn 100 posts into one authority machine.

---

## 1. The topology at a glance

```
                                 ┌──────────────────────────────┐
                                 │   HOMEPAGE  peptideemails.com │  ◀── all pillars link here
                                 │  "peptide email marketing"    │      with commercial anchors
                                 └───────────────┬──────────────┘
                                                 │
        ┌──────────────┬──────────────┬─────────┼─────────┬──────────────┬──────────────┐
        ▼              ▼              ▼         ▼         ▼              ▼              ▼
   ┌─────────┐   ┌──────────┐   ┌──────────┐┌────────┐┌──────────┐┌──────────┐  ┌──────────┐
   │ P1 MONEY│   │ P2       │   │ P3       ││ P4     ││ P5       ││ P6       │  │ P7       │
   │ HUB     │◀─▶│ PLATFORMS│◀─▶│COMPLIANCE││ FLOWS  ││SUBSTANCE ││DELIVER-  │  │AUDIENCE  │
   │ #1      │   │ #2       │   │ #3       ││ #4     ││ #5       ││ABILITY #6│  │(sub of P1)│
   └────┬────┘   └────┬─────┘   └────┬─────┘└───┬────┘└────┬─────┘└────┬─────┘  └────┬─────┘
        │             │              │          │          │           │             │
     spokes        spokes         spokes     spokes     spokes      spokes        spokes
   #11,12,14,   #7-10,15-35,    #13,36-55   #56-72    #73-88      #94-99       #89-93
   29,87        100                                                            
        │             │              │          │          │           │             │
        └─────────────┴──────────────┴──────────┴──────────┴───────────┴─────────────┘
                      every spoke links UP to its pillar + SIDEWAYS to 2-3 siblings
                      every commercial spoke also links to P1 MONEY HUB (#1/#12) + Home
```

**Six pillars + one audience cluster.** Comparisons live inside **P2 Platforms**; the audience cluster (**P7**, #89–93) reports directly to the **P1 money hub** because those pages are high-intent landing pages for named buyer segments.

---

## 2. The pillars (hub pages) and their jobs

| Pillar | Hub article (#) | Ranks / captures | Links to homepage with anchor |
|---|---|---|---|
| **P1 — Money Hub** | #1 *Email Marketing for Peptide Brands: Complete Guide* | The category term + all buyer intent. The internal-link sink. | "peptide email marketing agency" / "done-for-you peptide email" |
| **P2 — Platforms & Infrastructure** | #2 *Best Email Platforms for Peptide & Supplement Brands* | Every "which platform / can I use X / X banned / vs" query | "peptide email marketing" |
| **P3 — FDA & Compliance** | #3 *FDA Compliance for Peptide & GLP-1 Email* | The compliance moat — our defensibility | "compliant peptide email marketing" |
| **P4 — Email Flows** | #4 *Email Flows Every Peptide Store Needs* | Every flow/automation query | "done-for-you peptide email flows" |
| **P5 — Marketing by Substance** | #5 *Marketing Peptide & GLP-1 Brands* | The giant substance entities, brand-owner angle | "peptide brand email marketing" |
| **P6 — Deliverability & Sending Infra** | #6 *Email Deliverability for High-Risk Senders* | Authentication, warm-up, subdomains | "peptide email infrastructure" |
| **P7 — Audience** *(cluster under P1)* | #89–93 landing pages | Named segments (pharmacies, telehealth, labs, creators, B2B) | direct to Home + Booking |

---

## 3. Interlink rules (the enforcement spec)

Restating SOP C as a hard spec — apply on every publish:

1. **UP** — every spoke → its pillar (1 contextual link, descriptive anchor).
2. **SIDE** — every spoke → 2–3 sibling spokes (see the CSV `Internal Links` column; the `#`s listed are pre-assigned siblings).
3. **MONEY** — every BOFU/comparison spoke → **#1 or #12** (money hub) and/or **Home + Booking**.
4. **DOWN** — every pillar → its top 3–5 spokes (curated, updated as spokes publish).
5. **HOME** — every pillar → homepage; the glossary (#14) → every pillar.
6. **CROSS-PILLAR** — link where topics touch: P2↔P6 (platforms↔deliverability), P3↔P5 (compliance↔substance), P3↔P4 (compliance↔flows), P1↔P7 (money↔audience).
7. **NO ORPHANS** — before publish, ≥2 existing posts link *into* the new one (retro-add inbound links).
8. **DEPTH ≤ 3 clicks** from homepage to any article.

The CSV's `Internal Links` column already encodes rules 1–3 for all 100 posts (format: `Up | Side | Money/Home`). Treat it as the wiring diagram.

---

## 4. Hub → spoke assignments (which spokes hang off which pillar)

- **P1 Money Hub (#1):** #11, #12, #14, #29, #51, #87, + audience cluster #89–93. *(Everything commercial funnels here.)*
- **P2 Platforms (#2):** #7, #8, #9, #10, #15, #16, #17, #18, #19, #20, #21, #22, #23, #24, #25, #26, #27, #28, #30, #31, #32, #34, #35, #100.
- **P3 Compliance (#3):** #13, #36, #37, #38, #39, #40, #41, #42, #43, #44, #45, #46, #47, #48, #49, #50, #51, #52, #53, #54, #55, #67.
- **P4 Flows (#4):** #52, #56, #57, #58, #59, #60, #61, #62, #63, #64, #65, #66, #67, #68, #69, #70, #71, #72, #86.
- **P5 Substance (#5):** #31, #40, #41, #50, #54, #65, #73, #74, #75, #76, #77, #78, #79, #80, #81, #82, #83, #84, #85, #86, #87, #88.
- **P6 Deliverability (#6):** #15, #33, #35, #94, #95, #96, #97, #98, #99, #100.
- **P7 Audience (→ P1):** #89, #90, #91, #92, #93.

*(Several spokes intentionally sit at pillar intersections — e.g. #31, #40, #41, #54 bridge Substance↔Compliance↔Platforms. Those are the cross-pillar glue that signals topical breadth.)*

---

## 5. The entity graph (what makes us "entity rich")

Every article should co-occur with the entities in its neighborhood. This is the map AI models and Google use to judge whether we *understand* the topic. Own the whole graph.

```
                         ┌─────────────────────────────┐
                         │   PEPTIDE EMAIL MARKETING    │  ← the core concept we own
                         └──────────────┬──────────────┘
        ┌──────────────┬────────────────┼────────────────┬──────────────┐
        ▼              ▼                 ▼                ▼              ▼
   SUBSTANCES     PLATFORMS         REGULATIONS      DELIVERABILITY    FLOWS/METRICS
   ─────────      ─────────         ───────────      ─────────────    ─────────────
   semaglutide    Sendlane          FDA / FDCA       SPF              welcome flow
   tirzepatide    Klaviyo           21 CFR 201.128   DKIM             abandoned cart
   retatrutide    Omnisend          FTC              DMARC            replenishment
   liraglutide    Mailchimp         DSHEA            BIMI             winback
   BPC-157        ActiveCampaign    503A / 503B      dedicated IP     launch sequence
   TB-500         FluentCRM         disease claim    subdomain        education series
   CJC-1295       Mautic / Sendy    structure/func.  domain warm-up   segmentation
   ipamorelin     self-hosted SMTP  research use only sender rep.     LTV / reorder
   sermorelin     Amazon SES        COA / cGMP       spam complaint   flows vs campaigns
   PT-141         Shopify / Woo     Warning Letter   bulk-sender rules email revenue %
   GHK-Cu, NAD+   Postmark/Postal   high-risk merch. list hygiene     open/click/placement
```

**How to deploy it:**
- Each entity is *owned* by one article (its canonical explainer — see the glossary #14 and the pillar spokes).
- Every other mention of that entity **links to its owner article** with a varied anchor.
- The **glossary (#14)** defines all of them and links out — it's the entity hub and a top AI-citation asset.
- Substance pages (P5) stay strictly research-only / brand-owner framed — no disease or dosage claims (we model the compliance we sell).

---

## 6. Anchor-text guidance (avoid over-optimization in a small niche)

| Link type | Anchor style | Example |
|---|---|---|
| Pillar → Home | exact / near-exact match | "peptide email marketing agency" |
| Spoke → Money hub | commercial | "done-for-you peptide email systems" |
| Spoke → Pillar | descriptive partial | "which platforms survive for peptide senders" |
| Spoke → Spoke | natural phrase | "warming up a new sending domain" |
| Entity mention | entity name | "21 CFR 201.128", "Sendlane", "compounded semaglutide" |

Vary anchors around each target's keyword family; never reuse the identical anchor into the same URL twice.

---

## 7. Build order recap (waves → pillars)

| Wave | Priority #s | What gets wired |
|---|---|---|
| 1 Foundation | 1–15 | All 6 pillar hubs + glossary + top money/platform spokes. **After Wave 1 the skeleton exists** — every later spoke has a pillar to link up to. |
| 2 Commercial | 16–35 | Thicken P2 (comparisons/alternatives/platform-for-peptides) + high-intent commercial terms. |
| 3 Compliance | 36–55 | Thicken P3 — the moat. |
| 4 Flows | 56–72 | Thicken P4. |
| 5 Substance | 73–88 | Thicken P5 — attach to giant entities. |
| 6 Audience/Infra | 89–100 | P7 landing pages + P6 deliverability depth + migration capstone (#100). |

Finish each pillar's **spine** (its hub + 3–4 core spokes) before thickening. Re-order within a wave based on what converts — but keep the wave order: commercial capture and the compliance moat come before substance breadth.

---

*Execution source of truth = [`01-article-roadmap.csv`](01-article-roadmap.csv). Process source of truth = [`00-SEO-BLOG-PLAYBOOK.md`](00-SEO-BLOG-PLAYBOOK.md).*
