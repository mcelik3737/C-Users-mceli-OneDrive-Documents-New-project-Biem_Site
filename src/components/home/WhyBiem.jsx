import React from "react";
import { Settings, Award, Antenna, Layers, Target } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const strengths = [
  {
    icon: Settings,
    title: "Mühendislik Odaklı Yaklaşım",
    text: "Her projede saha koşulları, frekans yapısı, kapsama ihtiyacı, kullanıcı sayısı ve işletme senaryosu dikkate alınır.",
  },
  {
    icon: Award,
    title: "Yetkili Bayilik ve Marka Tecrübesi",
    text: "Hytera telsiz sistemleri ve J&R acil durum telefonları başta olmak üzere güçlü marka gruplarıyla çözüm sunulur.",
  },
  {
    icon: Antenna,
    title: "RF ve Saha Haberleşmesi Deneyimi",
    text: "Tünel, maden, raylı sistem ve endüstriyel sahalarda RF kapsama ve haberleşme altyapılarına yönelik tecrübe.",
  },
  {
    icon: Layers,
    title: "Uçtan Uca Hizmet",
    text: "Keşif, proje, ürün tedariği, montaj, test, devreye alma, kullanıcı eğitimi ve bakım süreçleri tek elden.",
  },
  {
    icon: Target,
    title: "Projeye Özel Çözüm",
    text: "Sahaya ve işletme ihtiyacına uygun, ölçeklenebilir ve sürdürülebilir sistem mimarileri oluşturulur.",
  },
];

export default function WhyBiem() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left text */}
          <div>
            <SectionHeader
              tag="NEDEN BİEM"
              title="Neden BİEM Teknoloji Elektronik?"
              subtitle="Kritik haberleşme sistemlerinde başarı, yalnızca doğru ürün seçimiyle değil; doğru keşif, doğru mühendislik ve sürdürülebilir servis desteğiyle mümkündür."
              centered={false}
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              BİEM Teknoloji Elektronik, sahadaki gerçek ihtiyacı analiz eder, projeye uygun sistem mimarisini oluşturur ve çözümü kurulumdan bakıma kadar uçtan uca yönetir.
            </p>
          </div>

          {/* Right cards */}
          <div className="space-y-4">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/20 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{s.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
