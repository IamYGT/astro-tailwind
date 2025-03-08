// ECU Tuning Portal müşteri yorumları için model
export interface TestimonialModel {
  id: number;
  name: string;
  position?: string;
  company?: string;
  avatar: string;
  comment: string;
  rating: number;
}

// Müşteri yorumlarını içeren sabit dizi
export const testimonialsData: TestimonialModel[] = [
  {
    id: 1,
    name: "Richard Harris",
    position: "ECU Teknisyeni",
    company: "AutoTech Solutions",
    avatar: "/avatars/user1.png",
    comment:
      "After using the portal, everything is well-organized. I can track all my customers and files in an organized way.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jessica Miller",
    position: "Servis Müdürü",
    company: "JM Performance",
    avatar: "/avatars/user2.png",
    comment:
      "The customer management system has revolutionized how we handle our client database. Exceptional tool!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Thompson",
    position: "Tuning Uzmanı",
    company: "Thompson Motorsports",
    avatar: "/avatars/user3.png",
    comment:
      "Multilanguage support helps me work with international clients. The file tracking system is superb.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sophia Wang",
    position: "Otomotiv Mühendisi",
    company: "WangTech Systems",
    avatar: "/avatars/user4.png",
    comment:
      "Having access to thousands of vehicle databases has streamlined our tuning process considerably.",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Johnson",
    position: "Şirket Sahibi",
    company: "Johnson Tuning",
    avatar: "/avatars/user5.png",
    comment:
      "The billing system and payment integration make the financial side of our business much easier to manage.",
    rating: 4,
  },
];
