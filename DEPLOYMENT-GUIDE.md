# KRISA WEAR - SETUP & DEPLOYMENT GUIDE

## ✅ Project Created Successfully!

Your complete women's fashion e-commerce website is ready in the folder: `krisa-wear-content/`

## 🚀 QUICK START (Run Locally)

### 1. Install Dependencies

Open terminal in the project folder and run:

```bash
cd krisa-wear-content
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open browser to: http://localhost:5173

## 📸 Add Your Product Images & Videos

### Folder Structure:
```
public/content/
├── images/
│   ├── hero-bg.jpg              (1920x1080px)
│   ├── shop-banner.jpg          (1920x600px)
│   ├── about-hero.jpg           (1920x800px)
│   ├── about-atelier.jpg        (800x1000px)
│   ├── contact-bg.jpg           (1920x600px)
│   ├── instagram-1.jpg to -8.jpg (400x400px each)
│   ├── product-1.jpg through product-8.jpg (600x800px each)
└── videos/
    ├── product-3.mp4            (optional, for video products)
    └── product-6.mp4            (optional)
```

**Important**: Replace the placeholder image paths in `src/data/products.js` with your actual filenames.

## 🔧 Customize These Items

### 1. WhatsApp Number (IMPORTANT!)

File: `src/components/ProductCard.jsx` - line 10

Change:
```javascript
const whatsappUrl = `https://wa.me/916355224284?text=...`;
```

Replace `916355224284` with your actual business WhatsApp number.

### 2. Instagram Link

Already set to: https://www.instagram.com/krisa_wear/

Update in these files if needed:
- `src/components/Footer.jsx` (line 45)
- `src/pages/Home.jsx` (Instagram gallery section)

### 3. Brand Colors

File: `tailwind.config.js`

Change the gold color:
```javascript
gold: '#c9a227',  // Change to your brand color
```

### 4. Product Data

File: `src/data/products.js`

Edit each product:
```javascript
{
  id: 1,
  name: "Your Product Name",
  description: "Product description",
  price: "₹2,999",
  image: "/content/images/product-1.jpg",  // your filename
  video: null,  // or "/content/videos/product-1.mp4"
  isNew: true
}
```

## 📤 Push to GitHub

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `krisa-wear`
3. Make it **Private** or **Public**
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 2: Connect and Push

In terminal (already in `krisa-wear-content` folder):

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/kgs2026-bit/krisa-wear.git

# Push to GitHub
git push -u origin master
```

If `master` doesn't work, try:
```bash
git push -u origin main
```

## 🚀 Deploy to Vercel (Recommended)

### Option A: Deploy from GitHub (Automatic)

1. Go to https://vercel.com/new
2. Import your GitHub repository (`kgs2026-bit/krisa-wear`)
3. Vercel auto-detects Vite config
4. Click Deploy
5. Your site will be live in 2 minutes at: `https://krisa-wear.vercel.app`

### Option B: Manual Build & Deploy

```bash
# Build production files
npm run build

# The 'dist' folder contains your static site
# Upload 'dist' to Netlify/Vercel manually
```

## 📱 What You Need to Add (Checklist)

- [ ] Product images (8 product-*.jpg files in `public/content/images/`)
- [ ] Product videos (optional - product-3.mp4, product-6.mp4)
- [ ] Hero background image (`hero-bg.jpg`)
- [ ] Shop banner (`shop-banner.jpg`)
- [ ] About page images (`about-hero.jpg`, `about-atelier.jpg`)
- [ ] Contact banner (`contact-bg.jpg`)
- [ ] Instagram feed images (8 images)
- [ ] Update product names and prices in `src/data/products.js`
- [ ] Update WhatsApp number in `src/components/ProductCard.jsx`
- [ ] Update Instagram handle (currently @krisa_wear)

## 🎨 Design Customization

**Colors**: Edit `tailwind.config.js`
**Fonts**: Change Google Fonts in `index.html`
**Brand name**: Find & replace "Krisa Wear" with your brand name

## ❓ Need Help?

### Add more products:
1. Add image to `public/content/images/`
2. Add to `src/data/products.js` array
3. Give it a unique ID

### Change layout:
- Shop grid: Edit `src/pages/Shop.jsx` grid-cols classes
- Colors: `tailwind.config.js`
- Components: `src/components/`

## 📄 Important Notes

- WhatsApp integration works automatically - no backend needed
- Videos: MP4 format recommended, keep files small (<5MB)
- All images: Optimize for web (use TinyPNG or similar)
- No database required - static site only
- All purchase inquiries go to WhatsApp

---

**Your website is ready!** 🎉

Next steps:
1. Add your images
2. Update WhatsApp number
3. Run `npm install && npm run dev`
4. Test locally
5. Push to GitHub
6. Deploy on Vercel
