export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  features: string[];
  category: string;
  slug: string;
}
