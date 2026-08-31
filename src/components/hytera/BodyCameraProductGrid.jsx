import React from "react";
import { FileText } from "lucide-react";

const products = [
  { model: "GC550", category: "2K Mini Body Camera", url: "https://www.hytera.com/eu/products/body-camera/gc550", img: "/biem-dosyalar/images/002750016_rendition.png" },
  { model: "GC550 Pro", category: "2K Mini Body Camera", url: "https://www.hytera.com/eu/products/body-camera/gc550-pro", img: "/biem-dosyalar/images/ff9d416ad_rendition.png" },
  { model: "SC580", category: "Smart 4G Body Camera", url: "https://www.hytera.com/eu/products/body-camera/sc580", img: "/biem-dosyalar/images/7dc0766bc_rendition.png" },
  { model: "SC700", category: "Smart 4G Body Camera", url: "https://www.hytera.com/eu/products/body-camera/sc700", img: "/biem-dosyalar/images/5b136dff6_rendition.png" },
  { model: "SC780", category: "Smart 4G Body Camera", url: "https://www.hytera.com/eu/products/body-camera/sc780", img: "/biem-dosyalar/images/319c1222a_rendition.png" },
  { model: "SC880", category: "Smart 5G Body Camera", url: "https://www.hytera.com/eu/products/body-camera/sc880", img: "/biem-dosyalar/images/4797cda61_rendition.png" },
];

function CameraIcon() {
  return (
    <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="44" height="32" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1.5"/>
      <circle cx="30" cy="30" r="10" fill="#0f172a" stroke="#475569" strokeWidth="1"/>
      <circle cx="30" cy="30" r="6" fill="#06b6d4" opacity="0.4"/>
      <rect x="12" y="18" width="4" height="4" rx="1" fill="#334155"/>
      <path d="M 14 50 L 46 50" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
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
          <CameraIcon />
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

export default function BodyCameraProductGrid() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">VÜCUT KAMERALARI</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">Hytera Vücut Kameraları</h2>
            <p className="text-muted-foreground text-sm max-w-xl">Güvenlik ve operasyonel verimlilik için tasarlanmış profesyonel vücut kamerası çözümleri.</p>
          </div>
          <a href="https://www.hytera.com/eu/products/body-camera/" target="_blank" rel="noopener noreferrer"
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
