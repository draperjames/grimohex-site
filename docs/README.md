# GrimoHex Documentation

This folder is the source documentation location for the GrimoHex app. Treat this directory as the source of truth for curated and generated documentation.

Codex can generate or update documentation here before public-facing copies are published to the website repository at `grimohex-site/docs`. Developer-only documentation stays in this app repo and is excluded from the publishing script.

Manual and developer documentation should stay organized in subfolders such as `manual/` and `developer/`. Add new subfolders when a documentation area becomes large enough to need its own home.

Use `scripts/publish-docs-to-site.sh` to publish the public documentation to the website. The script resolves paths relative to its own location, so it is safe to run from any directory.
