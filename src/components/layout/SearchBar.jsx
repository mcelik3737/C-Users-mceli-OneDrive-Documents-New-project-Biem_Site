import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const searchIndex = [
  { label: "Ana Sayfa", path: "/", keywords: "ana sayfa home" },
  { label: "Hakkımızda", path: "/hakkimizda", keywords: "hakkımızda şirket biem tarih" },
  { label: "Telsiz Haberleşme Sistemleri", path: "/telsiz-haberlesme-sistemleri", keywords: "telsiz haberleşme dmr tetra analog ptt" },
  { label: "DMR El Telsizleri", path: "/hytera-telsiz-urunleri", keywords: "dmr el telsizi hytera dijital" },
  { label: "Hytera Telsiz Ürünleri", path: "/hytera-telsiz-urunleri", keywords: "hytera pd pd785 pt580 bm series" },
  { label: "Ex'li (Exproof) Telsizler", path: "/telsiz-haberlesme-sistemleri", keywords: "exproof atex patlama önleyici ex telsiz" },
  { label: "MCS & PoC Telsiz Çözümleri", path: "/telsiz-haberlesme-sistemleri", keywords: "poc mcs lte 4g internet telsiz" },
  { label: "Çift Yönlü Sinyal Güçlendirici (BDA)", path: "/rf-repeater-bda-urunleri", keywords: "bda sinyal güçlendirici repeater" },
  { label: "Raylı Sistem Çözümleri", path: "/rayli-sistem-cozumleri", keywords: "raylı sistem metro tramvay demiryolu tünel" },
  { label: "J&R Acil Durum Telefonları", path: "/jr-acil-durum-telefonlari", keywords: "jr acil durum telefonu emergency phone" },
  { label: "Tünel Radyo / FM Yayın", path: "/rayli-sistem-cozumleri", keywords: "tünel radyo fm yayın leaky feeder" },
  { label: "CCTV ve Access Control", path: "/rayli-sistem-cozumleri", keywords: "cctv kamera güvenlik erişim kontrol access" },
  { label: "DAS / RF Kapsama Çözümleri", path: "/das-rf-kapsama-cozumleri", keywords: "das rf kapsama distributed antenna" },
  { label: "Maden ve Tünel Haberleşmesi", path: "/maden-tunel-haberlesmesi", keywords: "maden tünel haberleşme yeraltı" },
  { label: "RF Repeater / BDA Ürünleri", path: "/rf-repeater-bda-urunleri", keywords: "rf repeater bda sinyal güçlendirici tekrarlayıcı" },
  { label: "Leaky Feeder Sistemleri", path: "/leaky-feeder-sistemleri", keywords: "leaky feeder radyatif kablo tünel maden" },
  { label: "Projeler", path: "/projeler", keywords: "projeler referans tamamlanan işler" },
  { label: "İletişim ve Teklif", path: "/iletisim", keywords: "iletişim teklif keşif form adres telefon" },
];

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim().length > 1
    ? searchIndex.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : [];

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Search icon button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary/50"
          aria-label="Ara"
        >
          <Search className="w-4 h-4" />
        </button>
      )}

      {/* Search input */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 220 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 bg-secondary/70 border border-border/60 rounded-lg px-3 h-9 overflow-hidden"
          >
            <Search className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Escape") { setOpen(false); setQuery(""); }
                if (e.key === "Enter" && results.length > 0) handleSelect(results[0].path);
              }}
              placeholder="Ara..."
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none flex-1 min-w-0"
            />
            <button onClick={() => { setOpen(false); setQuery(""); }}>
              <X className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results dropdown */}
      <AnimatePresence>
        {open && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl shadow-primary/5 py-1 z-[200]"
          >
            {results.map((item) => (
              <button
                key={item.path + item.label}
                onClick={() => handleSelect(item.path)}
                className="w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors flex items-center gap-2"
              >
                <Search className="w-3.5 h-3.5 flex-shrink-0 text-primary/50" />
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
        {open && query.trim().length > 1 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl py-4 z-[200] text-center"
          >
            <p className="text-sm text-muted-foreground">Sonuç bulunamadı</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
