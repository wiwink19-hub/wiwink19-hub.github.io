export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  // Rings
  {
    id: "ring-1",
    name: "Diamond Solitaire Engagement Ring",
    price: 2499.99,
    image: "/placeholder.svg",
    category: "rings",
    description: "Classic solitaire engagement ring featuring a brilliant round diamond set in 18K white gold.",
    features: ["18K White Gold", "1.0 Carat Diamond", "Certified Conflict-Free", "Lifetime Warranty"]
  },
  {
    id: "ring-2",
    name: "Eternity Diamond Band",
    price: 1899.99,
    image: "/placeholder.svg",
    category: "rings",
    description: "Elegant eternity band with continuous diamonds, symbolizing eternal love.",
    features: ["18K Gold", "0.75 Carat Total Weight", "Comfort Fit", "Gift Box Included"]
  },
  {
    id: "ring-3",
    name: "Sapphire Halo Ring",
    price: 1699.99,
    image: "/placeholder.svg",
    category: "rings",
    description: "Stunning blue sapphire surrounded by a halo of diamonds in white gold.",
    features: ["18K White Gold", "Natural Sapphire", "Diamond Halo", "Certificate Included"]
  },
  {
    id: "ring-4",
    name: "Rose Gold Wedding Band",
    price: 899.99,
    image: "/placeholder.svg",
    category: "rings",
    description: "Modern rose gold wedding band with brushed finish and comfort fit interior.",
    features: ["18K Rose Gold", "Comfort Fit", "4mm Width", "Engraving Available"]
  },

  // Necklaces
  {
    id: "neck-1",
    name: "Diamond Pendant Necklace",
    price: 1299.99,
    image: "/placeholder.svg",
    category: "necklaces",
    description: "Timeless solitaire diamond pendant on a delicate white gold chain.",
    features: ["18K White Gold", "0.50 Carat Diamond", "Adjustable Chain", "Secure Clasp"]
  },
  {
    id: "neck-2",
    name: "Pearl Strand Necklace",
    price: 899.99,
    image: "/placeholder.svg",
    category: "necklaces",
    description: "Classic strand of genuine cultured pearls with elegant luster.",
    features: ["Cultured Pearls", "18 Inches", "Gold Clasp", "Presentation Box"]
  },
  {
    id: "neck-3",
    name: "Gold Chain Necklace",
    price: 799.99,
    image: "/placeholder.svg",
    category: "necklaces",
    description: "Sophisticated 18K yellow gold chain, perfect for layering or wearing solo.",
    features: ["18K Yellow Gold", "16-18 Inches", "Lobster Clasp", "Italian Crafted"]
  },
  {
    id: "neck-4",
    name: "Emerald Pendant",
    price: 1599.99,
    image: "/placeholder.svg",
    category: "necklaces",
    description: "Exquisite emerald pendant with diamond accents on white gold chain.",
    features: ["Natural Emerald", "Diamond Accents", "18K White Gold", "Certificate Included"]
  },

  // Earrings
  {
    id: "ear-1",
    name: "Diamond Stud Earrings",
    price: 1499.99,
    image: "/placeholder.svg",
    category: "earrings",
    description: "Classic diamond stud earrings, essential for any jewelry collection.",
    features: ["18K White Gold", "1.0 Carat Total Weight", "Screw Backs", "Certified Diamonds"]
  },
  {
    id: "ear-2",
    name: "Pearl Drop Earrings",
    price: 599.99,
    image: "/placeholder.svg",
    category: "earrings",
    description: "Elegant cultured pearl drop earrings with gold accents.",
    features: ["Cultured Pearls", "14K Gold", "Post Backs", "Gift Packaged"]
  },
  {
    id: "ear-3",
    name: "Gold Hoop Earrings",
    price: 699.99,
    image: "/placeholder.svg",
    category: "earrings",
    description: "Contemporary gold hoop earrings, versatile and timeless design.",
    features: ["18K Gold", "Medium Size", "Hinged Closure", "Lightweight"]
  },
  {
    id: "ear-4",
    name: "Ruby Chandelier Earrings",
    price: 1799.99,
    image: "/placeholder.svg",
    category: "earrings",
    description: "Dramatic chandelier earrings featuring rubies and diamonds.",
    features: ["Natural Rubies", "Diamond Accents", "18K Gold", "Statement Piece"]
  },

  // Bracelets
  {
    id: "brac-1",
    name: "Diamond Tennis Bracelet",
    price: 2799.99,
    image: "/placeholder.svg",
    category: "bracelets",
    description: "Classic tennis bracelet with continuous line of brilliant diamonds.",
    features: ["18K White Gold", "2.0 Carat Total Weight", "Secure Clasp", "7 Inch Length"]
  },
  {
    id: "brac-2",
    name: "Gold Bangle Set",
    price: 1199.99,
    image: "/placeholder.svg",
    category: "bracelets",
    description: "Set of three elegant gold bangles, perfect for stacking.",
    features: ["18K Gold", "Set of 3", "Hinged Design", "Various Sizes"]
  },
  {
    id: "brac-3",
    name: "Charm Bracelet",
    price: 899.99,
    image: "/placeholder.svg",
    category: "bracelets",
    description: "Personalized charm bracelet with starter charms included.",
    features: ["Sterling Silver", "5 Charms Included", "Adjustable", "Add More Charms"]
  },
  {
    id: "brac-4",
    name: "Sapphire Link Bracelet",
    price: 1999.99,
    image: "/placeholder.svg",
    category: "bracelets",
    description: "Luxurious link bracelet featuring blue sapphires and diamonds.",
    features: ["18K White Gold", "Natural Sapphires", "Diamond Accents", "Gift Boxed"]
  },

  // Watches
  {
    id: "watch-1",
    name: "Diamond Dress Watch",
    price: 3499.99,
    image: "/placeholder.svg",
    category: "watches",
    description: "Elegant dress watch with diamond-set bezel and mother-of-pearl dial.",
    features: ["Swiss Movement", "Diamond Bezel", "Sapphire Crystal", "Water Resistant"]
  },
  {
    id: "watch-2",
    name: "Gold Classic Watch",
    price: 2999.99,
    image: "/placeholder.svg",
    category: "watches",
    description: "Timeless gold watch with automatic movement and leather strap.",
    features: ["18K Gold Case", "Automatic Movement", "Leather Strap", "Date Display"]
  },
  {
    id: "watch-3",
    name: "Diamond Bracelet Watch",
    price: 4299.99,
    image: "/placeholder.svg",
    category: "watches",
    description: "Luxury bracelet watch with diamonds on case and bracelet.",
    features: ["Diamond Set", "Quartz Movement", "18K Gold", "Deployment Clasp"]
  },
  {
    id: "watch-4",
    name: "Rose Gold Watch",
    price: 2499.99,
    image: "/placeholder.svg",
    category: "watches",
    description: "Contemporary rose gold watch with minimalist design.",
    features: ["Rose Gold Plated", "Swiss Quartz", "Sapphire Crystal", "2 Year Warranty"]
  },
];
