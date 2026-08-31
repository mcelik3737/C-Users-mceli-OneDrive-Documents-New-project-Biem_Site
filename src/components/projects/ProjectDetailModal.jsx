import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ProjectDetailModal({ project, open, onClose }) {
  const [imgIdx, setImgIdx] = useState(0);

  if (!project) return null;

  const gallery = project.gallery || [];
  const Icon = project.icon;

  const prev = () => setImgIdx(i => (i === 0 ? gallery.length - 1 : i - 1));
  const next = () => setImgIdx(i => (i === gallery.length - 1 ? 0 : i + 1));

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent className="max-w-3xl p-0 gap-0 bg-card border-border overflow-hidden">
        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="relative bg-black/60">
            <img
              src={gallery[imgIdx]}
              alt={`${project.title} - ${imgIdx + 1}`}
              className="w-full h-56 md:h-72 lg:h-80 object-contain"
            />
            {gallery.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {gallery.map((_, i) => (
                    <button key={i} onClick={() => setImgIdx(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imgIdx ? "bg-primary" : "bg-white/50"}`} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Details */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {Icon && <Icon className="w-4 h-4 text-primary" />}
            <span className="text-xs font-mono text-primary tracking-wider">{project.sector.toUpperCase()}</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-4">{project.title}</h2>

          {project.stats && project.stats.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stats.map((s, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-sm text-primary font-semibold">
                  {s}
                </span>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <div>
              <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-1">Kapsam</h4>
              <p className="text-sm text-muted-foreground">{project.scope}</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-1">Detay</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.fullDesc || project.desc}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
