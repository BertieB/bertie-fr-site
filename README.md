# bertie.fr

Static site for bertie.fr — cleaned from WordPress/Sitesucker export.

## Structure

```
/                   Homepage (EN)
/about/             About (EN)
/clients/           Clients (EN)
/services/          Services (EN)
/contact/           Contact (EN)
/fr/                Homepage (FR)
/fr/about-me/       About (FR)
/fr/clients/        Clients (FR)
/fr/services/       Services (FR)
/fr/contact/        Contact (FR)
/ar/                Homepage (AR)
/ar/about/          About (AR)
/ar/clients/        Clients (AR)
/ar/services/       Services (AR)
/ar/contact/        Contact (AR)
```

## Assets

All assets are under `/wp-content/` (kept as-is from original theme).

## Contact form

Uses Formspree. Replace `YOUR_FORM_ID` in `contact/index.html`, `fr/contact/index.html`, and `ar/contact/index.html` with your Formspree form ID.

## Deployment

Deployed via Cloudflare Pages connected to this repo.
Auto-deploys on every push to `main`.
