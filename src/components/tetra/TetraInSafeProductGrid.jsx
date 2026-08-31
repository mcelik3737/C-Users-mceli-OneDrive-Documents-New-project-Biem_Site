import React from "react";

const products = [
  {
    model: "PT580H Plus UL923",
    category: "ATEX TETRA El Telsizi",
    url: "https://www.hytera.com/eu/products/tetra-radio/pt580h-plus-ul923",
    img: "https://www.hytera.com/content/dam/hytera/products/tetra-radio/pt580h-plus/PT580H_Plus_01.png",
  },
  {
    model: "PT890Ex",
    category: "ATEX TETRA El Telsizi",
    url: "https://www.hytera.com/eu/products/tetra-radio/pt890ex",
    img: "https://www.hytera.com/content/dam/hytera/products/tetra-radio/pt890ex/PT890Ex_01.png",
  },
];

function RadioIcon() {
  return (
    <svg viewBox="0 0 80 120" className="w-16 h-24 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="50" height="100" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
      <rect x="22" y="18" width="36" height="24" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
      <rect x="22" y="48" width="10" height="8" rx="1.5" fill="#06b6d4" opacity="0.7"/>
      <rect x="35" y="48" width="10" height="8" rx="1.5" fill="#334155"/>
      <rect x="48" y="48" width="10" height="8" rx="1.5" fill="#334155"/>
      <rect x="22" y="60" width="10" height="8" rx="1.5" fill="#334155"/>
      <rect x="35" y="60" width="10" height="8" rx="1.5" fill="#334155"/>
      <rect x="48" y="60" width="10" height="8" rx="1.5" fill="#334155"/>
      <rect x="22" y="72" width="36" height="28" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
      <rect x="30" y="3" width="20" height="8" rx="2" fill="#334155"/>
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
      <div className="bg-white flex items-center justify-center p-4 h-52 group-hover:bg-gray-50 transition-colors">
        {product.img ? (
          <img
            src={product.img}
            alt={product.model}
            className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
        ) : null}
        <div style={{ display: 'none' }} className="w-full h-full items-center justify-center">
          <RadioIcon />
        </div>
      </div>
      <div className="p-4 border-t border-border/30 flex-1 flex flex-col justify-center">
        <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{product.model}</p>
        <p className="text-xs text-primary/70 mt-0.5 leading-snug">{product.category}</p>
        <span className="text-[10px] text-muted-foreground mt-1.5 font-mono">hytera.com →</span>
      </div>
    </a>
  );
}

export default function TetraInSafeProductGrid() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">
            ATEX TETRA TELSİZLER
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
            Hytera ATEX TETRA Telsiz Modelleri
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Patlayıcı ve tehlikeli ortamlar için ATEX/IECEx/UL sertifikalı Hytera TETRA telsizler.
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
