const BASE44_IMAGE_RE = /^https:\/\/media\.base44\.com\/images\/public\/[^/]+\/(.+)$/i;
const BASE44_FILE_RE = /^https:\/\/media\.base44\.com\/files\/public\/[^/]+\/(.+)$/i;
const BASE44_IMAGE_GLOBAL_RE = /https:\/\/media\.base44\.com\/images\/public\/[^/\s)]+\/([^\s)]+)/gi;
const BASE44_FILE_GLOBAL_RE = /https:\/\/media\.base44\.com\/files\/public\/[^/\s)]+\/([^\s)]+)/gi;

export function localMediaUrl(value) {
  if (!value || typeof value !== 'string') return value;
  const imageMatch = value.match(BASE44_IMAGE_RE);
  if (imageMatch) return `/assets/images/${imageMatch[1]}`;
  const fileMatch = value.match(BASE44_FILE_RE);
  if (fileMatch) return `/assets/docs/${fileMatch[1]}`;
  return value;
}

export function localizeRichTextMedia(value) {
  if (!value || typeof value !== 'string') return value;
  return value
    .replace(BASE44_IMAGE_GLOBAL_RE, '/assets/images/$1')
    .replace(BASE44_FILE_GLOBAL_RE, '/assets/docs/$1');
}
