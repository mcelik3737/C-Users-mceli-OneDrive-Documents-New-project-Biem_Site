import blogPosts from '@/data/blogPosts.json';

function matches(item, filters = {}) {
  return Object.entries(filters).every(([key, value]) => item?.[key] === value);
}

function sortItems(items, sort) {
  if (!sort) return items;
  const desc = sort.startsWith('-');
  const key = desc ? sort.slice(1) : sort;
  return [...items].sort((a, b) => {
    const av = a?.[key] ?? '';
    const bv = b?.[key] ?? '';
    if (av === bv) return 0;
    const result = av > bv ? 1 : -1;
    return desc ? -result : result;
  });
}

const blogEntity = {
  async filter(filters = {}, sort, limit) {
    const filtered = blogPosts.filter((item) => matches(item, filters));
    const sorted = sortItems(filtered, sort);
    return Number.isFinite(limit) ? sorted.slice(0, limit) : sorted;
  },
};

const contactEntity = {
  async create(payload) {
    // Static hosting compatibility shim. The actual delivery is handled by
    // the contact page mail transport (EmailJS now, Natro PHP in phase 2).
    return { id: `local-${Date.now()}`, ...payload };
  },
};

const newsEntity = {
  async filter() {
    return [];
  },
};

// Compatibility layer kept temporarily so recovered components can run while
// BIEM is migrated away from Base44. No Base44 network request is made here.
export const base44 = {
  auth: {
    async me() { return null; },
    async logout() { return true; },
  },
  entities: {
    BlogPost: blogEntity,
    ContactForm: contactEntity,
    NewsEvent: newsEntity,
  },
  functions: {
    async invoke() {
      throw new Error('Bu Base44 sunucu fonksiyonu statik sürümde devre dışıdır.');
    },
  },
};
