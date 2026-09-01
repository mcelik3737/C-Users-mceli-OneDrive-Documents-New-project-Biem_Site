import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE44_IMAGE_RE = /https:\/\/media\.base44\.com\/images\/public\/[^/]+\/([^"'`)\s]+)/g;
const BASE44_FILE_RE = /https:\/\/media\.base44\.com\/files\/public\/[^/]+\/([^"'`)\s]+)/g;

function localizeBase44Media() {
  const replace = (code) => code
    .replace(BASE44_IMAGE_RE, '/assets/images/$1')
    .replace(BASE44_FILE_RE, '/assets/docs/$1');

  return {
    name: 'biem-localize-base44-media',
    enforce: 'pre',
    transform(code, id) {
      if (!/\.(jsx?|tsx?|json)$/.test(id)) return null;
      const transformed = replace(code);
      return transformed === code ? null : { code: transformed, map: null };
    },
    transformIndexHtml(html) {
      return replace(html);
    },
  };
}

export default defineConfig({
  plugins: [localizeBase44Media(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: false,
  },
});
