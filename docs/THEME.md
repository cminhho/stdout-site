# stdout-site — Current Theme (Design System)

Reference for the current theme when doing UI/UX work

---

## 1. Product & style

| Item | Value |
|------|--------|
| **Product type** | Landing page (developer tools platform) |
| **Style** | Liquid Glass, dark-first, minimal |
| **Stack** | React, Vite, Tailwind, shadcn/ui (Radix), Framer Motion |
| **Industry** | Developer tools / dev experience |

---

## 2. Typography

| Token | Font | Usage |
|-------|------|--------|
| **Sans** | Inter (300–800) | Body, UI, headings |
| **Mono** | JetBrains Mono (400–700) | Badges, code, labels |

- **Headings:** `font-extrabold`, `tracking-tight` / `tracking-tighter`, gradient or `text-foreground`.
- **Body:** `font-light` / `font-normal`, `text-muted-foreground`, line-height ~1.5–1.75.
- **Hero headline:** `text-6xl` → `text-8xl` (responsive), `leading-[0.95]`.
- **Section titles:** `text-3xl` / `text-4xl`, `font-bold`.

---

## 3. Color (HSL via CSS variables)

### Light (`:root`)

| Token | HSL (raw) | Role |
|-------|-----------|------|
| **background** | `220 20% 97%` | Page background |
| **foreground** | `220 20% 10%` | Primary text |
| **primary** | `220 70% 50%` | CTA, link, ring |
| **primary-foreground** | `0 0% 100%` | Text on primary |
| **muted / muted-foreground** | `220 15% 93%` / `220 12% 36%` | Secondary bg, secondary text (≥4.5:1 on background) |
| **accent** | `220 15% 93%` | Nav hover, pills |
| **border** | `220 15% 88%` | Borders |
| **destructive** | `0 84% 60%` | Errors, macOS red dot |
| **radius** | `0.75rem` | Default border radius |

### Dark (`.dark`)

- **background:** `225 25% 6%`
- **foreground:** `220 15% 90%`
- **primary:** `220 70% 60%`
- **muted-foreground:** `220 10% 55%`
- **border:** `225 15% 16%`

### Custom tokens

- **terminal-amber:** `38 92% 50%` (macOS yellow dot).
- **grid-color:** Hero background grid (opacity 0.04 light / 0.03 dark).
- **glow-primary:** CTA/card glow (primary at low opacity).

---

## 4. Liquid Glass

- **.glass-surface**  
  `--glass-bg`, `backdrop-filter: blur(20px)`, `--glass-border`, `--glass-shadow`.
- **.glass-surface-strong**  
  Blur 40px, saturate 1.8, plus `--glass-highlight` (inset highlight).
- **.glass-card**  
  Glass + saturate 1.5; hover: primary border, shadow glow, `translateY(-1px)`.

Light: `--glass-bg` `hsl(220 20% 100% / 0.82)` (≥80% opacity), `--glass-border` 55% opacity; dark: ~`hsl(225 20% 12% / 0.5)`.

---

## 5. Effects & backgrounds

- **.text-gradient-primary**  
  `linear-gradient(135deg, primary, foreground)`, `bg-clip-text`, `text-transparent`.
- **.bg-grid**  
  80×80px grid, color `--grid-color`.
- **.bg-gradient-radial**  
  Ellipse 80%×50% at 50% -20%, primary/0.08 → transparent.
- **.liquid-mesh**  
  Multiple radial gradients (primary, purple, cyan) opacity 0.04–0.07.
- **.animate-pulse-slow**  
  3s pulse for badge dot.

---

## 6. Layout & spacing

- **Container:** `container max-w-5xl` / `max-w-4xl`, `mx-auto`, `px-4 sm:px-6 lg:px-8`. Root layout and body use `overflow-x-hidden`; sections use `px-4 sm:px-6` so 375px has no horizontal scroll.
- **Navbar:** Fixed, `pt-4`, `px-4`, pill-style nav `rounded-2xl`, `glass-surface-strong`.
- **Hero:** `pt-28 pb-16 sm:pt-36 sm:pb-24`, `min-h-screen`, content centered.
- **Sections:** `py-24 sm:py-32`, `border-t border-border/50` when needed.
- **Z-index:** Navbar `z-50`, content `z-10` in hero.

---

## 7. Component patterns

- **Navbar:** Logo (Link + favicon), divider, #tools / #get-started, GitHub, ThemeToggle; Lucide icons.
- **Primary buttons:** `bg-primary text-primary-foreground`, `rounded-2xl`, `shadow-lg shadow-primary/25`, hover opacity.
- **Secondary buttons:** `glass-surface`, `rounded-2xl`, `hover:border-primary/30`.
- **Badge / pills:** `glass-surface`, `rounded-full`, `text-xs font-mono`, dot `animate-pulse-slow`.
- **Cards (Get Started):** `glass-card`, `rounded-2xl`, `p-8`; icon box `bg-primary/10`, `rounded-xl`.
- **Screenshot frame:** `glass-surface-strong`, traffic lights (destructive, amber, green), `rounded-2xl`.
- **Footer:** No border; centered content; gradient `from-background via-background to-muted/20` (dark: `to-muted/10`). Quick Nav heading + links (Home, Tools, Get Started, App, GitHub); copyright `text-xs`; disclaimer `text-[11px]`.

---

## 8. Animation (Framer Motion)

- **Hero:** `initial={{ opacity: 0, y: 20–60 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition` duration 0.6–1, delay 0.1–0.5; some use `filter: "blur(10px)"` → `blur(0px)`.
- **Easing:** `ease: [0.16, 1, 0.3, 1]` for scale/entrance.
- **Scroll:** `whileInView`, `viewport={{ once: true }}` for sections.

---

## 9. Accessibility & UX (in use)

- **Theme:** `darkMode: ["class"]`, toggled via `.dark` on `<html>`.
- **Focus:** Ring uses `--ring` (primary).
- **Icons:** Lucide SVG; no emojis as icons.
- **ThemeToggle:** `aria-label="Toggle theme"`.
- **Images:** All images have descriptive `alt`; favicon/logo in components use `import.meta.env.BASE_URL`; see §10 “Images & favicon/logo” for details.

---
