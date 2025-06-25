import 'server-only';

const dictionaries = {
  // admin: {},
  studio: {
    en: () =>
      import('~/lib/dictionaries/portfolio/en.json').then(
        (module) => module.default
      ),
    es: () =>
      import('~/lib/dictionaries/portfolio/es.json').then(
        (module) => module.default
      ),
  },
};

export const getDictionary = async (env: 'studio', locale: 'en' | 'es') =>
  dictionaries[env][locale]();
