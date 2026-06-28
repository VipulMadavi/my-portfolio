# Portfolio Roadmap

## Current State (V1 — Live)
- ✅ GUI mode: Hero + Skills + Qualifications + Projects + Contact
- ✅ Terminal mode: `sys_info`, `projects`, `contact`, `hack`, `matrix`
- ✅ Network graph background effect
- ✅ Typing animation, glitch title, glassmorphism cards
- ✅ Mobile hamburger menu
- ✅ Blog link (Hashnode redirect)
- ✅ `prefers-reduced-motion` respected
- ✅ Focus-visible styles defined
- ✅ Font loading with `display=swap`
- ✅ OG meta tags present
- ✅ Deployed via GitHub Pages

---

## V1.5: Critical Fixes & Quick Wins

### Accessibility (CRITICAL — Do First)

| # | Task | Effort | Status |
|---|------|--------|--------|
| 1 | Add skip-to-content link (`<a href="#hero">Skip to content</a>` before nav) | 2 min | ✅ |
| 2 | Replace deprecated `clip: rect()` with `clip-path: inset()` in glitch animation | 5 min | ✅ |
| 3 | Remove `cursor: pointer` from project cards (not clickable yet) OR add links | 5 min | ✅ |
| 4 | Add `aria-current="page"` to active nav link via IntersectionObserver | 20 min | ✅ |
| 5 | Ensure all CTA buttons meet 44px min touch target on mobile | 5 min | ✅ |
| 6 | Bump `--text-secondary` from `#94a3b8` → `#a1b5cc` for safer AA contrast margin | 1 min | 🔲 |

### Quick Wins (< 1 hour each)

| # | Task | Effort | Status |
|---|------|--------|--------|
| 7 | Add GitHub links to project cards (biggest trust gap) | 15 min | ✅ |
| 8 | Add "Terminal Mode" button in GUI hero/nav (replace `?mode=shell` hack) | 10 min | 🔲 |
| 9 | Swap default Vite favicon for personal logo/initials | 10 min | 🔲 |
| 10 | Add `target="_blank"` to terminal contact links | 2 min | 🔲 |
| 11 | Create or remove `og-image.png` (referenced but missing from `/public`) | 10 min | ✅ |
| 12 | Preload hero font (Space Grotesk 700) — `<link rel="preload">` for LCP | 1 min | 🔲 |
| 13 | Command history in CLI (↑↓ arrow navigation) | 30 min | 🔲 |

---

## V2: UX Polish & Scroll Experience

### Scroll-Triggered Animations (HIGH impact, zero deps)

| # | Task | Approach | Status |
|---|------|----------|--------|
| 14 | Section reveal on scroll | CSS `animation-timeline: view()` + IntersectionObserver fallback | 🔲 |
| 15 | Skills progress bars animate on scroll-in (not page load) | IntersectionObserver triggers `.visible` class | 🔲 |
| 16 | Staggered project card entrance (50ms apart) | IntersectionObserver + `transition-delay` per card | 🔲 |
| 17 | Smooth `#app` fade-in after loader completes | `opacity: 0→1` transition on mount | 🔲 |

```css
/* Native scroll reveal (modern browsers) */
@keyframes reveal {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-pad {
  animation: reveal linear;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
```

Fallback: IntersectionObserver + `.visible` class (~15 lines JS).

### Navigation UX

| # | Task | Status |
|---|------|--------|
| 18 | Active nav link highlight (scroll-tracked via IntersectionObserver) | 🔲 |
| 19 | Back-to-top button (appears after 500px scroll) | 🔲 |
| 20 | Persist GUI/Terminal preference in `localStorage` | 🔲 |

### Project Cards Enhancement

| # | Task | Status |
|---|------|--------|
| 21 | Hover state shows "View Project →" CTA or GitHub icon | 🔲 |
| 22 | Add live demo links where applicable | 🔲 |
| 23 | Add thumbnail/screenshot previews | 🔲 |
| 24 | Show impact metrics (e.g., "National finalist from 50K+ teams") | 🔲 |
| 25 | Uncomment SOC Dashboard project when ready | 🔲 |

---

## V3: Boot Screen + CLI Overhaul

### Phase 1 — Boot Screen (Priority: HIGH)
- [ ] BIOS/GRUB bootloader screen as entry point
- [ ] Options: `Cloud OS (GUI)` or `System Shell (CLI)`
- [ ] Default: GUI auto-boots in 5s if no keypress
- [ ] Keyboard navigation (arrow keys + Enter)
- [ ] Replace `?mode=shell` URL hack with proper boot selection

### Phase 2 — CLI Command Expansion

