import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Search } from "lucide-react";

export default function CTASection({ title, subtitle, buttons }) {
  const defaultButtons = buttons || [
    { label: "Teklif Alın", to: "/iletisim", variant: "default", icon: ArrowRight },
    { label: "Keşif Talep Edin", to: "/iletisim", variant: "outline", icon: Search },
    { label: "Bize Ulaşın", to: "tel:+902121234567", variant: "ghost", icon: Phone },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(186_100%_50%/0.05),transparent_70%)]" />

      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 lg:px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-5">
          {title || "Projeniz İçin Doğru Haberleşme ve RF Altyapısını Birlikte Planlayalım"}
        </h2>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          {subtitle || "Telsiz haberleşme, raylı sistem altyapısı, tünel/maden haberleşmesi veya DAS/RF kapsama ihtiyacınız için BİEM Teknoloji Elektronik ile iletişime geçin."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {defaultButtons.map((btn, i) => {
            const Icon = btn.icon;
            const isExternal = btn.to?.startsWith("tel:") || btn.to?.startsWith("http");
            const Wrapper = isExternal ? "a" : Link;
            const wrapperProps = isExternal ? { href: btn.to } : { to: btn.to };
            return (
              <Wrapper key={i} {...wrapperProps}>
                <Button
                  variant={btn.variant || "default"}
                  className={`px-6 py-3 h-12 text-sm font-semibold ${btn.variant === "default" ? "bg-primary text-primary-foreground hover:bg-primary/90" : btn.variant === "outline" ? "border-primary/30 text-primary hover:bg-primary/10" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {btn.label}
                  {Icon && <Icon className="w-4 h-4 ml-2" />}
                </Button>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
