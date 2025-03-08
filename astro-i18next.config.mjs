export default {
    defaultLanguage: 'tr',
    supportedLanguages: ['tr', 'en', 'de', 'fr', 'es', 'it', 'ru', 'pl', 'nl', 'sv', 'ar'],
    // Her bir dilin kendi adında nasıl yazıldığı
    languageNames: {
        tr: 'Türkçe',
        en: 'English',
        de: 'Deutsch',
        fr: 'Français',
        es: 'Español',
        it: 'Italiano',
        ru: 'Русский',
        pl: 'Polski',
        nl: 'Nederlands',
        sv: 'Svenska',
        ar: 'العربية'
    },
    // Her dilin kendisindeki bayrak açıklaması
    flagLabels: {
        tr: 'Türk Bayrağı',
        en: 'English Flag',
        de: 'Deutsche Flagge',
        fr: 'Drapeau Français',
        es: 'Bandera Española',
        it: 'Bandiera Italiana',
        ru: 'Российский флаг',
        pl: 'Flaga Polski',
        nl: 'Nederlandse Vlag',
        sv: 'Svenska Flaggan',
        ar: 'العلم العربي'
    },
    routes: {
        tr: {
            about: 'hakkimizda',
            contact: 'iletisim',
            features: 'ozellikler',
            products: 'urunler',
            blog: 'blog',
            pricing: 'fiyatlandirma',
            faq: 'sss'
        },
        en: {
            about: 'about',
            contact: 'contact',
            features: 'features',
            products: 'products',
            blog: 'blog',
            pricing: 'pricing',
            faq: 'faq'
        },
    },
    // Dil değiştirme sırasında yerelleştirilmiş rotaları çevirmek için kullanılır
    showDefaultLocale: false,

    // Çevirilerin bulunduğu klasör
    locales: {
        root: 'public/locales',
    },
} 