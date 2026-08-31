import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const quickLinks = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Projeler", path: "/projeler" },
  { label: "İletişim", path: "/iletisim" },
];

const solutions = [
  { label: "Telsiz Haberleşme Sistemleri", path: "/telsiz-haberlesme-sistemleri" },
  { label: "Raylı Sistem Çözümleri", path: "/rayli-sistem-cozumleri" },
  { label: "DAS / RF Kapsama Çözümleri", path: "/das-rf-kapsama-cozumleri" },
  { label: "Maden ve Tünel Haberleşmesi", path: "/maden-tunel-haberlesmesi" },
  { label: "Hytera Telsiz Ürünleri", path: "/hytera-telsiz-urunleri" },
  { label: "Vücut Kameraları", path: "/hytera-telsiz-urunleri" },
  { label: "RF Repeater / BDA", path: "/rf-repeater-bda-urunleri" },
  { label: "Leaky Feeder Sistemleri", path: "/leaky-feeder-sistemleri" },
  { label: "J&R Acil Durum Telefonları", path: "/jr-acil-durum-telefonlari" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border relative" style={{ clipPath: "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="inline-block bg-white rounded-xl px-3 py-2 shadow-sm border border-border/20">
                <img
                  src="/biem-dosyalar/images/91ac19b2e_logo_png.png"
                  alt="BİEM Elektronik"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Telsiz haberleşme sistemleri, raylı sistem çözümleri ve DAS/RF kapsama altyapılarında keşif, proje, kurulum, devreye alma ve bakım hizmetleri sunan mühendislik odaklı teknoloji firmasıdır.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-signal-pulse" />
              <span className="text-xs font-mono text-primary/70 tracking-wider">SİSTEM AKTİF</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">Hızlı Menü</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">Çözümler</h4>
            <ul className="space-y-2.5">
              {solutions.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase font-mono">İletişim</h4>
            <div className="space-y-3.5">
              <a href="tel:+905325244037" className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mt-0.5 text-primary/60" />
                GSM: +90 532 524 40 37
              </a>
              <a href="tel:+902168072436" className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mt-0.5 text-primary/60" />
                Ofis: +90 216 807 24 36 - 37
              </a>
              <a href="mailto:proje@biemelektronik.com" className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mt-0.5 text-primary/60" />
                proje@biemelektronik.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary/60 flex-shrink-0" />
                <span>Barbaros Mah. Begonya Sok.<br/>Batı Nida Kule No:1 Ataşehir / İstanbul</span>
              </div>
              <a
                href="https://wa.me/905325244037?text=Merhaba%2C%20B%C4%B0EM%20Elektronik%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                WhatsApp Teklif Hattı
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} BİEM Teknoloji Elektronik San. ve Tic. Ltd. Şti. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
            <span className="hover:text-muted-foreground cursor-pointer transition-colors">KVKK</span>
            <span className="hover:text-muted-foreground cursor-pointer transition-colors">Gizlilik</span>
            <span className="hover:text-muted-foreground cursor-pointer transition-colors">Çerez Politikası</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
