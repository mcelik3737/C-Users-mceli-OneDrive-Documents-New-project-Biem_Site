import React, { useState, useEffect } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { FileText } from "lucide-react";

const bdaImages = [
  "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/058c62959_image.png",
  "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/cef5aa694_image.png",
];

function ImageSlider({ images }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="relative rounded-xl overflow-hidden border border-border/40 bg-white/5">
      <img src={images[idx]} alt="DS-9300" className="w-full object-contain max-h-80" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

export default function BdaProductGrid() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/20 border-y border-border/30">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">ÇİFT YÖNLÜ SİNYAL GÜÇLENDİRİCİ</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">BDA Ürünleri</h2>
          </div>
          <a href="https://www.hytera.com/eu/products/coverage/bda/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold shrink-0">
            <FileText className="w-4 h-4" /> Genel Katalog
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ImageSlider images={bdaImages} />
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">Model</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-1 mb-4">DS-9300 Bi-Directional Amplifier</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Kapalı alan, tünel, maden ve büyük binalarda çift yönlü RF sinyal güçlendirme sağlayan endüstriyel sınıf BDA çözümü. IP65 koruma sınıfıyla zorlu ortamlara uyumludur.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Çift yönlü güçlendirme", "IP65 korumalı", "DMR / TETRA uyumlu", "Uzaktan izleme", "Geniş frekans aralığı"].map((f, i) => (
                <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