| Command | Description | Status |
| :--- | :--- | :--- |
| `help` | List commands | ✅ Done |
| `sys_info` | About Me + Education + Certs | ✅ Done |
| `projects` | Projects w/ GitHub links | ✅ Done (needs links) |
| `contact` | Social links | ✅ Done |
| `about` | Short bio | 🔲 New |
| `skills` | Security, Programming, Tools | 🔲 New |
| `experience` | Training & Internship | 🔲 New (extract from sys_info) |
| `education` | Degree & College | 🔲 New (extract from sys_info) |
| `certs` | Certifications list | 🔲 New (extract from sys_info) |
| `blog` | Open blog in new tab | 🔲 New |
| `resume` | Open/download resume | 🔲 New |
| `whoami` | One-liner identity | 🔲 New |
| `gui` | Switch to GUI | ✅ Done |
| `clear` | Clear screen | ✅ Done |

### Phase 3 — Terminal Visual Polish
- [ ] ASCII art banner on startup (replace current AWS-style)
- [ ] Faster typing speed / instant mode toggle
- [ ] Tab autocomplete
- [ ] Touch-friendly input on mobile (larger font, better padding)

---

## V4: Content & Conversion

### Contact & CTA

| # | Task | Status |
|---|------|--------|
| 26 | Contact form (Formspree/EmailJS) instead of just links | 🔲 |
| 27 | Floating "Available for Internships" badge | 🔲 |
| 28 | Download resume with analytics tracking (optional) | 🔲 |

### Blog Integration

- [ ] Fetch Hashnode RSS via API
- [ ] Render as glassmorphism cards in `src/gui/components/blog.js`
- [ ] Show latest 3-4 posts (title + date + read time)
- [ ] Fallback: static card linking to blog if API fails

### Social Proof

- [ ] Testimonials/recommendations section (even 1-2 LinkedIn recs)
- [ ] Live GitHub activity feed (fetch recent commits via GitHub API)

---

## V5: Performance & SEO

| # | Task | Status |
|---|------|--------|
| 29 | Lazy-load network graph canvas (only init when visible) | 🔲 |
| 30 | Add `robots.txt` and `sitemap.xml` | 🔲 |
| 31 | Lighthouse audit → target 90+ all categories | 🔲 |
| 32 | Page transition animations between sections | 🔲 |
| 33 | Fix ticker covering footer on small viewports (use `margin-bottom` on `main`) | 🔲 |

---

## Backlog / Ambitious Ideas

| # | Idea | Category |
|---|------|----------|
| 34 | Interactive project case studies (click card → expand to full challenge/solution/result) | Content |
| 35 | 3D terminal boot effect (CSS perspective flip from boot to chosen mode) | Visual |
| 36 | Dark/light theme toggle | Accessibility |
| 37 | PWA support (`manifest.json` + service worker for offline) | Performance |
| 38 | Easter eggs (`konami` code, `sudo rm -rf /` joke, more hack-style commands) | Fun |
| 39 | Analytics (Plausible/Umami — privacy-friendly) | Insights |
| 40 | i18n — Hindi/Marathi toggle for local reach | Niche |
| 41 | Animated section transitions with IntersectionObserver + CSS transforms | Visual |

---

## Mobile & Responsive (Ongoing)

### Done
- [x] Hamburger menu with slide animation
- [x] Auto-close nav on link click
- [x] Grid collapses to single column

### Remaining
- [ ] Hero title: `4.5rem` → `2.5rem` on mobile ✅ (already in CSS)
- [ ] Grid min-width: `350px` → `280px` for narrow phones
- [ ] Buttons: full width on small screens ✅ (already in CSS)
- [ ] Terminal: touch-friendly input, larger font on mobile
- [ ] Test on actual devices (not just DevTools)
- [ ] Ticker: ensure it doesn't overlap content on short viewports

---

## Architecture Notes

```
index.html → main.js → loader.js → [GUI | Terminal] (dynamic import)
                                  → network-graph.js (background)
```

- No framework — vanilla JS + Vite
- Keep it lean. No React/Vue unless project grows significantly.
- CSS: `style.css` (shared) + `gui.css` + `terminal.css`
- Deploy: `gh-pages` branch via `npm run deploy`
- Scroll animations: prefer native CSS `animation-timeline` with JS fallback

---

## Priority Execution Order

### Immediate (this week)
1. ✅ Skip-to-content link (accessibility)
2. ✅ GitHub links on project cards (trust signal)
3. ✅ Terminal Mode button in GUI (discoverability) — deferred
4. ✅ Fix deprecated `clip` → `clip-path`
5. ✅ OG image: create or remove broken reference

### Short-term (next 2 weeks)
6. 🔨 Scroll-triggered section reveals
7. 🔨 Progress bars animate on scroll
8. 🔨 Active nav link highlight
9. 🔨 Project card hover CTA + GitHub icons
10. 🔨 Command history in terminal

### Medium-term (month)
11. 📦 Boot screen (wow factor, replaces URL hack)
12. 📦 CLI command expansion (content parity with GUI)
13. 📦 Contact form integration
14. 📦 Blog API integration

### Long-term
15. 🎯 Case studies / detailed project pages
16. 🎯 SEO + Lighthouse pass
17. 🎯 PWA + offline support
