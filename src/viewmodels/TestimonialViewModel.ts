// Gerekli modelleri import et
import type { TestimonialModel } from "../models/TestimonialModel";
import { testimonialsData } from "../models/TestimonialModel";

// TestimonialViewModel sınıfı
export class TestimonialViewModel {
  private testimonials: TestimonialModel[];

  constructor(testimonials: TestimonialModel[] = testimonialsData) {
    this.testimonials = testimonials;
  }

  // Tüm yorumları getir
  getAllTestimonials(): TestimonialModel[] {
    return this.testimonials;
  }

  // ID'ye göre yorum getir
  getTestimonialById(id: number): TestimonialModel | undefined {
    return this.testimonials.find((testimonial) => testimonial.id === id);
  }

  // Rastgele bir yorum getir
  getRandomTestimonial(): TestimonialModel {
    const randomIndex = Math.floor(Math.random() * this.testimonials.length);
    return this.testimonials[randomIndex];
  }

  // En yüksek puanlı yorumları getir
  getHighestRatedTestimonials(count: number = 3): TestimonialModel[] {
    return [...this.testimonials]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count);
  }

  // Yorum sayısını getir
  getTestimonialCount(): number {
    return this.testimonials.length;
  }

  // Ortalama puanı hesapla
  getAverageRating(): number {
    const sum = this.testimonials.reduce(
      (total, item) => total + item.rating,
      0
    );
    return sum / this.testimonials.length;
  }
}

// Varsayılan ViewModel örneği
export const testimonialViewModel = new TestimonialViewModel();
