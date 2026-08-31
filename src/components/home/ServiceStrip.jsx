import React from "react";
import { Search, PenTool, Package, Wrench } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Keşif ve Analiz",
    text: "Saha koşullarını, kapsama ihtiyacını, kullanıcı yoğunluğunu ve altyapı durumunu teknik olarak analiz ediyoruz.",
  },
  {
    icon: PenTool,
    title: "Projelendirme",
    text: "Telsiz, RF, fiber, network, anons ve DAS sistemlerini projeye uygun şekilde tasarlıyoruz.",
  },
  {
    icon: Package,
    title: "Ürün Tedariği",
    text: "Hytera, J&R, RF repeater, BDA, leaky feeder ve network ekipmanlarını projeye uygun temin ediyoruz.",
  },
  {
    icon: Wrench,
    title: "Kurulum ve Bakım",
    text: "Montaj, programlama, test, devreye alma, eğitim ve periyodik bakım hizmetleri sunuyoruz.",
  },
];

export default function ServiceStrip() {
  return (
    <section className="relative py-16 lg:py-20 border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase">HİZMET MODELİMİZ</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mt-3">
            Uçtan Uca Mühendislik ve Saha Uygulama Hizmeti
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
                {/* Step number */}
                <span className="absolute top-4 right-4 text-xs font-mono text-border">{String(i + 1).padStart(2, "0")}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
