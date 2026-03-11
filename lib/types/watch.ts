// Database-ready TypeScript interfaces for Haorne watch data
// These interfaces can be used with Supabase, PostgreSQL, or any database

export interface Watch {
  id: string;
  slug: string;
  name: string;
  reference: string;
  shortDescription: string;
  fullDescription: string;
  collection: WatchCollection;
  category: WatchCategory;
  price: number;
  currency: string;
  images: WatchImages;
  specifications: WatchSpecifications;
  features: string[];
  availability: WatchAvailability;
  isNew: boolean;
  isLimited: boolean;
  limitedEdition?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface WatchImages {
  thumbnail: string;
  gallery: string[];
  macro4K?: string[];
  lifestyle?: string[];
  onWrist?: string;
}

export interface WatchSpecifications {
  movement: MovementSpec;
  case: CaseSpec;
  dial: DialSpec;
  bracelet: BraceletSpec;
  waterResistance: string;
  powerReserve: string;
  warranty: string;
}

export interface MovementSpec {
  type: 'Automatic' | 'Manual' | 'Quartz';
  caliber: string;
  frequency: string;
  jewels: number;
  powerReserve: number;
  description: string;
}

export interface CaseSpec {
  material: string;
  diameter: string;
  thickness: string;
  finish: string;
  crystal: string;
  caseBack: string;
}

export interface DialSpec {
  color: string;
  markers: string;
  hands: string;
  indices: string;
}

export interface BraceletSpec {
  material: string;
  color: string;
  clasp: string;
  width: string;
}

export type WatchCollection =
  | 'classic'
  | 'heritage'
  | 'sport'
  | 'limited-edition'
  | 'prototype';

export type WatchCategory =
  | 'dress'
  | 'sport'
  | 'chronograph'
  | 'tourbillon'
  | 'perpetual-calendar';

export type WatchAvailability =
  | 'in-stock'
  | 'low-stock'
  | 'pre-order'
  | 'out-of-stock'
  | 'discontinued';

// Supabase table row type (when using Supabase)
export interface WatchRow {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
  name: string;
  reference: string;
  short_description: string;
  full_description: string;
  collection: string;
  category: string;
  price: number;
  currency: string;
  images: Record<string, unknown>; // JSONB column in Supabase
  specifications: Record<string, unknown>; // JSONB column in Supabase
  features: string[]; // Array column in Supabase
  availability: string;
  is_new: boolean;
  is_limited: boolean;
  limited_edition: number | null;
}

// Helper function to transform database row to Watch type
export function transformDbRowToWatch(row: WatchRow): Watch {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    reference: row.reference,
    shortDescription: row.short_description,
    fullDescription: row.full_description,
    collection: row.collection as WatchCollection,
    category: row.category as WatchCategory,
    price: row.price,
    currency: row.currency,
    images: row.images as WatchImages,
    specifications: row.specifications as WatchSpecifications,
    features: row.features,
    availability: row.availability as WatchAvailability,
    isNew: row.is_new,
    isLimited: row.is_limited,
    limitedEdition: row.limited_edition || undefined,
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  };
}

