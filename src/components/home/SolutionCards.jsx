import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, TrainFront, Wifi } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const wirelessImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/0a7fe552c_generated_82fab6dc.png";
const railImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png";
const dasImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b89abb303_generated_fce2d3bb.png";

const solutions = [
  {
    icon: Radio,
    title: "Telsiz Haberleşme Sistemleri",
    text: "DMR, TETRA, PoC, LTE bas-konuş, repeater, multi-site ve dispatcher çözümleriyle saha ekipleri için güvenilir haberleşme altyapıları kuruyoruz.",
    items: [
      "Hytera DMR telsiz sistemleri",
      "Repeater ve multi-site altyapılar",
      "Dispatcher, kayıt ve takip çözümleri",
      "PoC / LTE bas-konuş sistemleri",
    ],
    path: "/telsiz-haberlesme-sistemleri",
    image: wirelessImg,
    btnLabel: "Telsiz Çözümlerini İnceleyin",
  },
  {
    icon: TrainFront,
    title: "Raylı Sistem Çözümleri",
    text: "Metro, tramvay, demiryolu, tünel, istasyon ve depo sahaları için haberleşme, güvenlik, acil durum ve yolcu bilgilendirme altyapıları sunuyoruz.",
    items: [
      "Tünel telsiz haberleşmesi",
      "RF repeater / BDA çözümleri",
      "Anons ve YBS sistemleri",
      "CCTV, access ve IP santral",
      "J&R acil durum telefonları",
    ],
    path: "/rayli-sistem-cozumleri",
    image: railImg,
    btnLabel: "Raylı Sistem Çözümlerini İnceleyin",
  },
  {
    icon: Wifi,
    title: "DAS / RF Kapsama Çözümleri",
    text: "Bina içi, tünel, maden, metro, fabrika ve büyük kapalı alanlarda RF kapsama sorunlarına yönelik DAS, BDA, repeater ve leaky feeder çözümleri geliştiriyoruz.",
    items: [
      "Fiber RF Repeater / BDA",
      "Off-Air BDA sistemleri",
      "Leaky Feeder sistemleri",
      "Public Safety DAS",
      "GSM / LTE / 5G / Wi-Fi DAS",
    ],
    path: "/das-rf-kapsama-cozumleri",
    image: dasImg,
    btnLabel: "DAS/RF Çözümlerini İnceleyin",
  },
];

export default function SolutionCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          tag="UZMANLIK ALANLARIMIZ"
          title="Kritik Haberleşme ve Güvenlik Altyapılarında Üç Ana Çözüm Alanı"
          subtitle="BİEM Teknoloji Elektronik, kritik haberleşme ve güvenlik altyapılarında üç ana çözüm alanına odaklanır."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="group relative flex flex-col rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.text}</p>
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to={s.path}>
                    <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/10 font-medium text-sm">
                      {s.btnLabel}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
