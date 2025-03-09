import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import i18next from "i18next";

// Desteklenen dilleri astro-i18next.config.mjs'den almak mantıklı olurdu,
// ancak burada doğrudan tanımlıyoruz
const SUPPORTED_LANGUAGES = [
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
const DEFAULT_LANGUAGE = "tr";

// Dil adlarını tanımla
const LANGUAGE_NAMES = {
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

// TranslationContext tip tanımları
interface TranslationContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  t: (key: string, options?: any) => string;
  languageNames: typeof LANGUAGE_NAMES;
  supportedLanguages: string[];
}

// Context oluştur
const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Provider bileşeni
export const TranslationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);

  // Dil değiştirme fonksiyonu
  const changeLanguage = (lang: string) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setCurrentLanguage(lang);
      i18next.changeLanguage(lang);
      // Tarayıcı storage'a kaydet
      localStorage.setItem("selectedLanguage", lang);
      // URL'deki dil parametresini güncelle (opsiyonel)
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  };

  // Çeviri fonksiyonu (i18next.t fonksiyonunun basit bir wrapper'ı)
  const t = (key: string, options?: any): string => {
    return i18next.t(key, options);
  };

  // Sayfa yüklendiğinde kullanıcının tercih ettiği dili kontrol et
  useEffect(() => {
    // Önce localStorage'a bak
    const savedLanguage = localStorage.getItem("selectedLanguage");
    // Sonra URL parametrelerine bak
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");

    // Tarayıcı dilini al
    const browserLang = navigator.language.split("-")[0];

    // Dil seçimi öncelik sırası: localStorage > URL > tarayıcı dili > varsayılan
    const initialLang =
      savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)
        ? savedLanguage
        : urlLang && SUPPORTED_LANGUAGES.includes(urlLang)
        ? urlLang
        : SUPPORTED_LANGUAGES.includes(browserLang)
        ? browserLang
        : DEFAULT_LANGUAGE;

    changeLanguage(initialLang);
  }, []);

  // Context Provider değerleri
  const contextValue: TranslationContextType = {
    currentLanguage,
    changeLanguage,
    t,
    languageNames: LANGUAGE_NAMES,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook - TranslationContext'i kullanmak için
export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);

  if (context === undefined) {
    throw new Error(
      "useTranslation hook must be used within a TranslationProvider"
    );
  }

  return context;
};

// Helper fonksiyon - Astro bileşenlerinde çeviri yapmak için
export function getTranslation(
  language: string,
  key: string,
  options?: any
): string {
  // i18next'i başlatmak ve yapılandırmak gerekebilir
  i18next.changeLanguage(language);
  return i18next.t(key, options);
}
