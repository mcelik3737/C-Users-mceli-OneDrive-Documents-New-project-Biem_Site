import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { FileText } from "lucide-react";

const products = [
  { model: "HP50X UL913", category: "Intrinsically Safe DMR Portable Two-way Radio (UL913)", url: "https://www.hytera.com/eu/products/dmr-radios/hp50x-ul913/", image: "/biem-dosyalar/images/0caadd103_rendition.png" },
  { model: "HP56X UL913", category: "Intrinsically Safe DMR Portable Two-way Radio (UL913)", url: "https://www.hytera.com/eu/products/dmr-radios/hp56x-ul913/", image: "/biem-dosyalar/images/1543a92de_rendition.png" },
  { model: "HP709 UL913", category: "Intrinsically Safe DMR Portable Two-way Radio", url: "https://www.hytera.com/eu/products/dmr-radios/hp709-ul913/", image: "/biem-dosyalar/images/47972d38e_rendition.jpg" },
  { model: "HP71XEx IIA", category: "Intrinsically Safe DMR Portable Two-way Radio", url: "https://www.hytera.com/eu/products/dmr-radios/hp71xex-iia/", image: "/biem-dosyalar/images/2535a6324_rendition.jpg" },
  { model: "HP71XEx IIC", category: "Intrinsically Safe DMR Portable Two-way Radio", url: "https://www.hytera.com/eu/products/dmr-radios/hp71xex-iic/", image: "/biem-dosyalar/images/bdb20db3c_rendition.png" },
  { model: "HP789 UL913", category: "Intrinsically Safe DMR Portable Two-way Radio", url: "https://www.hytera.com/eu/products/dmr-radios/hp789-ul913/", image: "/biem-dosyalar/images/44ffd519c_rendition.png" },
  { model: "HP79XEx IIC", category: "Intrinsically Safe DMR Portable Two-way Radio", url: "https://www.hytera.com/eu/products/dmr-radios/hp79xex-iic/", image: "/biem-dosyalar/images/c39963ce7_rendition.png" },
  { model: "HP79XEx IIA", category: "Intrinsically Safe DMR Portable Two-way Radio", url: "https://www.hytera.com/eu/products/dmr-radios/hp79xex-iia/", image: "/biem-dosyalar/images/187a150b5_rendition.png" },
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
      </div>
    </a>
  );
}

export default function ExproofProductGrid() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/20 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">EXPROOF (ATEX) TELSİZLERİ</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">Hytera ATEX Intrinsically Safe El Telsiz Modelleri</h2>
            <p className="text-muted-foreground text-sm max-w-xl">Tehlikeli ortamlar için ATEX sertifikası ile güvenli haberleşme çözümleri.</p>
          </div>
          <a href="/biem-dosyalar/files/886c9cd9a_2026_HyteraIntrinsicallySafeTwo-wayRadioCatalog1.pdf" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold shrink-0">
            <FileText className="w-4 h-4" /> Genel Katalog (PDF)
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
