import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogPostsData from "@/data/blogPosts.json";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSEO from "@/components/shared/BreadcrumbSEO";
import PageHero from "@/components/shared/PageHero";
import { Calendar, User, Tag } from "lucide-react";

const CATEGORIES = [
  { value: "all", label: "Tümü" },
  { value: "teknik-makale", label: "Teknik Makale" },
  { value: "proje-hikayesi", label: "Proje Hikayesi" },
  { value: "sektor-haberi", label: "Sektör Haberi" },
];

const CATEGORY_LABELS = {
  "teknik-makale": "Teknik Makale",
  "proje-hikayesi": "Proje Hikayesi",
  "sektor-haberi": "Sektör Haberi",
};

const CATEGORY_COLORS = {
  "teknik-makale": "text-primary bg-primary/10 border-primary/20",
  "proje-hikayesi": "text-accent bg-accent/10 border-accent/20",
  "sektor-haberi": "text-blue-400 bg-blue-400/10 border-blue-400/20",
};

export default function Blog() {
  const posts = Array.isArray(blogPostsData)
    ? blogPostsData.filter(post => post?.published !== false)
    : [];
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <>
      <SEOHead
        title="Blog — Teknik Makaleler ve Proje Hikayeleri"
        description="BİEM Teknoloji Elektronik blog sayfası. Telsiz haberleşme, tünel haberleşme, acil durum haberleşme, DAS, RF kapsama, BDA ve raylı sistem projelerine dair teknik makaleler, proje hikayeleri ve sektör haberleri."
        canonical="/blog"
        keywords="telsiz haberleşme, tünel haberleşme, acil durum haberleşme, afet haberleşme, DAS, RF kapsama, BDA, raylı sistem, maden haberleşme, teknik makale, proje hikayesi, sektör haberi"
      />
      <BreadcrumbSEO
        items={[
          { name: "Ana Sayfa", url: "https://www.biemelektronik.com/" },
          { name: "Blog", url: "https://www.biemelektronik.com/blog" },
        ]}
      />
      <PageHero
        title="Blog"
        subtitle="Telsiz haberleşme, DAS, RF kapsama ve raylı sistem projelerine dair teknik makaleler, proje hikayeleri ve sektör haberleri."
        buttons={[{ label: "Teklif Alın", to: "/iletisim" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-sm rounded-lg border transition-colors font-medium ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/20 bg-card/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-sm">Bu kategoride henüz yayınlanmış yazı bulunmuyor.</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group rounded-xl border border-border/50 bg-card/50 hover:border-primary/20 transition-all duration-200 overflow-hidden flex flex-col"
              >
                {post.cover_image ? (
                  <div className="h-48 overflow-hidden bg-secondary/50">
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                    <Tag className="w-10 h-10 text-primary/20" />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded border ${CATEGORY_COLORS[post.category] || "text-muted-foreground bg-muted border-border"}`}>
                      {CATEGORY_LABELS[post.category] || post.category}
                    </span>
                  </div>
                  <h2 className="text-sm font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border/30">
                    {post.author && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.created_date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
