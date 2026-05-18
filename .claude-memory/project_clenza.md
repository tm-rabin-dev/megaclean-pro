---
name: Clenza Project
description: Full context for the Clenza cleaning website (megaclean-pro) — local path, GitHub, Vercel, DNS, GBP, Search Console, and to-do list
type: project
---

## Project Identity
- **Business name:** Clenza Cleaning (registered 16 May 2026, ref: 2605-OY-4997)
- **ABN:** 20 455 980 845 (active)
- **Domain:** clenzaclean.com.au (purchased VentraIP, Invoice #20443392)
- **Live site:** https://clenzaclean.com.au
- **Backdoor URL:** https://megaclean-pro.vercel.app (still works)
- **Phone:** 0415 410 507 ✅ updated in all components
- **WhatsApp:** https://wa.me/61415410507
- **Email:** hello@clenza.com.au
- **Address:** Sydney, NSW ← general placeholder, client hasn't confirmed suburb

## Local & Repo
- **Local folder:** `c:\Users\tanvi\OneDrive\Desktop\Claude AI\client-sites\megaclean-pro`
- **GitHub:** https://github.com/tm-rabin-dev/megaclean-pro (branch: master)
- **Vercel project:** megaclean-pro (account: tanvirpjwtp@gmail.com)
- **Stack:** Vite + React + Tailwind CSS
- **Deployment:** Push to master → auto-deploys to Vercel (never edit Vercel directly)
- **Stable backup tag:** `v1-stable` (restore: `git checkout v1-stable`)

## DNS (VentraIP)
- A record: clenzaclean.com.au → 216.198.79.1
- CNAME: www → cname.vercel-dns.com (works — optional upgrade to 03a88abd3c34c104.vercel-dns-017.com)
- Both clenzaclean.com.au and www.clenzaclean.com.au: Valid Configuration + SSL ✅

## Google Business Profile
- URL: https://business.google.com
- Status: Verified ✅ — awaiting public propagation (3–7 days from 16 May 2026)
- Photos: 10 real cleaning photos uploaded ✅
- Services: 15 services with descriptions ✅
- Description, service areas (Bondi, Inner West, CBD, Parramatta), hours (Mon–Sun 7am–7pm) ✅
- Online estimates: Yes ✅
- Competitor note: klenzaclean.com.au = Klenza Clean (Melbourne) — different city, no conflict

## Google Search Console
- Old property: https://megaclean-pro.vercel.app (ignore)
- New property: https://clenzaclean.com.au ✅ added 17 May 2026
- Both verification meta tags in index.html (DO NOT REMOVE EITHER)
- Sitemap still needs submitting in new property

## SEO
- index.html: canonical, OG, schema all pointing to clenzaclean.com.au ✅
- public/sitemap.xml: all URLs use clenzaclean.com.au ✅
- public/robots.txt: sitemap URL updated to clenzaclean.com.au ✅

## Critical Rules (NEVER break these)
1. NEVER edit Vercel directly — push to GitHub only
2. NEVER remove either Google verification meta tag from index.html
3. NEVER delete or rename files from /public/images/ or /public/videos/
4. NEVER change service IDs in Services.jsx (used for hash navigation)
5. NEVER add reveal animations to Contact.jsx or VideoSection.jsx (caused blank page bug)
6. When updating domain URLs — update ALL at once (index.html, sitemap.xml, robots.txt, schema)
7. Always ask before anything destructive
8. Always test mobile AND desktop before marking done

## Key Files
- Logo: /public/images/clenza-logo.png (draft — final transparent PNG pending)
- Mascot robot: /public/images/mascot-robot.png (chatbot launcher)
- Chatbot: src/components/ChatWidget.jsx — named "Clenzo", label "ASK CLENZO"
- Forms: Formspree ID xpqnzllv → tanvirpjwtp@gmail.com

## Still To Do (as of 18 May 2026)
- [ ] Click Verify in Google Search Console for clenzaclean.com.au
- [ ] Submit sitemap.xml in new Search Console property
- [ ] Check GBP public visibility in incognito (should go live within 3–7 days of 16 May)
- [ ] Update address in code (suburb placeholder in Hero, Footer, schema)
- [ ] Fix Rug Cleaning emoji (currently 🏠 house — wrong)
- [ ] Check Carpet Repair card image
- [ ] Get real customer reviews on Google
- [ ] Add suburb SEO pages (Parramatta, Bondi, Newtown etc.)
- [ ] Replace AI-generated About page photos (team.png, van.png) with real photos
- [ ] Set up Google Ads when ready (A$600 credit available at https://ads.google.com)
- [ ] Consider updating www CNAME to 03a88abd3c34c104.vercel-dns-017.com (optional)
