// Gerekli modelleri import et
import { FeatureModel, featuresData } from "../models/FeatureModel";

// FeatureViewModel sınıfı
export class FeatureViewModel {
  private features: FeatureModel[];

  constructor(features: FeatureModel[] = featuresData) {
    this.features = features;
  }

  // Tüm özellikleri getir
  getAllFeatures(): FeatureModel[] {
    return this.features;
  }

  // ID'ye göre özellik getir
  getFeatureById(id: number): FeatureModel | undefined {
    return this.features.find((feature) => feature.id === id);
  }

  // Özellikleri grupla (örneğin 3'lü bloklar halinde)
  getFeatureGroups(groupSize: number = 3): FeatureModel[][] {
    const groups: FeatureModel[][] = [];
    for (let i = 0; i < this.features.length; i += groupSize) {
      groups.push(this.features.slice(i, i + groupSize));
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
