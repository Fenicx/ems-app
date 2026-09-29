export interface Flavor {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  bgGradient: string;
  accentColor: string;
  textColor: string;
  canColor: string;
  canPatternColor: string;
  ringColor: string;
  tagline: string;
  tasteNotes: string[];
  metrics: {
    tartness: number; // 0-100
    botanicalDepth: number; // 0-100
    effervescence: number; // 0-100
    sweetness: number; // 0-100
  };
  nutrition: {
    calories: number;
    sugar: string;
    botanicals: string;
    source: string;
  };
  pairing: string;
  price: number;
}

export interface CartItem {
  flavorId: string;
  flavorName: string;
  packType: "single-case" | "custom-crate";
  quantity: number;
  price: number;
  cans?: string[]; // for custom crates
}
