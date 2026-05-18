# Clenza Project — New Chat Start Prompt
Copy everything below the line and paste it at the start of a new Claude chat.

---

You are taking over as my Claude Code assistant. Please read everything below and take full control immediately.

## ⚠️ FIRST ACTION — READ MEMORY ⚠️
Before anything else, read ALL memory files in:
`C:\Users\tanvi\.claude\projects\c--Users-tanvi-OneDrive-Desktop-Claude-AI\memory\`

Start with MEMORY.md (index), then read each file listed. After reading, update the "Current State" and "Still To Do" sections of THIS file to reflect the latest known state.

## ⚠️ CRITICAL RULES — READ SECOND, BEFORE ANYTHING ELSE ⚠️
These rules MUST be followed at all times. No exceptions.

1. NEVER edit Vercel directly — always push to GitHub only
2. NEVER remove the Google verification meta tag from index.html — site loses Search Console
3. NEVER delete or rename files from /public/images/ or /public/videos/
4. NEVER change service IDs in Services.jsx — breaks hash navigation (/services#carpet etc.)
5. NEVER add reveal animations to Contact.jsx or VideoSection.jsx — caused blank page bug, intentionally removed
6. When updating URLs — update ALL at once (index.html, sitemap.xml, robots.txt, schema) — NOT one by one
7. ALWAYS ask before doing anything destructive or hard to reverse
8. ALWAYS test mobile AND desktop before marking anything done
9. ALWAYS give direct full URLs when referencing any website or tool — never just domain names

When you confirm you've read this, explicitly list all 9 rules back to me so I know you've seen them.

## My Project: Clenza Cleaning Website

**Local folder:** `c:\Users\tanvi\OneDrive\Desktop\Claude AI\client-sites\megaclean-pro`
**GitHub:** https://github.com/tm-rabin-dev/megaclean-pro (branch: master)
**Live site:** https://clenzaclean.com.au
**Backdoor URL:** https://megaclean-pro.vercel.app (still works)
**Stack:** Vite + React + Tailwind CSS
**Deployment:** Every push to `master` auto-deploys to Vercel. Never edit Vercel directly.

## Read this file first for full project context:
`c:\Users\tanvi\OneDrive\Desktop\Claude AI\client-sites\megaclean-pro\CLAUDE.md`

## Current State (as of 18 May 2026)
- Site is live and healthy at clenzaclean.com.au ✅
- SSL certificate active — padlock showing on both clenzaclean.com.au and www.clenzaclean.com.au ✅
- Both clenzaclean.com.au and www.clenzaclean.com.au show Valid Configuration in Vercel ✅
- megaclean-pro.vercel.app still works (back door) ✅
- 12 services with real photos, galleries and before/after sliders ✅
- Interactive CompareSlider used in Hero, BeforeAfter section, and TransformationsGallery ✅
- SEO configured (Google Search Console verified, schema markup, sitemap) ✅
- All URLs in code (index.html, sitemap.xml, robots.txt, schema) updated to clenzaclean.com.au ✅
- GitHub connected and auto-deploying to Vercel ✅
- Stable backup tag: `v1-stable` (restore: `git checkout v1-stable`)
- Phone number updated to 0415 410 507 in ALL components ✅ (including CTABanner, Contact, QuotePage)
- ABN updated to 20 455 980 845 in Footer.jsx and index.html schema ✅
- Google Business Profile created and verified ✅ (https://business.google.com)
- GBP has 10 photos, 15 services with descriptions, business description, service areas, hours ✅
- GBP service areas: Bondi, Inner West, Sydney CBD, Parramatta ✅
- GBP hours: Mon–Sun 7am–7pm ✅
- Google Search Console verified for clenzaclean.com.au ✅ — sitemap submitted
- Website NOW INDEXED by Google ✅ — showing in incognito search as of 18 May 2026
- GBP panel not yet showing publicly — expected within 1–2 more days
- Business registration certificate confirmed on ASIC ✅
- Real address confirmed: 7 Bennett St, Wentworthville NSW 2145 (NOT yet updated in code)
- Contact + Quote forms wired to Formspree (ID: xpqnzllv) → tanvirpjwtp@gmail.com ✅
- Pricing section rewritten with real service pricing (carpet/couch/mattress/EOL etc.) ✅
- Quote form updated with all 15 services + suburb/postcode field ✅
- Google Maps embed added to Contact page (Wentworthville) ✅
- Real Clenza logo added: /public/images/clenza-logo.png ✅ (draft — final version pending)
- Logo live in Navbar, Footer, 404 page and favicon ✅
- Chatbot mascot robot added: /public/images/mascot-robot.png ✅
- Chatbot renamed from "Cleany" to "Clenzo", launcher shows "ASK CLENZO" label ✅
- Memory files backed up to GitHub at .claude-memory/ ✅
- 3-hour auto-update cron running (routine ID: trig_01Xtf948rjWRWwpTVpzYD2Mn) ✅

## DNS (VentraIP)
- A record: clenzaclean.com.au → 216.198.79.1
- CNAME: www → cname.vercel-dns.com (working — Vercel recommends 03a88abd3c34c104.vercel-dns-017.com but not urgent)

## My Business Details
- **ABN:** 20 455 980 845 ✅ confirmed active
- **Business name:** "Clenza Cleaning" — **REGISTERED ✅** on 16 May 2026
  - Reference number: 2605-OY-4997
  - Receipt number: 900000946901277200
  - Registered via: https://register.business.gov.au (account: tanvirpjwtp@gmail.com)
  - Note: "Clenza" alone was blocked — CLENZA PTY LTD (ACN 697 393 098) already exists as a company
- **Domain:** clenzaclean.com.au ✅ PURCHASED — VentraIP, Invoice #20443392
- **Phone:** 0415 410 507 ✅ updated in code
- **WhatsApp:** https://wa.me/61415410507
- **Email:** hello@clenza.com.au
- **Address:** Sydney, NSW ← still a general placeholder in code

## Google Search Console
- Old property: https://megaclean-pro.vercel.app (still exists, ignore)
- New property: https://clenzaclean.com.au ✅ added 17 May 2026
- Verification meta tag: both old and new tags in index.html (DO NOT REMOVE EITHER)
- Sitemap: still needs to be submitted in the new property at https://search.google.com/search-console

## Google Business Profile
- URL: https://business.google.com
- Status: Verified ✅ — awaiting public propagation (3–7 days from 16 May 2026)
- Competitor note: klenzaclean.com.au (Klenza Clean, Melbourne) — similar domain but different city, no conflict

## Phone / WhatsApp locations in code
All updated to real number — if phone changes again, update these files:
- `src/components/AnnouncementBar.jsx`
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx` (desktop + mobile)
- `src/components/Footer.jsx`
- `index.html` (schema)

