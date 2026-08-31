import React from "react";
import { ClipboardList, Search, PenTool, Package, Wrench, HeartPulse } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  { icon: ClipboardList, title: "İhtiyaç Analizi", text: "Saha, kullanıcı, kapsama ve güvenlik ihtiyaçları değerlendirilir." },
  { icon: Search, title: "Keşif ve Ölçüm", text: "Kapsama, sinyal, kablolama ve altyapı koşulları incelenir." },
  { icon: PenTool, title: "Sistem Tasarımı", text: "Cihaz, anten, RF dağıtım, network ve entegrasyon mimarisi oluşturulur." },
  { icon: Package, title: "Ürün Tedariği", text: "Projeye uygun ürünler, aksesuarlar ve ekipmanlar temin edilir." },
  { icon: Wrench, title: "Kurulum ve Devreye Alma", text: "Montaj, test, programlama ve kullanıcı eğitimleri tamamlanır." },
  { icon: HeartPulse, title: "Bakım ve Destek", text: "Periyodik bakım, arıza müdahalesi ve teknik destek sağlanır." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <SectionHeader
          tag="PROJE SÜRECİ"
          title="Projeleri Nasıl Yönetiyoruz?"
          subtitle="Her projede teknik ihtiyaçları doğru analiz eder, sahaya uygun sistem mimarisi oluşturur ve çözümü devreye almadan bakıma kadar yönetiriz."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="relative p-6 rounded-xl border border-border/50 bg-card/50 group hover:border-primary/20 transition-colors">
                {/* Step number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-border/30 font-mono leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>

                {/* Connector line (not on last row items) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border/30" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
