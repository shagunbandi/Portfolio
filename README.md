# Portfolio

Personal portfolio site for Shagun Bandi, served at
[shagunbandi.com](https://shagunbandi.com).

A single static `index.html` plus `images/`. No backend, no build step.

## Local preview

```sh
just serve      # http://127.0.0.1:8000
```

## Deploying

### Option A — Docker + Traefik (Raspberry Pi, current)

```sh
just up         # build and start behind the existing Traefik network
just rebuild    # rebuild from scratch and restart
```

Traefik terminates TLS via the Cloudflare cert resolver; see the labels in
`docker-compose.yml`.

### Option B — Google Cloud Storage

```sh
just gcs-init shagunbandi.com     # one time: create bucket, make public, website mode
just gcs-deploy shagunbandi.com   # each deploy
```

The bucket name must equal the domain, and Google requires you to verify
ownership of that domain in Search Console before it will let you create it.

Then point Cloudflare at it with a proxied (orange cloud) `CNAME`:

```
shagunbandi.com  CNAME  c.storage.googleapis.com
```

#### The HTTPS caveat

**GCS does not serve HTTPS on a custom domain.** The `c.storage.googleapis.com`
CNAME endpoint is HTTP-only. That leaves three choices:

| Approach | Browser↔CF | CF↔origin | Cost |
|---|---|---|---|
| Cloudflare proxied, SSL mode **Flexible** | HTTPS | **HTTP** | ~$0 |
| GCS behind a Google external HTTPS load balancer | HTTPS | HTTPS | ~$18/mo for the forwarding rule |
| Cloudflare Pages or R2 instead of GCS | HTTPS | n/a (origin is the edge) | $0 |

Flexible mode means the Cloudflare→GCS hop is unencrypted. For a public site
with no logins, forms, or secrets, that leaks nothing an observer could not
already read — but it is a genuine downgrade from the current Traefik setup,
which is end-to-end TLS. Decide deliberately rather than by default.

#### Caching

`deploy-gcs.sh` sets the headers that matter:

- `images/*` — `max-age=31536000, immutable` (stable filenames)
- `index.html` — `max-age=0, must-revalidate` (deploys go live immediately)

Because the whole site is one `.html` file, note that **Cloudflare does not
cache HTML by default** — it caches by file extension, and HTML is not on the
list. Add a Cache Rule (Caching → Cache Rules → *Eligible for cache*) for the
site, or every visitor pulls the document from the origin. This is worth doing
regardless of where the origin lives.

## Images

`images/` holds each snapshot as a 480×480 `.webp` (primary) and `.jpg`
(fallback), wired up with `<picture>`. They were previously inlined into
`index.html` as base64 data URIs, which made the document ~2 MB and defeated
`loading="lazy"` — a data URI is part of the document, so there is no deferred
fetch for lazy loading to defer.

To add a photo, drop both formats into `images/` and copy an existing
`.photo-item` block in `index.html`.
