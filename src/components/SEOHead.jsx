import { useEffect } from "react";

export default function SEOHead({ title, description, canonical, keywords, noindex }) {
  useEffect(() => {
    // Title
    if (title) {
      document.title = title + " | BİEM Teknoloji Elektronik";
    }

    // Robots
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute("content", noindex ? "noindex, nofollow" : "index, follow");

    // Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }

    // Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute("content", title + " | BİEM Teknoloji Elektronik");
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && description) {
      ogDesc.setAttribute("content", description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && canonical) {
      ogUrl.setAttribute("content", "https://www.biemelektronik.com" + canonical);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag && canonical) {
      canonicalTag.setAttribute("href", "https://www.biemelektronik.com" + canonical);
    }

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle && title) {
      twTitle.setAttribute("content", title + " | BİEM Teknoloji Elektronik");
    }

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc && description) {
      twDesc.setAttribute("content", description);
    }
  }, [title, description, canonical, noindex]);

  return null;
}
