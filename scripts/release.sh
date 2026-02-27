#!/usr/bin/env bash
# Bump version, create tag, push — triggers GitHub Actions to deploy to GitHub Pages.
# Usage: ./scripts/release.sh [patch|minor|major]   (default: patch)
# Or:    npm run release [-- patch|minor|major]

set -e
BUMP=${1:-patch}

case "$BUMP" in
  patch|minor|major) ;;
  *)
    echo "Usage: $0 [patch|minor|major]"
    exit 1
    ;;
esac

# Ensure clean working tree (allow only package.json + package-lock.json if they changed)
if ! git diff --quiet HEAD -- ':!package.json' ':!package-lock.json'; then
  echo "Error: working tree has uncommitted changes. Commit or stash first."
  exit 1
fi

npm version "$BUMP" -m "chore: release v%s"
git push origin main --follow-tags
