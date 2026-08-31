import React from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function GifModal({ open, onClose, src, title }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="rounded-xl overflow-hidden border border-border/50 bg-card shadow-2xl shadow-primary/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
                <span className="text-sm font-semibold text-foreground">{title}</span>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* GIF */}
              <div className="w-full">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
