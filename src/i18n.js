import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzbek from './locales/uz/translation.json';
import russian from './locales/ru/translation.json';
import english from './locales/en/translation.json';
import french from './locales/fr/translation.json';
import chinese from './locales/zh/translation.json';
import japanese from './locales/ja/translation.json';
import korean from './locales/ko/translation.json';
import german from './locales/de/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uzbek },
            ru: { translation: russian },
            en: { translation: english },
            fr: { translation: french },
            zh: { translation: chinese },
            ja: { translation: japanese },
            ko: { translation: korean },
            de: { translation: german }
        },
        lng: localStorage.getItem('i18nextLng') || 'en', // default English
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
