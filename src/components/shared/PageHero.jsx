import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PageHero({ title, subtitle, buttons, image }) {
  return (
    <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center overflow-hidden">
      {/* Background */}
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary" />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(186_100%_50%/0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16 lg:py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            {subtitle}
          </p>
          {buttons && (
            <div className="flex flex-wrap gap-3">
              {buttons.map((btn, i) => (
                <Link key={i} to={btn.to || "/iletisim"}>
                  <Button
                    variant={btn.variant || "default"}
                    className={`px-6 h-12 font-semibold text-sm ${btn.variant === "default" || !btn.variant ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border-primary/30 text-primary hover:bg-primary/10"}`}
                  >
                    {btn.label}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