## What Was Done — Session 14 May 2026
- ✅ All service card images fixed (correct photos for each service)
- ✅ Bedframe, mattress, rug, window before/after photos added
- ✅ carpet-after-02.jpg moved to correct flood damage gallery
- ✅ CompareSlider added to Hero, BeforeAfter, TransformationsGallery
- ✅ TransformationsGallery upgraded — 17 before/after pairs total
- ✅ Video grid fixed — 4 videos now in 2x2 / 4-column layout
- ✅ Couch pair 5 fixed with proper before photo
- ✅ AllPhotosGrid restored to original flat layout

## What Was Done — Session 16 May 2026
- ✅ Domain clenzaclean.com.au purchased from VentraIP (Invoice #20443392)
- ✅ DNS configured in VentraIP — A record + CNAME both done
- ✅ SSL certificate fixed (was "Failed To Generate Cert" — wrong CNAME value, corrected to cname.vercel-dns.com)
- ✅ Both domains show Valid Configuration in Vercel
- ✅ All code URLs updated to clenzaclean.com.au (index.html, sitemap.xml, robots.txt)
- ✅ couch-after-05-new.jpg committed to repo
- ✅ Phone number 0415 410 507 added to all components
- ✅ ABN 20 455 980 845 added to Footer and schema
- ✅ Business name "Clenza Cleaning" registered (ref: 2605-OY-4997, receipt: 900000946901277200)

## What Was Done — Session 17 May 2026
- ✅ Google Business Profile created and verified at https://business.google.com
- ✅ 10 real cleaning photos uploaded to GBP
- ✅ 15 services added with descriptions in GBP
- ✅ Business description, service areas (Bondi, Inner West, CBD, Parramatta), hours (Mon–Sun 7am–7pm) set
- ✅ Online estimates set to Yes in GBP
- ✅ Google Search Console property added for clenzaclean.com.au
- ✅ New verification meta tag added to index.html and pushed to GitHub (commit: 9362469)
- ✅ Memory and start prompt updated with full session context

## What Was Done — Session 18 May 2026
- ✅ Confirmed website is now indexed by Google (showing in incognito search)
- ✅ Business registration certificate confirmed on ASIC (connectonline.asic.gov.au)
- ✅ Real address confirmed: 7 Bennett St, Wentworthville NSW 2145
- ✅ Memory and start prompt updated

## Still To Do
- [ ] Update address in code — 7 Bennett St, Wentworthville NSW 2145 (Hero.jsx, Footer.jsx, index.html schema)
- [ ] Fix Rug Cleaning emoji (currently 🏠 house — wrong)
- [ ] Check Carpet Repair card image
- [ ] Check GBP panel showing publicly in incognito (expected any day now)
- [ ] Get real customer reviews on Google
- [ ] Add suburb SEO pages (Parramatta, Bondi, Newtown etc.)
- [ ] Replace AI-generated About page photos (team.png, van.png) with real photos
- [ ] Replace draft logo with final high-res transparent PNG when ready
- [ ] Set up Google Ads properly when ready (A$600 credit available — https://ads.google.com)
- [ ] List on Airtasker, hipages, ServiceSeeking for immediate leads
- [ ] Add Privacy Policy and Terms of Service pages
- [ ] Add sticky mobile CTA bar (call + WhatsApp buttons visible on scroll)
- [ ] Consider updating www CNAME in VentraIP to 03a88abd3c34c104.vercel-dns-017.com (optional)

## Rules — MUST FOLLOW, NO EXCEPTIONS
1. Always push to GitHub — NEVER edit Vercel directly
2. Do NOT remove either Google verification meta tag from index.html — site will lose Search Console verification
3. Do NOT delete or rename files from /public/images/ or /public/videos/
4. Do NOT change service IDs in Services.jsx — they are used for hash navigation (e.g. /services#carpet)
5. Do NOT add reveal animations to Contact.jsx or VideoSection.jsx — these were intentionally removed (caused blank page bug)
6. When updating URLs — update ALL at once (index.html, sitemap.xml, robots.txt, schema) — NOT one by one
7. Ask before doing anything destructive or hard to reverse
8. Test mobile AND desktop before marking anything done
9. Always give direct full URLs — never just domain names

## My Details
- Based in Sydney, Australia
- Freelance dev / agency owner
- GitHub user: tm-rabin-dev
- Vercel account: tanvirpjwtp@gmail.com
- ABN: 20 455 980 845
- Phone: 0415 410 507

Please confirm you've read everything and tell me the current status of the site.
