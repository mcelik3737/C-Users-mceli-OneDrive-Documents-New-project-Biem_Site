import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { seoRoutes } from '../src/data/seoRoutes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const templatePath = path.join(dist, 'index.html');

if (!fs.existsSync(templatePath)) {
  throw new Error('dist/index.html bulunamadı. Önce Vite build çalışmalıdır.');
}

const template = fs.readFileSync(templatePath, 'utf8');
const origin = 'https://www.biemelektronik.com';

const escapeHtml = (value = '') => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

function replaceMeta(html, selector, value) {
  const escaped = escapeHtml(value);
  const attr = selector.startsWith('og:') ? 'property' : 'name';
  const key = selector;
  const re = new RegExp(`<meta\\s+${attr}=["']${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'i');
  const tag = `<meta ${attr}="${key}" content="${escaped}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function replaceCanonical(html, url) {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;
  const re = /<link\s+rel=["']canonical["'][^>]*>/i;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function renderRoute(route) {
  const url = route.path === '/' ? `${origin}/` : `${origin}${route.path}`;
  let html = template;

  html = html.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(route.title)}</title>`);
  html = replaceMeta(html, 'description', route.description);
  html = replaceMeta(html, 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  html = replaceMeta(html, 'og:title', route.title);
  html = replaceMeta(html, 'og:description', route.description);
  html = replaceMeta(html, 'og:url', url);
  html = replaceMeta(html, 'twitter:title', route.title);
  html = replaceMeta(html, 'twitter:description', route.description);
  html = replaceCanonical(html, url);

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><main class="biem-static-fallback" style="min-height:100vh;background:#0b1424;color:#f5f8fc;font-family:Arial,Helvetica,sans-serif;padding:72px 24px"><div style="max-width:980px;margin:0 auto"><img src="/assets/images/91ac19b2e_logo_png.png" alt="BİEM Teknoloji Elektronik" width="150" height="52" style="background:#fff;border-radius:10px;padding:8px;margin-bottom:42px"><p style="font-size:12px;letter-spacing:.16em;color:#00cfe8;text-transform:uppercase">BİEM Teknoloji Elektronik</p><h1 style="font-size:clamp(34px,6vw,64px);line-height:1.05;margin:14px 0 20px">${escapeHtml(route.h1)}</h1><p style="max-width:760px;color:#aab8c8;font-size:17px;line-height:1.7">${escapeHtml(route.description)}</p><p style="margin-top:30px"><a href="/iletisim" style="color:#00cfe8">İletişim ve teklif talebi →</a></p></div></main></div>`
  );

  return html;
}

for (const route of seoRoutes) {
  const html = renderRoute(route);
  const target = route.path === '/'
    ? templatePath
    : path.join(dist, `${route.path.replace(/^\//, '')}.html`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html, 'utf8');
  console.log(`[seo] ${route.path} -> ${path.relative(root, target)}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${seoRoutes.map((route) => {
  const loc = route.path === '/' ? `${origin}/` : `${origin}${route.path}`;
  const priority = route.path === '/' ? '1.0' : route.path === '/iletisim' || route.path === '/projeler' ? '0.9' : '0.8';
  return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
}).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');
