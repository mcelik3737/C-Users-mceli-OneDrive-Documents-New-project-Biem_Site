import React from "react";
import { ClipboardCheck, RadioTower, Search, Wrench } from "lucide-react";

const services = [
  {
    icon: Search,
    step: "01",
    title: "Keşif & İhtiyaç Analizi",
    text: "Saha geometrisi, kapsama problemi, frekans yapısı, kullanıcı yoğunluğu ve mevcut altyapıyı teknik olarak değerlendiriyoruz.",
  },
  {
    icon: RadioTower,
    step: "02",
    title: "RF & Sistem Tasarımı",
    text: "Link budget, kapsama mimarisi, aktif/pasif RF bileşenleri, network, fiber ve güç altyapısını proje koşullarına göre tasarlıyoruz.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Entegrasyon & Kurulum",
    text: "Telsiz, repeater/BDA, leaky feeder, anten, acil telefon ve ilgili saha sistemlerinin montaj ve entegrasyonunu yürütüyoruz.",
  },
  {
    icon: ClipboardCheck,
    step: "04",
    title: "Test, Kabul & Teknik Destek",
    text: "Kapsama ve fonksiyon testleri, devreye alma, kullanıcı eğitimi, kabul dokümantasyonu ve sürdürülebilir teknik destek sağlıyoruz.",
  },
];

export default function ServiceStrip() {
  return (
    <section className="relative py-16 lg:py-24 border-b border-border/30 bg-[#0a1423] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[linear-gradient(90deg,transparent_49.5%,rgba(0,207,232,.6)_50%,transparent_50.5%)] bg-[length:72px_72px]" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mb-10 lg:mb-12">
          <span className="text-[10px] font-mono font-semibold tracking-[0.18em] text-primary uppercase">Mühendislik Sürecimiz</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mt-3">
            Ürün tedarikinden önce doğru sistem mimarisini kuruyoruz.
          </h2>
          <p className="mt-4 text-sm lg:text-base text-muted-foreground leading-7">
            Kritik haberleşme projelerinde her saha farklıdır. Bu nedenle süreci keşif, RF tasarım, entegrasyon ve ölçülebilir kabul adımlarıyla yönetiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, step, title, text }) => (
            <article key={step} className="group relative min-h-[250px] p-6 rounded-xl border border-white/[0.07] bg-[#0e1b2c]/80 hover:border-primary/25 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-8">
                <div className="w-11 h-11 rounded-lg border border-primary/20 bg-primary/[0.07] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[11px] font-mono tracking-[0.16em] text-slate-600">STEP / {step}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-6">{text}</p>
              <div className="absolute left-6 right-6 bottom-0 h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
