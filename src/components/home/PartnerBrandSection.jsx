import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function PartnerBrandSection() {
  return (
    <section className="py-14 lg:py-20 border-t border-border/30">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/40 p-6 lg:p-10 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/biem-dosyalar/images/104a38333_BM-SARJ-LOGO-1200.png"
            alt="BM Şarj"
            className="h-16 w-auto object-contain shrink-0"
          />
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2">
              Grup Firmamız
            </span>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">
              Elektrikli Araç Şarj Çözümleri
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              BM Şarj; EV şarj cihazı satışı, altyapı kurulumu ve işletme/lisans danışmanlığı hizmetleri sunan diğer firmamızdır.
            </p>
          </div>
          <a
            href="https://bmsarj.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 h-11 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            bmsarj.com
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
