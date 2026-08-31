import React from "react";
import { FileText } from "lucide-react";

const products = [
  { model: "PT560H", category: "TETRA El Telsizi", url: "https://www.hytera.com/eu/products/tetra-radio/pt560h", img: "/biem-dosyalar/images/c8c209196_PT560H-1.png" },
  { model: "PT590", category: "Profesyonel TETRA El Telsizi", url: "https://www.hytera.com/eu/products/tetra-radio/pt590", img: "/biem-dosyalar/images/a0cf741e1_hytera_pt590.png" },
  { model: "MT680 Plus", category: "TETRA Mobil Telsiz", url: "https://www.hytera.com/eu/products/tetra-radio/mt680-plus", img: "/biem-dosyalar/images/d91a8e0cf_MT680PLUS_41.png" },
  { model: "PT580H Plus UL923", category: "ATEX TETRA El Telsizi", url: "https://www.hytera.com/eu/products/tetra-radio/pt580h-plus-ul923", img: "/biem-dosyalar/images/a3672a5ea_PT580HPlusUL913_1.png" },
];

function RadioIcon() {
  return (
    <svg viewBox="0 0 60 100" className="w-12 h-20 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="18" width="36" height="72" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
      <rect x="18" y="26" width="24" height="16" rx="2" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
      <circle cx="30" cy="56" r="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5"/>
      <circle cx="30" cy="56" r="4" fill="#06b6d4" opacity="0.3"/>
      <rect x="19" y="72" width="6" height="6" rx="1" fill="#334155"/>
      <rect x="27" y="72" width="6" height="6" rx="1" fill="#334155"/>
      <rect x="35" y="72" width="6" height="6" rx="1" fill="#06b6d4" opacity="0.6"/>
      <rect x="26" y="8" width="8" height="12" rx="2" fill="#334155"/>
      <rect x="28" y="4" width="4" height="6" rx="1" fill="#475569"/>
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

export default function TetraProductGridHytera() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">TETRA TELSİZLER</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">Hytera TETRA Telsiz Modelleri</h2>
            <p className="text-muted-foreground text-sm max-w-xl">El telsizleri, mobil telsizler ve ATEX sertifikalı modellerden oluşan Hytera TETRA portföyü.</p>
          </div>
          <a href="https://www.hytera.com/eu/products/tetra-radio/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold shrink-0">
            <FileText className="w-4 h-4" /> Genel Katalog
          </a>
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
