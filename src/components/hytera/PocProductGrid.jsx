import React, { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { FileText } from "lucide-react";

const tabs = ["Tümü", "PoC Mobile Radio", "PoC Radio", "Intelligent PoC Radio", "Smart PoC Radio", "MCS Device", "Dual-Mode Rugged Radio", "Rugged MCS Radio", "Broad Band Platform", "Yazılım"];

const products = [
  {
    model: "MNC360",
    category: "PoC Mobile Radio",
    tab: "PoC Mobile Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/mnc360/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/5a5501e1e_image.png",
  },
  {
    model: "HYT-P30",
    category: "PoC Radio",
    tab: "PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/hytp30/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/2a7318d98_rendition.png",
  },
  {
    model: "HYT-P30 (C)",
    category: "PoC Radio",
    tab: "PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/hytp30c/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b513ad10d_EN_P30c_Front.png",
  },
  {
    model: "HYT-P30 Lite",
    category: "PoC Radio",
    tab: "PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/hytp30lite/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/3003ba6d4_rendition.png",
  },
  {
    model: "HYT-P50",
    category: "Industry Intelligent PoC Radio",
    tab: "Intelligent PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/hytp50/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/ad6425514_rendition.png",
  },
  {
    model: "HYT-P50 Pro",
    category: "Industry Intelligent PoC Radio",
    tab: "Intelligent PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/hytp50pro/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/13862021a_rendition.png",
  },
  {
    model: "HYT-P50E",
    category: "PoC Radio",
    tab: "PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/hytp50e/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/f7f83a3b2_rendition.png",
  },
  {
    model: "HYT-P60",
    category: "Smart PoC Radio",
    tab: "Smart PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/hytp60/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/d52795f73_rendition.png",
  },
  {
    model: "PNC360S",
    category: "PoC Radio",
    tab: "PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/pnc360s/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/897da89c6_rendition.png",
  },
  {
    model: "PNC380",
    category: "PoC Radio",
    tab: "PoC Radio",
    url: "https://www.hytera.com/eu/products/poc-radios/pnc380/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/ad87c24ed_rendition.png",
  },
  {
    model: "PNC460",
    category: "XRugged Smart Device",
    tab: "MCS Device",
    url: "https://www.hytera.com/eu/products/mcs-devices/pnc460/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/df80bb09c_rendition.png",
  },
  {
    model: "PNC460U",
    category: "Intrinsically Safe Smart Device",
    tab: "MCS Device",
    url: "https://www.hytera.com/eu/products/mcs-devices/pnc460u/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b59ac7573_rendition.png",
  },
  {
    model: "PNC560",
    category: "5G XSecure Rugged Device",
    tab: "MCS Device",
    url: "https://www.hytera.com/eu/products/mcs-devices/pnc560/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/79a696591_rendition.png",
  },
  {
    model: "PNC660",
    category: "Mission Critical Ruggedized Device",
    tab: "MCS Device",
    url: "https://www.hytera.com/eu/products/mcs-devices/pnc660/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/8efda516e_rendition.png",
  },
  {
    model: "PDC680",
    category: "Dual-mode Rugged Radio",
    tab: "Dual-Mode Rugged Radio",
    url: "https://www.hytera.com/eu/products/radios/pdc680/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b7bfb3ab3_rendition.png",
  },
  {
    model: "PDC690",
    category: "Dual-mode Rugged Radio",
    tab: "Dual-Mode Rugged Radio",
    url: "https://www.hytera.com/eu/products/radios/pdc690/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/938a14f0f_rendition.png",
  },
  {
    model: "PDM680",
    category: "Rugged MCS Radio",
    tab: "Rugged MCS Radio",
    url: "https://www.hytera.com/eu/products/radios/pdm680/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/fd9f119aa_rendition.png",
  },
  {
    model: "PTC680",
    category: "Dual-mode Rugged Radio",
    tab: "Dual-Mode Rugged Radio",
    url: "https://www.hytera.com/eu/products/radios/ptc680/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/775c89f16_rendition.png",
  },
  {
    model: "PTC760",
    category: "Dual-mode Rugged Radio",
    tab: "Dual-Mode Rugged Radio",
    url: "https://www.hytera.com/eu/products/radios/ptc760/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/e5ec2f285_rendition.png",
  },
  {
    model: "Hytera HyTalk Lite",
    category: "IPC-based PoC Solution",
    tab: "Broad Band Platform",
    url: "https://www.hytera.com/eu/solutions/hytalk-lite/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b482a48fa_rendition.jpg",
    description: "IPC tabanlı PoC çözümü.",
  },
  {
    model: "Hytera HyTalk",
    category: "PoC System",
    tab: "Broad Band Platform",
    url: "https://www.hytera.com/eu/solutions/hytalk/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/1fc86c9f7_rendition.jpg",
    description: "Bulut tabanlı PoC sistemi.",
  },
  {
    model: "Hytera HyTalk MC",
    category: "System",
    tab: "Broad Band Platform",
    url: "https://www.hytera.com/eu/solutions/hytalk-mc/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/16995f75d_rendition.jpg",
    description: "HyTalk Misyon Kritik sistemi.",
  },
  {
    model: "Hytera HyTalk Pro",
    category: "PMR-LTE Convergence-native System",
    tab: "Broad Band Platform",
    url: "https://www.hytera.com/eu/solutions/hytalk-pro/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/9eef0a56a_rendition.jpg",
    description: "PMR-LTE yakınsama sistemi.",
  },
  {
    model: "MRPS",
    category: "Multimedia Recording and Playback System",
    tab: "Broad Band Platform",
    url: "https://www.hytera.com/eu/solutions/mrps/",
    image: null,
    description: "Multimedya kayıt ve oynatma sistemi.",
  },
  {
    model: "MUC",
    category: "Unified Communication System",
    tab: "Broad Band Platform",
    url: "https://www.hytera.com/eu/solutions/muc/",
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/c7fd5ad8b_rendition.jpg",
    description: "Birleştirilmiş iletişim sistemi.",
  },
  {
    model: "HYTalk",
    category: "PoC Yazılımı",
    tab: "Yazılım",
    url: "https://www.hytera.com/eu/solutions/hytalk/",
    image: null,
    description: "LTE/Wi-Fi üzerinden bas-konuş iletişimi sağlayan bulut tabanlı PoC platform yazılımı.",
  },
];

function RadioIcon() {
  return (
    <svg viewBox="0 0 60 100" className="w-12 h-20 mx-auto opacity-20" fill="currentColor">
      <rect x="10" y="5" width="40" height="70" rx="6" />
      <rect x="22" y="2" width="16" height="6" rx="2" />
      <rect x="15" y="25" width="30" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="62" r="5" />
    </svg>
  );
}

function ProductCard({ product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-xl border border-border/40 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all group overflow-hidden"
    >
      <div className="h-40 flex items-center justify-center bg-white/5 p-4">
        {product.image ? (
          <img
            src={product.image}
            alt={product.model}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
          />
        ) : null}
        <div className={`w-full h-full items-center justify-center text-muted-foreground ${product.image ? "hidden" : "flex"}`}>
          <RadioIcon />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-foreground mb-1">{product.model}</h3>
        <span className="text-[11px] font-mono text-primary/70">{product.category}</span>
        {product.description && (
          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{product.description}</p>
        )}
      </div>
    </a>
  );
}

export default function PocProductGrid() {
  const [activeTab, setActiveTab] = useState("Tümü");

  const filtered = activeTab === "Tümü" ? products : products.filter(p => p.tab === activeTab);

  return (
    <section className="py-12 lg:py-16 bg-secondary/20 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">MCS & PoC TELSİZ ÇÖZÜMLERİ</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">PoC Telsiz ve Yazılım Ürünleri</h2>
          </div>
          <a href="https://www.hytera.com/eu/products/poc-radios/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold shrink-0">
            <FileText className="w-4 h-4" /> Genel Katalog
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all
                ${activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
