// ECU Tuning Portal istatistikleri için model
export interface StatisticModel {
  id: number;
  title: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description?: string;
}

// İstatistik verilerini içeren sabit dizi
export const statisticsData: StatisticModel[] = [
  {
    id: 1,
    title: "Happy Customers",
    value: "2535",
    prefix: "+",
    description: "Memnun müşteri sayısı",
  },
  {
    id: 2,
    title: "Number of Files",
    value: "6373",
    prefix: "+",
    description: "Toplam dosya sayısı",
  },
  {
    id: 3,
    title: "116",
    title: "Thousands of code lines",
    value: "116",
    suffix: "k+",
    description: "Kod satırı sayısı (bin)",
  },
  {
    id: 4,
    title: "Years of Experience",
    value: "10",
    prefix: "+",
    description: "Tecrübe yılı",
  },
];
