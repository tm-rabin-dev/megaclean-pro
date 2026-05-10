# Clenza — Project Brief for AI Agents

## Overview
This is the Clenza professional cleaning services website for a Sydney-based cleaning business.
Built with **Vite + React + Tailwind CSS**. Deployed on **Vercel** via GitHub auto-deploy.

## Stable Checkpoint
- **Tag:** `v1-stable` — fully working site as of 10 May 2026
- **Restore command:** `git checkout v1-stable`
- **GitHub:** https://github.com/tm-rabin-dev/megaclean-pro/releases/tag/v1-stable

---

## Live URLs
- **Primary:** https://megaclean-pro.vercel.app
- **Also works:** https://clenza-cleaning.vercel.app (same project, different URL)
- **GitHub:** https://github.com/tm-rabin-dev/megaclean-pro

## Deployment
- GitHub repo: `tm-rabin-dev/megaclean-pro`
- Every push to `master` branch auto-deploys to Vercel within 60 seconds
- Do NOT manually deploy — just push to GitHub

---

## What Has Been Done (Do Not Redo or Break)

### SEO
- LocalBusiness schema markup in `index.html`
- Sitemap at `/public/sitemap.xml`
- Robots.txt at `/public/robots.txt`
- Google Search Console verified and sitemap submitted
- Canonical tag and Open Graph tags configured
- Google verification meta tag in `index.html` — DO NOT REMOVE

### Services (11 total — do not change without instruction)
1. Carpet Cleaning
2. Mattress Cleaning
3. Curtain Cleaning
4. Couch Cleaning
5. Rug Cleaning
6. Bedframe Cleaning
7. Leather Couch Cleaning
8. Window Cleaning
9. End of Lease Clean
10. Carpet Repair
11. Carpet Restretching

### Real Photos
All real photos are in `/public/images/` — organised and named clearly.
All 3 real videos are in `/public/videos/`.
Do NOT delete or rename these files.

### Components Built/Updated
- `Hero.jsx` — uses real photo (`couch-after-01.jpg`) as hero image
- `Services.jsx` — 11 real services with real photos
- `ServicesPage.jsx` — services page with photo cards + hash scroll to section
- `BeforeAfter.jsx` — uses real before/after photos (carpet, couch, curtain)
- `VideoSection.jsx` — "Watch Us Work" section with 3 real videos
- `Navbar.jsx` — dropdown with all 11 services, 200ms close delay
- `HomePage.jsx` — includes BeforeAfter and VideoSection sections
- `Contact.jsx` — no reveal animation (intentional, keeps form always visible)

### Bugs Already Fixed
- Dropdown menu closes too fast → fixed with 200ms delay
- Services page not scrolling to section on hash nav → fixed with useEffect + setTimeout
- ScrollToTop conflicting with hash navigation → fixed in `App.jsx`
- Contact page appearing blank → removed reveal animation
- Video section not showing → removed reveal animation

---

## Business Details (Placeholders — Update When Client Provides)
- **Business name:** Clenza
- **Phone:** 04XX XXX XXX ← replace with real number
- **Email:** hello@clenza.com.au ← replace when domain purchased
- **ABN:** XX XXX XXX XXX ← replace with real ABN
- **Address:** Sydney, NSW, Australia ← add suburb when confirmed
- **Domain:** clenza.com.au ← not purchased yet

## When Domain Is Purchased
Update these files:
1. `index.html` — change all `megaclean-pro.vercel.app` to new domain
2. `public/sitemap.xml` — update all URLs
3. `src/components/Services.jsx` — no change needed
4. Vercel dashboard — add custom domain
5. Google Search Console — add new domain property

---

## Images Available (in /public/images/)
### Used in website
- `carpet-cleaning-in-progress-01.jpg` → Carpet Cleaning service
- `mattress-cleaning-01.jpg` → Mattress Cleaning service
- `curtain-before-01.jpg` → Curtain Cleaning service
- `couch-before-01.jpg` → Couch Cleaning service
- `rug-cleaning-in-progress-01.jpg` → Rug Cleaning service
- `chairs-after-01.jpg` → Bedframe Cleaning service
- `leather-couch-before-01.jpg` → Leather Couch Cleaning service
- `window-cleaning-01.jpg` → Window Cleaning service
- `carpet-after-02.jpg` → End of Lease service
- `carpet-repair-in-progress-02.jpg` → Carpet Repair service
- `carpet-repair-in-progress-01.jpg` → Carpet Restretching service
- `carpet-before-01.jpg` → BeforeAfter section (before)
- `carpet-after-01.jpg` → BeforeAfter section (after)
- `couch-after-01.jpg` → Hero image + BeforeAfter section (after)
- `curtain-after-01.jpg` → BeforeAfter section (after)

### Not yet used (available for gallery or additional sections)
- `carpet-before-02.jpg`, `carpet-before-03.jpg`
- `carpet-cleaning-in-progress-02.jpg` through `07.jpg`
- `carpet-commercial-after-01.jpg`, `carpet-commercial-before-01.jpg`
- `carpet-repair-in-progress-03.jpg`
- `couch-after-02.jpg`, `couch-after-03.jpg`
- `couch-before-02.jpg`, `couch-before-03.jpg`
- `couch-during-01.jpg`
- `couch-outdoor-before-01.jpg`, `couch-outdoor-during-01.jpg`
- `leather-couch-after-01.jpg`

---

## What Still Needs Doing
- [ ] Client buys domain (clenza.com.au)
- [ ] Update phone, ABN, address in code
- [ ] Set up Google Business Profile
- [ ] Add suburb-specific pages for SEO (Parramatta, Bondi, Newtown, etc.)
- [ ] Add photo gallery section using unused real photos
- [ ] Connect other Vercel projects to GitHub (Sydney Shield, Meridian, etc.)
- [ ] Get real customer reviews on Google

---

## Rules — Read Before Making Any Changes
1. Always push to GitHub — never edit Vercel directly
2. Do not remove the Google verification meta tag from `index.html`
3. Do not delete files from `/public/images/` or `/public/videos/`
4. Do not change service IDs in `Services.jsx` (used for hash navigation)
5. Do not add reveal animations to Contact or VideoSection components
6. Test on mobile AND desktop before marking anything done
7. When domain is purchased, update ALL URLs at once — not one by one
