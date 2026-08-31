import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, ExternalLink, Send, Loader2, CheckCircle2, Linkedin, Facebook, Instagram } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { base44 } from "@/api/base44Client";

const EMAILJS_SERVICE_ID = "service_qjfzcu1";
const EMAILJS_TEMPLATE_ID = "template_lkfwe49";
const EMAILJS_PUBLIC_KEY = "fjqUjEwLDL2vLAaSV";

const subjects = [
  "Telsiz Haberleşme Sistemi",
  "Hytera Ürünleri",
  "Raylı Sistem Çözümü",
  "DAS / RF Kapsama",
  "RF Repeater / BDA",
  "Leaky Feeder Sistemi",
  "Maden / Tünel Haberleşmesi",
  "Acil Durum Telefonu",
  "CCTV / Access / Anons",
  "Bakım ve Teknik Servis",
  "Diğer",
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "",
    subject: "", location: "", message: "", kvkk: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.kvkk) {
      toast({ title: "KVKK onayı gereklidir", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      // Save to database
      await base44.entities.ContactForm.create({
        name: form.name,
        company: form.company,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        location: form.location,
        message: form.message,
      });

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          company: form.company || "-",
          phone: form.phone,
          email: form.email,
          subject: form.subject || "-",
          location: form.location || "-",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm({ name: "", company: "", phone: "", email: "", subject: "", location: "", message: "", kvkk: false });
    } catch (error) {
      toast({ title: "Hata", description: "Talep gönderilemedi. Lütfen daha sonra tekrar deneyin.", variant: "destructive" });
    }
    setLoading(false);
  };

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <>
      <SEOHead
        title="İletişim ve Teklif Talebi"
        description="BİEM Teknoloji Elektronik ile iletişime geçin. Telsiz haberleşme, tünel haberleşme, acil durum haberleşme, DAS/RF kapsama ve raylı sistem çözümleri için keşif ve teklif talebi oluşturun."
        canonical="/iletisim"
        keywords="BİEM iletişim, BİEM Elektronik telefon, BİEM Elektronik adres, teklif talebi, keşif talebi, proje danışmanlığı, telsiz haberleşme teklif, tünel haberleşme teklif, acil durum haberleşme teklif, DAS RF teklif, raylı sistem teklif, RF repeater teklif, leaky feeder teklif, acil durum telefonu teklif, maden tünel teklif, İstanbul Ataşehir, BİEM Teknoloji Elektronik"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "İletişim", url: "https://www.biemelektronik.com/iletisim" },
        ]}
      />
      <PageHero
        title="İletişim ve Teklif Talebi"
        subtitle="Projenizin kapsamını, saha bilgilerinizi ve ihtiyaçlarınızı bizimle paylaşın; teknik ekibimiz sizin için uygun çözüm önerisini hazırlasın."
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left - Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-4">İLETİŞİM BİLGİLERİ</h3>
                <div className="space-y-4">
                  <a href="tel:+905325244037" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">GSM</p>
                      <p>+90 532 524 40 37</p>
                    </div>
                  </a>
                  <a href="tel:+902168072436" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Ofis</p>
                      <p>+90 216 807 24 36 - 37</p>
                    </div>
                  </a>
                  <a href="mailto:proje@biemelektronik.com" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">E-posta</p>
                      <p>proje@biemelektronik.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Adres</p>
                      <p>Barbaros Mah. Begonya Sok. Batı Nida Kule No:1<br/>Ataşehir / İstanbul</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-4">HIZLI İLETİŞİM</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://wa.me/905325244037?text=Merhaba%2C%20B%C4%B0EM%20Elektronik%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20teklif%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600/10 border border-green-600/20 text-green-400 hover:bg-green-600/20 transition-colors font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    WhatsApp Teklif Hattı
                  </a>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="https://www.linkedin.com/in/mustafa-%C3%A7elik-12324b33/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5]/20 transition-colors text-sm font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/20 text-[#1877f2] hover:bg-[#1877f2]/20 transition-colors text-sm font-medium"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20 transition-colors text-sm font-medium"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">TALEPLERİNİZ</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2" />Telsiz haberleşme sistemi teklifleri</li>
                  <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2" />DAS / RF kapsama keşfi</li>
                  <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2" />Raylı sistem haberleşme çözümleri</li>
                  <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2" />Tünel ve maden haberleşmesi</li>
                  <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-2" />Acil durum telefonu ve güvenlik altyapıları</li>
                </ul>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="p-6 lg:p-8 rounded-xl border border-border/50 bg-card/50">
                <h3 className="text-lg font-bold text-foreground mb-1">Teklif ve Keşif Talep Formu</h3>
                <p className="text-sm text-muted-foreground mb-6">Lütfen projeniz hakkında kısa bilgi verin. Ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Talebiniz Alındı!</h4>
                    <p className="text-sm text-muted-foreground max-w-sm">Teknik ekibimiz en kısa sürede sizinle iletişime geçecektir. WhatsApp üzerinden de ulaşabilirsiniz.</p>
                    <Button variant="outline" className="mt-2 border-primary/30 text-primary hover:bg-primary/10" onClick={() => setSubmitted(false)}>
                      Yeni Talep Gönder
                    </Button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Ad Soyad *</Label>
                      <Input value={form.name} onChange={e => updateField("name", e.target.value)} required className="bg-secondary/50 border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label>Firma Adı</Label>
                      <Input value={form.company} onChange={e => updateField("company", e.target.value)} className="bg-secondary/50 border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label>Telefon *</Label>
                      <Input value={form.phone} onChange={e => updateField("phone", e.target.value)} required className="bg-secondary/50 border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label>E-posta *</Label>
                      <Input type="email" value={form.email} onChange={e => updateField("email", e.target.value)} required className="bg-secondary/50 border-border" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Talep Konusu</Label>
                      <Select value={form.subject} onValueChange={v => updateField("subject", v)}>
                        <SelectTrigger className="bg-secondary/50 border-border">
                          <SelectValue placeholder="Seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Proje / Saha Lokasyonu</Label>
                      <Input value={form.location} onChange={e => updateField("location", e.target.value)} className="bg-secondary/50 border-border" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Mesajınız</Label>
                    <Textarea value={form.message} onChange={e => updateField("message", e.target.value)} rows={4} className="bg-secondary/50 border-border resize-none" />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      checked={form.kvkk}
                      onCheckedChange={v => updateField("kvkk", v)}
                      id="kvkk"
                    />
                    <label htmlFor="kvkk" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                      KVKK Aydınlatma Metni'ni okudum ve kişisel verilerimin işlenmesini kabul ediyorum.
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
