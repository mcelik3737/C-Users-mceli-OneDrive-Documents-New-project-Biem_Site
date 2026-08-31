# BİEM — Base44 Dosya Kurtarma

## Ne var burada

`indir-windows.ps1` ve `indir-mac.sh` — Base44'te duran **151 dosyayı** (148 görsel + 3 PDF) tek seferde bilgisayarına indiren betikler. Sitenin kodundan çıkarıldı, hiçbiri atlanmadı.

## Nasıl çalıştırılır

### Windows
1. `indir-windows.ps1` dosyasını masaüstüne kaydet
2. Sağ tıkla → **"PowerShell ile çalıştır"**
3. Uyarı çıkarsa: PowerShell'i yönetici olarak aç, şunu yaz ve Enter'a bas:
   `Set-ExecutionPolicy -Scope Process Bypass`
   Sonra betiği tekrar çalıştır.

### Mac
Terminal'i aç, dosyanın olduğu klasöre git ve şunu yaz:
```
chmod +x indir-mac.sh
./indir-mac.sh
```

## Sonuç

Betiğin yanında `biem-dosyalar` diye bir klasör oluşur:

```
biem-dosyalar/
  images/     ← 148 görsel (logo, hero, ürün fotoğrafları, saha fotoğrafları)
  files/      ← 3 PDF katalog
  hatalar.txt ← sadece indirilemeyen olursa oluşur
```

İşlem bitince ekranda "Başarılı: 151, Hatalı: 0" yazmalı. Hatalı varsa `hatalar.txt`'yi bana gönder.

## Önemli

- Bu klasörü **yedekle** (Drive, harici disk, e-posta — nereye olursa).
- Base44 aboneliğini bu iş bitmeden iptal etme.
- Dosya adlarını değiştirme; koddaki adresleri bu adlara göre güncelleyeceğim.

## İçerik dökümü

**Kurumsal:** logo, favicon, BM Şarj logosu
**Hero görselleri:** 7 adet (tünel, raylı sistem, maden, enerji, endüstriyel, kamu güvenliği, telsiz)
**RF kapsama haritaları:** 5 adet (İstanbul, Milas, indoor DAS, U26)
**Saha fotoğrafları:** 17 adet (Eczacıbaşı, Marmaray, Rönesans RES, Anagold)
**Ürün görselleri:** 108 adet (Hytera DMR/TETRA/PoC/ATEX/analog/vücut kamerası, J&R telefonlar, BDA, pasif RF)
**Sistem şemaları:** 9 adet (DMR mimari, tünel FM diyagramı, yazılım ekranları)
**PDF kataloglar:** DS-9300 veri sayfası, Hytera DMR Sistem, Hytera ATEX

## Bu betiğin KAPSAMADIĞI şeyler

Aşağıdakiler veritabanında duruyor, ayrıca çıkarılmaları gerekiyor:

1. **Blog yazıları** (`BlogPost` tablosu)
2. **Haber / fuar / etkinlik** (`NewsEvent` tablosu) — fotoğraf galerileri ve **videolar** dahil
3. **Teklif talepleri** (`ContactForm` tablosu)

Bunlar kaybolursa geri getirilemez.
