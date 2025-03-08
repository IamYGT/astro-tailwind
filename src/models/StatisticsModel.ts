// ECU Tuning Portal istatistikleri için model
export interface StatisticModel {
  id: number;
  title: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description?: string;
  key?: string; // Çeviri anahtarı
}

// İstatistik verilerini içeren sabit dizi
export const statisticsData: StatisticModel[] = [
  {
    id: 1,
    title: "Happy Customers",
    value: "2535",
    prefix: "+",
    description: "Memnun müşteri sayısı",
    key: "happy_customers",
  },
  {
    id: 2,
    title: "Number of Files",
    value: "6373",
    prefix: "+",
    description: "Toplam dosya sayısı",
    key: "tuning_files",
  },
  {
    id: 3,
    title: "Thousands of code lines",
    value: "116",
    suffix: "k+",
    description: "Kod satırı sayısı (bin)",
    key: "code_lines",
  },
  {
    id: 4,
    title: "Years of Experience",
    value: "10",
    prefix: "+",
    description: "Tecrübe yılı",
    key: "experience",
  },
];
