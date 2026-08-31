import React from "react";
import { TrainFront, Mountain, HardHat, Zap, Factory, Shield } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const railImg = "/biem-dosyalar/images/6f10ee50d_generated_1efba74d.png";
const mineImg = "/biem-dosyalar/images/29143fc36_generated_19c7fa73.png";
const energyImg = "/biem-dosyalar/images/128dd205e_generated_24a41ca8.png";
const industrialImg = "/biem-dosyalar/images/58386d917_generated_939516fe.png";
const publicSafetyImg = "/biem-dosyalar/images/3423ab2ec_generated_f46b8aeb.png";
const tunnelImg = "/biem-dosyalar/images/de672e6e4_generated_bad7140b.png";

const sectors = [
  { icon: TrainFront, title: "Raylı Sistemler", text: "Metro, tramvay, demiryolu, istasyon ve tünel projeleri için haberleşme ve güvenlik altyapıları.", image: railImg },
  { icon: Mountain, title: "Tüneller", text: "Karayolu ve demiryolu tünellerinde telsiz haberleşme, FM radyo yayını ve RF repeater çözümleri.", image: tunnelImg },
  { icon: HardHat, title: "Maden Sahaları", text: "Yeraltı ve açık madenlerde leaky feeder, telsiz haberleşme, acil telefon ve güvenlik sistemleri.", image: mineImg },
  { icon: Zap, title: "Enerji Tesisleri", text: "RES, GES, HES ve santral sahalarında telsiz haberleşme, dispatcher ve güvenlik altyapıları.", image: energyImg },
  { icon: Factory, title: "Endüstriyel Tesisler", text: "Fabrika, liman, lojistik merkez ve üretim sahalarında telsiz, CCTV ve kablosuz kapsama çözümleri.", image: industrialImg },
  { icon: Shield, title: "Kamu Güvenliği", text: "Polis, itfaiye, acil durum birimleri için public safety DAS ve kritik haberleşme çözümleri.", image: publicSafetyImg },
];

export default function SectorCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          tag="SEKTÖRLER"
          title="Hizmet Verdiğimiz Sektörler"
          subtitle="Kritik haberleşme ve güvenlik altyapısı ihtiyacı bulunan farklı sektörlere proje bazlı çözümler sunuyoruz."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="group relative h-56 rounded-xl overflow-hidden border border-border/50 cursor-pointer">
                <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 group-hover:from-background group-hover:via-background/80 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{s.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
