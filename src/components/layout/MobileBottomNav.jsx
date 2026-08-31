import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Radio, FolderOpen, Phone } from "lucide-react";

const tabs = [
  { label: "Ana Sayfa", path: "/", icon: Home },
  { label: "Çözümler", path: "/telsiz-haberlesme-sistemleri", icon: Radio },
  { label: "Projeler", path: "/projeler", icon: FolderOpen },
  { label: "İletişim", path: "/iletisim", icon: Phone },
];

export default function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border/50 select-none"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center justify-center gap-0.5 px-2 py-1 rounded-lg transition-colors min-w-0 ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium leading-tight">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
