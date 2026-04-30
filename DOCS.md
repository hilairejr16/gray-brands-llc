# Gray Brands LLC — Project Documentation

> **Client:** Jessica Hallman — JessicajHallman@gmail.com — (856) 266-4779
> **Business:** Gray Brands LLC - Business Solutions
> **Developer:** Claude (Anthropic Claude Code)

---

## 🌐 Live Site

| Service | URL / Account | Notes |
|---------|--------------|-------|
| **GitHub** | https://github.com/hilairejr16/gray-brands-llc | Source code — push to `master` to deploy |
| **Cloudflare Pages** | hilaire16@gmail.com | Auto-deploys from GitHub `master` branch |
| **Live URL** | *(Set up after Cloudflare Pages connects to repo)* | |

---

## 📁 Site Structure

```
gray-brands-llc/
├── index.html          Homepage (hero, categories, featured products, blog preview)
├── shop.html           Shop page (all products, category filter, search, sort)
├── product.html        Product detail (dynamic — reads ?id= URL param)
├── cart.html           Shopping cart + PayPal checkout
├── blog.html           Blog articles
├── community.html      Community events & social links
├── about.html          Brand story & founder
├── contact.html        Contact form + TikTok Shop CTA
├── css/
│   └── style.css       Master stylesheet (all pages)
├── js/
│   ├── main.js         App logic: cart, language, search, nav, PayPal
│   └── products.js     Product catalog data (23 products, 7 categories)
├── scripts/
│   └── build.js        Build validator — run before every commit
├── sw.js               Service worker (offline caching)
├── package.json        npm config
├── build.json          Auto-generated build manifest (gitignored)
└── DOCS.md             This file
```

---

## 🛒 How the Store Works

### Products
- All 23 products are defined in `js/products.js` as `window.GB_PRODUCTS[]`
- Each product has: `id`, `category`, `emoji`, `name`, `nameEs`, `price`, `originalPrice` (optional), `badge` (new/sale), `description`, `descriptionEs`, `benefits`, `benefitsEs`, `rating`, `reviews`
- To add a product: append a new object to the array in `js/products.js`
- Product detail pages are dynamic: `product.html?id=1` loads product #1 from the array

### Cart
- Cart state is stored in `localStorage` under key `gb_cart`
- Cart drawer slides in from the right on any page
- `cart.html` is the full checkout page with PayPal integration

### Language Toggle
- English / Spanish toggle in the header on every page
- Language preference saved to `localStorage` under key `gb_lang`
- Static text: add `data-i18n="key"` attribute to any HTML element
- Dynamic text: all translations are in the `I18N` object in `js/main.js`

---

## 💳 Payment Setup (Action Required)

### PayPal (Configured — Needs Real Client ID)
- **Current status:** Using `sb` (sandbox/test mode) — no real payments
- **To go live:**
  1. Create/log in at https://developer.paypal.com
  2. Go to Apps & Credentials → Create App
  3. Copy the **Live Client ID**
  4. In `js/main.js` line ~220, change: `const PAYPAL_CLIENT_ID = 'sb';`
  5. Replace `'sb'` with your Live Client ID
  6. Run build, commit, push
- Accepts: Visa, Mastercard, Amex, Debit, PayPal balance

### TikTok Shop
- Placeholder CTA link on `contact.html`
- To connect: create TikTok Shop account at https://seller.tiktok.com
- Add your TikTok Shop URL to the "Visit Our TikTok Shop" button in `contact.html`

---

## 📱 Social Media Links (Action Required)
All social links are currently set to `href="#"` (placeholder).

| Platform | Location | Replace with |
|----------|----------|-------------|
| Facebook | Footer (all pages), `community.html` | Facebook page URL |
| Instagram | Footer (all pages), `community.html` | Instagram profile URL |
| TikTok | Footer (all pages), `community.html`, `contact.html` | TikTok profile URL |
| Twitter/X | Footer (all pages), `community.html` | Twitter/X profile URL |
| Google | Footer (all pages), `community.html` | Google Business Profile URL |

---

## 🎨 Design System

| Token | Value | Used for |
|-------|-------|---------|
| `--accent` | `#C4956A` | Rose gold — buttons, highlights, hover states |
| `--charcoal` | `#1A1A1A` | Primary text, dark buttons |
| `--bg-warm` | `#FAF8F5` | Alternate section backgrounds |
| `--bg-cream` | `#F5F0EA` | Card backgrounds, product images |
| `--font-head` | Playfair Display | All headings |
| `--font-body` | Inter | Body text, UI elements |

---

## 🔄 Working Rules (Every Session)

1. After EVERY change: `node scripts/build.js` → `git add .` → `git commit` → `git push origin master`
2. Bump CSS/JS `?v=` cache params in all HTML files when those files change
3. Bump `CACHE_NAME` in `sw.js` when JS or CSS changes (format: `gray-brands-v1.0.0`)
4. Keep English AND Spanish working — test both after every JS/content change
5. Update the Changelog section below at the end of every session

---

## 📋 SEO

| Page | Title | Meta Description |
|------|-------|-----------------|
| index.html | Gray Brands LLC — Discover Your Beauty | Premium beauty, hair care, cosmetics, fragrance, jewelry and wellness |
| shop.html | Shop — Gray Brands LLC | Shop our full range: hair, cosmetics, perfume, jewelry, wellness |
| product.html | (Dynamic — set by JS) | (Dynamic) |
| blog.html | Blog — Gray Brands LLC | Beauty tips, tutorials and lifestyle content |
| community.html | Community — Gray Brands LLC | Events, giveaways and member perks |
| about.html | About Us — Gray Brands LLC | Our story, mission and values |
| contact.html | Contact Us — Gray Brands LLC | Get in touch — we'd love to hear from you |

---

## 🚀 Deployment: Cloudflare Pages Setup

1. Log in to Cloudflare at https://dash.cloudflare.com with `hilaire16@gmail.com`
2. Go to **Pages** → **Create a project** → **Connect to Git**
3. Connect GitHub account `hilairejr16`
4. Select repo: `gray-brands-llc`
5. Build settings:
   - **Build command:** `node scripts/build.js`
   - **Build output directory:** `/` (root)
   - **Branch:** `master`
6. Click **Save and Deploy**
7. Once live, update the **Live URL** row at the top of this document

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| PayPal JS SDK | CDN (latest) | Payment processing — loaded dynamically on cart page |
| Google Fonts | CDN | Playfair Display + Inter typography |
| Service Worker | Built-in | Offline caching, PWA support |

No npm packages are used in production — this is a zero-dependency static site.

---

## 🖼️ Assets Needed (Future)

- [ ] Logo files: website (PNG + SVG), Instagram, Facebook, Twitter, TikTok
- [ ] Product photography (23 products) — replace emoji placeholders
- [ ] Hero banner image
- [ ] About page / founder photo
- [ ] Blog post featured images
- [ ] Advertising flyers with QR code

---

## 📝 Changelog

### Session 1 — 2026-04-30
- Initial project scaffold from scratch
- Created all 8 HTML pages: index, shop, product, cart, blog, community, about, contact
- Full CSS design system (beauty retail aesthetic, rose gold + charcoal palette)
- Product catalog: 23 products across 7 categories
- Cart system with localStorage persistence
- English ↔ Spanish language toggle (full bilingual support)
- Search functionality
- Cart drawer (slides in from right, all pages)
- PayPal checkout integration (sandbox mode — needs real client ID)
- Service worker for offline caching
- Mobile-responsive layout
- Build script for deployment validation
- Git initialized, GitHub remote set to `https://github.com/hilairejr16/gray-brands-llc.git`
- DOCS.md created
