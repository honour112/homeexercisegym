
import { Product, BlogPost, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'heg-1',
    name: 'Commercial Grade Treadmill',
    category: 'Cardio',
    price: 15000,
    image: 'https://i.postimg.cc/h4zvBjzp/Whats-App-Image-2025-12-17-at-7-53-14-PM.jpg',
    description: 'High-end commercial treadmill built for heavy usage. Features superior shock absorption and a powerful motor for professional training.',
    rating: 5.0,
    reviews: 42,
    isBestseller: true
  },
  {
    id: 'heg-2',
    name: 'Standard Pro Treadmill',
    category: 'Cardio',
    price: 6500,
    image: 'https://i.postimg.cc/9X6MFhyQ/Whats-App-Image-2025-12-17-at-7-53-19-PM.jpg',
    description: 'Excellent home-use treadmill with variable speed settings and an easy-to-read display for tracking your progress.',
    rating: 4.8,
    reviews: 128,
    isBestseller: true
  },
  {
    id: 'heg-3',
    name: 'Green Walking Pad / Treadmill',
    category: 'Cardio',
    price: 8500,
    image: 'https://i.postimg.cc/59h0NV84/Whats-App-Image-2025-12-17-at-7-53-18-PM.jpg',
    description: 'Sleek, modern walking pad in a signature green finish. Perfect for under-desk use or small apartment spaces.',
    rating: 4.9,
    reviews: 35,
    isOffer: true
  },
  {
    id: 'heg-4',
    name: 'Compact Home Treadmill',
    category: 'Cardio',
    price: 4000,
    image: 'https://i.postimg.cc/9X6MFhyQ/Whats-App-Image-2025-12-17-at-7-53-19-PM.jpg', // Reusing similar treadmill image
    description: 'Budget-friendly, foldable treadmill ideal for light cardio and daily steps.',
    rating: 4.5,
    reviews: 89
  },
  {
    id: 'heg-5',
    name: 'Elite Home Gym Machine',
    category: 'Home Gym',
    price: 6500,
    image: 'https://i.postimg.cc/Vsx6L8nG/Whats-App-Image-2025-12-17-at-7-53-16-PM.jpg',
    description: 'All-in-one multi-station home gym for full-body strength training. Targeted at chest, back, arms, and legs.',
    rating: 4.9,
    reviews: 56,
    isBestseller: true
  },
  {
    id: 'heg-6',
    name: 'Stepper Machine (With Handles)',
    category: 'Cardio',
    price: 4500,
    image: 'https://i.postimg.cc/sgcDcGqy/Whats-App-Image-2025-12-17-at-7-53-22-PM.jpg',
    description: 'High-quality vertical stepper with stabilizing handles. Great for building leg strength and cardiovascular endurance.',
    rating: 4.7,
    reviews: 64
  },
  {
    id: 'heg-7',
    name: 'Vibration Plate Machine',
    category: 'Accessories',
    price: 3700,
    image: 'https://i.postimg.cc/bvwYFNfZ/Whats-App-Image-2025-12-17-at-7-53-21-PM.jpg',
    description: 'Whole-body vibration platform to enhance circulation, bone density, and muscle recovery.',
    rating: 4.6,
    reviews: 31
  },
  {
    id: 'heg-8',
    name: 'Proffesional Gym set',
    category: 'Cardio',
    price: 3500,
    image: 'https://i.postimg.cc/59h0NV84/Whats-App-Image-2025-12-17-at-7-53-18-PM.jpg',
    description: 'Commercial-grade indoor cycle with adjustable resistance and comfortable ergonomic seating.',
    rating: 4.8,
    reviews: 110
  },
  {
    id: 'heg-9',
    name: 'Multi-Gym Bench Set',
    category: 'Strength',
    price: 2100,
    image: 'https://i.postimg.cc/QN2tx31n/Whats-App-Image-2025-12-17-at-7-53-17-PM.jpg',
    description: 'Versatile adjustable bench set for various weightlifting exercises. Robust steel construction.',
    rating: 4.7,
    reviews: 142
  },
  {
    id: 'heg-10',
    name: 'Mini Exercise Bike / Stepper',
    category: 'Cardio',
    price: 1000,
    image: 'https://i.postimg.cc/cJL154Gn/Whats-App-Image-2025-12-17-at-7-516-PM.jpg',
    description: 'Portable mini stepper or pedal exerciser. Ideal for seniors or rehabilitation exercises.',
    rating: 4.4,
    reviews: 58
  },
  {
    id: 'heg-11',
    name: 'Weights set Exerciser',
    category: 'Cardio',
    price: 300,
    image: 'https://i.postimg.cc/cJL154Gn/Whats-App-Image-2025-12-17-at-7-516-PM.jpg',
    description: 'Ultra-compact pedal exerciser for low-impact movement while seated.',
    rating: 4.2,
    reviews: 210,
    isOffer: true
  },
  {
    id: 'heg-12',
    name: 'Premium Resistance Ropes',
    category: 'Accessories',
    price: 1400,
    image: 'https://i.postimg.cc/qgV9fQtG/Whas-App-Image-2025-12-17-at-7-53-18-PM.jpg',
    description: 'Durable resistance rope set for strength building and mobility training.',
    rating: 4.8,
    reviews: 74
  },
  {
    id: 'heg-13',
    name: 'Precision Dumbbells Set',
    category: 'Strength',
    price: 500,
    image: 'https://i.postimg.cc/hv7H3NGQ/Whats-App-Image-2025-12-17-at-PM.jpg',
    description: 'High-quality fixed dumbbells for isolated muscle training. Sold as a pair.',
    rating: 4.9,
    reviews: 320,
    isBestseller: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Transforming Your Living Room into a Powerhouse',
    excerpt: 'How to choose the right equipment for limited spaces without sacrificing intensity.',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80',
    date: 'Oct 12, 2023'
  },
  {
    id: 'b2',
    title: 'The Cardio Debate: Treadmill or Bike?',
    excerpt: 'We break down which machine burns more calories and which is better for your joints.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    date: 'Oct 05, 2023'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Kwame Mensah',
    role: 'Fitness Coach',
    comment: 'The 15,000 GH₵ treadmill is a beast. Absolutely commercial grade quality in my own home.',
    avatar: 'https://i.pravatar.cc/150?u=kwame'
  },
  {
    id: 't2',
    name: 'Abena Osei',
    role: 'Home Fitness Enthusiast',
    comment: 'HEG Enterprise has the best prices in Ghana. My 6500 GH₵ home gym is exactly what I needed.',
    avatar: 'https://i.pravatar.cc/150?u=abena'
  }
];
