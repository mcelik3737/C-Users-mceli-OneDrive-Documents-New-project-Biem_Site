import React, { useState } from "react";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, ExternalLink, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const subjects = [
  "Telsiz Haberleşme Sistemi",
  "Hytera Ürünleri",
  "TETRA Sistemi",
  "Raylı Sistem Çözümü",
  "DAS / RF Kapsama",
  "RF Repeater / BDA",
  "Leaky Feeder Sistemi",
  "Maden / Tünel Haberleşmesi",
  "Acil Durum Telefonu",
  "Bakım ve Teknik Servis",
  "Diğer",
];

const emptyForm = {
  name: "",
  company: "",
  phone: "",
  email: "",
  subject: "",
  location: "",
  message: "",
  website: "",
  kvkk: false,
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const updateField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.kvkk) {
      toast({ title: "KVKK onayı gereklidir", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true) {
        throw new Error(result.error || "Talep gönderilemedi.");
      }

      setSubmitted(true);
      setForm(emptyForm);
    } catch (error) {
      toast({
        title: "Talep gönderilemedi",
        description: error?.message || "Lütfen telefon, e-posta veya WhatsApp üzerinden bize ulaşın.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEOHead
        title="İletişim ve Teklif Talebi"
        description="BİEM Teknoloji Elektronik ile iletişime geçin. Telsiz haberleşme, tünel ve maden haberleşmesi, DAS/RF kapsama, repeater/BDA ve raylı sistem çözümleri için keşif ve teklif talebi oluşturun."
        canonical="/iletisim"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "İletişim", url: "https://www.biemelektronik.com/iletisim" },
        ]}
      />
      <PageHero
        title="İletişim ve Teknik Proje Talebi"
        subtitle="Saha bilgilerinizi ve ihtiyacınızı paylaşın; teknik ekibimiz uygulanabilir çözüm mimarisini değerlendirsin."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-5">Doğrudan İletişim</h2>
                <div className="space-y-4">
                  <a href="tel:+905325244037" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div><p className="font-medium text-foreground">GSM</p><p>+90 532 524 40 37</p></div>
                  </a>
                  <a href="tel:+902168072436" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div><p className="font-medium text-foreground">Ofis</p><p>+90 216 807 24 36 - 37</p></div>
                  </a>
                  <a href="mailto:proje@biemelektronik.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div><p className="font-medium text-foreground">E-posta</p><p>proje@biemelektronik.com</p></div>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Adres</p>
                      <p className="leading-6">Barbaros Mah. Begonya Sok.<br />Batı Nida Kule No:1<br />Ataşehir / İstanbul</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/905325244037?text=Merhaba%2C%20B%C4%B0EM%20Elektronik%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-green-500/20 bg-green-500/[0.06] px-5 py-4 text-sm font-semibold text-green-400 hover:bg-green-500/10 transition-colors"
              >
                WhatsApp üzerinden hızlı teklif talebi
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="rounded-xl border border-border/50 bg-card/40 p-5">
                <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-4">Formda paylaşmanız faydalı olur</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Proje / saha lokasyonu ve kullanım alanı</li>
                  <li>• İstenen haberleşme teknolojisi veya mevcut sistem</li>
                  <li>• Tünel, bina veya saha uzunluğu / yaklaşık alan</li>
                  <li>• Kullanıcı ve kanal / grup sayısı</li>
                  <li>• Varsa mevcut kapsama problemi ve teknik dokümanlar</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/50 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
                <div className="mb-7">
                  <p className="text-[10px] font-mono tracking-[0.18em] text-primary uppercase mb-2">Teknik ekip değerlendirmesi</p>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground">Keşif ve Teklif Talep Formu</h2>
                  <p className="text-sm text-muted-foreground mt-2 leading-6">Talebinizi doğrudan BİEM proje e-posta adresine iletir. Üçüncü taraf form servisi kullanılmaz.</p>
                </div>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Talebiniz alındı.</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">Mesajınız proje ekibimize iletildi. İhtiyaç halinde telefon veya WhatsApp üzerinden de bize ulaşabilirsiniz.</p>
                    <Button variant="outline" className="mt-2 border-primary/30 text-primary hover:bg-primary/10" onClick={() => setSubmitted(false)}>
                      Yeni Talep Gönder
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="hidden" aria-hidden="true">
                      <Label htmlFor="website">Web sitesi</Label>
                      <Input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => updateField("website", e.target.value)} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input id="name" value={form.name} onChange={(e) => updateField("name", e.target.value)} required autoComplete="name" className="bg-secondary/50 border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Firma Adı</Label>
                        <Input id="company" value={form.company} onChange={(e) => updateField("company", e.target.value)} autoComplete="organization" className="bg-secondary/50 border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input id="phone" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} required autoComplete="tel" className="bg-secondary/50 border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta *</Label>
                        <Input id="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} required autoComplete="email" className="bg-secondary/50 border-border" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Talep Konusu</Label>
                        <Select value={form.subject} onValueChange={(value) => updateField("subject", value)}>
                          <SelectTrigger className="bg-secondary/50 border-border"><SelectValue placeholder="Seçiniz" /></SelectTrigger>
                          <SelectContent>{subjects.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Proje / Saha Lokasyonu</Label>
                        <Input id="location" value={form.location} onChange={(e) => updateField("location", e.target.value)} className="bg-secondary/50 border-border" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Proje / Talep Açıklaması *</Label>
                      <Textarea id="message" value={form.message} onChange={(e) => updateField("message", e.target.value)} required rows={6} maxLength={5000} className="bg-secondary/50 border-border resize-y" placeholder="Saha, kullanıcı sayısı, mevcut altyapı, kapsama ihtiyacı ve varsa özel teknik gereksinimleri kısaca yazabilirsiniz." />
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Checkbox checked={form.kvkk} onCheckedChange={(value) => updateField("kvkk", value === true)} id="kvkk" />
                      <label htmlFor="kvkk" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                        İletişim talebimin değerlendirilmesi amacıyla paylaştığım kişisel verilerin işlenmesini kabul ediyorum. *
                      </label>
                    </div>

                    <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold">
                      {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Send className="w-4 h-4 mr-2" />}
                      {loading ? "Gönderiliyor..." : "Teklif Talebini Gönder"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
