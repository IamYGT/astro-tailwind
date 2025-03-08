// ECU Tuning Portal desteklenen markalar için model
export interface BrandModel {
  id: number;
  name: string;
  logo: string;
  category: "car" | "motorcycle" | "truck" | "software" | "hardware";
  featured?: boolean;
}

// Desteklenen markaları içeren sabit dizi
export const brandsData: BrandModel[] = [
  {
    id: 1,
    name: "Mercedes-Benz",
    logo: "/brands/mercedes.svg",
    category: "car",
    featured: true,
  },
  {
    id: 2,
    name: "BMW",
    logo: "/brands/bmw.svg",
    category: "car",
    featured: true,
  },
  {
    id: 3,
    name: "Audi",
    logo: "/brands/audi.svg",
    category: "car",
    featured: true,
  },
  {
    id: 4,
    name: "Volkswagen",
    logo: "/brands/volkswagen.svg",
    category: "car",
    featured: true,
  },
  {
    id: 5,
    name: "Toyota",
    logo: "/brands/toyota.svg",
    category: "car",
  },
  {
    id: 6,
    name: "Honda",
    logo: "/brands/honda.svg",
    category: "car",
  },
  {
    id: 7,
    name: "Nissan",
    logo: "/brands/nissan.svg",
    category: "car",
  },
  {
    id: 8,
    name: "Ford",
    logo: "/brands/ford.svg",
    category: "car",
  },
  {
    id: 9,
    name: "Chevrolet",
    logo: "/brands/chevrolet.svg",
    category: "car",
  },
  {
    id: 10,
    name: "Porsche",
    logo: "/brands/porsche.svg",
    category: "car",
  },
  {
    id: 11,
    name: "Volvo",
    logo: "/brands/volvo.svg",
    category: "car",
  },
  {
    id: 12,
    name: "Hyundai",
    logo: "/brands/hyundai.svg",
    category: "car",
  },
  {
    id: 13,
    name: "Kia",
    logo: "/brands/kia.svg",
    category: "car",
  },
  {
    id: 14,
    name: "Mazda",
    logo: "/brands/mazda.svg",
    category: "car",
  },
  {
    id: 15,
    name: "Subaru",
    logo: "/brands/subaru.svg",
    category: "car",
  },
  {
    id: 16,
    name: "Mitsubishi",
    logo: "/brands/mitsubishi.svg",
    category: "car",
  },
  {
    id: 17,
    name: "Lexus",
    logo: "/brands/lexus.svg",
    category: "car",
  },
  {
    id: 18,
    name: "Jaguar",
    logo: "/brands/jaguar.svg",
    category: "car",
  },
  {
    id: 19,
    name: "Land Rover",
    logo: "/brands/land-rover.svg",
    category: "car",
  },
  {
    id: 20,
    name: "Ducati",
    logo: "/brands/ducati.svg",
    category: "motorcycle",
  },
  {
    id: 21,
    name: "Harley-Davidson",
    logo: "/brands/harley-davidson.svg",
    category: "motorcycle",
  },
  {
    id: 22,
    name: "Yamaha",
    logo: "/brands/yamaha.svg",
    category: "motorcycle",
  },
];
