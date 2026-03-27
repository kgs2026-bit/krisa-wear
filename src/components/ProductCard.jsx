import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const whatsappUrl = `https://wa.me/916355224284?text=${encodeURIComponent(`I'm interested in ${product.name} from KriSa Wear`)}`;

  return (
    <div
      className="product-card group relative bg-white rounded-lg overflow-hidden shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image/Video Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        {/* Video */}
        {product.video ? (
          <video
            src={product.video}
            className={`w-full h-full transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setImageLoaded(true)}
          />
        ) : (
          /* Image */
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
        )}

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-brand-gold rounded-full animate-spin" />
          </div>
        )}

        {/* New Collection Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-brand-gold text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}

        {/* Quick View Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium text-sm transform transition-transform hover:scale-105"
          >
            Buy on WhatsApp
          </a>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium text-gray-900 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}