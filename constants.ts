import { Product, BlogPost, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'heg-1',
    name: 'Treadmill',
    category: 'Cardio',
    price: 6500,
    image: 'https://i.postimg.cc/zGX756rJ/1.jpg',
    description: 'Reliable home-use treadmill suitable for walking and light running. Ideal for daily cardio workouts.',
    rating: 4.8,
    reviews: 112,
    isBestseller: true
  },
  {
    id: 'heg-2',
    name: 'Domestic Treadmill',
    category: 'Cardio',
    price: 6500,
    image: 'https://i.postimg.cc/XY7L3mbJ/2.jpg',
    description: 'Standard domestic treadmill designed for home fitness routines with smooth performance.',
    rating: 4.7,
    reviews: 86
  },
  {
    id: 'heg-3',
    name: 'Small Treadmill',
    category: 'Cardio',
    price: 6500,
    image: 'https://i.postimg.cc/4xNPZqgC/3.jpg',
    description: 'Compact treadmill suitable for small spaces and apartments. Easy to operate and store.',
    rating: 4.6,
    reviews: 74
  },
  {
    id: 'heg-4',
    name: 'Gym Station',
    category: 'Strength',
    price: 6500,
    image: 'https://i.postimg.cc/wjT2HZpj/4.jpg',
    description: 'All-in-one gym station for full-body workouts including chest, arms, legs, and back exercises.',
    rating: 4.9,
    reviews: 59,
    isBestseller: true
  },
  {
    id: 'heg-5',
    name: 'Commercial Treadmill',
    category: 'Cardio',
    price: 15000,
    image: 'https://i.postimg.cc/Dwjgz6v3/5.jpg',
    description: 'Heavy-duty commercial treadmill built for gyms and high-traffic usage.',
    rating: 5.0,
    reviews: 41,
    isBestseller: true
  },
  {
    id: 'heg-6',
    name: 'Luxury Massage Chair',
    category: 'Recovery',
    price: 15000,
    image: 'https://i.postimg.cc/7ZsVL9HH/6.jpg',
    description: 'Premium massage chair offering full-body relaxation, muscle recovery, and stress relief.',
    rating: 4.9,
    reviews: 33
  },
  {
    id: 'heg-7',
    name: 'Six Pack Trainer Machine',
    category: 'Strength',
    price: 14000,
    image: 'https://i.postimg.cc/fR2KbCzM/7.jpg',
    description: 'Advanced abdominal trainer designed to target and strengthen core muscles effectively.',
    rating: 4.7,
    reviews: 67
  },
  {
    id: 'heg-8',
    name: 'Domestic Spinning Bike',
    category: 'Cardio',
    price: 3500,
    image: 'https://i.postimg.cc/NjJ40Dsj/8.jpg',
    description: 'Indoor spinning bike for home cardio workouts with adjustable resistance.',
    rating: 4.8,
    reviews: 103
  },
  {
    id: 'heg-9',
    name: 'Slimming Machine',
    category: 'Accessories',
    price: 2100,
    image: 'https://i.postimg.cc/g2SD0sz0/9.jpg',
    description: 'Slimming and vibration machine designed to support fat reduction and body toning.',
    rating: 4.5,
    reviews: 91,
    isOffer: true
  },
  {
    id: 'heg-10',
    name: 'Crazy Fit Massager',
    category: 'Recovery',
    price: 7000,
    image: 'https://i.postimg.cc/Jz6qhxrG/10.jpg',
    description: 'High-frequency vibration massager for muscle relaxation and improved blood circulation.',
    rating: 4.6,
    reviews: 48
  },
  {
    id: 'heg-11',
    name: 'Commercial Treadmill (200kg Capacity)',
    category: 'Cardio',
    price: 32000,
    image: 'https://i.postimg.cc/FHWZKprY/11.jpg',
    description: 'Ultra-heavy-duty treadmill with 200kg capacity, built for professional gyms and intense training.',
    rating: 5.0,
    reviews: 22,
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
    comment: 'The 15,000 GH₵ treadmill is a beast. Absolutely commercial grade quality.',
    avatar: 'https://i.pravatar.cc/150?u=kwame'
  },
  {
    id: 't2',
    name: 'Abena Osei',
    role: 'Home Fitness Enthusiast',
    comment: 'HEG Enterprise has the best prices in Ghana. My 6,500 GH₵ treadmill works perfectly.',
    avatar: 'https://i.pravatar.cc/150?u=abena'
  }
];
