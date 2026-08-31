import React, { useState } from "react";
import { ExternalLink, Monitor, Network, Radio, Smartphone, FileText } from "lucide-react";

const HyteraIcon = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} fill="currentColor">
    <text x="50" y="42" textAnchor="middle" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">Hytera</text>
  </svg>
);

const products = [
  {
    model: "Dispatcher",
    category: "TETRA Yazılımı",
    icon: Monitor,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b51dbf360_Dispatcher.jpg",
    url: "https://www.hytera.com/eu/products/tetra-terminals/dispatcher",
    description: "Merkezi çağrı yönetimi, grup haberleşmesi ve operasyon kontrol merkezi yazılımı.",
  },
  {
    model: "NMS",
    category: "Ağ Yönetim Sistemi",
    icon: Network,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/bed9646a7_NMS-1.png",
    url: "https://www.hytera.com/eu/products/tetra-infrastructure/nms",
    description: "TETRA ağ izleme, yönetim, alarm ve raporlama platformu.",
  },
  {
    model: "TETRA Gateway",
    category: "TETRA Ağ Geçidi",
    icon: Radio,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/3c0f45e7c_DGW.png",
    url: "https://www.hytera.com/eu/products/tetra-infrastructure/gateway",
    description: "TETRA şebekesini PSTN, GSM ve IP sistemleriyle entegre eden ağ geçidi çözümü.",
  },
  {
    model: "PTTConnect",
    category: "PoC / PTT Yazılımı",
    icon: Smartphone,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/cff15e6da_-.png",
    url: "https://www.hytera.com/eu/products/poc/pttconnect",
    description: "Akıllı cihazlar üzerinden TETRA ağıyla entegre çalışan Push-to-Talk uygulama platformu.",
  },
];

function ProductCard({ product }) {
  const Icon = product.icon;

  return (
    <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col">
      {/* Visual area */}
      <div className="relative h-64 bg-secondary/40 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.model}
          className="w-full h-full object-contain p-4"
        />
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

export default function TetraSystemGrid() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">TETRA SİSTEM</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">Hytera TETRA Sistem Çözümleri</h2>
            <p className="text-muted-foreground text-sm max-w-xl">Dispatcher, NMS, Gateway ve PTT yazılımlarıyla tam entegre TETRA operasyon altyapısı.</p>
          </div>
          <a href="https://www.hytera.com/eu/products/tetra-infrastructure/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold shrink-0">
            <FileText className="w-4 h-4" /> Genel Katalog
          </a>
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
