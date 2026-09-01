import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Menu, Phone, RadioTower, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/layout/SearchBar";
import GifModal from "@/components/shared/GifModal";

const LOGO = "/assets/images/91ac19b2e_logo_png.png";
const POC_GIF = "/assets/images/110899aec_p60_1.gif";

const mainNav = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  {
    label: "Telsiz Haberleşme",
    path: "/telsiz-haberlesme-sistemleri",
    children: [
      { label: "DMR Telsiz Sistemleri", path: "/telsiz-haberlesme-sistemleri" },
      { label: "Hytera Telsiz Ürünleri", path: "/hytera-telsiz-urunleri" },
      { label: "TETRA Sistemleri", path: "/tetra-telsiz-sistemleri" },
      { label: "Ex / ATEX Telsizler", path: "/hytera-telsiz-urunleri" },
      { label: "RF Repeater / BDA", path: "/rf-repeater-bda-urunleri" },
      { label: "MCS & PoC Çözümleri", path: "/hytera-telsiz-urunleri", demo: true },
    ],
  },
  {
    label: "Raylı Sistem",
    path: "/rayli-sistem-cozumleri",
    children: [
      { label: "Raylı Sistem Haberleşmesi", path: "/rayli-sistem-cozumleri" },
      { label: "Tünel Radyo / FM Yayını", path: "/rayli-sistem-cozumleri" },
      { label: "J&R Acil Durum Telefonları", path: "/jr-acil-durum-telefonlari" },
      { label: "Anons, YBS ve Network", path: "/rayli-sistem-cozumleri" },
    ],
  },
  {
    label: "DAS / RF Kapsama",
    path: "/das-rf-kapsama-cozumleri",
    children: [
      { label: "Maden ve Tünel Haberleşmesi", path: "/maden-tunel-haberlesmesi" },
      { label: "RF Repeater / BDA", path: "/rf-repeater-bda-urunleri" },
      { label: "Leaky Feeder Sistemleri", path: "/leaky-feeder-sistemleri" },
      { label: "Bina İçi / Public Safety DAS", path: "/das-rf-kapsama-cozumleri" },
    ],
  },
  { label: "Projeler", path: "/projeler" },
  { label: "Blog", path: "/blog" },
  { label: "İletişim", path: "/iletisim" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [pocGifOpen, setPocGifOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    return item.children?.some((child) => child.path === location.pathname) ?? false;
  };

  return (
    <>
      <div className="hidden lg:block bg-[#f7f9fb] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-5 text-[#516176]">
            <a href="tel:+902168072436" className="inline-flex items-center gap-1.5 hover:text-[#0a7f91] transition-colors">
              <Phone className="w-3.5 h-3.5" /> +90 216 807 24 36
            </a>
            <a href="mailto:proje@biemelektronik.com" className="inline-flex items-center gap-1.5 hover:text-[#0a7f91] transition-colors">
              <Mail className="w-3.5 h-3.5" /> proje@biemelektronik.com
            </a>
          </div>
          <div className="inline-flex items-center gap-2 font-mono tracking-[0.14em] text-[#567083] uppercase">
            <RadioTower className="w-3.5 h-3.5 text-[#00bcd4]" />
            Kritik Haberleşme & RF Mühendisliği
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_24px_rgba(15,42,74,0.05)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-[68px] lg:h-[78px]">
            <Link to="/" className="flex items-center shrink-0" aria-label="BİEM Elektronik ana sayfa">
              <img src={LOGO} alt="BİEM Teknoloji Elektronik" className="h-11 lg:h-12 w-auto object-contain" />
            </Link>

            <div className="hidden xl:flex items-center gap-0.5 ml-8">
              {mainNav.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center gap-1 px-2.5 py-3 text-[13px] font-semibold rounded-md transition-colors ${
                      isActive(item) ? "text-[#087f91]" : "text-[#18334f] hover:text-[#087f91]"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                    {isActive(item) && <span className="absolute left-2.5 right-2.5 -bottom-[7px] h-0.5 bg-[#00cfe8] rounded-full" />}
                  </Link>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-3 w-[285px]">
                      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-[0_18px_55px_rgba(15,42,74,0.14)]">
                        <div className="px-3 pt-2 pb-2 text-[9px] font-mono tracking-[0.18em] text-slate-400 uppercase">
                          {item.label}
                        </div>
                        {item.children.map((child) => (
                          child.demo ? (
                            <button
                              key={child.label}
                              type="button"
                              onClick={() => { setOpenDropdown(null); setPocGifOpen(true); }}
                              className="w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium text-[#29435e] hover:bg-[#f1fbfd] hover:text-[#087f91] transition-colors"
                            >
                              {child.label}
                              <span className="rounded border border-cyan-200 bg-cyan-50 px-1.5 py-0.5 text-[9px] font-mono text-cyan-700">DEMO</span>
                            </button>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#29435e] hover:bg-[#f1fbfd] hover:text-[#087f91] transition-colors"
                            >
                              {child.label}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 ml-auto pl-3">
              <div className="hidden lg:block">
                <SearchBar />
              </div>
              <Link to="/iletisim" className="hidden sm:block">
                <Button className="h-10 bg-[#00cfe8] text-[#082235] hover:bg-[#25ddf2] px-4 font-bold text-[13px] shadow-none">
                  Keşif / Teklif
                </Button>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-[#18334f] hover:bg-slate-50 transition-colors"
                aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden overflow-hidden border-t border-slate-200 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 max-h-[calc(100vh-68px)] overflow-y-auto">
                <div className="space-y-1">
                  {mainNav.map((item) => (
                    <div key={item.label} className="border-b border-slate-100 last:border-0 py-1">
                      <Link
                        to={item.path}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                          isActive(item) ? "bg-cyan-50 text-cyan-800" : "text-[#18334f] hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 ml-3 mb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="px-3 py-2 text-xs text-slate-500 hover:text-cyan-700 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <a href="tel:+905325244037" className="h-11 rounded-lg border border-slate-200 flex items-center justify-center gap-2 text-xs font-semibold text-[#18334f]">
                    <Phone className="w-4 h-4 text-cyan-600" /> Bizi Arayın
                  </a>
                  <Link to="/iletisim">
                    <Button className="w-full h-11 bg-[#00cfe8] text-[#082235] hover:bg-[#25ddf2] font-bold text-xs">Teklif Talebi</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <GifModal
        open={pocGifOpen}
        onClose={() => setPocGifOpen(false)}
        src={POC_GIF}
        title="PoC / LTE Bas-Konuş Sistemleri"
      />
    </>
  );
}
