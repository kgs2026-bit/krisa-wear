import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const featuredProducts = products.slice(0, 4);

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
          {/* Video Background */}
          <video
            src="/content/videos/hero-background.mp4"
            className="w-full h-full object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Image Fallback */}
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

      {/* Product Gallery */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900">
              Featured Looks
            </h2>
            <p className="text-gray-600 mt-2">Explore our latest collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.slice(0, 3).map((product) => (
              <a
                key={product.id}
                href={`/shop?product=${product.id}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-serif text-lg">{product.name}</p>
                  <p className="text-white/80 text-sm mt-1">View Details →</p>
                </div>
              </a>
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