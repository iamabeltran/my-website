import es from './es.json';
import en from './en.json';

export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';

// es.json define la forma; en.json debe cumplirla o TypeScript falla.
export type Dict = typeof es;
const dicts: Record<Lang, Dict> = { es, en };

export const getDict = (lang: Lang): Dict => dicts[lang];
export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');
