import React from "react";
import { FileText } from "lucide-react";

const products = [
  { model: "PD505LF", category: "License-free Dijital El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/pd505lf", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/8b67f9aec_PD505LF_11.png" },
  { model: "BD505LF", category: "License-free Dijital El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/bd505lf", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/96b2121ec_BD50X3.png" },
  { model: "BD555", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/bd555", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/25d906ca9_BD55X_2.png" },
  { model: "PD415", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/pd415", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/1642b9cfe_rendition.jpg" },
  { model: "PD485", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/pd485", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/5a9a4f5d9_rendition.png" },
  { model: "PD365LF", category: "License-free Dijital El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/pd365lf", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/e540cd8db_rendition.png" },
  { model: "PD405", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/pd405", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/acba7e4bb_rendition.jpg" },
  { model: "PD365", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/pd365", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/c7ac9bd56_rendition.png" },
  { model: "BD505", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/bd505", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b30937661_rendition.jpg" },
  { model: "BP519 LF", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/bp519lf", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/04a66371c_rendition.jpg" },
  { model: "S1 Pro LF", category: "S Serisi İş Tipi El Telsizi", url: "https://www.hytera.com/eu/products/s-series-business-radios/s1-pro-lf", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/c1f621014_rendition.png" },
  { model: "S1 Pro", category: "S Serisi İş Tipi El Telsizi", url: "https://www.hytera.com/eu/products/s-series-business-radios/s1-pro", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/c1f621014_rendition.png" },
  { model: "BP519", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/bp519", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/09b92ae39_rendition.png" },
  { model: "BP569", category: "İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/bp569", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/cdf09b406_EN_BP56X_PRoduct_Image_31.png" },
  { model: "HP50X", category: "Profesyonel DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/hp50x", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/972435eea_rendition.png" },
  { model: "HP56X", category: "Profesyonel DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/hp56x", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/14a0fa9b1_rendition.png" },
  { model: "HP689", category: "Profesyonel DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/hp689", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/9c260db02_rendition.png" },
  { model: "HP609", category: "Profesyonel DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/hp609", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/0eb029f3a_rendition.png" },
  { model: "HP709", category: "Profesyonel DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/hp709", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/43d54a110_rendition.png" },
  { model: "HP789", category: "Profesyonel DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/hp789" },
  { model: "BD619", category: "İş Tipi DMR El Telsizi", eom: true, url: "https://www.hytera.com/eu/products/dmr-radio/bd619", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/cf61f9462_BD610-1new.png" },
  { model: "BP36X", category: "Ultra Hafif İş Tipi DMR El Telsizi", url: "https://www.hytera.com/eu/products/dmr-radio/bp36x", img: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/5bb8bf7b4_rendition.png" },
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
      {product.eom && (
        <span className="absolute top-2 right-2 z-10 text-[10px] font-mono px-2 py-0.5 rounded bg-destructive/20 text-destructive border border-destructive/30">
          EOM
        </span>
      )}
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

export default function DmrProductGrid() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">DMR EL TELSİZLERİ</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">Hytera DMR El Telsizi Modelleri</h2>
            <p className="text-muted-foreground text-sm max-w-xl">İş tipi, lisanssız ve profesyonel serilerden oluşan geniş Hytera DMR el telsizi portföyü.</p>
          </div>
          <a href="https://www.hytera.com/eu/products/dmr-radio/" target="_blank" rel="noopener noreferrer"
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
