// Product Categories and Manufacturing Process Data

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    name: "Womenswear",
    description: "Premium dresses, tops, bottoms, and formal wear",
    icon: "👗",
    image: "https://images.unsplash.com/photo-1595777707802-41d335b76b19?w=500&q=80&fit=crop",
    color: "#00D9FF",
    items: ["Dresses", "Tops", "Skirts", "Formal Wear"],
  },
  {
    id: 2,
    name: "Menswear",
    description: "Shirts, trousers, jackets, and casual essentials",
    icon: "👔",
    image: "https://images.unsplash.com/photo-1552062407-291846519701?w=500&q=80&fit=crop",
    color: "#0080B0",
    items: ["Shirts", "Trousers", "Jackets", "T-Shirts"],
  },
  {
    id: 3,
    name: "Activewear",
    description: "High-performance sports and fitness apparel",
    icon: "🏃",
    image: "https://images.unsplash.com/photo-1506629082632-401d5e06a48d?w=500&q=80&fit=crop",
    color: "#38bdf8",
    items: ["Leggings", "Sports Bras", "Tanks", "Jackets"],
  },
  {
    id: 4,
    name: "Kidswear",
    description: "Comfortable and durable children's clothing",
    icon: "👶",
    image: "https://images.unsplash.com/photo-1503919545889-48854d7ee213?w=500&q=80&fit=crop",
    color: "#00E5FF",
    items: ["T-Shirts", "Shorts", "Dresses", "Playsets"],
  },
];

export const MANUFACTURING_PROCESS = [
  {
    step: 1,
    title: "Design & Development",
    description: "Collaborate with brands to create unique, market-ready designs",
    icon: "✏️",
    details: "Our design team works closely with clients to transform concepts into production-ready patterns",
  },
  {
    step: 2,
    title: "Fabric Selection",
    description: "Source premium materials from certified suppliers worldwide",
    icon: "🧵",
    details: "We select from premium fabrics, ensuring quality and compliance with all certifications",
  },
  {
    step: 3,
    title: "Pattern Making",
    description: "Create precise patterns for consistent sizing and fit",
    icon: "📐",
    details: "Expert pattern makers ensure perfect fit across all sizes using latest CAD technology",
  },
  {
    step: 4,
    title: "Cutting & Preparation",
    description: "Precision cutting and quality material preparation",
    icon: "✂️",
    details: "Automated and manual cutting ensures zero waste and maximum accuracy",
  },
  {
    step: 5,
    title: "Stitching & Assembly",
    description: "Expert craftsmanship in garment construction",
    icon: "🧶",
    details: "3000+ skilled artisans use advanced machinery for superior stitching quality",
  },
  {
    step: 6,
    title: "Quality Control & Export",
    description: "Rigorous inspection before delivery to global markets",
    icon: "✅",
    details: "100% inspection rate ensures only perfect garments reach our clients worldwide",
  },
];

export const MARKETS = [
  { name: "Europe", flag: "🇪🇺", clients: "150+" },
  { name: "USA", flag: "🇺🇸", clients: "120+" },
  { name: "UK", flag: "🇬🇧", clients: "80+" },
  { name: "Middle East", flag: "🇦🇪", clients: "60+" },
  { name: "Australia", flag: "🇦🇺", clients: "45+" },
  { name: "India", flag: "🇮🇳", clients: "50+" },
];
