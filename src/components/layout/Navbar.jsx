import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "@/components/layout/SearchBar";
import GifModal from "@/components/shared/GifModal";

const POC_GIF = "/biem-dosyalar/images/110899aec_p60_1.gif";

const mainNav = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  {
    label: "Telsiz Haberleşme",
    path: "/telsiz-haberlesme-sistemleri",
    children: [
      { label: "DMR El Telsizleri", path: "/hytera-telsiz-urunleri" },
      { label: "DMR Sistem", path: "/telsiz-haberlesme-sistemleri" },
      { label: "TETRA El Telsizleri", path: "/tetra-telsiz-sistemleri" },
      { label: "TETRA Sistem", path: "/tetra-telsiz-sistemleri" },
      { label: "Ex'li (Exproof) Telsizler", path: "/telsiz-haberlesme-sistemleri" },
      { label: "Analog El Telsizleri", path: "/telsiz-haberlesme-sistemleri" },
      { label: "RF Repeater / BDA", path: "/rf-repeater-bda-urunleri" },
      { label: "MCS & PoC Telsiz Çözümleri", path: "/hytera-telsiz-urunleri" },
      { label: "Body Camera", path: "/telsiz-haberlesme-sistemleri" },
    ],
  },
  {
    label: "Raylı Sistem",
    path: "/rayli-sistem-cozumleri",
    children: [
      { label: "J&R Acil Durum Telefonları", path: "/jr-acil-durum-telefonlari" },
      { label: "Tünel Radyo / FM Yayın", path: "/rayli-sistem-cozumleri" },
      { label: "Anons ve YBS", path: "/rayli-sistem-cozumleri" },
      { label: "CCTV ve Access Control", path: "/rayli-sistem-cozumleri" },
      { label: "IP Telefon ve Network", path: "/rayli-sistem-cozumleri" },
    ],
  },
  {
    label: "DAS / RF Kapsama",
    path: "/das-rf-kapsama-cozumleri",
    children: [
      { label: "Maden ve Tünel Haberleşmesi", path: "/maden-tunel-haberlesmesi" },
      { label: "Hytera Telsiz Ürünleri", path: "/hytera-telsiz-urunleri" },
      { label: "RF Repeater / BDA", path: "/rf-repeater-bda-urunleri" },
      { label: "Leaky Feeder Sistemleri", path: "/leaky-feeder-sistemleri" },
    ],
  },
  { label: "Projeler", path: "/projeler" },
  { label: "Blog", path: "/blog" },
  { label: "İletişim", path: "/iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [pocGifOpen, setPocGifOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isRoot = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const closeDropdown = () => {
    if (dropdownTimer) clearTimeout(dropdownTimer);
    setOpenDropdown(null);
  };

  const handleDropdownLeave = () => {
    const timer = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000);
    setDropdownTimer(timer);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimer) clearTimeout(dropdownTimer);
  };

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6 text-xs font-mono" style={{color: "#0f2a4a"}}>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-primary" />
              <a href="tel:+902168072436" className="hover:text-primary transition-colors">+90 216 807 24 36</a>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-primary" />
              <a href="mailto:proje@biemelektronik.com" className="hover:text-primary transition-colors">proje@biemelektronik.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Back button + Logo */}
            <div className="flex items-center gap-2">
              {!isRoot && (
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors select-none"
                  aria-label="Geri"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <Link to="/" className="flex items-center group">
                <img
                  src="/biem-dosyalar/images/91ac19b2e_logo_png.png"
                  alt="BİEM Elektronik"
                  className="h-11 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <div
                  key={item.path}
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.children) {
                      handleDropdownEnter();
                      setOpenDropdown(item.path);
                    }
                  }}
                  onMouseLeave={item.children ? handleDropdownLeave : undefined}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md
                      ${location.pathname === item.path ? "text-primary" : "hover:text-primary"}`}
                    style={{ color: location.pathname === item.path ? undefined : "#0f2a4a" }}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {item.children && openDropdown === item.path && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-[100]"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {item.children.map((child) => {
                        const isPoc = child.label === "MCS & PoC Telsiz Çözümleri";
                        if (isPoc) {
                          return (
                            <button
                              key={child.label}
                              onClick={() => { closeDropdown(); setPocGifOpen(true); }}
                              className="w-full text-left px-4 py-2.5 text-sm hover:text-primary hover:bg-gray-50 transition-colors flex items-center gap-2"
                              style={{color: "#0f2a4a"}}
                            >
                              {child.label}
                              <span className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded ml-auto">Demo</span>
                            </button>
                          );
                        }
                        return (
                          <Link
                            key={child.label}
                            to={child.path}
                            onClick={() => closeDropdown()}
                            className="block px-4 py-2.5 text-sm hover:text-primary hover:bg-gray-50 transition-colors"
                            style={{color: "#0f2a4a"}}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:block">
                <SearchBar />
              </div>
              <Link to="/iletisim" className="select-none">
                <Button className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm px-5 select-none">
                  Teklif Al
                </Button>
              </Link>
              <button
                className="lg:hidden p-2 select-none"
              style={{color: "#0f2a4a"}}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {mainNav.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                        ${location.pathname === item.path ? "text-primary bg-primary/10" : "hover:text-primary hover:bg-gray-50"}`}
                      style={{ color: location.pathname === item.path ? undefined : "#0f2a4a" }}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-3 py-2 text-xs hover:text-primary transition-colors"
                            style={{color: "#0f2a4a"}}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3">
                  <Link to="/iletisim">
                    <Button className="w-full bg-primary text-primary-foreground">Teklif Al</Button>
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
