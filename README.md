# Stdout — Official Website

Landing and marketing site for [Stdout](https://github.com/cminhho/stdout), the developer tools platform. This repo is the source for the official Stdout website: a static single-page site that promotes the app, lists tools, and links to the web app and desktop install.

**Live:** [cminhho.github.io/stdout-site](https://cminhho.github.io/stdout-site/) · **App repo:** [cminhho/stdout](https://github.com/cminhho/stdout) (Electron + web, 60+ dev tools)

## Table of Contents

- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Architecture](#architecture)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Key Features

- **Landing page** — Hero, tools grid, philosophy, get-started CTA, footer
- **Dark-first UI** — Tailwind + shadcn/ui, theme toggle
- **Static export** — Vite build to `dist`; no server or env vars required for run
- **CI deploy** — Push a version tag (`v*`) → GitHub Actions builds and deploys to GitHub Pages
- **Release script** — `npm run release [patch|minor|major]` bumps version, tags, and pushes to trigger deploy

## Tech Stack

| Layer        | Technology |
|-------------|------------|
| **Build**   | [Vite](https://vitejs.dev/) 5.x |
| **UI**      | [React](https://react.dev/) 18, [TypeScript](https://www.typescriptlang.org/) 5.x |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 3.x |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) (Radix primitives) |
| **Routing** | [React Router](https://reactrouter.com/) 6.x |
| **Deploy**  | GitHub Pages (source: GitHub Actions) |

Notable dependencies: `framer-motion`, `lucide-react`, `next-themes`, `@tanstack/react-query`, `react-hook-form`, `zod`.

## Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 9+ (or use the lockfile: `npm ci`)

No database, env file, or API keys required for local development.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/cminhho/stdout-site.git
cd stdout-site
```

### 2. Install dependencies

```bash
npm install
```

For a clean install matching the lockfile (recommended in CI or after changing Node version):

```bash
npm ci
```

### 3. Start the development server

```bash
npm run dev
```

Vite starts the dev server (default: [http://localhost:8080](http://localhost:8080)). Changes to source files hot-reload.

### 4. Preview production build locally

To check the built site (e.g. with base path `/stdout-site/`):

```bash
npm run build
npm run preview
```

Open the URL Vite prints (often `http://localhost:4173`). Use this to verify assets and routes before deploying.

## Architecture

### Directory structure

```
stdout-site/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # Build + deploy to GitHub Pages on tag push
├── public/                     # Static assets (copied as-is into dist)
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── stdout-screenshot.png
├── scripts/
│   └── release.sh              # Version bump, tag, push (triggers CI)
├── src/
│   ├── main.tsx                # Entry: React root, mounts <App />
│   ├── App.tsx                 # Router, providers (Query, Tooltip, Toaster)
│   ├── App.css
│   ├── index.css               # Global + Tailwind
│   ├── lib/
│   │   └── utils.ts            # cn() and helpers
│   ├── components/              # Feature and layout components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ToolsGrid.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── GetStartedSection.tsx
│   │   ├── FooterSection.tsx
│   │   ├── NavLink.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ui/                 # shadcn/ui primitives
│   ├── pages/
│   │   ├── Index.tsx            # Home (all sections)
│   │   └── NotFound.tsx         # 404
│   ├── hooks/
│   └── test/
│       ├── setup.ts
│       └── example.test.ts
├── index.html                  # SPA shell; script points to src/main.tsx
├── vite.config.ts              # Base path, alias @ → src, React SWC
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── components.json             # shadcn config
├── package.json
└── README.md
```

### Build and runtime flow

1. **Development:** `npm run dev` → Vite dev server serves `index.html`, bundles `src/main.tsx` and dependencies, and applies `base: '/'` so assets resolve at root.
2. **Production build:** `npm run build` → Vite uses `base: '/stdout-site/'` (see `vite.config.ts`), emits `dist/` with hashed JS/CSS and updated asset paths for GitHub Pages project site.
3. **Runtime:** Browser loads `index.html` → script loads the app bundle → React Router renders `Index` or `NotFound`; all data is static (no API calls).

### Key configuration

| File | Purpose |
|------|--------|
| `vite.config.ts` | `base: '/stdout-site/'` for build (GitHub Pages subpath); `base: '/'` for dev. Alias `@` → `src/`. |
| `index.html` | Title, meta, favicon; root div and script entry. |
| `components.json` | shadcn style, paths for components/utils. |

No environment variables are required. The site is fully static.

## Available Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (default port 8080). |
| `npm run build` | Production build into `dist/` (base `/stdout-site/`). |
| `npm run build:dev` | Build in development mode. |
| `npm run preview` | Serve `dist/` locally after a build. |
| `npm run deploy` | Build and push `dist` to branch `gh-pages` (manual deploy). |
| `npm run release` | Bump patch version, create tag `vX.Y.Z`, push; CI deploys. |
| `npm run release:patch` | Same as `release` (patch). |
| `npm run release:minor` | Bump minor, tag, push. |
| `npm run release:major` | Bump major, tag, push. |
| `npm run lint` | Run ESLint. |
| `npm run test` | Run Vitest once. |
| `npm run test:watch` | Run Vitest in watch mode. |

## Testing

Tests use [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

```bash
# Run all tests once
npm run test

# Watch mode (re-run on file change)
npm run test:watch
```

Test files live under `src/test/` and next to source (e.g. `*.test.tsx`). Setup and globals are in `src/test/setup.ts`.

## Deployment

### GitHub Pages (recommended): deploy on version tag

Deployment is automated when you push a **version tag** matching `v*` (e.g. `v1.0.0`, `v1.0.1`).

**One-time setup (required before first deploy)**

If you skip this, the workflow will fail with `Failed to create deployment (status: 404)`.

1. Open **[Settings → Pages](https://github.com/cminhho/stdout-site/settings/pages)** for this repo.
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. Save. No need to pick a branch or folder — the workflow will deploy when you push a version tag.

**Release and deploy**

From a clean working tree (commit any changes first):

```bash
npm run release           # Bump patch (1.0.0 → 1.0.1), tag, push
npm run release minor     # Bump minor (1.0.0 → 1.1.0)
npm run release major     # Bump major (1.0.0 → 2.0.0)
```

What happens:

1. `scripts/release.sh` checks for uncommitted changes (except `package.json` / `package-lock.json`).
2. `npm version <patch|minor|major>` updates `package.json` and creates a git tag `vX.Y.Z`.
3. `git push origin main --follow-tags` pushes the commit and the tag.
4. The [deploy-pages workflow](.github/workflows/deploy-pages.yml) runs on the new tag: `npm ci` → `npm run build` → upload `dist` → deploy to GitHub Pages.

**Site URL:** `https://<username>.github.io/stdout-site/` (e.g. [https://cminhho.github.io/stdout-site/](https://cminhho.github.io/stdout-site/)).

### Manual deploy (branch `gh-pages`)

If you want to deploy without a tag:

1. In **Settings → Pages**, set **Source** to **Deploy from a branch**, branch `gh-pages`, folder **/ (root)**.
2. Locally run:
   ```bash
   npm run deploy
   ```
   This runs `vite build` and pushes the contents of `dist/` to the `gh-pages` branch.

### Other static hosts (Vercel, Netlify, Firebase)

1. Connect the repo to the host.
2. **Build command:** `npm run build` (or `npm ci && npm run build`).
3. **Publish directory:** `dist`.

For a **root-level** deployment (e.g. custom domain at `https://stdout.example.com/`), set `base: '/'` in `vite.config.ts` for the build so asset paths are absolute from root. The current config is tuned for GitHub Pages at `/<repo>/`.

## Troubleshooting

### Port 8080 already in use

Vite will try the next free port and print it. To force a port:

```bash
npm run dev -- --port 3000
```

### Deploy fails: `Failed to create deployment (status: 404)` or `Ensure GitHub Pages has been enabled`

GitHub Pages is not enabled for this repo, or the source is not set to GitHub Actions.

1. Go to **[Settings → Pages](https://github.com/cminhho/stdout-site/settings/pages)**.
2. Set **Build and deployment** → **Source** to **GitHub Actions**.
3. Re-run the failed workflow (Actions tab → select the run → "Re-run all jobs").

### Deploy fails: `Tag "vX.Y.Z" is not allowed to deploy to github-pages due to environment protection rules`

The `github-pages` environment is restricting which refs can deploy.

1. Go to **Settings** → **Environments** → **github-pages**.
2. Under **Deployment branch / tag rules** (or **Deployment protection rules**):
   - Either add a rule that allows tags matching `v*` (or the tag you push), or
   - Remove / relax the rule that blocks your tag (e.g. allow "All branches and tags" or add `v*`).
3. If **Required reviewers** is enabled and you want deploy-on-push without approval, either add yourself and approve the pending deployment, or disable required reviewers for this environment.
4. Re-run the failed workflow or push the tag again.

### Build succeeds but site shows 404 or wrong base path

- Ensure **Pages** is set to **GitHub Actions** (not “Deploy from branch” unless you use `npm run deploy`).
- Do not change `base` in `vite.config.ts` for GitHub Pages project sites; it must be `'/stdout-site/'` when `command === 'build'`.

### Release script: "working tree has uncommitted changes"

Commit or stash all changes. The script only allows a dirty tree if the only modified files are `package.json` and `package-lock.json` (which `npm version` updates).

### `npm run preview` shows blank or wrong base path

Run `npm run build` first. `preview` serves `dist/`; with `base: '/stdout-site/'` you must open the path Vite shows (e.g. `http://localhost:4173/stdout-site/`).

### Lint or type errors before deploy

```bash
npm run lint
npx tsc --noEmit
```

Fix reported issues and commit before running `npm run release`.

## License

MIT — see [LICENSE](LICENSE) if present.
