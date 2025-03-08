// ECU Tuning Portal özellikleri için model
export interface FeatureModel {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconType: "outline" | "solid"; // İkon tipi (outline veya solid)
  titleKey?: string; // Çeviri anahtarı
  descriptionKey?: string; // Çeviri anahtarı
}

// Özellik verilerini içeren sabit dizi
export const featuresData: FeatureModel[] = [
  {
    id: 1,
    title: "Customer Management System",
    description:
      "Ad maiore deserunt deserunt ullamco ad commodo magna eu mollit aute esse culpa.",
    icon: "users",
    iconType: "solid",
    titleKey: "features.customer_management.title",
    descriptionKey: "features.customer_management.description",
  },
  {
    id: 2,
    title: "Advanced Credits System",
    description:
      "Et commodo elit sunt proident nostrud ipsum quis occaecat eiusmod dolor ad.",
    icon: "credit-card",
    iconType: "outline",
    titleKey: "features.credits_system.title",
    descriptionKey: "features.credits_system.description",
  },
  {
    id: 3,
    title: "ECU Credits & Sales System",
    description:
      "Elit nulla nisi sint ipsum non occaecat culpa deserunt ullamco ut sint.",
    icon: "chip",
    iconType: "outline",
    titleKey: "features.ecu_credits.title",
    descriptionKey: "features.ecu_credits.description",
  },
  {
    id: 4,
    title: "File Tracking System",
    description:
      "Laborum cillum est in eu culpa ut occaecat duis minim id culpa.",
    icon: "document",
    iconType: "outline",
    titleKey: "features.file_tracking.title",
    descriptionKey: "features.file_tracking.description",
  },
  {
    id: 5,
    title: "16 Different Language Support",
    description:
      "Amet sit culpa ea commodo et amet esse est dolor aliquip cupidatat.",
    icon: "globe-alt",
    iconType: "outline",
    titleKey: "features.language_support.title",
    descriptionKey: "features.language_support.description",
  },
  {
    id: 6,
    title: "5 Different Payment Methods",
    description:
      "Magna exercitation id ad occaecat eu laboris ipsum veniam ut id non.",
    icon: "credit-card",
    iconType: "outline",
    titleKey: "features.payment_methods.title",
    descriptionKey: "features.payment_methods.description",
  },
  {
    id: 7,
    title: "Advanced Billing System",
    description:
      "Anim commodo ut Lorem commodo nisi in magna dolor ipsum et eu.",
    icon: "receipt-percent",
    iconType: "outline",
    titleKey: "features.billing_system.title",
    descriptionKey: "features.billing_system.description",
  },
  {
    id: 8,
    title: "12,659 Thousands Vehicle Database",
    description:
      "Aliqua mollit sint est aliqua eiusmod ea duis cillum qui anim proident.",
    icon: "database",
    iconType: "outline",
    titleKey: "features.vehicle_database.title",
    descriptionKey: "features.vehicle_database.description",
  },
  {
    id: 9,
    title: "Support Request System",
    description:
      "In occaecat ea in irure occaecat sint officia aute incididunt cillum labore.",
    icon: "chat-bubble-left-right",
    iconType: "outline",
    titleKey: "features.support_system.title",
    descriptionKey: "features.support_system.description",
  },
  {
    id: 10,
    title: "Cloud and SMS Notifications",
    description:
      "Officia anim sunt magna exercitation amet cillum ea eiusmod irure Lorem anim.",
    icon: "cloud",
    iconType: "outline",
    titleKey: "features.notifications.title",
    descriptionKey: "features.notifications.description",
  },
  {
    id: 11,
    title: "Customer Discount System",
    description:
      "Eu anim id consequat voluptate amet laboris fugiat reprehenderit ipsum exercitation.",
    icon: "tag",
    iconType: "outline",
    titleKey: "features.discount_system.title",
    descriptionKey: "features.discount_system.description",
  },
  {
    id: 12,
    title: "And more...",
    description:
      "Sint commodo culpa voluptate culpa minim eu ipsum fugiat aliqua magna sit.",
    icon: "ellipsis-horizontal",
    iconType: "outline",
    titleKey: "features.more.title",
    descriptionKey: "features.more.description",
  },
];
