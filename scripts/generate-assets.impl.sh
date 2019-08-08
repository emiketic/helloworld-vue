#!/usr/bin/env bash
set -eo pipefail

./scripts/generate-app-icon.favicon.sh assets/icon.svg

./scripts/generate-app-icon.pwa.sh assets/icon.svg

./scripts/generate-public-image.sh assets/logo.svg

./scripts/generate-image.sh assets/logo.svg
