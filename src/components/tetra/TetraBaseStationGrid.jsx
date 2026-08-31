import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const products = [
  {
    model: "DIB-R5 Advanced TETRA Base Station",
    category: "TETRA Baz İstasyonu",
    url: "https://www.hytera.com/eu/products/tetra-infrastructure/dib-r5-advanced",
    images: [
      "/biem-dosyalar/images/0d9554422_DIB-R5Advanced-5.png",
      "/biem-dosyalar/images/57362d7ca_DIB-R5Advanced-41.png",
      "/biem-dosyalar/images/d696ecdb5_DIB-R5Advanced-31.png",
    ],
    description: "Yüksek kapasiteli, kritik görev ağları için gelişmiş TETRA baz istasyonu.",
  },
  {
    model: "DIB-R5 Compact TETRA Base Station",
    category: "TETRA Baz İstasyonu",
    url: "https://www.hytera.com/eu/products/tetra-infrastructure/dib-r5-compact",
    images: [
      "/biem-dosyalar/images/49ba4e5ae_DIB-R5Compact-1.png",
      "/biem-dosyalar/images/14582ad1d_DIB-R5Compact-2.png",
    ],
    description: "Küçük alanlara uygun kompakt tasarımlı TETRA baz istasyonu.",
  },
  {
    model: "DIB-R5 Outdoor TETRA Base Station",
    category: "TETRA Baz İstasyonu",
    url: "https://www.hytera.com/eu/products/tetra-infrastructure/dib-r5-outdoor",
    images: [
      "/biem-dosyalar/images/d1a1d9520_DIBR5-OUTDOOR_5.jpg",
      "/biem-dosyalar/images/66e8093ea_DIBR5-OUTDOOR_4.png",
      "/biem-dosyalar/images/2a1c6cb02_DIB-R5Outdoor-2.png",
    ],
    description: "Zorlu dış ortam koşullarına dayanıklı, hava geçirmez TETRA baz istasyonu.",
  },
  {
    model: "TETRA iBS Integrated Base Station",
    category: "Entegre TETRA Baz İstasyonu",
    url: "https://www.hytera.com/eu/products/tetra-infrastructure/ibs",
    images: [
      "/biem-dosyalar/images/ca744ee72_TETRAiBS-7.png",
      "/biem-dosyalar/images/d43f3e421_TETRAiBS-9.jpg",
      "/biem-dosyalar/images/56240208d_TETRAiBS-5.png",
      "/biem-dosyalar/images/07b875904_TETRAiBS-2.png",
    ],
    description: "Tüm bileşenleri tek gövdede birleştiren entegre TETRA baz istasyonu.",
  },
];

function ProductCard({ product }) {
  const [current, setCurrent] = useState(0);

  const prev = (e) => {
    e.preventDefault();
    setCurrent((c) => (c === 0 ? product.images.length - 1 : c - 1));
  };
  const next = (e) => {
    e.preventDefault();
    setCurrent((c) => (c === product.images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
      {/* Image carousel */}
      <div className="relative bg-white h-72 group">
        <img
          src={product.images[current]}
          alt={`${product.model} - ${current + 1}`}
          className="w-full h-full object-contain p-4 transition-opacity duration-300"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Nav buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border/60 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/10 hover:border-primary/40"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border/60 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/10 hover:border-primary/40"
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-4" : "bg-foreground/30"}`}
            />
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 border-t border-border/30 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-mono text-primary/70 tracking-wider uppercase">{product.category}</span>
          <h3 className="font-bold text-foreground text-base mt-1 leading-snug">{product.model}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{product.description}</p>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Ürün Detayları <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export default function TetraBaseStationGrid() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">
            TETRA ALTYAPI
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
            Hytera TETRA Baz İstasyonları
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Kritik görev haberleşme ağları için gelişmiş TETRA altyapı çözümleri.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
