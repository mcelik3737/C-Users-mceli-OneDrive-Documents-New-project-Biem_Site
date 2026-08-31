import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Radio, AlertTriangle, Wifi, Train, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const diagramImg = "https://media.base44.com/images/public/6a0f643fac0d957e314ae3c0/6ce631e0a_ChatGPTImage2Haz202615_53_10.png";

const systemSteps = [
  { num: "1", title: "Dış FM Yayın Anteni / Yayın Kaynağı", desc: "Açık ortamdan FM sinyali alımı" },
  { num: "2", title: "FM Receiver Modülleri", desc: "Çok kanallı FM alıcı ve sinyal işleme" },
  { num: "3", title: "RDS / FM Modülatör", desc: "Yayın sinyali modülasyonu ve RDS veri iletimi" },
  { num: "4", title: "RF Combiner", desc: "Çok kanallı yayınları tek hatta birleştirme" },
  { num: "5", title: "FM Güç Amplifikatörü", desc: "Tünel uzunluğuna göre güç yükseltme" },
  { num: "6", title: "2 Yönlü Bölücü (Opsiyonel)", desc: "Çift tüp veya çok yönlü dağıtım için splitter" },
];

const benefits = [
  { icon: Radio, title: "Kesintisiz FM Yayını", desc: "Tünel girişinden çıkışına kadar homojen FM radyo kapsama" },
  { icon: AlertTriangle, title: "Acil Anons Önceliği", desc: "Normal yayın kesilerek canlı veya kayıtlı acil anons iletilebilir" },
  { icon: Wifi, title: "Leaky Feeder Altyapı", desc: "Kaçaklı yayın kablosu ile tünel boyunca homojen RF dağıtımı" },
  { icon: Train, title: "Demiryolu & Karayolu", desc: "Metro, tren, otoyol ve maden tünellerine uygun tasarım" },
];

const projectSteps = [
  { num: "01", title: "Saha Keşfi ve İhtiyaç Analizi", desc: "Tünel uzunluğu, tüp sayısı, teknik oda konumu, enerji noktaları, kablo güzergâhı, mevcut RF seviyesi ve işletme ihtiyaçları analiz edilir." },
  { num: "02", title: "RF Tasarım ve Kapsama Planlaması", desc: "FM yayın frekansları, kanal sayısı, çıkış güçleri, kablo kayıpları, coupling loss, splitter/combiner değerleri ve tünel boyunca hedef kapsama seviyesi hesaplanır." },
  { num: "03", title: "Leaky Feeder Kablo Altyapısı", desc: "Tünel boyunca anten görevi gören leaky feeder / kaçaklı yayın kablosu döşenerek homojen RF kapsama sağlanır." },
  { num: "04", title: "FM Yeniden Yayın ve Acil Anons Sistemi", desc: "FM alıcı, modülatör, combiner, güçlendirici, RDS ve acil anons birimleri ile istenilen sayıda FM kanalı tünel içerisine yeniden yayınlanır." },
  { num: "05", title: "Ölçüm, Test ve Devreye Alma", desc: "Montaj sonrası spektrum analizörü, RF güç ölçümü, VSWR kontrolü ve saha seviye ölçümleri yapılarak sistem devreye alınır." },
];

