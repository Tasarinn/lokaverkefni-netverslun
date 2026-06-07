import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Whey Protein',
    price: 4990,
    image: 'https://placehold.co/300x300',
    category: 'Protein',
    description: 'High quality whey protein.',
  },
  {
    id: 2,
    name: 'Creatine',
    price: 2990,
    image: 'https://placehold.co/300x300',
    category: 'Supplements',
    description: 'Pure creatine monohydrate.',
  },
  {
    id: 3,
    name: 'Pre Workout',
    price: 3990,
    image: 'https://placehold.co/300x300',
    category: 'Energy',
    description: 'Boost your workouts.',
  },
];