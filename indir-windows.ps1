# BIEM - Base44 dosya indirme betigi
# Kullanim: bu dosyaya sag tikla -> "PowerShell ile calistir"

$ErrorActionPreference = "Continue"
$base = "https://media.base44.com/"
$hedef = Join-Path $PSScriptRoot "biem-dosyalar"
New-Item -ItemType Directory -Force -Path (Join-Path $hedef "images") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $hedef "files") | Out-Null

$liste = @(
  "images/public/6a0f643fac0d957e314ae3c0/91ac19b2e_logo_png.png",
  "images/public/6a0f643fac0d957e314ae3c0/cc4bcd72a_jjj.png",
  "images/public/6a0f643fac0d957e314ae3c0/104a38333_BM-SARJ-LOGO-1200.png",
  "images/public/6a0f643fac0d957e314ae3c0/de672e6e4_generated_bad7140b.png",
  "images/public/6a0f643fac0d957e314ae3c0/b89abb303_generated_fce2d3bb.png",
  "images/public/6a0f643fac0d957e314ae3c0/6f10ee50d_generated_1efba74d.png",
  "images/public/6a0f643fac0d957e314ae3c0/29143fc36_generated_19c7fa73.png",
  "images/public/6a0f643fac0d957e314ae3c0/128dd205e_generated_24a41ca8.png",
  "images/public/6a0f643fac0d957e314ae3c0/58386d917_generated_939516fe.png",
  "images/public/6a0f643fac0d957e314ae3c0/3423ab2ec_generated_f46b8aeb.png",
  "images/public/6a0f643fac0d957e314ae3c0/0a7fe552c_generated_82fab6dc.png",
  "images/public/6a0f643fac0d957e314ae3c0/d53175a64_image.png",
  "images/public/6a0f643fac0d957e314ae3c0/110899aec_p60_1.gif",
  "images/public/6a0f643fac0d957e314ae3c0/a00ed39ea_ento-Kopya.png",
  "images/public/6a0f643fac0d957e314ae3c0/b980529e5_8e3b7e13-1bd3-460a-a5ea-b31c20210394.png",
  "images/public/6a0f643fac0d957e314ae3c0/ae6efcdbd_kapsama.png",
  "images/public/6a0f643fac0d957e314ae3c0/4691218c2_U26_KAPSAMA.png",
  "images/public/6a0f643fac0d957e314ae3c0/9f07ca3fd_kapsama.png",
  "images/public/6a0f643fac0d957e314ae3c0/6ce631e0a_ChatGPTImage2Haz202615_53_10.png",
  "images/public/6a0f643fac0d957e314ae3c0/00c4a69d2_WhatsAppImage2026-06-16at161925.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/2b98b31da_WhatsAppImage2026-06-17at110839.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/9b55f2170_WhatsAppImage2026-06-17at112029.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/16c262462_WhatsAppImage2026-06-17at122015.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/b9319e4d9_WhatsAppImage2026-06-17at1220161.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/1f935ea97_WhatsAppImage2026-06-17at1220162.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/f3846a8e3_WhatsAppImage2026-06-17at1220163.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/1cea63931_WhatsAppImage2026-06-17at122016.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/c2b692108_WhatsAppImage2026-06-17at1220171.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/25439965d_WhatsAppImage2026-06-17at1220172.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/d05871cf7_WhatsAppImage2026-06-17at122017.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/8d8170a87_WhatsAppImage2026-06-17at120805.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/ec39e7ec1_WhatsAppImage2026-06-16at161925.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/a3eeeaad5_WhatsAppImage2026-06-16at161926.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/09877b0db_WhatsAppImage2026-06-17at120218.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/36f0e4e1e_WhatsAppImage2026-06-16at161046.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/feed3acf7_WhatsAppImage2026-06-16at161029.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/d0eb7f9e2_water-resistant-industrial-telephone-ip6723258469081.webp",
  "images/public/6a0f643fac0d957e314ae3c0/f83eadead_atex-anti-explosion-proof-emergency-telephone40254539954.webp",
  "images/public/6a0f643fac0d957e314ae3c0/90d0bbafc_20211029145257321d16b45935494ea50ed88408a5ad5f.webp",
  "images/public/6a0f643fac0d957e314ae3c0/55ab4e0c5_bank-service-digital-keys-telephone13059388123.webp",
  "images/public/6a0f643fac0d957e314ae3c0/0815d61cd_201710191204056393540.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/9b8e74419_20211129110700c1ddf2c332d0477fa792ce7b4729058e.webp",
  "images/public/6a0f643fac0d957e314ae3c0/058c62959_image.png",
  "images/public/6a0f643fac0d957e314ae3c0/cef5aa694_image.png",
  "images/public/6a0f643fac0d957e314ae3c0/d56166443_bda_png_bm.png",
  "images/public/6a0f643fac0d957e314ae3c0/1fb30f949_ChatGPTImage20Haz202619_50_09.png",
  "images/public/6a0f643fac0d957e314ae3c0/1abe360f5_ChatGPTImage20Haz202619_50_00.png",
  "images/public/6a0f643fac0d957e314ae3c0/c04154715_ChatGPTImage20Haz202619_53_32.png",
  "images/public/6a0f643fac0d957e314ae3c0/ced3e6aca_ChatGPTImage20Haz202619_53_32.png",
  "images/public/6a0f643fac0d957e314ae3c0/a8b6a6432_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/f78a72200_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/f35b6e1fe_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/98b002ff3_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/73e6804a1_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/8056c8c20_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/632ac094d_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/df4870fd6_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/cc0204187_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/f8ad743f7_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/9fe4e22fe_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/5421d293f_hytera-tc446s.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/6f04ecf88_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/002750016_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/ff9d416ad_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/7dc0766bc_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/5b136dff6_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/319c1222a_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/4797cda61_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/8b67f9aec_PD505LF_11.png",
  "images/public/6a0f643fac0d957e314ae3c0/96b2121ec_BD50X3.png",
  "images/public/6a0f643fac0d957e314ae3c0/25d906ca9_BD55X_2.png",
  "images/public/6a0f643fac0d957e314ae3c0/1642b9cfe_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/5a9a4f5d9_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/e540cd8db_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/acba7e4bb_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/c7ac9bd56_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/b30937661_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/04a66371c_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/c1f621014_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/09b92ae39_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/cdf09b406_EN_BP56X_PRoduct_Image_31.png",
  "images/public/6a0f643fac0d957e314ae3c0/972435eea_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/14a0fa9b1_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/9c260db02_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/0eb029f3a_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/43d54a110_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/cf61f9462_BD610-1new.png",
  "images/public/6a0f643fac0d957e314ae3c0/5bb8bf7b4_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/94a8db628_What-is-DMR-radio-standard-tiersjpg.webp",
  "images/public/6a0f643fac0d957e314ae3c0/0e0c307c8_Simulcast_Architecture2.webp",
  "images/public/6a0f643fac0d957e314ae3c0/5cffa277e_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/55d6040bd_Hytera_XPT_Extended_Pseudo_Trunking-980x980.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/a317fc127_DMR-Tier-II-Repeater-System-Header.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/bb7ec8796_unified-communication-dispatch-menupng_n.webp",
  "images/public/6a0f643fac0d957e314ae3c0/60c64b3b6_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/f410e0513_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/0caadd103_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/1543a92de_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/47972d38e_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/2535a6324_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/bdb20db3c_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/44ffd519c_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/c39963ce7_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/187a150b5_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/5a5501e1e_image.png",
  "images/public/6a0f643fac0d957e314ae3c0/2a7318d98_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/b513ad10d_EN_P30c_Front.png",
  "images/public/6a0f643fac0d957e314ae3c0/3003ba6d4_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/ad6425514_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/13862021a_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/f7f83a3b2_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/d52795f73_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/897da89c6_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/ad87c24ed_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/df80bb09c_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/b59ac7573_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/79a696591_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/8efda516e_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/b7bfb3ab3_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/938a14f0f_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/fd9f119aa_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/775c89f16_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/e5ec2f285_rendition.png",
  "images/public/6a0f643fac0d957e314ae3c0/b482a48fa_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/1fc86c9f7_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/16995f75d_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/9eef0a56a_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/c7fd5ad8b_rendition.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/c8c209196_PT560H-1.png",
  "images/public/6a0f643fac0d957e314ae3c0/a0cf741e1_hytera_pt590.png",
  "images/public/6a0f643fac0d957e314ae3c0/d91a8e0cf_MT680PLUS_41.png",
  "images/public/6a0f643fac0d957e314ae3c0/a3672a5ea_PT580HPlusUL913_1.png",
  "images/public/6a0f643fac0d957e314ae3c0/0d9554422_DIB-R5Advanced-5.png",
  "images/public/6a0f643fac0d957e314ae3c0/57362d7ca_DIB-R5Advanced-41.png",
  "images/public/6a0f643fac0d957e314ae3c0/d696ecdb5_DIB-R5Advanced-31.png",
  "images/public/6a0f643fac0d957e314ae3c0/49ba4e5ae_DIB-R5Compact-1.png",
  "images/public/6a0f643fac0d957e314ae3c0/14582ad1d_DIB-R5Compact-2.png",
  "images/public/6a0f643fac0d957e314ae3c0/d1a1d9520_DIBR5-OUTDOOR_5.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/66e8093ea_DIBR5-OUTDOOR_4.png",
  "images/public/6a0f643fac0d957e314ae3c0/2a1c6cb02_DIB-R5Outdoor-2.png",
  "images/public/6a0f643fac0d957e314ae3c0/ca744ee72_TETRAiBS-7.png",
  "images/public/6a0f643fac0d957e314ae3c0/d43f3e421_TETRAiBS-9.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/56240208d_TETRAiBS-5.png",
  "images/public/6a0f643fac0d957e314ae3c0/07b875904_TETRAiBS-2.png",
  "images/public/6a0f643fac0d957e314ae3c0/b51dbf360_Dispatcher.jpg",
  "images/public/6a0f643fac0d957e314ae3c0/bed9646a7_NMS-1.png",
  "images/public/6a0f643fac0d957e314ae3c0/3c0f45e7c_DGW.png",
  "images/public/6a0f643fac0d957e314ae3c0/cff15e6da_-.png",
  "files/public/6a0f643fac0d957e314ae3c0/f979725c5_BM_D30U30_24_F4.pdf",
  "files/public/6a0f643fac0d957e314ae3c0/f6595714e_2026_HyteraDMRSystemProductsandSolutions_1.pdf",
  "files/public/6a0f643fac0d957e314ae3c0/886c9cd9a_2026_HyteraIntrinsicallySafeTwo-wayRadioCatalog1.pdf"
)

$basarili = 0; $hatali = 0; $i = 0
foreach ($yol in $liste) {
  $i++
  $ad = Split-Path $yol -Leaf
  if ($yol -like "files/*") { $klasor = "files" } else { $klasor = "images" }
  $cikti = Join-Path $hedef (Join-Path $klasor $ad)
  if (Test-Path $cikti) { Write-Host "[$i/$($liste.Count)] atlandi (zaten var): $ad"; $basarili++; continue }
  try {
    Invoke-WebRequest -Uri ($base + $yol) -OutFile $cikti -UseBasicParsing -TimeoutSec 60
    Write-Host "[$i/$($liste.Count)] OK  $ad"
    $basarili++
  } catch {
    Write-Host "[$i/$($liste.Count)] HATA $ad" -ForegroundColor Red
    Add-Content -Path (Join-Path $hedef "hatalar.txt") -Value $yol
    $hatali++
  }
}

Write-Host ""
Write-Host "================================"
Write-Host "Basarili: $basarili   Hatali: $hatali"
Write-Host "Klasor: $hedef"
if ($hatali -gt 0) { Write-Host "Hatali olanlar hatalar.txt icinde listelendi." }
Write-Host "================================"
Read-Host "Kapatmak icin Enter"