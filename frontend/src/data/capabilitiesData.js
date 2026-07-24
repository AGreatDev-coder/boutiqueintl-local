// Capabilities Page Data

export const CAPABILITIES_INTRO = {
  title: "Comprehensive Manufacturing Capabilities",
  description: "From design consultation to full-scale production, we handle every aspect of apparel manufacturing",
  stats: [
    { number: "50+", label: "Fabric Types" },
    { number: "100%", label: "Customization" },
    { number: "7-14", label: "Days Turnaround" },
    { number: "99.5%", label: "Quality Rate" },
  ],
};

export const FABRIC_CAPABILITIES = [
  {
    id: 1,
    category: "Natural Fibers",
    description: "Premium cotton, linen, silk, wool blends",
    items: ["100% Cotton", "Cotton Blends", "Linen", "Silk", "Wool", "Hemp"],
    icon: "🌾",
  },
  {
    id: 2,
    category: "Synthetic Fibers",
    description: "Polyester, nylon, spandex, and technical fabrics",
    items: ["Polyester", "Nylon", "Spandex", "Lycra", "Microfiber", "Technical Fabrics"],
    icon: "🧬",
  },
  {
    id: 3,
    category: "Blended Fabrics",
    description: "Innovative combinations for optimal performance",
    items: ["Cotton-Polyester", "Wool-Silk", "Cotton-Linen", "Performance Blends", "Stretch Blends", "Eco-Blends"],
    icon: "⚗️",
  },
  {
    id: 4,
    category: "Sustainable Materials",
    description: "Eco-friendly and organic fabric options",
    items: ["Organic Cotton", "Bamboo", "Recycled Polyester", "OEKO-TEX", "GOTS Certified", "Biodegradable"],
    icon: "🌱",
  },
];

export const GARMENT_SPECIALIZATIONS = [
  {
    id: 1,
    title: "Womenswear",
    description: "Complete range from casual to formal wear",
    items: ["Dresses", "Blouses", "Skirts", "Trousers", "Jackets", "Activewear"],
    image: "👗",
  },
  {
    id: 2,
    title: "Menswear",
    description: "Professional and casual collections",
    items: ["Shirts", "Trousers", "Blazers", "Polos", "T-shirts", "Formal Wear"],
    image: "👔",
  },
  {
    id: 3,
    title: "Kids Wear",
    description: "Comfortable and safe clothing for children",
    items: ["T-shirts", "Dresses", "Overalls", "Jumpsuits", "Jackets", "Accessories"],
    image: "👶",
  },
  {
    id: 4,
    title: "Activewear",
    description: "Performance-driven athletic collections",
    items: ["Sports Bras", "Leggings", "Shorts", "Tank Tops", "Jackets", "Footwear"],
    image: "⚽",
  },
];

export const CUSTOMIZATION_OPTIONS = [
  {
    id: 1,
    title: "Custom Designs",
    description: "Work with our design team to create unique pieces",
    features: ["Design Consultation", "Pattern Creation", "Sample Development", "Revisions", "Approvals"],
    icon: "✏️",
  },
  {
    id: 2,
    title: "Fabric Selection",
    description: "Choose from our extensive fabric library",
    features: ["Fabric Sourcing", "Quality Approval", "Sustainability Check", "Cost Optimization", "Lead Time"],
    icon: "🎨",
  },
  {
    id: 3,
    title: "Finishing Options",
    description: "Various finishing techniques available",
    features: ["Embroidery", "Printing", "Dyeing", "Washing", "Labeling", "Packaging"],
    icon: "✨",
  },
  {
    id: 4,
    title: "Sizing & Fit",
    description: "Custom sizing and grading services",
    features: ["Size Grading", "Custom Measurements", "Fit Testing", "Tolerance", "Documentation"],
    icon: "📏",
  },
];


export const MINIMUM_ORDER_QUANTITIES = [
  {
    category: "Small Orders",
    range: "100-500 units",
    leadTime: "10-14 days",
    setup: "Standard Setup",
    notes: "Ideal for boutiques, new collections",
  },
  {
    category: "Medium Orders",
    range: "500-2000 units",
    leadTime: "7-10 days",
    setup: "Optimized Setup",
    notes: "Most common order size",
  },
  {
    category: "Large Orders",
    range: "2000-10000 units",
    leadTime: "5-7 days",
    setup: "Dedicated Line",
    notes: "Significant cost savings",
  },
  {
    category: "Bulk Orders",
    range: "10000+ units",
    leadTime: "Custom",
    setup: "Exclusive Production",
    notes: "Custom timeline negotiable",
  },
];

export const TURNAROUND_TIMELINES = [
  {
    phase: "Design & Sampling",
    timeline: "5-7 days",
    description: "Design approval, sample creation, fit testing",
  },
  {
    phase: "Fabric Sourcing",
    timeline: "3-5 days",
    description: "Sourcing approved fabrics, quality checks",
  },
  {
    phase: "Production",
    timeline: "7-14 days",
    description: "Full-scale manufacturing based on quantity",
  },
  {
    phase: "Quality Assurance",
    timeline: "2-3 days",
    description: "Final inspection, testing, documentation",
  },
  {
    phase: "Packaging & Shipment",
    timeline: "2-4 days",
    description: "Labeling, packaging, logistics arrangement",
  },
];
