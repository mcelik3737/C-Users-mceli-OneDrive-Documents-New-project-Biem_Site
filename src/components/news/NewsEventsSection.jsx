import React, { useState } from "react";
import newsEventsData from "@/data/newsEvents.json";
import { Newspaper, Presentation, CalendarDays, ArrowRight, X, ChevronLeft, ChevronRight, Play, Camera } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

const typeConfig = {
  haber: { icon: Newspaper, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", label: "Haber" },
  fuar: { icon: Presentation, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", label: "Fuar" },
  etkinlik: { icon: CalendarDays, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", label: "Etkinlik" },
};

function DetailModal({ item, onClose }) {
  const [activeTab, setActiveTab] = useState("gallery");
  const [imgIndex, setImgIndex] = useState(0);

  if (!item) return null;

  const config = typeConfig[item.type] || typeConfig.haber;
  const Icon = config.icon;
  const gallery = item.gallery || [];
  const videos = item.videos || [];
  const hasGallery = gallery.length > 0;
  const hasVideos = videos.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border/50 rounded-2xl overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-start justify-between p-5 lg:p-6 border-b border-border/30 shrink-0">
          <div>
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full ${config.bg} ${config.color} ${config.border} border mb-2`}>
              <Icon className="w-3 h-3" />
              {config.label}
            </span>
            <h2 className="text-lg lg:text-xl font-bold text-foreground">{item.title}</h2>
            {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
            <p className="text-xs text-muted-foreground font-mono mt-1">{item.date}</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-muted transition-colors shrink-0">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Tabs */}
        {(hasGallery || hasVideos) && (
          <div className="flex gap-0 px-5 pt-4 shrink-0">
            {hasGallery && (
              <button onClick={() => { setActiveTab("gallery"); setImgIndex(0); }}
                className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${activeTab === "gallery" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                <Camera className="w-3.5 h-3.5 inline mr-1.5" />Fotoğraflar ({gallery.length})
              </button>
            )}
            {hasVideos && (
              <button onClick={() => setActiveTab("videos")}
                className={`px-4 py-2 text-xs font-semibold border-b-2 transition-colors ${activeTab === "videos" ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                <Play className="w-3.5 h-3.5 inline mr-1.5" />Videolar ({videos.length})
              </button>
            )}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && hasGallery && (
          <div className="flex-1 overflow-y-auto p-5 lg:p-6">
            <div className="relative rounded-xl overflow-hidden bg-muted mb-4">
              <img src={gallery[imgIndex]} alt={`${item.title} - ${imgIndex + 1}`} className="w-full max-h-[50vh] object-contain mx-auto" />
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIndex(i => i === 0 ? gallery.length - 1 : i - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => setImgIndex(i => i === gallery.length - 1 ? 0 : i + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {gallery.map((img, i) => (
                <button key={i} onClick={() => setImgIndex(i)}
                  className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === imgIndex ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && hasVideos && (
          <div className="flex-1 overflow-y-auto p-5 lg:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {videos.map((video, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-muted">
                  <video src={video} controls className="w-full max-h-[40vh]" />
                </div>
              ))}
            </div>
          </div>
        )}

        {!hasGallery && !hasVideos && (
          <div className="flex-1 flex items-center justify-center p-10 text-muted-foreground text-sm">
            Bu içerik için görsel veya video bulunmuyor.
          </div>
        )}
      </div>
    </div>
  );
}

export default function NewsEventsSection() {
  const items = Array.isArray(newsEventsData) ? newsEventsData : [];
  const [activeFilter, setActiveFilter] = useState("tümü");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeFilter === "tümü"
    ? items
    : items.filter(i => i.type === activeFilter);

  const filters = [
    { key: "tümü", label: "Tümü" },
    { key: "haber", label: "Haberler" },
    { key: "fuar", label: "Fuarlar" },
    { key: "etkinlik", label: "Etkinlikler" },
  ];

  return (
    <>
      <section className="py-16 lg:py-24 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionHeader
            tag="Güncel"
            title="Haberler, Fuarlar & Etkinlikler"
            subtitle="BİEM Teknoloji'den son gelişmeler, katıldığımız fuarlar ve sektör etkinlikleri."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-1.5 text-xs font-mono font-semibold tracking-wider rounded-full border transition-colors ${
                  activeFilter === f.key
                    ? "bg-primary/15 text-primary border-primary/30"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-sm">
                {activeFilter === "tümü"
                  ? "Henüz bir haber, fuar veya etkinlik eklenmemiş."
                  : `Henüz "${filters.find(f => f.key === activeFilter)?.label}" kategorisinde bir içerik yok.`}
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((item, i) => {
                  const config = typeConfig[item.type] || typeConfig.haber;
                  const Icon = config.icon;
                  const hasMedia = (item.gallery && item.gallery.length > 0) || (item.videos && item.videos.length > 0);
                  return (
                    <div
                      key={item.id || i}
                      onClick={() => setSelectedItem(item)}
                      className="group relative rounded-xl overflow-hidden border border-border/50 bg-card hover:border-primary/20 transition-colors duration-300 cursor-pointer"
                    >
                      {item.image ? (
                        <div className="h-44 overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {hasMedia && (
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-black/70 text-white text-[10px] font-mono tracking-wider">
                                {item.gallery?.length || 0} fotoğraf
                                {item.videos?.length ? ` · ${item.videos.length} video` : ""}
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={`h-44 flex items-center justify-center ${config.bg}`}>
                          <Icon className={`w-12 h-12 ${config.color} opacity-30`} />
                        </div>
                      )}
                      <div className="p-4">
                        <div className="flex items-center gap-1.5 mb-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full ${config.bg} ${config.color} ${config.border} border`}>
                            <Icon className="w-3 h-3" />
                            {config.label}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-muted-foreground font-mono tracking-wide">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {items.length > 6 && filtered.length < items.length && (
                <div className="text-center mt-8">
                  <Button variant="ghost" size="sm" onClick={() => setActiveFilter("tümü")} className="text-muted-foreground text-xs gap-1.5">
                    Tümünü göster <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {selectedItem && (
        <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
