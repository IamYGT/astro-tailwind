import i18next from "i18next";

// Desteklenen diller
export const SUPPORTED_LANGUAGES = [
  "tr",
  "en",
  "de",
  "fr",
  "es",
  "it",
  "ru",
  "pl",
  "nl",
  "sv",
  "ar",
];
export const DEFAULT_LANGUAGE = "tr";

// Dil adları
export const LANGUAGE_NAMES = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  ru: "Русский",
  pl: "Polski",
  nl: "Nederlands",
  sv: "Svenska",
  ar: "العربية",
};

// i18next şemaları
export interface ITranslations {
  [key: string]: string | ITranslations;
}

// Çevirileri almak için ana fonksiyon
export function getTranslationValue(obj: any, path: string): string {
  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (current[key] === undefined) {
      console.warn(`Translation key not found: ${path}`);
      return path; // Key bulunamadıysa path'i döndür
    }
    current = current[key];
  }

  if (typeof current !== "string") {
    console.warn(`Translation value for key '${path}' is not a string`);
    return path;
  }

  return current;
}

// Tarayıcı ortamında kullanıcının tercih ettiği dili tespit et
export function detectUserLanguage(): string {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  // Önce localStorage'a bak
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  // URL parametrelerine bak
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang)) {
    return urlLang;
  }

  // Tarayıcı dilini kontrol et
  const browserLang = navigator.language.split("-")[0];
  if (SUPPORTED_LANGUAGES.includes(browserLang)) {
    return browserLang;
  }

  return DEFAULT_LANGUAGE;
}

// Dil değiştirme fonksiyonu
export function changeLanguage(lang: string): void {
  if (SUPPORTED_LANGUAGES.includes(lang)) {
    i18next.changeLanguage(lang);

    // Tarayıcı storage'a kaydet
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", lang);

      // URL'deki dil parametresini güncelle
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  }
}

// Çeviri fonksiyonu (shorthand)
export function t(key: string, options?: any): string {
  if (!i18next.isInitialized) {
    console.warn("i18next has not been initialized yet");
    return key; // i18next başlatılmadıysa key'i döndür
  }

  const translation = i18next.t(key, options);

  // Eğer çeviri bulunamazsa veya çeviri key ile aynıysa (i18next bu davranışa sahip)
  if (translation === key) {
    console.warn(`Translation not found for key: ${key}`);
    return key; // Key'i döndür
  }

  return translation;
}

// Tek bir çeviri nesnesini yükle
export async function loadTranslations(
  language: string
): Promise<Record<string, any>> {
  try {
    // Fetch ile çeviri dosyalarını yükle
    const response = await fetch(`/locales/${language}/translation.json`);

    if (!response.ok) {
      throw new Error(`Translation file for language ${language} not found`);
    }

    const translations = await response.json();
    console.log(`Loaded translations for ${language}:`, translations);
    return translations;
  } catch (error) {
    console.error(
      `Failed to load translations for language: ${language}`,
      error
    );

    // Hata durumunda varsayılan dili yüklemeyi dene
    try {
      const response = await fetch(`/locales/tr/translation.json`);
      if (!response.ok) {
        throw new Error("Default translation file not found");
      }

      const defaultTranslations = await response.json();
      return defaultTranslations;
    } catch (fallbackError) {
      console.error("Failed to load fallback translations:", fallbackError);
      return {};
    }
  }
}

// i18next'i başlat
export async function initializeI18n(language?: string): Promise<void> {
  try {
    const detectedLang = language || detectUserLanguage();
    console.log(`Initializing i18next with language: ${detectedLang}`);

    // Çevirileri yükle
    const translations = await loadTranslations(detectedLang);
    console.log("Translations loaded successfully");

    // i18next'i başlat
    await i18next.init({
      lng: detectedLang,
      fallbackLng: DEFAULT_LANGUAGE,
      debug: true, // Debug modunda çalıştır (geliştirme sırasında)
      resources: {
        [detectedLang]: {
          translation: translations,
        },
      },
      interpolation: {
        escapeValue: false,
      },
      returnNull: false,
      returnEmptyString: false,
      returnObjects: false,
      fallbackNS: "translation",
      saveMissing: true, // Eksik çevirileri kaydet (geliştirme sırasında)
      missingKeyHandler: (lng, ns, key) => {
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
        return key;
      },
    });

    // i18next events
    i18next.on("initialized", () => {
      console.log("i18next has been initialized successfully");
    });

    i18next.on("loaded", () => {
      console.log("i18next resources have been loaded");
    });

    i18next.on("failedLoading", (lng, ns, msg) => {
      console.error(`i18next failed loading ${lng}/${ns}: ${msg}`);
    });

    console.log(`i18next initialized with language: ${i18next.language}`);
    console.log("Available translations:", Object.keys(i18next.store.data));

    // Test çevirileri
    console.log(
      'Test translation for "common.menu.home":',
      i18next.t("common.menu.home")
    );
    console.log(
      'Test translation for "home.hero.title":',
      i18next.t("home.hero.title")
    );
  } catch (error) {
    console.error("Failed to initialize i18next:", error);

    // Basit bir geri dönüş çözümü
    if (!i18next.isInitialized) {
      await i18next.init({
        lng: DEFAULT_LANGUAGE,
        resources: {},
      });
    }
  }
}
