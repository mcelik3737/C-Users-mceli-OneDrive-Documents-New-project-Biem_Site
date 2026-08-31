import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905325244037?text=Merhaba%2C%20B%C4%B0EM%20Elektronik%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20teklif%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-500 shadow-lg shadow-green-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group lg:bottom-6"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 80px) + 80px)" }}
      aria-label="WhatsApp ile iletişime geçin"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-card border border-border rounded-lg text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        WhatsApp Teklif Hattı
      </span>
    </a>
  );
}
