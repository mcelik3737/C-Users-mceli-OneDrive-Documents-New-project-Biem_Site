import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import SEOHead from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";

const CATEGORY_LABELS = {
  "teknik-makale": "Teknik Makale",
  "proje-hikayesi": "Proje Hikayesi",
  "sektor-haberi": "Sektör Haberi",
};

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    base44.entities.BlogPost.filter({ id })
      .then(results => {
        if (results.length > 0) setPost(results[0]);
        else setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <div className="w-7 h-7 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <p className="text-muted-foreground mb-4">Yazı bulunamadı.</p>
        <Link to="/blog" className="text-primary text-sm hover:underline">← Blog'a dön</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.summary}
        canonical={`/blog/${post.id}`}
      />

      {post.cover_image && (
        <div className="w-full h-72 lg:h-96 overflow-hidden">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <Link to="/blog" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Blog'a Dön
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-5">
          {post.category && (
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded border text-primary bg-primary/10 border-primary/20">
              {CATEGORY_LABELS[post.category] || post.category}
            </span>
          )}
          {post.tags?.map((tag, i) => (
            <span key={i} className="flex items-center gap-1 text-xs text-muted-foreground border border-border/40 px-2 py-0.5 rounded">
              <Tag className="w-3 h-3" />{tag}
            </span>
          ))}
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">
          {post.title}
        </h1>

        <div className="flex items-center gap-5 text-xs text-muted-foreground mb-8 pb-8 border-b border-border/30">
          {post.author && (
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{post.author}</span>
          )}
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.created_date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
          </span>
        </div>

        <div className="prose prose-invert prose-sm max-w-none prose-headings:font-bold prose-a:text-primary prose-code:text-primary prose-img:rounded-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </>
  );
}
