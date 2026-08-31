import React, { useState, useEffect } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Radio, Network, Repeat, Settings, Monitor, ChevronDown, ChevronUp, FileText } from "lucide-react";

const CATALOG_URL = "/biem-dosyalar/files/f6595714e_2026_HyteraDMRSystemProductsandSolutions_1.pdf";

const systemGroups = [
  {
    icon: Network,
    title: "Trunking System",
    tag: "IP Site Connect / HYTALK Trunk",
    image: "/biem-dosyalar/images/94a8db628_What-is-DMR-radio-standard-tiersjpg.webp",
    description: "Birden fazla baz istasyonunu tek bir omurga üzerinde birleştiren, otomatik kanal tahsisli DMR Trunking altyapısı. Geniş coğrafi alanlarda merkezi çağrı yönetimi sağlar.",
    features: ["Otomatik kanal tahsisi", "Merkezi çağrı yönetimi", "Yüksek kullanıcı kapasitesi", "IP omurga entegrasyonu"],
    url: "https://www.hytera.com/eu/solutions/dmr-trunking/",
  },
  {
    icon: Repeat,
    title: "Simulcast System",
    tag: "Geniş Alan Kapsama",
    images: [
      "/biem-dosyalar/images/0e0c307c8_Simulcast_Architecture2.webp",
      "/biem-dosyalar/images/5cffa277e_rendition.jpg",
    ],
    description: "Aynı frekans ve içeriğin eş zamanlı birden fazla noktadan yayınlandığı, kesintisiz geniş alan kapsama sağlayan DMR Simulcast altyapısı. Metro, havalimanı ve büyük kampüslerde idealdir.",
    features: ["Eş zamanlı çok noktalı yayın", "Sınırsız kapsama genişlemesi", "Kesintisiz geçiş (seamless roaming)", "GPS konum entegrasyonu"],
    url: "https://www.hytera.com/eu/solutions/simulcast/",
  },
  {
    icon: Radio,
    title: "XPT (Extended Pseudo Trunking)",
    tag: "Çok Kanallı Kapasite",
    image: "/biem-dosyalar/images/55d6040bd_Hytera_XPT_Extended_Pseudo_Trunking-980x980.jpg",
    description: "Mevcut DMR altyapısını trunking benzeri kapasite artışıyla genişleten, uygun maliyetli çok kanallı çözüm. Kurulum kolaylığı ve lisans avantajıyla öne çıkar.",
    features: ["Çok kanallı otomatik tahsis", "Mevcut DMR altyapısıyla uyumlu", "Düşük lisans maliyeti", "Hızlı devreye alma"],
    url: "https://www.hytera.com/eu/solutions/xpt/",
  },
  {
    icon: Settings,
    title: "Conventional Repeater",
    tag: "Tekli / Çoklu Repeater",
    image: "/biem-dosyalar/images/a317fc127_DMR-Tier-II-Repeater-System-Header.jpg",
    description: "Tek veya çoklu baz istasyonuyla kurulan klasik DMR Konvansiyonel sistem. Küçük ve orta ölçekli işletmeler için ekonomik ve güvenilir haberleşme altyapısı.",
    features: ["Tekli ve çoklu repeater desteği", "IP Site Connect ile bölgeler arası bağlantı", "Kolay kurulum", "Uygun maliyet"],
    url: "https://www.hytera.com/eu/solutions/conventional-dmr/",
  },
  {
    icon: Monitor,
    title: "Yazılımlar",
    tag: "SmartOne / HYTalk / RMS",
    images: [
      "/biem-dosyalar/images/bb7ec8796_unified-communication-dispatch-menupng_n.webp",
      "/biem-dosyalar/images/60c64b3b6_rendition.png",
      "/biem-dosyalar/images/f410e0513_rendition.jpg",
    ],
    description: "DMR sistemleri için merkezi yönetim, izleme, konum takibi ve haberleşme yazılımları. Dispatcher, ağ yönetim ve raporlama araçlarıyla tam operasyonel kontrol.",
    features: ["SmartOne Dispatcher", "HYTalk PoC Entegrasyonu", "RMS Uzaktan Yönetim", "Konum & Telemetri"],
    url: "https://www.hytera.com/eu/products/software/",
  },
];

function ImageSlider({ images }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, [images.length]);
  return (
    <div className="mt-4 mb-4 rounded-lg overflow-hidden relative">
      <img src={images[idx]} alt="" className="w-full object-contain max-h-72 bg-black/20 transition-opacity duration-500" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-primary" : "bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

function SystemCard({ group }) {
  const [open, setOpen] = useState(false);
  const Icon = group.icon;

  return (
    <div className={`rounded-xl border transition-all ${open ? "border-primary/40 bg-primary/5" : "border-border/50 bg-card/50"}`}>
      <button
        className="w-full text-left p-5 flex items-start gap-4"
        onClick={() => setOpen(v => !v)}
      >
        <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-colors
          ${open ? "bg-primary/20 border-primary/40" : "bg-primary/10 border-primary/20"}`}>
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
            {open ? (
              <ChevronUp className="w-4 h-4 text-primary shrink-0" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
            )}
          </div>
          <span className="text-[11px] font-mono text-primary/60 tracking-wide">{group.tag}</span>
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-0 border-t border-border/30 mt-0">
          {group.images && <ImageSlider images={group.images} />}
          {group.image && !group.images && (
            <div className="mt-4 mb-4 rounded-lg overflow-hidden">
              <img src={group.image} alt={group.title} className="w-full object-contain max-h-72 bg-black/20" />
            </div>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 mb-4">{group.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {group.features.map((f, i) => (
              <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                {f}
              </span>
            ))}
          </div>
          <a
            href={group.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-mono transition-colors"
          >
            Daha fazla bilgi →
          </a>
        </div>
      )}
    </div>
  );
}

export default function DmrSystemGrid() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/20 border-y border-border/30">
      <div className="max-w-4xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">DMR SİSTEM ALTYAPISI</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">DMR Sistem Çözümleri</h2>
          </div>
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold shrink-0"
          >
            <FileText className="w-4 h-4" />
            Genel Katalog (PDF)
          </a>
        </div>
        <div className="flex flex-col gap-3">
          {systemGroups.map((g, i) => (
            <SystemCard key={i} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
