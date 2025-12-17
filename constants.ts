
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
    avatar: 'data:image/jpeg;base64,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'
  }
];
