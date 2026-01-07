# 🚀 Future Roadmap: Blog Integration

This document outlines the plan for adding a **Blog** section to the Dual-Mode Portfolio.

## Goal
Share technical articles, walkthroughs, and security findings (e.g., CTF writeups, Cloud setups) to demonstrate expertise.

## Implementation Options

### Option 1: The "Redirect" (Recommended for Start)
*Best for: Keeping the portfolio code simple and leveraging existing platforms like Medium or Dev.to.*

**Implementation Steps:**
1.  **Update Navbar**: Add a new link `<a href="https://medium.com/@yourusername" target="_blank">Blog</a>`.
    *   *Note*: Use `target="_blank"` to open in a new tab so users don't lose the portfolio.
2.  **Visuals**: Add an "external link" icon (e.g., `↗`) to indicate it leads elsewhere.

**Code Change (`src/gui/gui-app.js`):**
```javascript
<div class="nav-links">
  <a href="#hero">Home</a>
  <a href="#projects">Projects</a>
  <a href="https://medium.com/@vipul" target="_blank">Blog ↗</a>
  <a href="#contact">Contact</a>
</div>
```

### Option 2: The "API Integration" (Advanced)
*Best for: Showing DevSecOps skills by fetching dynamic content.*

**Implementation Steps:**
1.  **Fetch Data**: Use the Medium RSS-to-JSON API (`https://api.rss2json.com/v1/api.json?rss_url=...`) to get your latest posts.
2.  **New Section**: Create a `<section id="blog">` in the `index.html` structure.
3.  **Cards**: Render the fetched posts as glassmorphism cards (Title + Preview + "Read More" button).

**Proposed Structure:**
- `src/gui/components/blog.js`: Fetches and renders the blog cards.

## Recommended Strategy
Start with **Option 1**. It drives traffic to a platform where the community already exists (Medium/Dev.to) and requires zero maintenance on the portfolio codebase. You can switch to Option 2 later if you want to show off API skills.
