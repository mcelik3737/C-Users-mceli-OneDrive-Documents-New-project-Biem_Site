import React from "react";

const products = [
  { model: "MT680 Plus", category: "TETRA Mobil Telsiz", url: "https://www.hytera.com/eu/products/tetra-radio/mt680-plus", img: "https://www.hytera.com/content/dam/hytera/products/tetra-radio/mt680-plus/MT680_Plus_01.png" },
];

function RadioIcon() {
  return (
    <svg viewBox="0 0 120 80" className="w-24 h-16 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="100" height="50" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
      <rect x="18" y="22" width="50" height="30" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
      <circle cx="90" cy="37" r="10" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5"/>
      <circle cx="90" cy="37" r="5" fill="#06b6d4" opacity="0.3"/>
      <rect x="18" y="57" width="8" height="4" rx="1" fill="#334155"/>
      <rect x="30" y="57" width="8" height="4" rx="1" fill="#06b6d4" opacity="0.6"/>
    </svg>
  );
}

function ProductCard({ product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group flex flex-col"
    >
      <div className="bg-white flex items-center justify-center p-2 h-52 group-hover:bg-gray-50 transition-colors">
        {product.img ? (
          <img src={product.img} alt={product.model} className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <RadioIcon />
        )}
      </div>
      <div className="p-4 border-t border-border/30 flex-1 flex flex-col justify-center">
        <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{product.model}</p>
        <p className="text-xs text-primary/70 mt-0.5 leading-snug">{product.category}</p>
        <span className="text-[10px] text-muted-foreground mt-1.5 font-mono">hytera.com →</span>
      </div>
    </a>
  );
}

export default function TetraMobileProductGrid() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">
            TETRA MOBİL TELSİZLER
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
            Hytera TETRA Mobil Telsiz Modelleri
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Araç üstü kurulum için tasarlanmış yüksek güçlü Hytera TETRA mobil telsiz portföyü.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
