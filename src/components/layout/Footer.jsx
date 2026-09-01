import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone, RadioTower } from "lucide-react";

const LOGO = "/assets/images/91ac19b2e_logo_png.png";

const corporateLinks = [
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Projeler", path: "/projeler" },
  { label: "Teknik Blog", path: "/blog" },
  { label: "İletişim ve Teklif", path: "/iletisim" },
];

const solutions = [
  { label: "Telsiz Haberleşme Sistemleri", path: "/telsiz-haberlesme-sistemleri" },
  { label: "Hytera Telsiz Ürünleri", path: "/hytera-telsiz-urunleri" },
  { label: "TETRA Telsiz Sistemleri", path: "/tetra-telsiz-sistemleri" },
  { label: "Raylı Sistem Haberleşmesi", path: "/rayli-sistem-cozumleri" },
  { label: "DAS / RF Kapsama", path: "/das-rf-kapsama-cozumleri" },
  { label: "RF Repeater / BDA", path: "/rf-repeater-bda-urunleri" },
  { label: "Leaky Feeder Sistemleri", path: "/leaky-feeder-sistemleri" },
  { label: "Maden ve Tünel Haberleşmesi", path: "/maden-tunel-haberlesmesi" },
  { label: "J&R Acil Durum Telefonları", path: "/jr-acil-durum-telefonlari" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#08111f] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_85%_18%,rgba(0,207,232,0.12),transparent_28rem)]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 pt-14 lg:pt-20 pb-8">
        <div className="mb-14 rounded-2xl border border-cyan-400/15 bg-[#0d1a2b]/80 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.18em] text-cyan-400 uppercase mb-3">
              <RadioTower className="w-4 h-4" /> Projenizi teknik ekibimizle değerlendirin
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
              Kapsama problemi, kritik saha veya özel haberleşme ihtiyacı mı var?
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Saha bilgilerinizi paylaşın; RF, telsiz ve altyapı ihtiyaçlarını birlikte değerlendirip uygulanabilir sistem mimarisini oluşturalım.
            </p>
          </div>
          <Link
            to="/iletisim"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 text-sm font-bold text-[#071421] hover:bg-cyan-300 transition-colors"
          >
            Keşif / Teklif Talebi <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="inline-flex rounded-xl bg-white px-3 py-2.5 mb-5">
              <img src={LOGO} alt="BİEM Teknoloji Elektronik" className="h-10 w-auto object-contain" />
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Kritik haberleşme, RF kapsama ve saha altyapılarında keşiften devreye almaya kadar mühendislik, entegrasyon ve teknik destek hizmetleri.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-[10px] font-mono tracking-[0.13em] text-cyan-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-signal-pulse" />
              Engineering / RF / Integration
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-mono font-semibold tracking-[0.16em] text-slate-200 uppercase mb-5">Kurumsal</h3>
            <ul className="space-y-3">
              {corporateLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-mono font-semibold tracking-[0.16em] text-slate-200 uppercase mb-5">Çözümler</h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-mono font-semibold tracking-[0.16em] text-slate-200 uppercase mb-5">İletişim</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <a href="tel:+905325244037" className="flex gap-3 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                <span>+90 532 524 40 37</span>
              </a>
              <a href="tel:+902168072436" className="flex gap-3 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                <span>+90 216 807 24 36 - 37</span>
              </a>
              <a href="mailto:proje@biemelektronik.com" className="flex gap-3 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                <span>proje@biemelektronik.com</span>
              </a>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                <span className="leading-6">Barbaros Mah. Begonya Sok.<br />Batı Nida Kule No:1<br />Ataşehir / İstanbul</span>
              </div>
              <a
                href="https://wa.me/905325244037?text=Merhaba%2C%20B%C4%B0EM%20Elektronik%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                WhatsApp teklif hattı <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.07] flex flex-col md:flex-row justify-between gap-3 text-[11px] text-slate-600">
          <span>© {new Date().getFullYear()} BİEM Teknoloji Elektronik San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.</span>
          <span>Telsiz • Raylı Sistem • DAS / RF • Maden / Tünel • Acil Haberleşme</span>
        </div>
      </div>
    </footer>
  );
}
