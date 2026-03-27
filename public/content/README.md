# CONTENT FOLDER STRUCTURE

This folder contains all your brand assets.

## Structure:

```
content/
├── images/
│   ├── logo.png (optional - currently using text logo)
│   ├── hero-bg.jpg (homepage hero background, 1920x1080px)
│   ├── shop-banner.jpg (shop page banner, 1920x600px)
│   ├── about-hero.jpg (about page hero, 1920x800px)
│   ├── about-atelier.jpg (about page image, 800x1000px)
│   ├── contact-bg.jpg (contact page banner, 1920x600px)
│   ├── instagram-1.jpg through instagram-8.jpg (Instagram feed, 400x400px)
│   └── product-1.jpg through product-8.jpg (product images, 600x800px)
└── videos/
    ├── product-3.mp4
    └── product-6.mp4
```

## How to Add Your Assets:

1. **Images**: Place all your JPG/PNG files in `content/images/`
2. **Videos**: Place MP4 video files in `content/videos/`
3. Update the paths in `src/data/products.js` if you use different filenames

## Current Setup:

- Products 3 and 6 have video versions (add your .mp4 files)
- All other products use images only
- If an image fails to load, it falls back to an Unsplash placeholder

## Recommended Sizes:

- Hero: 1920x1080px (landscape)
- Banners: 1920x600px (landscape)
- Product images: 600x800px (portrait)
- Instagram feed: 400x400px (square)
- Videos: MP4 format, under 5MB each for fast loading