import React from "react";

export default function SectionHeader({ tag, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-10 lg:mb-14`}>
      {tag && (
        <span className="inline-block text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-3">
          {tag}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 ${light ? "text-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base lg:text-lg max-w-3xl leading-relaxed ${centered ? "mx-auto" : ""} text-muted-foreground`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