export default function TunnelRadioSection() {
  return (
    <div className="py-16 lg:py-24 space-y-20">

      {/* Intro */}
      <section>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="TÜNEL RADIO SİSTEMİ"
            title="FM Radyo Yayını, Acil Anons ve Leaky Feeder Tünel Kapsama Çözümleri"
            subtitle="Tünellerde haberleşme sadece konfor değil, aynı zamanda güvenlik ihtiyacıdır. Açık alanda alınabilen FM radyo yayınları tünel içinde zayıflar veya tamamen kaybolur. Acil durumlarda sürücülerin, yolcuların ve ekiplerin bilgilendirilmesi kritik önem taşır."
          />

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="p-5 rounded-xl border border-primary/20 bg-primary/5 group hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diagram */}
      <section className="bg-secondary/30 border-y border-border/30 py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2">SİSTEM MİMARİSİ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tünel FM Radio Sistem Diyagramı</h2>
          </div>
          <div className="rounded-2xl border border-border/50 overflow-hidden shadow-xl shadow-primary/5">
            <img
              src={diagramImg}
              alt="Tünel FM Radio Sistemi Diyagramı"
              className="w-full h-auto object-contain bg-white"
            />
          </div>

          {/* Step cards below diagram */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {systemSteps.map((s, i) => (
              <div key={i} className="p-3 rounded-lg bg-card/60 border border-border/40 text-center">
                <div className="w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-2">
                  <span className="text-xs font-bold text-primary">{s.num}</span>
                </div>
                <p className="text-[11px] font-semibold text-foreground leading-tight mb-1">{s.title}</p>
                <p className="text-[10px] text-muted-foreground leading-tight">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Acil Anons callout */}
          <div className="mt-6 p-4 rounded-xl border border-accent/30 bg-accent/5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-accent mb-0.5">Acil Anons / Break-In Ünitesi</p>
              <p className="text-xs text-muted-foreground">
                RDS/FM Modülatör aşamasına entegre edilen Break-In ünitesi sayesinde acil durumlarda normal yayın kesilerek canlı veya kayıtlı anons tünel içerisine iletilebilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tunnel Radio */}
      <section>
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">SİSTEM TANIMI</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Tünel Radio Sistemi Nedir?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Tünel radio sistemi; açık ortamda yayın yapan FM radyo kanallarının tünel içerisinde tekrar yayınlanmasını sağlayan özel bir haberleşme altyapısıdır. Sistem, dış ortamdan alınan FM radyo yayınlarını veya merkezden sağlanan yayın kaynaklarını işler, güçlendirir ve tünel boyunca döşenen <strong className="text-foreground">leaky feeder / kaçaklı yayın kablosu</strong> üzerinden tünel içerisine dağıtır.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bu sayede tünele giren araçlar veya bakım ekipleri, radyo yayınını kesintisiz almaya devam eder. Acil durumlarda ise normal yayın kesilerek operatör tarafından canlı veya kayıtlı anonslar FM radyo üzerinden tünel içerisine iletilebilir.
              </p>
            </div>
            <div>
              <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">NEDEN GEREKLİ?</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Neden Tünel FM Radyo Sistemi?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Betonarme yapı, dağ kütlesi, tünel geometrisi, virajlar, kot farkları ve metal yüzeyler RF sinyallerinin yayılımını sınırlar. Klasik anten sistemleri çoğu zaman yeterli kapsama sağlayamaz.
              </p>
              <ul className="space-y-2">
                {[
                  "FM radyo yayınları tünel boyunca kesintisiz hale getirilir",
                  "Acil durumlarda sürücülere doğrudan anons yapılabilir",
                  "Yangın, kaza, tahliye durumlarında hızlı bilgilendirme sağlanır",
                  "Leaky feeder kablo ile homojen RF kapsama elde edilir",
                  "Karayolu ve demiryolu tünellerinde güvenlik altyapısının parçasıdır",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Steps */}
      <section className="bg-secondary/20 border-y border-border/20 py-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2">PROJE SÜRECİ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">BİEM Elektronik Tünel Radio Çözümü</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl mx-auto">
              Yalnızca cihaz tedariği değil; keşif, mühendislik tasarımı, montaj, test ve devreye almayı kapsayan anahtar teslim çözüm.
            </p>
          </div>
          <div className="space-y-4">
            {projectSteps.map((s, i) => (
              <div key={i} className="flex items-start gap-5 p-5 rounded-xl bg-card/60 border border-border/40 hover:border-primary/20 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold font-mono text-primary">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/iletisim">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                Tünel Radio Projesi İçin Teklif Alın
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
