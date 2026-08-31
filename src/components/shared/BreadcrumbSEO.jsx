import { useEffect } from "react";

/**
 * Her sayfaya JSON-LD BreadcrumbList yapısal verisi ekler.
 * Google'da zengin breadcrumb sonuçları gösterimi sağlar.
 *
 * @param {{ items: { name: string, url: string }[] }} props
 */
export default function BreadcrumbSEO({ items }) {
  useEffect(() => {
    if (!items || items.length === 0) return;

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url,
      })),
    };

    // Remove existing breadcrumb script if any
    const existing = document.getElementById("breadcrumb-jsonld");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "breadcrumb-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(breadcrumbJsonLd);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("breadcrumb-jsonld");
      if (el) el.remove();
    };
  }, [items]);

  return null;
}