// Sample static data (can be replaced with database calls)
export const sampleWatches: Watch[] = [
  {
    id: '1',
    slug: 'haorne-classic-40mm',
    name: 'Haorne Classic',
    reference: 'HOR-001',
    shortDescription: 'Timeless elegance meets contemporary design',
    fullDescription: 'The Haorne Classic represents the pinnacle of minimalist watchmaking. Each timepiece is meticulously assembled by master watchmakers in Geneva.',
    collection: 'classic',
    category: 'dress',
    price: 4850,
    currency: 'USD',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=1200&q=80',
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=80',
      ],
      lifestyle: [
        'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1200&q=80',
      ],
    },
    specifications: {
      movement: {
        type: 'Automatic',
        caliber: 'H-51',
        frequency: '28,800 vph',
        jewels: 25,
        powerReserve: 72,
        description: 'In-house automatic movement with 72-hour power reserve',
      },
      case: {
        material: '316L Stainless Steel',
        diameter: '40mm',
        thickness: '9.8mm',
        finish: 'Brushed and polished',
        crystal: 'Sapphire with anti-reflective coating',
        caseBack: 'Exhibition case back',
      },
      dial: {
        color: 'Black',
        markers: 'Applied indices',
        hands: 'Dauphine hands',
        indices: 'Applied baton indices',
      },
      bracelet: {
        material: 'Alligator leather',
        color: 'Black',
        clasp: 'Folding clasp',
        width: '20mm',
      },
      waterResistance: '100m',
      powerReserve: '72 hours',
      warranty: '5 years',
    },
    features: [
      'Swiss Made',
      'Sapphire Crystal',
      'Exhibition Case Back',
      'Quick-release strap',
    ],
    availability: 'in-stock',
    isNew: true,
    isLimited: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    slug: 'haorne-heritage-42mm',
    name: 'Haorne Heritage',
    reference: 'HOR-002',
    shortDescription: 'A tribute to our watchmaking legacy',
    fullDescription: 'Inspired by archival designs from the 1950s, the Heritage collection combines vintage aesthetics with modern engineering.',
    collection: 'heritage',
    category: 'dress',
    price: 6200,
    currency: 'USD',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1200&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
      ],
    },
    specifications: {
      movement: {
        type: 'Manual',
        caliber: 'H-52',
        frequency: '21,600 vph',
        jewels: 21,
        powerReserve: 48,
        description: 'Hand-wound movement inspired by vintage calibers',
      },
      case: {
        material: '316L Stainless Steel',
        diameter: '42mm',
        thickness: '10.2mm',
        finish: 'Brushed',
        crystal: 'Domed sapphire',
        caseBack: 'Solid case back',
      },
      dial: {
        color: 'Cream',
        markers: 'Printed Arabic numerals',
        hands: 'Blued steel hands',
        indices: 'Arabic numerals',
      },
      bracelet: {
        material: 'Calfskin leather',
        color: 'Brown',
        clasp: 'Pin buckle',
        width: '22mm',
      },
      waterResistance: '50m',
      powerReserve: '48 hours',
      warranty: '5 years',
    },
    features: [
      'Swiss Made',
      'Domed Sapphire Crystal',
      'Blued Steel Hands',
      'Vintage-inspired design',
    ],
    availability: 'in-stock',
    isNew: false,
    isLimited: false,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-06-01'),
  },
  {
    id: '3',
    slug: 'haorne-sport-44mm',
    name: 'Haorne Sport',
    reference: 'HOR-003',
    shortDescription: 'Built for adventure, designed for style',
    fullDescription: 'The Sport collection combines rugged durability with refined elegance. Perfect for both boardroom and boardwalk.',
    collection: 'sport',
    category: 'sport',
    price: 5950,
    currency: 'USD',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1200&q=80',
      ],
      onWrist: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=1200&q=80',
    },
    specifications: {
      movement: {
        type: 'Automatic',
        caliber: 'H-53',
        frequency: '28,800 vph',
        jewels: 27,
        powerReserve: 70,
        description: 'Robust automatic movement with shock protection',
      },
      case: {
        material: '316L Stainless Steel',
        diameter: '44mm',
        thickness: '12.5mm',
        finish: 'Brushed with polished edges',
        crystal: 'Sapphire with anti-reflective coating',
        caseBack: 'Exhibition case back',
      },
      dial: {
        color: 'Blue',
        markers: 'Applied indices with lume',
        hands: 'Skeleton hands with lume',
        indices: 'Applied baton indices',
      },
      bracelet: {
        material: 'Stainless Steel',
        color: 'Silver',
        clasp: 'Folding clasp with diver extension',
        width: '22mm',
      },
      waterResistance: '300m',
      powerReserve: '70 hours',
      warranty: '5 years',
    },
    features: [
      'Swiss Made',
      'Sapphire Crystal',
      'Diver Extension',
      'Lume on hands and markers',
      'Screw-down crown',
    ],
    availability: 'in-stock',
    isNew: true,
    isLimited: false,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
  {
    id: '4',
    slug: 'haorne-tourbillon-41mm',
    name: 'Haorne Tourbillon',
    reference: 'HOR-004',
    shortDescription: 'The pinnacle of haute horlogerie',
    fullDescription: 'Our flagship tourbillon represents over 300 hours of hand-finishing by master watchmakers. A true masterpiece.',
    collection: 'limited-edition',
    category: 'tourbillon',
    price: 45000,
    currency: 'USD',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=1200&q=80',
      ],
      macro4K: [
        'https://images.unsplash.com/photo-1639037687665-4a97656bb54e?w=2000&q=90',
      ],
    },
    specifications: {
      movement: {
        type: 'Manual',
        caliber: 'H-T01',
        frequency: '21,600 vph',
        jewels: 33,
        powerReserve: 60,
        description: 'In-house tourbillon movement with 60-second rotation',
      },
      case: {
        material: '18k Rose Gold',
        diameter: '41mm',
        thickness: '11.2mm',
        finish: 'Hand-finished',
        crystal: 'Sapphire with anti-reflective coating',
        caseBack: 'Exhibition case back',
      },
      dial: {
        color: 'Openworked',
        markers: 'Applied indices',
        hands: 'Dauphine hands',
        indices: 'Applied baton indices',
      },
      bracelet: {
        material: 'Alligator leather',
        color: 'Brown',
        clasp: 'Folding clasp',
        width: '20mm',
      },
      waterResistance: '50m',
      powerReserve: '60 hours',
      warranty: '5 years',
    },
    features: [
      'Swiss Made',
      'Tourbillon',
      'Hand-finishing',
      'Limited to 50 pieces',
      'Certificate of authenticity',
    ],
    availability: 'low-stock',
    isNew: false,
    isLimited: true,
    limitedEdition: 50,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
];
