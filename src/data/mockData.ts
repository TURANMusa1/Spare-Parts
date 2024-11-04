export const products = [
  {
    id: '1',
    name: 'Brake Pad Set',
    description: 'High-performance brake pads for optimal stopping power',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop',
    category: 'Brakes',
    stock: 50
  },
  {
    id: '2',
    name: 'Oil Filter',
    description: 'Premium quality oil filter for enhanced engine protection',
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop',
    category: 'Filters',
    stock: 100
  },
  {
    id: '3',
    name: 'Spark Plug Set',
    description: 'High-performance spark plugs for improved ignition',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=800&auto=format&fit=crop',
    category: 'Ignition',
    stock: 75
  }
];

export const brands = [
  {
    id: '1',
    name: 'TechMaster',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop',
    commonIssues: [],
    products: []
  },
  {
    id: '2',
    name: 'AutoPro',
    logo: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop',
    commonIssues: [],
    products: []
  },
  {
    id: '3',
    name: 'MechTech',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop',
    commonIssues: [],
    products: []
  }
];

export const solutions = [
  {
    id: '1',
    title: 'Engine Misfire Troubleshooting',
    description: 'Complete guide to diagnose and fix engine misfires',
    errorCode: 'P0300',
    steps: [
      'Check spark plugs for wear or damage',
      'Inspect ignition coils',
      'Test fuel injectors',
      'Verify compression in affected cylinders'
    ],
    videoUrl: 'https://example.com/videos/engine-misfire',
    relatedProducts: [products[2]], // Spark Plugs
    brand: brands[0]
  },
  {
    id: '2',
    title: 'Brake System Maintenance',
    description: 'How to maintain and repair brake systems',
    steps: [
      'Inspect brake pad thickness',
      'Check brake fluid level',
      'Test brake pedal feel',
      'Measure rotor condition'
    ],
    relatedProducts: [products[0]], // Brake Pads
    brand: brands[1]
  }
];