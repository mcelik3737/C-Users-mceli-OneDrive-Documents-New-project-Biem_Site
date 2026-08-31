import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Radio, TrainFront, Wifi, ShieldCheck, MapPin, Activity } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/de672e6e4_generated_bad7140b.png";

const capabilities = [
  { icon: Radio, label: "DMR / TETRA / PoC" },
  { icon: Wifi, label: "DAS / Repeater / BDA" },
  { icon: TrainFront, label: "Raylı Sistem & Tünel" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[660px] lg:min-h-[760px] flex items-center overflow-hidden border-b border-border/40">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="BİEM kritik haberleşme ve tünel RF altyapısı"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background))_0%,hsl(var(--background)/.96)_34%,hsl(var(--background)/.76)_63%,hsl(var(--background)/.38)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(186 100% 50% / 0.75) 1px, transparent 1px), linear-gradient(90deg, hsl(186 100% 50% / 0.75) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to right, black, transparent 78%)",
        }}
      />

      <div className="absolute top-28 right-[9%] hidden xl:flex items-center gap-2 rounded-full border border-primary/20 bg-background/45 px-3 py-2 text-[10px] font-mono tracking-[0.18em] text-primary backdrop-blur-md">
        <Activity className="w-3.5 h-3.5" />
        RF / COVERAGE / MISSION CRITICAL
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-primary/25 bg-primary/[0.07] text-[11px] font-mono font-semibold text-primary tracking-[0.16em] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              KRİTİK HABERLEŞME & RF MÜHENDİSLİĞİ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[2.55rem] sm:text-5xl lg:text-[4rem] xl:text-[4.65rem] font-bold tracking-[-0.045em] text-foreground leading-[0.98] mb-7"
          >
            İletişim kritikse,
            <span className="block mt-2 text-primary">altyapısı da kritik olmalı.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg lg:text-xl text-foreground/75 leading-relaxed max-w-2xl mb-5"
          >
            Telsiz haberleşme, raylı sistem, maden ve tünel projelerinde; keşif, RF tasarım,
            sistem entegrasyonu, kurulum, test ve devreye alma süreçlerini tek mühendislik çatısı altında yürütüyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground mb-8"
          >
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Kritik saha haberleşmesi</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Sahaya özel RF tasarım</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-2xl mb-9"
          >
            {capabilities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-3.5 py-3 rounded-lg border border-white/10 bg-background/40 backdrop-blur-md text-sm text-foreground/80"
              >
                <div className="w-8 h-8 rounded-md border border-primary/20 bg-primary/[0.08] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.34 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link to="/iletisim">
              <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 font-semibold text-sm">
                Projenizi Birlikte Planlayalım
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/das-rf-kapsama-cozumleri">
              <Button variant="outline" className="w-full sm:w-auto border-white/15 bg-background/25 text-foreground hover:bg-white/[0.06] h-12 px-6 font-semibold text-sm backdrop-blur-sm">
                RF Çözümlerini İnceleyin
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 lg:bottom-8 lg:right-8 hidden md:block text-[9px] font-mono tracking-[0.22em] text-white/30 uppercase">
        Engineering / Integration / Field Services
      </div>
    </section>
  );
}
