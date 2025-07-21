
import { WeddingCollection } from '@/types/portfolio';

export const weddingCollections: WeddingCollection[] = [
  {
    id: 1,
    coupleName: "Amit & Pooja",
    weddingDate: "March 15, 2024",
    location: "Jaipur Palace, Rajasthan",
    coverImage: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
    category: "traditional",
    featured: true,
    description: "A magnificent traditional Rajasthani wedding celebration filled with royal grandeur and timeless customs.",
    highlights: ["Royal Venue", "Traditional Rituals", "Elephant Procession", "Fireworks"],
    images: [
      {
        id: 101,
        title: "Wedding Ceremony",
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
        category: "ceremony",
        description: "The sacred wedding ceremony under the traditional mandap"
      },
      {
        id: 102,
        title: "Bridal Portrait",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&h=600&fit=crop",
        category: "portraits",
        description: "Stunning bridal portrait in traditional attire"
      },
      {
        id: 103,
        title: "Couple Moments",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
        category: "portraits",
        description: "Intimate moments between the couple"
      },
      {
        id: 104,
        title: "Reception Dance",
        image: "https://images.unsplash.com/photo-1594736797933-d0c9b21e1b4c?w=800&h=600&fit=crop",
        category: "reception",
        description: "Joyful dancing at the grand reception"
      }
    ]
  },
  {
    id: 2,
    coupleName: "Ankit & Monika",
    weddingDate: "February 28, 2024",
    location: "Arambol Beach, Goa",
    coverImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
    category: "beach",
    description: "A dreamy beach wedding where love met the ocean breeze in perfect harmony.",
    highlights: ["Sunset Ceremony", "Beach Reception", "Ocean Views", "Tropical Decor"],
    images: [
      {
        id: 201,
        title: "Beach Ceremony",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        category: "ceremony",
        description: "Beautiful beach ceremony at sunset"
      },
      {
        id: 202,
        title: "Couple by the Sea",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
        category: "portraits",
        description: "Romantic couple portrait by the ocean"
      },
      {
        id: 203,
        title: "Wedding Details",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
        category: "details",
        description: "Beautiful wedding details and decorations"
      }
    ]
  },
  {
    id: 3,
    coupleName: "Priya & Arjun",
    weddingDate: "April 10, 2024",
    location: "Royal Botanical Gardens, Mumbai",
    coverImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    category: "garden",
    featured: true,
    description: "An enchanting garden wedding surrounded by blooming flowers and natural beauty.",
    highlights: ["Garden Venue", "Floral Decor", "Natural Light", "Outdoor Reception"],
    images: [
      {
        id: 301,
        title: "Garden Ceremony",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
        category: "ceremony",
        description: "Ceremony surrounded by beautiful gardens"
      },
      {
        id: 302,
        title: "Bridal Portraits",
        image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&h=600&fit=crop",
        category: "portraits",
        description: "Elegant bridal portraits in the garden setting"
      },
      {
        id: 303,
        title: "Candid Moments",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop",
        category: "candid",
        description: "Natural candid moments during the celebration"
      }
    ]
  },
  {
    id: 4,
    coupleName: "Ravi & Sneha",
    weddingDate: "January 20, 2024",
    location: "Backwaters, Kerala",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    category: "destination",
    description: "A serene destination wedding on the tranquil backwaters of Kerala.",
    highlights: ["Houseboat Venue", "Backwater Views", "South Indian Traditions", "Coconut Decor"],
    images: [
      {
        id: 401,
        title: "Backwater Ceremony",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        category: "ceremony",
        description: "Wedding ceremony on the peaceful backwaters"
      },
      {
        id: 402,
        title: "Traditional Rituals",
        image: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=800&h=600&fit=crop",
        category: "ceremony",
        description: "Beautiful traditional South Indian wedding rituals"
      }
    ]
  },
  {
    id: 5,
    coupleName: "Kavya & Vikram",
    weddingDate: "May 5, 2024",
    location: "City Palace, Udaipur",
    coverImage: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop",
    category: "palace",
    featured: true,
    description: "A royal palace wedding that epitomized luxury and grandeur in the City of Lakes.",
    highlights: ["Palace Venue", "Royal Architecture", "Lake Views", "Regal Celebration"],
    images: [
      {
        id: 501,
        title: "Palace Ceremony",
        image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=600&fit=crop",
        category: "ceremony",
        description: "Grand ceremony in the palace courtyard"
      },
      {
        id: 502,
        title: "Royal Portraits",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        category: "portraits",
        description: "Regal couple portraits against palace architecture"
      },
      {
        id: 503,
        title: "Palace Reception",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
        category: "reception",
        description: "Elegant reception in the palace halls"
      }
    ]
  },
  {
    id: 6,
    coupleName: "Deepika & Raj",
    weddingDate: "December 12, 2023",
    location: "Manali, Himachal Pradesh",
    coverImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    category: "destination",
    description: "A magical mountain wedding celebration amidst the snow-capped Himalayas.",
    highlights: ["Mountain Views", "Snow Setting", "Cozy Venue", "Adventure Theme"],
    images: [
      {
        id: 601,
        title: "Mountain Ceremony",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
        category: "ceremony",
        description: "Wedding ceremony with stunning mountain backdrop"
      },
      {
        id: 602,
        title: "Couple Adventures",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
        category: "candid",
        description: "Adventurous couple moments in the mountains"
      }
    ]
  }
];
