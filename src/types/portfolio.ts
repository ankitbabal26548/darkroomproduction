
export interface WeddingImage {
  id: number;
  title: string;
  image: string;
  description?: string;
  category: 'ceremony' | 'reception' | 'portraits' | 'candid' | 'details';
}

export interface WeddingCollection {
  id: number;
  coupleName: string;
  weddingDate: string;
  location: string;
  coverImage: string;
  images: WeddingImage[];
  category: 'traditional' | 'destination' | 'beach' | 'garden' | 'palace' | 'modern';
  highlights: string[];
  featured?: boolean;
  description: string;
}
