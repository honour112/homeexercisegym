
export type Category = 'Cardio' | 'Strength' | 'Home Gym' | 'Accessories' | 'Deals';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  isBestseller?: boolean;
  isOffer?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}
