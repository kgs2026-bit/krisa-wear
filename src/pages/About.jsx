import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/content/videos/Video-715.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <img
            src="/content/images/about-hero.jpg"
            alt="About hero"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=800&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-lg max-w-2xl mx-auto">Crafting elegance since 2020</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-3xl font-medium text-gray-900 mb-6">
              Redefining Modern Women's Fashion
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Krisa Wear was born from a simple vision: to create a fashion brand that celebrates women's individuality while maintaining the highest standards of quality and sustainability. We believe that great style should be accessible, and that every piece you wear should make you feel confident and authentic.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our journey began with a small collection of timeless pieces designed for the modern woman. Today, we continue to blend contemporary aesthetics with classic craftsmanship, offering designs that transcend seasons and trends.
            </p>
          </div>
          <div className="relative">
            <img
              src="/content/images/about-atelier.jpg"
              alt="Atelier"
              className="rounded-lg shadow-lg"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1551235595-7b072f4c7036?w=800&h=1000&fit=crop';
              }}
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-brand-light rounded-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">
              We source the finest materials and work with skilled artisans to ensure every piece meets our exacting standards.
            </p>
          </div>
          <div className="text-center p-8 bg-brand-light rounded-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium mb-2">Sustainable Fashion</h3>
            <p className="text-gray-600 text-sm">
              We're committed to reducing our environmental impact through responsible sourcing and ethical production practices.
            </p>
          </div>
          <div className="text-center p-8 bg-brand-light rounded-lg">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-medium mb-2">Timeless Design</h3>
            <p className="text-gray-600 text-sm">
              Our collections are designed to transcend fleeting trends, offering pieces that remain stylish season after season.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-brand-light p-12 rounded-lg">
          <h3 className="font-serif text-2xl font-medium mb-4">Ready to discover your style?</h3>
          <Link
            to="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-brand-gold transition-all duration-300"
          >
            Explore Shop
          </Link>
        </div>
      </section>
    </div>
  );
}