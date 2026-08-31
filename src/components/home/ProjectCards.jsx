import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, HardHat, Mountain, TrainFront, Zap } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const projects = [
  {
    title: "ESAN Madencilik XPT",
    sector: "Maden",
    scope: "Leaky feeder, RF repeater ve yeraltı telsiz haberleşme altyapısı",
    icon: HardHat,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/29143fc36_generated_19c7fa73.png",
  },
  {
    title: "Rönesans RES Projeleri",
    sector: "Enerji",
    scope: "DMR saha haberleşmesi, repeater, dispatcher ve kullanıcı yönetimi",
    icon: Zap,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/128dd205e_generated_24a41ca8.png",
  },
  {
    title: "Marmaray TETRA",
    sector: "Raylı Sistem",
    scope: "TETRA haberleşme, RF kapsama ve tünel sistem entegrasyonu",
    icon: TrainFront,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png",
  },
  {
    title: "İş Bankası DMR",
    sector: "Kurumsal",
    scope: "DMR telsiz altyapısı, repeater ve merkezi haberleşme yönetimi",
    icon: Building2,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/0a7fe552c_generated_82fab6dc.png",
  },
  {
    title: "TCDD Köseköy",
    sector: "Raylı Sistem",
    scope: "Acil durum telefonu, IP haberleşme ve saha network altyapısı",
    icon: TrainFront,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/b89abb303_generated_fce2d3bb.png",
  },
  {
    title: "İzmit Tünel",
    sector: "Tünel",
    scope: "RF repeater, leaky feeder, FM yayın ve acil anons entegrasyonu",
    icon: Mountain,
    image: "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/de672e6e4_generated_bad7140b.png",
  },
];

export default function ProjectCards() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a1423] border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          tag="SAHA TECRÜBESİ"
          title="Kritik sistemler sahada kanıtlanır."
          subtitle="Maden, enerji, raylı sistem, tünel ve kurumsal sahalarda farklı haberleşme mimarileriyle çalışan proje tecrübesi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projects.map(({ title, sector, scope, icon: Icon, image }) => (
            <article key={title} className="group relative min-h-[300px] rounded-xl overflow-hidden border border-white/[0.07] bg-card">
              <img
                src={image}
                alt={`${title} - ${sector} haberleşme projesi`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/80 to-[#08111f]/10" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Icon className="w-4 h-4" />
                  <span className="text-[9px] font-mono font-semibold tracking-[0.18em] uppercase">{sector}</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-2">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{scope}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/projeler"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-primary/20 text-sm font-semibold text-primary hover:bg-primary/[0.07] transition-colors"
          >
            Proje ve referansları inceleyin <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
