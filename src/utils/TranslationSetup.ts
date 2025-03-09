// Çeviri sisteminin yüklenmesi ve hazırlanması için başlangıç dosyası
import i18next from "i18next";
import { initializeI18n, detectUserLanguage } from "./i18n";

// Çeviri sisteminin sayfa yüklendiğinde otomatik başlatılması
let isInitialized = false;

export async function setupTranslations(): Promise<void> {
  if (isInitialized) {
    return;
  }

  try {
    // Kullanıcının dilini tespit et
    const userLang = detectUserLanguage();

    // i18next'i başlat
    await initializeI18n(userLang);

    console.log(`Çeviri sistemi başlatıldı: ${i18next.language}`);
    isInitialized = true;

    // Sayfanın dilini güncelle
    document.documentElement.lang = i18next.language;

    // Dil değişikliğini dinle
    i18next.on("languageChanged", (lang) => {
      document.documentElement.lang = lang;
      console.log(`Dil değiştirildi: ${lang}`);
    });
  } catch (error) {
    console.error("Çeviri sistemi başlatılamadı:", error);
  }
}

// Tarayıcı ortamında sayfa yüklendiğinde çeviri sistemini başlat
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", async () => {
    await setupTranslations();
  });
}

export default setupTranslations;
