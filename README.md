# GrimoHex Website

Static marketing, support, privacy, and terms site for GrimoHex, an iOS and iPadOS sampler and beat sequencer.

## Preview Locally

Open `index.html` directly in a browser, or serve the folder with any static file server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages Deployment

This site is plain HTML and CSS, so it can be deployed with GitHub Pages from the repository root.

In the repository settings, enable GitHub Pages for the desired branch and root folder. After DNS is configured, the public site should be available at:

`https://grimohex.com`

## App Store Connect URLs

Recommended Support URL:

`https://grimohex.com/support.html`

Use `https://grimohex.com/support` only if clean routing is configured and verified.

Recommended Privacy Policy URL:

`https://grimohex.com/privacy.html`

Use `https://grimohex.com/privacy` only if clean routing is configured and verified.

## Portability

The site can be moved to any static web server by uploading the HTML files and the `css` directory. No server-side runtime, backend email system, or build step is required.
