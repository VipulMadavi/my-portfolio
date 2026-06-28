# Portfolio Roadmap

## V2 Vision: Boot Selection + Hybrid Terminal

### Boot Screen
- BIOS-like "GRUB Bootloader" screen as entry point
- Options: `Cloud OS (GUI)` or `System Shell (CLI)`
- Default: GUI auto-boots in 5 seconds if no input

### Cross-Mode Navigation
- GUI: Prominent "TERMINAL MODE" button (replaces `?dev=true` hack)
- CLI: Keep `gui` command to switch back

### CLI Overhaul
| Command | Description |
| :--- | :--- |
| `about` | About Me bio |
| `skills` | Security, Programming, Tools |
| `projects` | Projects with GitHub links |
| `experience` | Training & Internship details |
| `education` | Degree & College info |
| `certs` | Certifications |
| `blog` | Link to articles |
| `contact` | Social links |

### Visual Upgrades
- ASCII art banner on terminal startup
- Faster typing speed for "Power User" feel

---

## Blog Integration

### Option 1: Redirect (Start here)
Add navbar link to Medium/Dev.to with `target="_blank"`.

### Option 2: API Integration (Later)
Fetch Medium RSS via `rss2json` API, render as glassmorphism cards in `src/gui/components/blog.js`.

---

## Mobile & Navbar (V2 Migration Notes)

### Hamburger Menu
- `menu-toggle` button with `[ :: SYSTEM :: ]` text
- Mobile nav slides down with opacity/transform animation
- Auto-close on link click

### Mobile Fixes
- Hero title: `4.5rem` → `2.5rem` on mobile
- Grid min-width: `350px` → `280px`
- Buttons: `flex-wrap: wrap` + full width on tiny screens
- `scroll-behavior: smooth`

---

## Backlog
- [ ] BIOS Boot Screen
- [ ] Blog Integration (redirect first)
- [ ] Mobile CLI: Optimized touch-terminal
- [ ] ASCII art banner
- [ ] Experience/Education/Certs commands in terminal
