import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { FileText } from "lucide-react";

const products = [
  { model: "AP32X", category: "Ultralight Business Two-way Radio", url: "https://www.hytera.com/eu/products/analogue-radios/ap32x/", image: "/biem-dosyalar/images/a8b6a6432_rendition.png" },
  { model: "AP519 LF", category: "Enhanced Business Licence-free Analogue two-way radio", url: "https://www.hytera.com/eu/products/analogue-radios/ap519-lf/", image: "/biem-dosyalar/images/f78a72200_rendition.jpg" },
  { model: "AP519", category: "New Generation Business Radio", url: "https://www.hytera.com/eu/products/analogue-radios/ap519/", image: "/biem-dosyalar/images/f35b6e1fe_rendition.png" },
  { model: "AP589", category: "New Generation Business Radio", url: "https://www.hytera.com/eu/products/analogue-radios/ap589/", image: "/biem-dosyalar/images/98b002ff3_rendition.png" },
  { model: "HYT-S31", category: "S series Business Two-way Radio (S1)", url: "https://www.hytera.com/eu/products/analogue-radios/hyt-s31/", image: "/biem-dosyalar/images/73e6804a1_rendition.png" },
  { model: "HYT-S31 LF", category: "S series Business Two-way Radio (S1 LF)", url: "https://www.hytera.com/eu/products/analogue-radios/hyt-s31-lf/", image: "/biem-dosyalar/images/8056c8c20_rendition.png" },
  { model: "HYT-S10", category: "S series Business Two-way Radio (S1 mini)", url: "https://www.hytera.com/eu/products/analogue-radios/hyt-s10/", image: "/biem-dosyalar/images/632ac094d_rendition.png" },
  { model: "HYT-S10 LF", category: "S series Business Two-way Radio (S1 mini LF)", url: "https://www.hytera.com/eu/products/analogue-radios/hyt-s10-lf/", image: "/biem-dosyalar/images/df4870fd6_rendition.png" },
  { model: "HYT-S11", category: "S series Business Two-way Radio (S1 E)", url: "https://www.hytera.com/eu/products/analogue-radios/hyt-s11/", image: "/biem-dosyalar/images/cc0204187_rendition.png" },
  { model: "TC-320", category: "Cost-effective Business Two-way Radio", url: "https://www.hytera.com/eu/products/analogue-radios/tc-320/", image: "/biem-dosyalar/images/f8ad743f7_rendition.jpg" },
  { model: "TC-320 Enhanced", category: "Cost-effective Business Two-way Radio", url: "https://www.hytera.com/eu/products/analogue-radios/tc-320-enhanced/", image: "/biem-dosyalar/images/9fe4e22fe_rendition.jpg" },
  { model: "TC-446S Enhanced", category: "Business Two-way Radio", url: "https://www.hytera.com/eu/products/analogue-radios/tc-446s-enhanced/", image: "/biem-dosyalar/images/5421d293f_hytera-tc446s.jpg" },
  { model: "TC-508", category: "Business Two-way Radio", url: "https://www.hytera.com/eu/products/analogue-radios/tc-508/", image: "/biem-dosyalar/images/6f04ecf88_rendition.jpg" },
  { model: "TC-508 Enhanced", category: "Business Licence-free Analogue two-way radio", url: "https://www.hytera.com/eu/products/analogue-radios/tc-508-enhanced/" },
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

export default function AnalogProductGrid() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/20 border-y border-border/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">ANALOG EL TELSİZLERİ</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">Hytera Analog El Telsiz Modelleri</h2>
          </div>
          <a href="https://www.hytera.com/eu/products/analogue-radios/" target="_blank" rel="noopener noreferrer"
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
