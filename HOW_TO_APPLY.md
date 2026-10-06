# AMARA Marketing Website — Setup Instructions

This is a **brand-new, separate project** - its own folder, its own
GitHub repo, its own Vercel deployment. It doesn't touch
`datacrux-backend` or `datacrux-admin` at all, except that its "Try
AMARA" button loads the real `widget.js` already hosted by
`datacrux-admin`.

## What's in this zip

- 4 pages: Home (with the live "Try AMARA" widget), Features, Pricing
  (feature comparison, "Contact us" instead of real numbers since
  pricing isn't finalized and there's no checkout built yet), Contact
  (a form that emails your team)
- Same brand look as your admin panel: navy background, electric blue
  accents, Space Grotesk/Inter/JetBrains Mono fonts

## Step 1 — Set up the project folder

1. In File Explorer, create a new folder: `Downloads\datacrux-marketing`
2. Unzip this zip's contents directly into that folder (so
   `package.json` sits right inside `Downloads\datacrux-marketing`, not
   in a subfolder)
3. Copy your real logo into it: from `Downloads\datacrux-admin\public\`,
   copy `logo.png` into `Downloads\datacrux-marketing\public\`

## Step 2 — Install dependencies and test locally

```
cd Downloads\datacrux-marketing
npm install
npm run build
```

Should install and build clean (the live widget and contact form won't
work yet locally without the env vars from Step 5, but the pages
themselves should render).

## Step 3 — Create a dedicated showcase business

Don't point the "Try AMARA" button at your messy Demo Business test
account - create a clean one specifically for this, using your existing
superadmin tool:

1. Log into `datacrux-admin.vercel.app` as your superadmin
2. Go to **Onboard Business**, create one called something like **"AMARA
   Showcase"**, plan **Standard**, subscription **Active**, and give it
   a **conversation limit** (e.g. `200`) - this is public-facing now, so
   this limit protects you from a traffic spike or someone abusing it
   running up a real Claude bill
3. **Copy the API key it gives you** - you'll need it in Step 5
4. Log into that business's own admin panel (using the owner email/
   password you just set) and add a handful of real, polished products
   under **Products** - whatever best shows off AMARA negotiating. A
   good showcase has at least 2-3 products with a real price and a real
   minimum price set, so a visitor can genuinely try negotiating

## Step 4 — Create a new GitHub repo

1. Go to **github.com** → click **"New repository"**
2. Name it `datacrux-marketing`, keep it **Private** (or Public, your
   choice), don't initialize with a README (you already have files)
3. Create it, then follow GitHub's own instructions shown on the next
   page for an existing local folder - something like:

```
cd Downloads\datacrux-marketing
git init
git add .
git commit -m "Initial marketing site"
git branch -M main
git remote add origin https://github.com/grear101/datacrux-marketing.git
git push -u origin main
```

## Step 5 — Deploy on Vercel

1. Go to **vercel.com** → **"Add New..." → "Project"**
2. Import the `datacrux-marketing` repo you just pushed
3. Before deploying, add these **Environment Variables** (Vercel shows
   this option right on the import screen):

| Name | Value |
|---|---|
| `NEXT_PUBLIC_AMARA_WIDGET_URL` | `https://datacrux-admin.vercel.app/widget.js` |
| `NEXT_PUBLIC_AMARA_API_URL` | `https://datacrux-backend-production.up.railway.app` |
| `NEXT_PUBLIC_AMARA_DEMO_API_KEY` | the API key from Step 3 |
| `RESEND_API_KEY` | the same value already used on your backend |
| `CONTACT_EMAIL_TO` | `datacruxafrica@gmail.com` |

4. Click **Deploy**

Vercel will give you a free URL like `datacrux-marketing.vercel.app`
once it finishes.

## Step 6 — Try it

1. Open your new site
2. On the Home page, scroll to "Try it live" and tap the chat bubble in
   the corner - this is the real AMARA, talking to your new showcase
   business. Try asking about a product and negotiating a price
3. Go to **Contact**, submit the form, and check that an email arrives
   at `datacruxafrica@gmail.com`

## Later: your own domain

Whenever you're ready to buy a real domain (e.g. `datacruxafrica.com`),
Vercel's **Settings → Domains** tab on this project is where you'd add
it - no code changes needed for that part.
