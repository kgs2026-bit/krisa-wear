import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const featuredProducts = products.slice(0, 4);
  const instagramImages = [
    "/content/images/instagram-1.jpg",
    "/content/images/instagram-2.jpg",
    "/content/images/instagram-3.jpg",
    "/content/images/instagram-4.jpg",
    "/content/images/instagram-5.jpg",
    "/content/images/instagram-6.jpg",
    "/content/images/instagram-7.jpg",
    "/content/images/instagram-8.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-gold rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-serif text-xl text-gray-700">Krisa Wear</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-brand-light">
        <div className="absolute inset-0">
          <img
            src="/content/images/hero-bg.jpg"
            alt="Hero background"
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1558618643-0a9ee5409a89?w=1920&h=1080&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Krisa Wear
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
            Redefining modern elegance with timeless pieces that speak your style
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-gold hover:text-white transition-all duration-300 transform hover:scale-105 animate-slide-up"
            style={{animationDelay: '0.4s'}}
          >
            Shop Now
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900">Featured Collection</h2>
          <p className="text-gray-600 mt-2">Handpicked styles just for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900">
              @krisawear
            </h2>
            <p className="text-gray-600 mt-2">Follow us on Instagram</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {instagramImages.map((img, index) => (
              <a
                key={index}
                href="https://www.instagram.com/krisa_wear/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden group relative"
              >
                <img
                  src={img}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-${1515886657613}-9f3515b0c78f?w=400&h=400&fit=crop`;
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/content/images/about-preview.jpg"
              alt="About Krisa Wear"
              className="rounded-lg shadow-xl"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=1000&fit=crop';
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-gold/20 rounded-lg -z-10 hidden md:block"></div>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Krisa Wear, we believe fashion is an expression of individuality. Our curated collections blend contemporary designs with timeless elegance, offering pieces that transcend seasons and trends.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every garment is crafted with meticulous attention to detail, using premium materials to ensure comfort and quality that lasts. We're not just selling clothes—we're providing a style experience that empowers you to feel confident and authentic.
            </p>
            <Link
              to="/about"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-brand-gold transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our latest collection and find pieces that resonate with your personal aesthetic. Each item is designed to make a statement.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-brand-gold text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}