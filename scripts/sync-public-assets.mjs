import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sources = [
  ['biem-dosyalar/images', 'public/assets/images'],
  ['biem-dosyalar/files', 'public/assets/docs'],
];

for (const [fromRel, toRel] of sources) {
  const from = path.join(root, fromRel);
  const to = path.join(root, toRel);

  if (!fs.existsSync(from)) {
    console.warn(`[assets] Kaynak bulunamadı: ${fromRel}`);
    continue;
  }

  fs.mkdirSync(to, { recursive: true });
  fs.cpSync(from, to, { recursive: true, force: true });
  console.log(`[assets] ${fromRel} -> ${toRel}`);
}
