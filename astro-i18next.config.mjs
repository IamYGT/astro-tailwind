export default {
    defaultLanguage: 'tr',
    supportedLanguages: ['tr', 'en', 'de', 'fr', 'es', 'it', 'ru'],
    // Her bir dilin kendi adında nasıl yazıldığı
    languageNames: {
        tr: 'Türkçe',
        en: 'English',
        de: 'Deutsch',
        fr: 'Français',
        es: 'Español',
        it: 'Italiano',
        ru: 'Русский',
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
    },
    routes: {
        tr: {
            about: 'hakkimizda',
            contact: 'iletisim',
            features: 'ozellikler',
            products: 'urunler',
            blog: 'blog',
        },
        en: {
            about: 'about',
            contact: 'contact',
            features: 'features',
            products: 'products',
            blog: 'blog',
        },
    },
    // Dil değiştirme sırasında yerelleştirilmiş rotaları çevirmek için kullanılır
    showDefaultLocale: false,

    // Çevirilerin bulunduğu klasör
    locales: {
        root: 'public/locales',
    },
} 