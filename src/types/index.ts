export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'shipped';
  createdAt: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  errorCode?: string;
  steps: string[];
  videoUrl?: string;
  relatedProducts: Product[];
  brand?: Brand;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  commonIssues: Solution[];
  products: Product[];
}