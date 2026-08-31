import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Mountain, TrainFront, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/shared/SectionHeader";

const energyImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/128dd205e_generated_24a41ca8.png";
const tunnelImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/de672e6e4_generated_bad7140b.png";
const railImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png";
const mineImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/29143fc36_generated_19c7fa73.png";

const projects = [
  {
    title: "ESAN Madencilik XPT Projesi",
    sector: "Maden",
    scope: "Leaky feeder, RF repeater, telsiz haberleşme altyapısı",
    icon: HardHat,
    image: mineImg,
  },
  {
    title: "Rönesans RES Projeleri",
    sector: "Enerji",
    scope: "DMR telsiz altyapısı, repeater, dispatcher, kullanıcı yönetimi",
    icon: Zap,
    image: energyImg,
  },
  {
    title: "Marmaray TETRA Projesi",
    sector: "Raylı Sistem",
    scope: "TETRA telsiz sistemi, RF kapsama, tünel haberleşme altyapısı",
    icon: TrainFront,
    image: railImg,
  },
  {
    title: "İş Bank DMR Projesi",
    sector: "Kurumsal",
    scope: "DMR telsiz altyapısı, repeater, dispatcher, kullanıcı yönetimi",
    icon: Zap,
    image: energyImg,
  },
  {
    title: "TCDD Köseköy Projesi",
    sector: "Raylı Sistem",
    scope: "J&R acil durum telefonu, IP santral, network altyapısı",
    icon: TrainFront,
    image: railImg,
  },
  {
    title: "İzmit Tünel Projesi",
    sector: "Tünel",
    scope: "RF repeater, leaky feeder, FM radyo yayını, acil anons entegrasyonu",
    icon: Mountain,
    image: tunnelImg,
  },
];

export default function ProjectCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          tag="PROJELER"
          title="Saha Tecrübemizle Projelerinize Değer Katıyoruz"
          subtitle="Farklı sektörlerde telsiz haberleşme, RF kapsama ve güvenlik altyapıları projeleri için çözüm üretiyoruz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="group relative h-64 md:h-72 rounded-xl overflow-hidden border border-border/50">
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono text-primary tracking-wider">{p.sector.toUpperCase()}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1.5">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.scope}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/projeler">
            <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/10 font-medium text-sm px-6">
              Tüm Projeleri İnceleyin
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
