# stdout — Official Website

Landing site for [stdout](https://github.com/cminhho/stdout): **your standard output for dev tools** — 60+ tools for formatting, converting, encoding & generating. No backend, no sign-up; everything runs locally (Web, macOS, Windows, Linux).

Built with React, Vite, Tailwind, shadcn/ui.

**Live:** [cminhho.github.io/stdout-site](https://cminhho.github.io/stdout-site/) · **App:** [stdout-tools.web.app](https://stdout-tools.web.app/) · **Repo:** [cminhho/stdout](https://github.com/cminhho/stdout)

## Quick start

```bash
git clone https://github.com/cminhho/stdout-site.git && cd stdout-site
npm ci
npm run dev
```

Open http://localhost:8080. Node 20+, no env or API keys.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (port 8080) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run release` | Bump patch, tag `vX.Y.Z`, push → CI deploys |
| `npm run release minor` \| `major` | Bump minor/major, tag, push |
| `npm run deploy` | Build and push `dist/` to `gh-pages` (manual) |
| `npm run lint` | ESLint |
| `npm run test` | Vitest |

## Deploy (GitHub Pages)

**One-time:** [Settings → Pages](https://github.com/cminhho/stdout-site/settings/pages) → **Source:** Deploy from a branch → branch **gh-pages**, folder **/ (root)**.

**Release:** From a clean tree, `npm run release` (or `release minor` / `major`). Workflow builds and pushes to `gh-pages`. Site: `https://<user>.github.io/stdout-site/`.

**Manual:** `npm run deploy` (same branch; Pages must be set as above).

## Project layout

```
.github/workflows/deploy-pages.yml   # CI: on tag v* → build, push gh-pages
public/                              # Static assets (favicon, robots, images)
scripts/release.sh                   # version bump, tag, push
src/
├── main.tsx, App.tsx, index.css
├── components/                      # Navbar, Hero, ToolsGrid, sections, ui/
├── pages/                           # Index, NotFound
└── lib/, hooks/, test/
vite.config.ts                       # base: /stdout-site/ for build
```

Build uses `base: '/stdout-site/'` for GitHub Pages; do not change for project-site deploy.

## Stack

Vite 5 · React 18 · TypeScript · Tailwind · shadcn/ui (Radix) · React Router · Framer Motion · Vitest.

## Docs

| File | Purpose |
|------|---------|
| `docs/THEME.md` | Design system (Liquid Glass, tokens, components) |
| `docs/HERO_CONTENT.md` | Hero copy strategy, alternatives, SEO |

## Troubleshooting

- **Port in use:** `npm run dev -- --port 3000`
- **Deploy / site not updating:** Confirm Pages source = branch `gh-pages`, root. Re-run workflow if needed.
- **Release blocked:** Commit or stash; only `package.json` / `package-lock.json` may be uncommitted.
- **Preview blank:** Run `npm run build` first; open the URL Vite prints (e.g. …/stdout-site/).

## License

MIT
