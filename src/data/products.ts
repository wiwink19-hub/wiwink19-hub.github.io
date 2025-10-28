import ring1 from '@assets/stock_images/diamond_solitaire_en_33806fd5.jpg';
import ring2 from '@assets/stock_images/diamond_eternity_wed_353a4485.jpg';
import ring3 from '@assets/stock_images/sapphire_halo_ring_b_8e097ff1.jpg';
import ring4 from '@assets/stock_images/rose_gold_wedding_ba_7c118a32.jpg';
import ring5 from '@assets/stock_images/platinum_diamond_eng_c2490580.jpg';
import ring6 from '@assets/stock_images/vintage_art_deco_dia_1d8f1ea7.jpg';
import ring7 from '@assets/stock_images/three_stone_diamond__de10b406.jpg';
import ring8 from '@assets/stock_images/emerald_cut_diamond__e0535935.jpg';

import neck1 from '@assets/stock_images/diamond_pendant_neck_68518abf.jpg';
import neck2 from '@assets/stock_images/pearl_strand_necklac_e096dc49.jpg';
import neck3 from '@assets/stock_images/gold_chain_necklace__6ce62d3c.jpg';
import neck4 from '@assets/stock_images/emerald_pendant_neck_6701c0c6.jpg';
import neck5 from '@assets/stock_images/layered_gold_necklac_afdc1e50.jpg';
import neck6 from '@assets/stock_images/ruby_heart_pendant_n_3c011c8c.jpg';
import neck7 from '@assets/stock_images/infinity_pendant_nec_c7170e73.jpg';
import neck8 from '@assets/stock_images/locket_pendant_neckl_2ce9c35a.jpg';

import ear1 from '@assets/stock_images/diamond_stud_earring_3d2a68c7.jpg';
import ear2 from '@assets/stock_images/pearl_drop_earrings__09669329.jpg';
import ear3 from '@assets/stock_images/gold_hoop_earrings_l_363e1475.jpg';
import ear4 from '@assets/stock_images/ruby_chandelier_earr_44e148b7.jpg';
import ear5 from '@assets/stock_images/crystal_drop_earring_30e6534c.jpg';
import ear6 from '@assets/stock_images/emerald_stud_earring_784f5b4c.jpg';
import ear7 from '@assets/stock_images/huggie_hoop_earrings_76127777.jpg';
import ear8 from '@assets/stock_images/tassel_earrings_long_9e950873.jpg';

import brac1 from '@assets/stock_images/diamond_tennis_brace_f61ffc9f.jpg';
import brac2 from '@assets/stock_images/gold_bangle_bracelet_7535fe20.jpg';
import brac3 from '@assets/stock_images/silver_charm_bracele_3ad91ccb.jpg';
import brac4 from '@assets/stock_images/sapphire_link_bracel_d65a3ed2.jpg';
import brac5 from '@assets/stock_images/leather_wrap_bracele_3d54ddea.jpg';
import brac6 from '@assets/stock_images/diamond_cuff_bracele_12593e88.jpg';
import brac7 from '@assets/stock_images/pearl_bracelet_stran_185e78fe.jpg';
import brac8 from '@assets/stock_images/chain_link_bracelet__8c446dce.jpg';

