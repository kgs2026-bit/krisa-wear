# Krisa Wear - Premium Women's Fashion Website

A modern, minimal women's fashion e-commerce website built with React, Tailwind CSS, and React Router. The site features WhatsApp-based purchase inquiries instead of traditional checkout.

## ✨ Features

- 🎨 Premium, Instagram-style aesthetic
- 📱 Fully responsive (mobile-first design)
- 🎬 Video product support with autoplay
- 💬 WhatsApp integration for instant inquiries
- 🎯 Category filter (Women only)
- ✨ Smooth animations and hover effects
- 📦 Clean component-based architecture
- 🚀 Ready for deployment on Vercel/Netlify
- ⚡ Fast loading with placeholder fallbacks

## 🚀 Tech Stack

- React 18
- React Router DOM v6
- Tailwind CSS v3.3
- Vite

## 📂 Project Structure

```
krisa-wear/
├── public/
│   └── content/
│       ├── images/          # All your product images
│       └── videos/          # Product videos (MP4)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🏃‍♀️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## 📝 Customization Guide

### 1. Add Your Product Images & Videos

Place your files in the `public/content/` folder:

```
public/content/
├── images/
│   ├── product-1.jpg  (rename or replace)
│   ├── product-2.jpg
│   ├── product-3.jpg
│   └── ...
└── videos/
    ├── product-3.mp4  (optional - for video products)
    └── product-6.mp4
```

**Important**: Update the `src/data/products.js` file to match your filenames:

```javascript
{
  id: 1,
  name: "Your Product Name",
  description: "Product description here",
  price: "₹2,999",
  image: "/content/images/your-product.jpg",  // Update path
  video: "/content/videos/your-product.mp4",  // Optional - add or set to null
  isNew: true  // Set to true to show NEW badge
}
```

### 2. Update WhatsApp Number

In `src/components/ProductCard.jsx`, line 10, change:
```javascript
const whatsappUrl = `https://wa.me/916355224284?text=...`;
```
Replace `916355224284` with your business WhatsApp number (include country code, no + or zeros).

### 3. Customize Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      brand: {
        light: '#faf8f5',      // Background light color
        DEFAULT: '#ffffff',    // Primary white
        dark: '#1a1a1a',       // Dark gray/black
        gold: '#c9a227',       // Accent gold color - change this!
      }
    }
  }
}
```

### 4. Update Brand Name & Content

- **Brand name**: Search for "Krisa Wear" in all files and replace
- **Taglines**: Edit text in `src/pages/Home.jsx` (hero section)
- **About story**: Edit `src/pages/About.jsx`
- **Instagram link**: Update to your Instagram in:
  - `src/components/Footer.jsx`
  - `src/pages/Home.jsx`
  - `src/pages/About.jsx`

### 5. Replace Header/Page Images

Add your custom images to `public/content/images/` and update these paths:
- Hero background: `/content/images/hero-bg.jpg`
- Shop banner: `/content/images/shop-banner.jpg`
- About hero: `/content/images/about-hero.jpg`
- About atelier: `/content/images/about-atelier.jpg`
- Contact banner: `/content/images/contact-bg.jpg`
- Instagram feed: `/content/images/instagram-1.jpg` through `instagram-8.jpg`

**Note**: If an image is missing, the site will use a fallback from Unsplash.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Vercel will auto-detect Vite configuration
4. Click Deploy

### Netlify

1. Build the project:
```bash
npm run build
```
2. Drag and drop the `dist/` folder to Netlify

Or connect Git repository for automatic deployments.

## 📱 Features Explained

### WhatsApp Integration
Each product has a "Buy on WhatsApp" button that opens a pre-filled message:
```
I'm interested in [Product Name] from Krisa Wear
```

This sends directly to your business WhatsApp number. No cart, no checkout - just direct conversations.

### Video Support
Products can have a `video` field. If present, ProductCard displays an autoplaying, muted, looping video instead of a static image. Perfect for showcasing flow and movement.

### Responsive Design
- Mobile: 1 column grid
- Tablet: 2 columns
- Desktop: 3-4 columns
- Sticky navigation with mobile menu
- Touch-friendly buttons

## 📦 Adding New Products

1. Add image to `public/content/images/` (e.g., `product-9.jpg`)
2. Add video to `public/content/videos/` if needed (e.g., `product-9.mp4`)
3. Edit `src/data/products.js`:
```javascript
{
  id: 9,
  name: "New Arrival",
  description: "Amazing new product",
  price: "₹3,499",
  image: "/content/images/product-9.jpg",
  video: "/content/videos/product-9.mp4", // or null
  isNew: true
}
```

## 🎨 Design Notes

- Minimal luxury aesthetic
- Gold accent color (#c9a227) for CTAs and highlights
- Playfair Display for headings (serif)
- Inter for body text (sans-serif)
- Lots of white space
- Smooth hover animations

## ⚠️ Important Notes

- This is a **women's fashion only** website - no men/accessories categories
- WhatsApp number is hardcoded in ProductCard.jsx - update it!
- All product images are stored in `public/content/images/` - keep the structure
- Videos are optional but recommended for premium feel
- Site works offline after build (static files)

## 📄 License

Free to use for your business. Modify as needed.

---

**Need help?** Check the `public/content/README.md` for asset guidelines.