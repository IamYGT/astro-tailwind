// Gerekli modelleri import et
import type { FeatureModel } from "../models/FeatureModel";
import { featuresData } from "../models/FeatureModel";
import { t } from "i18next";

// FeatureViewModel sınıfı
export class FeatureViewModel {
  private features: FeatureModel[];

  constructor(features: FeatureModel[] = featuresData) {
    this.features = features;
  }

  // Tüm özellikleri getir (çevirilerle birlikte)
  getAllFeatures(): FeatureModel[] {
    return this.features.map((feature) => {
      // Eğer çeviri anahtarları varsa, çevirileri kullan
      if (feature.titleKey) {
        try {
          feature.title = t(feature.titleKey);
        } catch (error) {
          // Çeviri bulunamazsa mevcut başlığı kullan
          console.warn(`Translation not found for key: ${feature.titleKey}`);
        }
      }

      if (feature.descriptionKey) {
        try {
          feature.description = t(feature.descriptionKey);
        } catch (error) {
          // Çeviri bulunamazsa mevcut açıklamayı kullan
          console.warn(
            `Translation not found for key: ${feature.descriptionKey}`
          );
        }
      }

      return feature;
    });
  }

  // ID'ye göre özellik getir
  getFeatureById(id: number): FeatureModel | undefined {
    const feature = this.features.find((feature) => feature.id === id);

    if (feature) {
      // Çevirileri uygula
      if (feature.titleKey) {
        try {
          feature.title = t(feature.titleKey);
        } catch (error) {
          console.warn(`Translation not found for key: ${feature.titleKey}`);
        }
      }

      if (feature.descriptionKey) {
        try {
          feature.description = t(feature.descriptionKey);
        } catch (error) {
          console.warn(
            `Translation not found for key: ${feature.descriptionKey}`
          );
        }
      }
    }

    return feature;
  }

  // Özellikleri grupla (örneğin 3'lü bloklar halinde)
  getFeatureGroups(groupSize: number = 3): FeatureModel[][] {
    const features = this.getAllFeatures(); // Çevirileri uygula
    const groups: FeatureModel[][] = [];
    for (let i = 0; i < features.length; i += groupSize) {
      groups.push(features.slice(i, i + groupSize));
    }
    return groups;
  }

  // Özellik sayısını getir
  getFeatureCount(): number {
    return this.features.length;
  }
}

// Varsayılan ViewModel örneği
export const featureViewModel = new FeatureViewModel();