import watch1 from '@assets/stock_images/luxury_diamond_dress_824027cb.jpg';
import watch2 from '@assets/stock_images/gold_classic_luxury__f5140151.jpg';
import watch3 from '@assets/stock_images/diamond_bracelet_lux_90663162.jpg';
import watch4 from '@assets/stock_images/rose_gold_watch_mini_20887461.jpg';
import watch5 from '@assets/stock_images/smartwatch_luxury_di_9111a5f6.jpg';
import watch6 from '@assets/stock_images/chronograph_watch_me_56c1f1bf.jpg';
import watch7 from '@assets/stock_images/skeleton_watch_autom_e00c71d6.jpg';
import watch8 from '@assets/stock_images/diver_watch_blue_dia_466f99bf.jpg';

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
    image: ring1,
    category: "rings",
    description: "Classic solitaire engagement ring featuring a brilliant round diamond set in 18K white gold.",
    features: ["18K White Gold", "1.0 Carat Diamond", "Certified Conflict-Free", "Lifetime Warranty"]
  },
  {
    id: "ring-2",
    name: "Eternity Diamond Band",
    price: 1899.99,
    image: ring2,
    category: "rings",
    description: "Elegant eternity band with continuous diamonds, symbolizing eternal love.",
    features: ["18K Gold", "0.75 Carat Total Weight", "Comfort Fit", "Gift Box Included"]
  },
  {
    id: "ring-3",
    name: "Sapphire Halo Ring",
    price: 1699.99,
    image: ring3,
    category: "rings",
    description: "Stunning blue sapphire surrounded by a halo of diamonds in white gold.",
    features: ["18K White Gold", "Natural Sapphire", "Diamond Halo", "Certificate Included"]
  },
  {
    id: "ring-4",
    name: "Rose Gold Wedding Band",
    price: 899.99,
    image: ring4,
    category: "rings",
    description: "Modern rose gold wedding band with brushed finish and comfort fit interior.",
    features: ["18K Rose Gold", "Comfort Fit", "4mm Width", "Engraving Available"]
  },
  {
    id: "ring-5",
    name: "Platinum Princess Cut Ring",
    price: 3299.99,
    image: ring5,
    category: "rings",
    description: "Exquisite princess cut diamond set in premium platinum band.",
    features: ["Platinum 950", "1.25 Carat Princess Cut", "Micro-Pave Setting", "GIA Certified"]
  },
  {
    id: "ring-6",
    name: "Vintage Art Deco Diamond Ring",
    price: 2799.99,
    image: ring6,
    category: "rings",
    description: "Vintage-inspired art deco ring with intricate detailing and diamonds.",
    features: ["18K White Gold", "Art Deco Design", "0.85 Carat Total", "Vintage Style"]
  },
  {
    id: "ring-7",
    name: "Three Stone Diamond Ring",
    price: 3499.99,
    image: ring7,
    category: "rings",
    description: "Trilogy ring symbolizing past, present, and future with three stunning diamonds.",
    features: ["18K Gold", "1.5 Carat Total Weight", "Three Diamond Stones", "Premium Quality"]
  },
  {
    id: "ring-8",
    name: "Emerald Cut Solitaire",
    price: 2899.99,
    image: ring8,
    category: "rings",
    description: "Sophisticated emerald cut diamond in a sleek modern setting.",
    features: ["Platinum", "1.2 Carat Emerald Cut", "Step-Cut Facets", "Certificate Included"]
  },

  // Necklaces
  {
    id: "neck-1",
    name: "Diamond Pendant Necklace",
    price: 1299.99,
    image: neck1,
    category: "necklaces",
    description: "Timeless solitaire diamond pendant on a delicate white gold chain.",
    features: ["18K White Gold", "0.50 Carat Diamond", "Adjustable Chain", "Secure Clasp"]
  },
  {
    id: "neck-2",
    name: "Pearl Strand Necklace",
    price: 899.99,
    image: neck2,
    category: "necklaces",
    description: "Classic strand of genuine cultured pearls with elegant luster.",
    features: ["Cultured Pearls", "18 Inches", "Gold Clasp", "Presentation Box"]
  },
  {
    id: "neck-3",
    name: "Gold Chain Necklace",
    price: 799.99,
    image: neck3,
    category: "necklaces",
    description: "Sophisticated 18K yellow gold chain, perfect for layering or wearing solo.",
    features: ["18K Yellow Gold", "16-18 Inches", "Lobster Clasp", "Italian Crafted"]
  },
  {
    id: "neck-4",
    name: "Emerald Pendant",
    price: 1599.99,
    image: neck4,
    category: "necklaces",
    description: "Exquisite emerald pendant with diamond accents on white gold chain.",
    features: ["Natural Emerald", "Diamond Accents", "18K White Gold", "Certificate Included"]
  },
  {
    id: "neck-5",
    name: "Layered Gold Necklace Set",
    price: 699.99,
    image: neck5,
    category: "necklaces",
    description: "Modern layered necklace set with delicate chains in varying lengths.",
    features: ["14K Gold", "3 Piece Set", "Adjustable Lengths", "Trendy Design"]
  },
  {
    id: "neck-6",
    name: "Ruby Heart Pendant",
    price: 1399.99,
    image: neck6,
    category: "necklaces",
    description: "Romantic heart-shaped ruby pendant surrounded by sparkling diamonds.",
    features: ["Natural Ruby", "Diamond Halo", "18K Gold", "Perfect Gift"]
  },
  {
    id: "neck-7",
    name: "Infinity Diamond Necklace",
    price: 999.99,
    image: neck7,
    category: "necklaces",
    description: "Symbol of eternal love with infinity design and diamond accents.",
    features: ["Sterling Silver", "Diamond Accents", "Infinity Symbol", "16-18 Inch Chain"]
  },
  {
    id: "neck-8",
    name: "Gold Locket Necklace",
    price: 849.99,
    image: neck8,
    category: "necklaces",
    description: "Vintage-style locket pendant that opens to hold cherished photos.",
    features: ["18K Gold", "Opens for Photos", "Engraving Available", "Vintage Design"]
  },

  // Earrings
  {
    id: "ear-1",
    name: "Diamond Stud Earrings",
    price: 1499.99,
    image: ear1,
    category: "earrings",
    description: "Classic diamond stud earrings, essential for any jewelry collection.",
    features: ["18K White Gold", "1.0 Carat Total Weight", "Screw Backs", "Certified Diamonds"]
  },
  {
    id: "ear-2",
    name: "Pearl Drop Earrings",
    price: 599.99,
    image: ear2,
    category: "earrings",
    description: "Elegant cultured pearl drop earrings with gold accents.",
    features: ["Cultured Pearls", "14K Gold", "Post Backs", "Gift Packaged"]
  },
  {
    id: "ear-3",
    name: "Gold Hoop Earrings",
    price: 699.99,
    image: ear3,
    category: "earrings",
    description: "Contemporary gold hoop earrings, versatile and timeless design.",
    features: ["18K Gold", "Medium Size", "Hinged Closure", "Lightweight"]
  },
  {
    id: "ear-4",
    name: "Ruby Chandelier Earrings",
    price: 1799.99,
    image: ear4,
    category: "earrings",
    description: "Dramatic chandelier earrings featuring rubies and diamonds.",
    features: ["Natural Rubies", "Diamond Accents", "18K Gold", "Statement Piece"]
  },
  {
    id: "ear-5",
    name: "Crystal Drop Earrings",
    price: 449.99,
    image: ear5,
    category: "earrings",
    description: "Sparkling crystal chandelier earrings perfect for special occasions.",
    features: ["Crystal Stones", "Sterling Silver", "Dangle Style", "Evening Wear"]
  },
  {
    id: "ear-6",
    name: "Emerald Stud Earrings",
    price: 1299.99,
    image: ear6,
    category: "earrings",
    description: "Vibrant green emerald studs set in lustrous gold.",
    features: ["Natural Emeralds", "18K Gold", "0.75 Carat Total", "Post Backs"]
  },
  {
    id: "ear-7",
    name: "Diamond Huggie Hoops",
    price: 899.99,
    image: ear7,
    category: "earrings",
    description: "Small pave diamond hoops that hug the earlobe perfectly.",
    features: ["Pave Diamonds", "18K Gold", "Huggie Style", "Daily Wear"]
  },
  {
    id: "ear-8",
    name: "Tassel Dangle Earrings",
    price: 379.99,
    image: ear8,
    category: "earrings",
    description: "Long elegant tassel earrings for a sophisticated look.",
    features: ["Gold Plated", "Tassel Design", "Lightweight", "Statement Piece"]
  },

  // Bracelets
  {
    id: "brac-1",
    name: "Diamond Tennis Bracelet",
    price: 2799.99,
    image: brac1,
    category: "bracelets",
    description: "Classic tennis bracelet with continuous line of brilliant diamonds.",
    features: ["18K White Gold", "2.0 Carat Total Weight", "Secure Clasp", "7 Inch Length"]
  },
  {
    id: "brac-2",
    name: "Gold Bangle Set",
    price: 1199.99,
    image: brac2,
    category: "bracelets",
    description: "Set of three elegant gold bangles, perfect for stacking.",
    features: ["18K Gold", "Set of 3", "Hinged Design", "Various Sizes"]
  },
  {
    id: "brac-3",
    name: "Charm Bracelet",
    price: 899.99,
    image: brac3,
    category: "bracelets",
    description: "Personalized charm bracelet with starter charms included.",
    features: ["Sterling Silver", "5 Charms Included", "Adjustable", "Add More Charms"]
  },
  {
    id: "brac-4",
    name: "Sapphire Link Bracelet",
    price: 1999.99,
    image: brac4,
    category: "bracelets",
    description: "Luxurious link bracelet featuring blue sapphires and diamonds.",
    features: ["18K White Gold", "Natural Sapphires", "Diamond Accents", "Gift Boxed"]
  },
  {
    id: "brac-5",
    name: "Leather Wrap Bracelet",
    price: 299.99,
    image: brac5,
    category: "bracelets",
    description: "Bohemian-style leather wrap bracelet with beaded details.",
    features: ["Genuine Leather", "Beaded Accents", "Wrap Style", "Adjustable"]
  },
  {
    id: "brac-6",
    name: "Diamond Cuff Bracelet",
    price: 3499.99,
    image: brac6,
    category: "bracelets",
    description: "Wide luxury cuff bracelet adorned with diamonds.",
    features: ["18K Gold", "Diamond Pave", "Wide Cuff", "Statement Piece"]
  },
  {
    id: "brac-7",
    name: "Pearl Strand Bracelet",
    price: 649.99,
    image: brac7,
    category: "bracelets",
    description: "Classic pearl bracelet with secure gold clasp.",
    features: ["Cultured Pearls", "Gold Clasp", "7.5 Inches", "Elegant Design"]
  },
  {
    id: "brac-8",
    name: "Chain Link Bracelet",
    price: 1099.99,
    image: brac8,
    category: "bracelets",
    description: "Bold chunky chain link bracelet in lustrous gold.",
    features: ["18K Gold", "Chunky Links", "Statement Style", "Secure Clasp"]
  },

  // Watches
  {
    id: "watch-1",
    name: "Diamond Dress Watch",
    price: 3499.99,
    image: watch1,
    category: "watches",
    description: "Elegant dress watch with diamond-set bezel and mother-of-pearl dial.",
    features: ["Swiss Movement", "Diamond Bezel", "Sapphire Crystal", "Water Resistant"]
  },
  {
    id: "watch-2",
    name: "Gold Classic Watch",
    price: 2999.99,
    image: watch2,
    category: "watches",
    description: "Timeless gold watch with automatic movement and leather strap.",
    features: ["18K Gold Case", "Automatic Movement", "Leather Strap", "Date Display"]
  },
  {
    id: "watch-3",
    name: "Diamond Bracelet Watch",
    price: 4299.99,
    image: watch3,
    category: "watches",
    description: "Luxury bracelet watch with diamonds on case and bracelet.",
    features: ["Diamond Set", "Quartz Movement", "18K Gold", "Deployment Clasp"]
  },
  {
    id: "watch-4",
    name: "Rose Gold Watch",
    price: 2499.99,
    image: watch4,
    category: "watches",
    description: "Contemporary rose gold watch with minimalist design.",
    features: ["Rose Gold Plated", "Swiss Quartz", "Sapphire Crystal", "2 Year Warranty"]
  },
  {
    id: "watch-5",
    name: "Luxury Smartwatch",
    price: 1899.99,
    image: watch5,
    category: "watches",
    description: "High-end smartwatch with diamond bezel and rose gold finish.",
    features: ["Smart Features", "Diamond Bezel", "Rose Gold", "Fitness Tracking"]
  },
  {
    id: "watch-6",
    name: "Chronograph Sports Watch",
    price: 1599.99,
    image: watch6,
    category: "watches",
    description: "Professional chronograph watch with steel case and sporty design.",
    features: ["Chronograph Function", "Stainless Steel", "100m Water Resistant", "Tachymeter"]
  },
  {
    id: "watch-7",
    name: "Skeleton Automatic Watch",
    price: 2199.99,
    image: watch7,
    category: "watches",
    description: "Mechanical masterpiece with visible movement through transparent dial.",
    features: ["Automatic Movement", "Skeleton Dial", "Luxury Design", "Leather Strap"]
  },
  {
    id: "watch-8",
    name: "Professional Diver Watch",
    price: 1799.99,
    image: watch8,
    category: "watches",
    description: "Professional dive watch with blue dial and rotating bezel.",
    features: ["300m Water Resistant", "Rotating Bezel", "Luminous Hands", "Screw Crown"]
  },
];
