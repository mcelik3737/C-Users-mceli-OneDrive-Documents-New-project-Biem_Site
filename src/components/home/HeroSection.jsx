import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Radio, TrainFront, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/de672e6e4_generated_bad7140b.png";

const badges = [
  { icon: Radio, label: "Hytera Telsiz Sistemleri" },
  { icon: Wifi, label: "RF Repeater / BDA / DAS" },
  { icon: TrainFront, label: "Raylı Sistem Haberleşmesi" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tünel haberleşme altyapısı"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(186 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(186 100% 50% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-signal-pulse" />
              KRİTİK HABERLEŞME ALTYAPILARI
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            Telsiz Haberleşme, Raylı Sistem ve{" "}
            <span className="text-primary">DAS/RF Kapsama</span>{" "}
            Çözümleri
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-5 max-w-2xl"
          >
            BİEM Teknoloji Elektronik; kritik saha haberleşmesi, raylı sistem altyapıları ve RF kapsama çözümlerinde keşiften devreye almaya kadar uçtan uca mühendislik hizmeti sunar.
          </motion.p>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm text-primary/70 font-medium mb-8"
          >
            Sahanızın ihtiyacına uygun, güvenilir, sürdürülebilir ve ölçeklenebilir haberleşme altyapıları tasarlıyoruz.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/60 border border-border/50 rounded-md text-xs text-muted-foreground font-medium">
                  <Icon className="w-3.5 h-3.5 text-primary/60" />
                  {b.label}
                </span>
              );
            })}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            <Link to="/das-rf-kapsama-cozumleri">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 font-semibold text-sm">
                Çözümlerimizi İnceleyin
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/iletisim">
              <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 h-12 px-6 font-semibold text-sm">
                Keşif ve Teklif Talep Edin
                <Search className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
